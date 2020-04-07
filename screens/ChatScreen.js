import React, {Component} from 'react';
import {
    View,
    StyleSheet,
    ImageBackground,
    FlatList,
} from 'react-native';

import {chatsData} from '../data/chatsData';

import { ReturnFromChatBtn } from '../made-components/ReturnFromChatBtn';
import { ChatTitleBtn } from '../made-components/ChatTitleBtn';
import { CallButtons } from '../made-components/CallButtons';
import { MessageInput } from '../made-components/MessageInput';
import { SendButton } from '../made-components/SendButton';
import { Message } from '../made-components/Message';


class ChatHeader extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.header}>
                <ReturnFromChatBtn
                    chatId={this.props.chatId}
                    returnToMainScreen={this.props.returnToMainScreen}
                />

                <ChatTitleBtn chatId={this.props.chatId}/>

                <CallButtons />
            </View>
        );
    }
}

class ChatContent extends Component {
    render() {
        return (
                <FlatList
                    data={chatsData[this.props.chatId]}
                    renderItem={( {item} ) =>
                        <Message
                            {...item}
                        />
                    }
                    contentContainerStyle={{justifyContent: 'flex-end'}}
                />
        );
    }
}

class ChatBottom extends Component  {
    constructor(props) {
        super(props);

        this.state ={
            icon: 'record',
            alreadyChangedIcon: false,
            isRecordingAudio: false,
            recordTime: -1,
            intervalId: null,
        }
    }

    handleTextChange(text) {
        console.log(text);
        if ( !(text) ) {
            this.setState({
                icon: 'record',
                alreadyChangedIcon: false,
            });
        } else {
            if (!this.state.alreadyChangedIcon) {
                this.setState({
                    icon: 'send',
                    alreadyChangedIcon: true,
                });
            }
        }
    }

    handleSendBtnPress() {
        if (this.state.icon == 'send') {
            //enviarMensagem(this.state.text);
        }
    }
    _onLongPress() {
        this.state.isRecordingAudio = true;
        this.state.intervalId = setInterval(()=>{
            if (this.state.isRecordingAudio) {
                this.setState((previousState) => ( {
                    recordTime: previousState.recordTime+1,
                }
                ))
            }
        }, 1000);
    }

    _onPressOut() {
        clearInterval(this.state.intervalId);

        this.setState({
            isRecordingAudio: false,
            recordTime:-1,
            intervalId: null,
        })
    }

    render() {
        return (
            <View style={styles.bottom}>
                {this.state.isRecordingAudio ?
                    <MessageInput
                        onChangeText={this.handleTextChange.bind(this)}
                        placeholder={this.state.recordTime.toString()}  
                    />
                    :
                    <MessageInput
                        onChangeText={this.handleTextChange.bind(this)}
                        placeholder={'Type your message...'}
                    />
                }

                <SendButton
                    icon={this.state.icon}
                    onPress={this.handleSendBtnPress.bind(this)}
                    onLongPress={this._onLongPress.bind(this)}
                    onPressOut={this._onPressOut.bind(this)}
                    isRecordingAudio={this.state.isRecordingAudio}
                />
            </View>
        );
    }
}

export class ChatScreen extends Component{
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={ styles.main }>
                <ChatHeader
                    chatId={this.props.chatId}
                    returnToMainScreen={this.props.onChangeScreen}
                />

                <ImageBackground
                    style={styles.contentBackground}
                    resizeMode="cover"
                    source={require("../assets/default-background.jpg")}
                >
                    <ChatContent chatId={this.props.chatId}/>

                    <ChatBottom />
                </ImageBackground>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
    },
    header: {
        flexDirection: 'row',
        paddingTop: 25,
        backgroundColor: '#075e54',
        height: 85,
        alignItems: 'center',
    },
    content: {
        flex: 1,
    },
    contentBackground: {
        flex: 1,
    },
    bottom: {
        flex: 0,
        flexDirection: 'row',
        marginBottom: 5,
        alignItems: 'flex-end'
    }
});