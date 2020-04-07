import React, {Component} from 'react';

import {MainScreen} from './screens/MainScreen';
import {ChatScreen} from './screens/ChatScreen';
import {StatusScreen} from './screens/StatusScreen';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentScreen: 'main',
      data: null,
    }
  }

  render() {
    if (this.state.currentScreen === 'main') {

      return <MainScreen
                onChangeScreen={ (screen, params) => {
                  this.setState({currentScreen: screen, data: params})
                } }
              />

    } else if (this.state.currentScreen === 'chat') {

      return <ChatScreen
                onChangeScreen={ (screen, params) => {
                  this.setState({currentScreen: screen, data: params})
                } }
                chatId={this.state.data}
              />

    } else if (this.state.currentScreen === 'status') {

      return <StatusScreen
                onChangeScreen={ (screen, params) => {
                  this.setState({currentScreen: screen, data: params})
                } }
                chatId={this.state.data}
              />

    } else if (this.state.currentScreen === 'calls') {

      //CallsScreen
      
    }
  }
}