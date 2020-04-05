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
        return (
            <View style={{flex: 0}}>
                <TouchableNativeFeedback
                    onPress={this.props.onPress}
                    onLongPress={this.props.onLongPress}
                >
                    <View style={styles.btn} >
                        <Image
                            source={icon}
                            style={styles.img}
                        />
                    </View>
                </TouchableNativeFeedback>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    btn: {
        backgroundColor: 'green',
        height: 50,
        width: 50,
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'center'
    },
    img: {
        width: 25,
        height: 25,
    }
});