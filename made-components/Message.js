import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';

export class Message extends Component {
    render() {
        var stylePerson;
        if (this.props.sender == ':you:') {
            stylePerson = styles.styleSelf;
        } else {
            stylePerson = styles.styleAny;
        }

        return (
            <View style={[styles.main, stylePerson]}>
                <Text style={styles.content}>{this.props.content}</Text>
                <Text style={styles.time}>{this.props.time}</Text>
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
        flexWrap: 'nowrap',
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
        right: -10,
    }
})