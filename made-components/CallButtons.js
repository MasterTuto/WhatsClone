import React, {Component} from 'react';
import {
    View,
    StyleSheet,
    Image,
    TouchableWithoutFeedback,
    TouchableOpacity
} from 'react-native';

export class CallButtons extends Component {
    render() {
        return(
            <View style={styles.main}>                
                <TouchableOpacity>
                    <Image source={require("../assets/video-call.png")} style={styles.icon}/>
                </TouchableOpacity>

                <TouchableOpacity>
                    <Image source={require("../assets/audio-call.png")} style={styles.icon}/>
                </TouchableOpacity>
                
                <TouchableOpacity>
                    <Image source={require("../assets/show-more.png")} style={styles.icon}/>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    main: {
        flexDirection: 'row',
        flex: 0,
    },
    icon: {
        height: 26,
        width: 26,
        marginLeft: 20,
    }
});