import React, { Component } from 'react';
import graphql from 'graphql';
import { Platform, StyleSheet, Text, View, Button, TextInput } from 'react-native';
import { Query } from "react-apollo";
import { withNavigation } from 'react-navigation';
import style from '../Styles/AllStyle';
import UserQuery from '../Queries/UserQuery';

const UserDetail = graphql(UserQuery)(props =>{
    console.log('Here I am');
    
    const { error, users } = props.data;
    if (error) {
      return( 
      <Text>{error}</Text>
      );
    }
    if (users) {
      return(
      <View style={style.userDetailContainer}>
      <View>
          <Text style={style.userName} onPress={() => this.props.navigation.navigate('User')}>${users[0].name}</Text>
          <Text>${users[0].name}</Text>
      </View>
      </View>
      );
    }
  
    return(<Text>Loading...</Text>);
});
//     render() {
//         return (
//             <View style={style.userDetailContainer}>
//             <View>
//                 <Text style={style.userName} onPress={() => this.props.navigation.navigate('User')}>Charlie Deets</Text>
//                 <Text>Greetings. I am writing because I discovered a way to improve the taste of decaffeinated…</Text>
//             </View>
//             <View>
//                 <Text style={style.userName} onPress={() => this.props.navigation.navigate('User')}>Charlie Deets</Text>
//                 <Text>Greetings. I am writing because I discovered a way to improve the taste of decaffeinated…</Text>
//             </View>
//             <View>
//                 <Text style={style.userName} onPress={() => this.props.navigation.navigate('User')}>Charlie Deets</Text>
//                 <Text>Greetings. I am writing because I discovered a way to improve the taste of decaffeinated…</Text>
//             </View>
//             <View>
//                 <Text style={style.userName} onPress={() => this.props.navigation.navigate('User')}>Charlie Deets</Text>
//                 <Text>Greetings. I am writing because I discovered a way to improve the taste of decaffeinated…</Text>
//             </View>
//             <View>
//                 <Text style={style.userName} onPress={() => this.props.navigation.navigate('User')}>Charlie Deets</Text>
//                 <Text>Greetings. I am writing because I discovered a way to improve the taste of decaffeinated…</Text>
//             </View>
//             <View>
//                 <Text style={style.userName} onPress={() => this.props.navigation.navigate('User')}>Charlie Deets</Text>
//                 <Text>Greetings. I am writing because I discovered a way to improve the taste of decaffeinated…</Text>
//             </View>
//             <View>
//                 <Text style={style.userName} onPress={() => this.props.navigation.navigate('User')}>Charlie Deets</Text>
//                 <Text>Greetings. I am writing because I discovered a way to improve the taste of decaffeinated…</Text>
//             </View>
//             </View>
//         );
//     }
// }

export default withNavigation(UserDetail);
