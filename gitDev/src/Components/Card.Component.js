import React, { Component } from 'react';
import { View, Image, Text } from 'react-native';
import style from '../Styles/AllStyle';

export default class RepoCard extends Component {
    render() {
        return (
            <View style={style.cardContainer}>
                <View style={style.EachCard}>
                    <Text style={style.CardText}>Repository</Text>
                    <View style={style.CardBox}>
                        <Text style={style.CardNumber}>59</Text>
                    </View>
                </View>
                <View style={style.BorderLine}></View>

                <View style={style.EachCard}>
                    <Text style={style.CardText}>Starred</Text>
                    <View style={style.CardBox}>
                        <Text style={style.CardNumber}>20</Text>
                    </View>
                </View>
            </View>
        );
    }
}
