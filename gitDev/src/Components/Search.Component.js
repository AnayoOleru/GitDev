import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Button, TextInput } from 'react-native';
import style from '../Styles/AllStyle';

export default class Search extends Component {
    render() {
        return (
            <View style={style.container}>
                <TextInput style={style.searchBox} placeholder='Search' />
            </View>
        );
    }
}
