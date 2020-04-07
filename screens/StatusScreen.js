import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  FlatList,
  Dimensions,
} from 'react-native';

import { Toolbar } from '../made-components/Toolbar';
import { OptionsMenu } from '../made-components/OptionsMenu';
import { SearchBar } from '../made-components/SearchBar';
import { StatusItem } from '../made-components/StatusItem';

import { statuses } from '../data/statuses';
import { usersData } from '../data/usersData';

export class StatusScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      statusList: statuses,
      showSearchBar: false,
    }
  }

  renderStatusItem( { item } ) {
    var numberOfStatuses = item.statuses.length-1;
    var lastStatus = null;
    if (numberOfStatuses >= 0) {
      lastStatus = item.statuses[numberOfStatuses];
    }

    return <StatusItem
      title={item.id != ':you:' ? usersData[item.id].title : "My Status"}
      lastStatus={lastStatus.content}
      date={lastStatus.time}

      id={item.id}

      onPress={this.props.onChangeScreen}
    />;
  }

  render() {
    let header;
    if (this.state.showSearchBar) {
      header = <SearchBar deactivateSearchBar={() => this.setState( {showSearchBar: false} )} />;
    } else {
      header = (
        <View>
          <Toolbar
            activateSearchBar={() => this.setState( {showSearchBar: true} )}/>
          <OptionsMenu
            onPress={this.props.onChangeScreen}
            current={'status'}
          />
        </View>
      );
    }
    return (
      <View style={styles.mainView}>
        { header }

        <FlatList
          data={this.state.statusList}
          renderItem={ this.renderStatusItem.bind(this) }
        />
      </View>
    );
  }
}

const screenWidth = Math.round(Dimensions.get("window").width);

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