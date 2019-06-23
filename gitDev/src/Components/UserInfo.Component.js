import React, { Component } from 'react';
import { View, Image, Text, Button, ScrollView} from 'react-native';
import ProfileButton from './Button.Component.js';
import style from '../Styles/AllStyle';

export default class UserInformation extends Component {
    render() {
        return (
            <View style={style.infoContainer}>
                <View style={style.article}>
                <Text style={style.userProfileName}>{this.props.Profilename}</Text>
                <Text>{this.props.ProfileBio}
                    </Text>
                    <View style={style.button} >
                    <ProfileButton style={style.EachButton} view={'View Profile'}/>
                    <ProfileButton style={style.EachButton} view={'Share'}/>
                    </View>
                    </View>
            </View>
        );
    }
}
