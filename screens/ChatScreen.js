import React, {Component} from 'react';
import {
    View,
    StyleSheet,
    ImageBackground,
    FlatList,
    binaryToBase64
} from 'react-native';

import {chatsData} from '../data/chatsData';

import { ReturnFromChatBtn } from '../made-components/ReturnFromChatBtn';
import { ChatTitleBtn } from '../made-components/ChatTitleBtn';
import { CallButtons } from '../made-components/CallButtons';
import { MessageInput } from '../made-components/MessageInput';
import { SendButton } from '../made-components/SendButton';
import { Message } from '../made-components/Message';


var encodeBase64 = (input) => {  
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';  
    let str = input;
    let output = '';

    for (let block = 0, charCode, i = 0, map = chars;
        str.charAt(i | 0) || (map = '=', i % 1);
        output += map.charAt(63 & block >> 8 - i % 1 * 8)) {

            charCode = str.charCodeAt(i += 3/4);

            if (charCode > 0xFF) {
            console.log("'btoa' failed: The string to be encoded contains characters outside of the Latin1 range.");
            }

            block = block << 8 | charCode;
    }

    return output;
}

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
            message: '',
        }
    }

    handleTextChange(text) {
        console.log(text);
        console.log(this.state.message);
        if ( !(text) ) {
            this.setState({
                icon: 'record',
                alreadyChangedIcon: false,
                message: text,
            });
        } else if (!this.state.alreadyChangedIcon) {
            this.setState({
                icon: 'send',
                alreadyChangedIcon: true,
                message: text,
            });
        }
        else {
            this.setState({
                message: text,
            });
        }
    }

    handleSendBtnPress() {
        if (this.state.icon == 'send') {
            this.props.sendMessage(this.state.message)
            this.setState({
                message: '',
                icon: 'record',
            })
        }
    }
    _onLongPress() {
        if (this.state.icon == 'record') {
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
                        value={this.state.message}
                    />
                    :
                    <MessageInput
                        onChangeText={this.handleTextChange.bind(this)}
                        placeholder={'Type your message...'}
                        value={this.state.message}
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

        this.state = {
            chatContent: chatsData[this.props.chatId],
            numberOfMessages: chatsData[this.props.chatId].length,
        }
    }

    addNewMessage(text) {
        var date = new Date();
        var time = date.getHours()+':'+date.getMinutes();

        var newMessage = {
            id: encodeBase64(text+time),
            sender: ':you:',
            content: text,
            time: time,
            messageState: 1, //0:sending(clock),1:sent:2:received,3:read
            contentType: 'text/plain',
        }

        this.setState( {
            numberOfMessages: this.state.chatContent.push(newMessage)
        })
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

                    <ChatBottom
                        sendMessage={ this.addNewMessage.bind(this) }
                    />
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