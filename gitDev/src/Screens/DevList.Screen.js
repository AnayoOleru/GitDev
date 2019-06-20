import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button} from 'react-native';
import Search from '../Components/Search.Component';
import UserDetail from '../Components/UserDetails.Component';
import style from '../Styles/AllStyle';

export default class DevList extends Component{
  render() {
      console.log(this.props);
      
    return (
      <View style={style.container}>
        <Text style={style.title}>{this.props.title}</Text>
        <Search />
        <UserDetail />
      </View>
    );
  }
  static navigationOptions = {
    title: 'Home',
    fontSize: 400,
    headerStyle: {
      backgroundColor: '#f4511e',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };
}
