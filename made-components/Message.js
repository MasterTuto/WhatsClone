import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image
} from 'react-native';

export class Message extends Component {
    render() {
        var stylePerson = this.props.sender == ':you:' ? styles.styleSelf : styles.styleAny;

        let statusIcon, statusStyle;
        switch (this.props.messageState) {
            case 0:
                statusIcon = require("../assets/waiting-to-send.png");
                statusStyle = [styles.genericBlackIcon, styles.waiting];
                break;
            case 1:
                statusIcon = require("../assets/sent.png");
                statusStyle = [styles.genericBlackIcon, styles.sent];
                break;
            case 2:
                statusIcon = require("../assets/received.png");
                statusStyle = [styles.genericBlackIcon, styles.receivedAndSeen];
                break;
            case 3:
                statusIcon = require("../assets/seen.png");
                statusStyle = styles.receivedAndSeen;
                break;
        }
        
        return (
            <View style={[styles.main, stylePerson]}>
                <Text style={styles.content}>{this.props.content}</Text>

                <View style={{alignItems: 'flex-end', flexDirection: 'row', 'alignSelf':'flex-end'}} >
                    <Text style={styles.time}>{this.props.time}</Text>

                    {this.props.sender == ':you:' ?
                    <Image
                        source={statusIcon}
                        style={statusStyle}
                    /> :
                    null}
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    main: {
        padding: 10,
        maxWidth: '65%',
        elevation: 1,
        margin: 3,
        alignSelf: 'flex-start',
    },
    content: {
        fontSize: 15,
    },
    styleSelf: {
        backgroundColor: '#dcf8c6',
        alignSelf: 'flex-end',
        borderTopLeftRadius: 10,
        borderBottomRightRadius: 10,
        borderBottomLeftRadius: 10,
        marginRight: 20,
    },
    styleAny: {
        backgroundColor: 'white',
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
        borderBottomLeftRadius: 10,
        marginLeft: 16,
    },
    time: {
        fontSize: 12,
        color: 'gray',
        alignSelf: 'flex-end',
    },
    genericBlackIcon: {
        opacity: 0.3,
        marginLeft: 2,
    },
    receivedAndSeen: {
        width: 16,
        height: 10,
    },
    waiting: {
        width: 10,
        height:10,
    },
    sent: {
        height: 12,
        width: 10,
    }
})