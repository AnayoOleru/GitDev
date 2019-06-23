import React, {Component} from 'react';
import { Container, Content, List } from 'native-base';
import UserDetail from '../Components/UserDetails.Component';
import { BLACK, WHITE } from '../Constants/Constants';

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
      backgroundColor: BLACK,
    },
    headerTintColor: WHITE,
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };
}
