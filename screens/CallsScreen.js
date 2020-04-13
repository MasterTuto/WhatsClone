import React, { Component } from 'react';
import { View, ToastAndroid, FlatList } from 'react-native';

import { FAB } from '../made-components/FAB';
import { Header } from '../made-components/Header';
import { CallItem } from '../made-components/CallItem';

import { callsData } from '../data/callsData';

export class CallsScreen extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={{flex: 1, flexDirection: 'column'}}>
                <Header
                    current='calls'
                    onChangeScreen={ this.props.onChangeScreen }
                />
                
                <FlatList 
                    data={callsData}
                    renderItem={ ( {item} ) =>
                        <CallItem
                            {...item}
                        />
                    }
                />

                <FAB
                    icon={require('../assets/group-call.png')}
                    onPress={()=>ToastAndroid.show("New call!", 3)}
                />
            </View>
        );
    }
}