import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button} from 'react-native';
import Search from '../Components/Search.Component';
import UserDetail from '../Components/UserDetails.Component';
import style from '../Styles/AllStyle';

export default class DevList extends Component{
  render() {
    // const {navigate} = this.props.navigation;
    return (
      <View style={style.container}>
        <Text style={style.title}>{this.props.title}</Text>
        <Search />
        <UserDetail />
        {/* <Button
        title="Go to Jane's profile"
        onPress={() => navigate('User', {name: 'Jane'})}
      /> */}
      </View>
    );
  }
}
