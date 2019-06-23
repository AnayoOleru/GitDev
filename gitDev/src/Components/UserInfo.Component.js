import React, { Component } from 'react';
import { View } from 'react-native';
import ProfileButton from './Button.Component.js';
import style from '../Styles/AllStyle';

export default class UserInformation extends Component {
    render() {
        return (
                <View style={style.article}>
                    <View style={style.button} >
                    <ProfileButton 
                    style={style.EachButton} 
                    view={this.props.view} 
                    githubUrl ={this.props.githubUrl}
                />
                    </View>
            </View>
        );
    }
}
