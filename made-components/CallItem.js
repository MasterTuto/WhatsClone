import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
} from 'react-native';

import { usersData } from '../data/usersData';

export class CallItem extends Component {
    constructor(props) {
        super(props);
    }

    missedIcon = require("../assets/missed-call.png");
    ingoingIcon = require("../assets/ingoing-call.png");
    outgoingIcon = require("../assets/outgoing-call.png");

    audioCallIcon = require("../assets/audio-call-075e54.png");
    videoCallIcon = require("../assets/video-call-075e54.png");
    
    render() {
        var callStatusIcon;
        if (this.props.callStatus == 'm') { // missed
            callStatusIcon = this.missedIcon;
        } else if (this.props.callStatus == 'i') { //ingoing
            callStatusIcon = this.ingoingIcon;
        } else if (this.props.callStatus == 'o') { // outgoing
            callStatusIcon = this.outgoingIcon;
        }

        var callTypeIcon;
        if (this.props.callType == 1) {
            callTypeIcon = this.audioCallIcon;
        } else if (this.props.callType == 2) {
            callTypeIcon = this.videoCallIcon;
        }

        return (
            <View style={styles.main}>
                <Image
                    source={
                        usersData[this.props.userId].profilePicture
                    }
                    style={styles.profilePicture}
                />

                <View style={{flex: 1, marginLeft: 10}} >
                    <Text style={styles.title}>{usersData[this.props.userId].title}</Text>
                    
                    <View style={{flexDirection: 'row', alignItems: 'center'}} >
                        <Image
                            style={styles.tinyIcon}
                            source={ callStatusIcon }
                        />
                        <Text style={styles.date} >{this.props.date}</Text>
                    </View>
                </View>

                <Image
                    source={callTypeIcon}
                    style={styles.mediumIcon}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    main: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    profilePicture: {
        width: 55,
        height: 55,
        borderRadius: 27,
        margin: 10,
    },
    title: {
        fontSize: 19,
        fontWeight: 'bold',
    },
    date: {
        fontSize: 14,
        color: '#7f7f7f',
    },
    mediumIcon: {
        width: 30,
        height: 30,
        flex: 0,
        margin: 15,
    },
    tinyIcon: {
        width: 13,
        height: 13,
        marginRight: 2,
    }
});