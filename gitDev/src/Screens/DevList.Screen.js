import React, {Component} from 'react';
// import {Platform, StyleSheet, Text, View, Button} from 'react-native';
import { Container, Header, Content, List } from 'native-base';
import Search from '../Components/Search.Component';
import UserDetail from '../Components/UserDetails.Component';
import style from '../Styles/AllStyle';

export default class DevList extends Component{
  render() {     
    return (
          <Container>
          <Content>
            <List>
            <UserDetail />
            </List>
          </Content>
        </Container>
    );
  }
  static navigationOptions = {
    title: 'All Java Developers',
    fontSize: 400,
    headerStyle: {
      backgroundColor: '#161616',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };
}
