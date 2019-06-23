import React, { Component } from 'react';
import { Text, Button } from 'native-base';
import { Linking } from 'react-native';

export default class ProfileButton extends Component {
    render() {
        return (
            <Button block dark onPress={ ()=> Linking.openURL(this.props.githubUrl) }>
            <Text>{this.props.view}</Text>
          </Button>
        );
    }
}
