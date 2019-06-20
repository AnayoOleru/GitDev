import React, { Component } from 'react';
import { View, Image, Text, Button } from 'react-native';
import style from '../Styles/AllStyle';

export default class ProfileButton extends Component {
    render() {
        return (
            <View>
                <Button style={this.props.style}  title={this.props.view} />
            </View>
        );
    }
}
