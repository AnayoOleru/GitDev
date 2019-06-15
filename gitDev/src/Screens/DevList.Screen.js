import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button} from 'react-native';
import Search from '../Components/Search.Component';
import style from '../Styles/AllStyle';

export default class DevList extends Component{
  render() {
    return (
      <View style={style.container}>
        <Text style={style.title}>Java Developers!</Text>
        <Search />
      </View>
    );
  }
}
