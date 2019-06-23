import React, { Component } from 'react';
import { Query } from "react-apollo";
import { gql } from "apollo-boost";
import { Platform, StyleSheet, Text, View, Button, TextInput, FlatList } from 'react-native';
import { withNavigation } from 'react-navigation';
import style from '../Styles/AllStyle';

const SEARCH_DEV = gql`
query SearchJsDvelopersInLagos($queryString: String!) {
  search(query: $queryString, type: USER, first: 100) {
    repositoryCount
    edges {
      node {
        ... on User {
          name
          bio
          url
          login
          repositories{
            totalCount
          }
          starredRepositories{
            totalCount
          }
        }
      }
    }
  }
}
`;
const UserDetail = ({ queryString, navigation }) => (
  <Query
    query={SEARCH_DEV}
    variables={{ queryString: "location:lagos language:java" }}
  >
    {({ loading, error, data }) => {
      if (loading) return <Text style={{ flex: 1, alignItems: "center", justifyContent: "center", fontSize: 30 }}>Loading...</Text>;
      if (error) return <Text>Error :{error}</Text>;
      console.log(data, '>>>>>>DATA<<<<<<');
      console.log(navigation, '>>>>>>PROPS<<<<<<');

      return (
          <FlatList 
          data={data.search.edges} 
          renderItem={({item}) => (
            <View style={style.userDetailContainer}>
              <View style={style.singleUserContainer}>
                {/* pass the url to the navigate params */}
                <Text style={style.userName} onPress={() => navigation.navigate('User', {
                  userlogin:`${item.node.login}`
                })}>{`${item.node.name}`}</Text>
                <Text  style={style.Biography} >{`${item.node.bio}`}</Text>
                <View style={style.hr} />
              </View>
          </View>)} 
          keyExtractor={(item, index) => index.toString()} 
          
          
          />
      );
    }}
  </Query>

);
console.log(UserDetail, '>>>>>>><<<<<<<<');

// {
//     render() {
//         return (
//             <View style={style.userDetailContainer}>
//             <View>
//                 <Text style={style.userName} onPress={() => this.props.navigation.navigate('User')}>Charlie Deets</Text>
//                 <Text>Greetings. I am writing because I discovered a way to improve the taste of decaffeinated…</Text>
//             </View>
//             </View>
//         );
//     }
// }

export default withNavigation(UserDetail);
