import React, { Component } from 'react';
import { Text, Button } from 'native-base';
import { Linking } from 'react-native';

export default class ProfileButton extends Component {
    render() {
        return (
            <Button block dark>
            <Text>{this.props.view}</Text>
          </Button>
        );
    }
}
