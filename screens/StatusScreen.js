import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  FlatList,
  Dimensions,
  ToastAndroid
} from 'react-native';

import { StatusItem } from '../made-components/StatusItem';
import { Header } from '../made-components/Header';
import { FAB } from '../made-components/FAB';

import { statuses } from '../data/statuses';
import { usersData } from '../data/usersData';

export class StatusScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      statusList: statuses,
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

      //onPress={this.props.onChangeScreen}
      onPress={()=>ToastAndroid.show("Mostrando status...", 3)}
    />;
  }

  render() {
    return (
      <View style={styles.mainView}>
        <Header
          current='status'
          onChangeScreen={ this.props.onChangeScreen }
        />

        <FlatList
          data={this.state.statusList}
          renderItem={ this.renderStatusItem.bind(this) }
        />

        <FAB
          icon={require("../assets/cam-icon.png")}
          onPress={ ()=>ToastAndroid.show("Add status...", 5)}
          imageStyle={{width: 25, height: 25}}
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