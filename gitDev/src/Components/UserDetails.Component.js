import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Button, TextInput } from 'react-native';
import style from '../Styles/AllStyle';

export default class UserDetail extends Component {
    // constructor(props){
    //     super(props);
    //     this.state={
    //         username=,
    //         userInformation:
    //     }
    // }
    render() {
        return (
            <View style={style.userDetailContainer}>
            <View>
                <Text style={style.userName}>Charlie Deets</Text>
                <Text>Greetings. I am writing because I discovered a way to improve the taste of decaffeinated…</Text>
            </View>
            <View>
                <Text style={style.userName}>Charlie Deets</Text>
                <Text>Greetings. I am writing because I discovered a way to improve the taste of decaffeinated…</Text>
            </View>
            <View>
                <Text style={style.userName}>Charlie Deets</Text>
                <Text>Greetings. I am writing because I discovered a way to improve the taste of decaffeinated…</Text>
            </View>
            <View>
                <Text style={style.userName}>Charlie Deets</Text>
                <Text>Greetings. I am writing because I discovered a way to improve the taste of decaffeinated…</Text>
            </View>
            <View>
                <Text style={style.userName}>Charlie Deets</Text>
                <Text>Greetings. I am writing because I discovered a way to improve the taste of decaffeinated…</Text>
            </View>
            <View>
                <Text style={style.userName}>Charlie Deets</Text>
                <Text>Greetings. I am writing because I discovered a way to improve the taste of decaffeinated…</Text>
            </View>
            <View>
                <Text style={style.userName}>Charlie Deets</Text>
                <Text>Greetings. I am writing because I discovered a way to improve the taste of decaffeinated…</Text>
            </View>
            </View>
        );
    }
}
