import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button} from 'react-native';
import AboutImage from '../Components/AboutImage.Component';
import AboutTexts from '../Components/AboutTexts.Component';
import style from '../Styles/AllStyle';

export default class About extends Component{
  render() {
    return (
      <View style={style.container}>
        <AboutImage />
        <AboutTexts />
      </View>
    );
  }
}
