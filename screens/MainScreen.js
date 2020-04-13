import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  FlatList,
  Dimensions
} from 'react-native';

import { chatFeed } from '../data/chatFeed';

import { FAB } from '../made-components/FAB';
import { MessageFeedItem } from '../made-components/MessageFeedItem';
import { Header } from '../made-components/Header';

export class MainScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      messageFeed: chatFeed,
    }
  }

  render() {
    return (
      <View style={styles.mainView}>
        <Header
          current='main'
          onChangeScreen={ this.props.onChangeScreen }
        />

        <FlatList
          data={this.state.messageFeed}
          renderItem={ ( { item } ) =>
            <MessageFeedItem
              title={item.conversationTitle}
              lastMessage={item.lastMessage}
              numberOfMessages={item.numberOfMessages}
              isMuted={item.isMuted}
              profilePicture= { item.profilePicture }
              isPinned={item.isPinned}

              id={item.id}

              onPress={this.props.onChangeScreen}
            />
          }
          keyExtractor={(item) => item.id}
        />

        <FAB
          icon={require('../assets/chat-icon.png')}          
          onPress={() => ToastAndroid.show("Show contacts...", 2)}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    flexDirection: 'column',
  },
});