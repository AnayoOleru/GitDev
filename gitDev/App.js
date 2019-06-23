import React, {Component} from 'react';
import { ApolloProvider } from 'react-apollo';
import Router from './src/Router';
import client from './src/apolloclient';
export default class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
      <Router />
      </ApolloProvider>
    );
  }
}
