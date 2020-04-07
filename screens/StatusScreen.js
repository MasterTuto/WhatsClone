import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  FlatList,
  Text,
} from 'react-native';

import { Toolbar } from '../made-components/Toolbar';
import { OptionsMenu } from '../made-components/OptionsMenu';
import { SearchBar } from '../made-components/SearchBar';

import { statuses } from '../data/statuses';

export class StatusScreen extends Component {
  constructor(props) {
    super(props);

    this.state ={
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
          <Toolbar
            activateSearchBar={() => this.setState( {showSearchBar: true} )}/>
          <OptionsMenu
            onPress={this.props.onChangeScreen}
            current={'status'}
          />

          <FlatList
            data={[
              {
                id: 'a',
                userId: 'RGFuaWVsIEFtb3JpbQ=='
              }
            ]}
            renderItem={( {item} ) =>
              <Text>TAMANHO: {statuses[item.userId].length}</Text>
            }
          />
        </View>
      );
    }
    return (
      <View style={styles.mainView}>
        { header }
      </View>
    );
  }
}

const styles = StyleSheet.create({

});