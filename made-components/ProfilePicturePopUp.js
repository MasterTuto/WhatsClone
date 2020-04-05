import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableWithoutFeedback,
} from 'react-native';

export class ProfilePicturePopUp extends Component {
    constructor(props)  {
        super(props);
    }

    render() {
        return (
            <View>
                <Text>TEste</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    mainPopUp: {
        height: 300,
        width: 300,
        position: 'absolute',
        top: 100,
        left: 100,
        backgroundColor: 'blue',
        zIndex: -1,
        elevation: 90,
    }
});