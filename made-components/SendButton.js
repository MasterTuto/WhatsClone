import React, {Component} from 'react';
import {
    TouchableNativeFeedback,
    Image,
    StyleSheet,
    View,
} from 'react-native';

export class SendButton extends Component {
    constructor(props) {
        super(props);
    }

    text = require("../assets/send.png");
    record = require("../assets/record.png");
    
    render() {
        var icon = this.props.icon == 'record' ? this.record : this.text;
        if (this.props.icon == 'record') {
            var recStyleBtn = this.props.isRecordingAudio ? styles.recStyleBtn : null;
            var recStyleImg = this.props.isRecordingAudio ? styles.recStyleImg : null;
        } else {
            var recStyleBtn = null;
            var recStyleImg = null;
        }
        return (
            <View style={{flex: 0}}>
                <TouchableNativeFeedback
                    onPress={this.props.onPress}
                    onLongPress={this.props.icon=='record'?this.props.onLongPress:()=>{}}
                    onPressOut={this.props.icon=='record'?this.props.onPressOut:()=>{}}
                    delayLongPress={0}
                >
                    <View style={[styles.btn, recStyleBtn]} >
                        <Image
                            source={icon}
                            style={[styles.img, recStyleImg]}
                        />
                    </View>
                </TouchableNativeFeedback>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    btn: {
        backgroundColor: '#075e54',
        height: 50,
        width: 50,
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 4,
    },
    img: {
        width: 25,
        height: 25,
    },
    recStyleBtn: {
        width: 90,
        height: 90,
        borderRadius: 45,
    },
    recStyleImg: {
        width: 45,
        height: 45,
    }
});