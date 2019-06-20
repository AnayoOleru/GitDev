import React, { Component } from 'react';
import { View, Image, Text } from 'react-native';
import style from '../Styles/AllStyle';

export default class AboutImage extends Component {
    render() {
        return (
            <View style={style.container}>
                <Image source={{uri: 'https://appdevelopermagazine.com/images/news_images/Developers-Redefined-in-2017-App-Developer-Magazine_86yd5z8g.jpg'}}
       style={style.aboutImage} />
            </View>
        );
    }
}
