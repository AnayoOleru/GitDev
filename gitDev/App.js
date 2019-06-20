import React, {Component} from 'react';
import DevList from './src/Screens/DevList.Screen';
import Profile from './src/Screens/Profile.Screen';
import Router from './src/Router';

export default class App extends Component {
  render() {
    return (
      <Router />
      // <DevList title={'Java Developers'} />
      // <Profile />
    );
  }
}
