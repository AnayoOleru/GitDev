import React, { Component } from 'react';
import { View, Image, Text } from 'react-native';
import style from '../Styles/AllStyle';

export default class ProfileImage extends Component {
    render() {
        return (
            <View style={style.container}>
                <Image source={{uri: this.props.UserProfileImage}}
       style={style.profileImage} />
            </View>
        );
    }
}
