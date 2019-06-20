import React, { Component } from 'react';
import { View, Image, Text, Button, ScrollView} from 'react-native';
import ProfileButton from './Button.Component.js';
import style from '../Styles/AllStyle';

export default class UserInformation extends Component {
    render() {
        return (
            <View style={style.infoContainer}>
                <View style={style.article}>
                <Text style={style.userProfileName}>Anayo Oleru</Text>
                <Text style={style}>Morbi non leo aliquet, eleifend lectus quis,
                    pharetra lectus pellentesque
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
