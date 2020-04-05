import React, {Component} from 'react';
import {
    TouchableOpacity,
    Image,
    StyleSheet,
    View
} from 'react-native';

import chatsData from '../data/chatsData';
import  { usersData } from '../data/usersData';

export class ReturnFromChatBtn extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <TouchableOpacity onPress={()=> this.props.returnToMainScreen('main')} style={ {flex: 0} }>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Image 
                        source={ require('../assets/left-arrow-white.png') }
                        style={ styles.leftArrow }
                    />

                    <Image
                        source={ usersData[this.props.chatId].profilePicture }
                        style={styles.profilePicture}
                    />
                </View>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    profilePicture: {
        width: 40,
        height: 40,
        borderRadius: 20,
        marginLeft: 12,
    },
    leftArrow: {
        width: 30,
        height: 20,
        marginLeft: 10,
    }
});