import React, {Component} from 'react';
import {
    View,
    StyleSheet,
    Text,
    TouchableOpacity,
    ToastAndroid,
} from 'react-native';

import { usersData } from '../data/usersData';

export class ChatTitleBtn extends Component {
    render() {
        return(
            <TouchableOpacity onPress={()=> ToastAndroid.show("Chat title", 5)} style={{flex: 1}}>
                <View style={styles.main}>
                    <Text style={styles.chatTitle}>{usersData[this.props.chatId].title}</Text>

                    { usersData[this.props.chatId].isGroup ?
                        <Text style={styles.integrants}>{this.getIntegrants()}</Text>
                        :
                        null
                    }
                </View>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    main: {
    },
    chatTitle: {
        color: 'white',
        fontSize: 22,
        marginLeft: 10,
        fontFamily: 'sans-serif-medium',
    }
})