import React, {Component} from 'react';
import { ApolloProvider } from 'react-apollo';
import DevList from './src/Screens/DevList.Screen';
import Profile from './src/Screens/Profile.Screen';
import Router from './src/Router';
import client from './src/apolloclient';
export default class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
      <Router />
      </ApolloProvider>
      // <DevList title={'Java Developers'} />
      // <Profile />
    );
  }
}
