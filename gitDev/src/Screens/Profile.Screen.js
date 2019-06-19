import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button} from 'react-native';
import Search from '../Components/Search.Component';
import UserDetail from '../Components/UserDetails.Component';
import ProfileImage from '../Components/ProfileImage.Component';
import style from '../Styles/AllStyle';

export default class Profile extends Component{
  render() {
    return (
      <View style={style.container}>
        {/* <Text style={style.title}>Holla!</Text> */}
        <ProfileImage />
      </View>
    );
  }
}
