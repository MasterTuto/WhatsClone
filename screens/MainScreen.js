import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  Vibration,
  Dimensions
} from 'react-native';

import { chatFeed } from '../data/chatFeed';

import { Toolbar } from '../made-components/Toolbar';
import { OptionsMenu } from '../made-components/OptionsMenu';
import { FAB } from '../made-components/FAB';
import { MessageFeedItem } from '../made-components/MessageFeedItem';
import { SearchBar } from '../made-components/SearchBar';

export class MainScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      messageFeed: chatFeed,
      showSearchBar: false,
    }
  }

  render() {
    let header;
    if (this.state.showSearchBar) {
      header = <SearchBar deactivateSearchBar={() => this.setState( {showSearchBar: false} )} />;
    } else {
      header = (
        <View>
          <Toolbar activateSearchBar={() => this.setState( {showSearchBar: true} )}/>
          <OptionsMenu />
        </View>
      );
    }
    return (
      <View style={styles.mainView}>
        { header }

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

        <FAB style={styles.FAB} />
      </View>
    );
  }
}

const screenWidth = Math.round(Dimensions.get("window").width);
const screenHeight = Math.round(Dimensions.get("window").height);


const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    flexDirection: 'column',
  },
  FAB: {
    position: 'absolute',
    bottom: 35,
    left: screenWidth-83
  }
});