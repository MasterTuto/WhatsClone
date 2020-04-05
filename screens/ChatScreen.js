import React, {Component} from 'react';
import {
    View,
    StyleSheet,
    ImageBackground,
    Text,
    FlatList,
} from 'react-native';

import {chatsData} from '../data/chatsData';

import { ReturnFromChatBtn } from '../made-components/ReturnFromChatBtn';
import { ChatTitleBtn } from '../made-components/ChatTitleBtn';
import { CallButtons } from '../made-components/CallButtons';
import { MessageInput } from '../made-components/MessageInput';
import { SendButton } from '../made-components/SendButton';


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
                    renderItem={( {item} ) => {
                        <ReturnFromChatBtn />
                    }}
                    style={styles.content}
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

    handleLongBtnPress() {

    }

    render() {
        return (
            <View style={styles.bottom}>
                <MessageInput
                    onChangeText={this.handleTextChange.bind(this)}
                />

                <SendButton
                    icon={this.state.icon}
                    onPress={this.handleSendBtnPress.bind(this)}
                    onLongPress={this.handleLongBtnPress.bind(this)}
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
        flexDirection: 'column'
    },
    contentBackground: {
        flex: 1,
    },
    bottom: {
        flex: 0,
        flexDirection: 'row',
        marginBottom: 5,
    }
});