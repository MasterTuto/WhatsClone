import React, {Component} from 'react';
import {
    View,
    TouchableNativeFeedback,
    Image,
    TextInput,
    StyleSheet,
    ToastAndroid
} from 'react-native';

export class MessageInput extends Component {
    render() {
        return (
            <View style={styles.main}>
                <TouchableNativeFeedback
                    style={styles.button}
                    onPress={() => {ToastAndroid.show("Emoji", 4)}}
                >
                    <Image
                        source={require("../assets/emoji-icon2.png")}
                        style={[styles.icon, {marginLeft: 12,}]}
                    />
                </TouchableNativeFeedback>

                <TextInput
                    style={styles.messageInput}
                    onChangeText={this.props.onChangeText}
                    onChange={this.props.onChange}
                    placeholder={this.props.placeholder}
                    value={this.props.value}
                />

                <TouchableNativeFeedback
                    style={styles.button}
                    onPress={() => {ToastAndroid.show("Attachment", 4)}}
                >
                    <Image
                        source={require("../assets/attach-icon.png")}
                        style={styles.icon}
                    />
                </TouchableNativeFeedback>

                <TouchableNativeFeedback
                    style={styles.button}
                    onPress={() => {ToastAndroid.show("Camera", 4)}}
                >
                    <Image
                        source={require("../assets/cam-icon-black.png")}
                        style={[styles.icon, {marginRight: 12}]}
                    />
                </TouchableNativeFeedback>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    main: {
        backgroundColor: 'white',
        alignItems: 'center',
        flexDirection: 'row',
        borderRadius: 40,
        height: 50,
        flex: 1,
        justifyContent: 'center',
    },
    icon: {
        width: 25,
        height: 25,
        opacity: 0.4,
        margin: 7,
        flex:0
    },
    button: {

    },
    messageInput: {
        fontSize: 18,
        flex: 1,
    }
});