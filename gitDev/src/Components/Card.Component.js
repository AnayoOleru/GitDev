import React, { Component } from 'react';
import { View, Linking } from 'react-native';
import { Text, Button } from 'native-base';
import style from '../Styles/AllStyle';

export default class RepoCard extends Component {
    render() {
        return (
            <View style={style.cardContainer}>
                <View style={style.profileInformation}>
                    <Text style={style.userProfileName}>{this.props.Profilename}</Text>
                    <Text style={style.userProfileLogin}>{this.props.ProfileLoginName}</Text>
                    <Text style={style.userProfileBio}>{this.props.ProfileBio}</Text>
                    
                    <Button block dark onPress={() => Linking.openURL(this.props.githubUrl)}>
                    <Text>{this.props.view}</Text>
                    </Button>
                </View>
                <View style={style.BorderLine}></View>
                <View style={style.EachCard}>

                    <Text style={style.CardText}>Repositories</Text>
                    <View style={style.CardBox}>
                        <Text style={style.CardNumber}>{this.props.Cardnumber}</Text>
                    </View>
                </View>

                <View style={style.EachCard}>
                    <Text style={style.CardText}>Starred</Text>
                    <View style={style.CardBox}>
                        <Text style={style.CardNumber}>{this.props.Starrednumber}</Text>
                    </View>
                </View>
                <View style={style.BorderLine}></View>
            </View>
        );
    }
}
