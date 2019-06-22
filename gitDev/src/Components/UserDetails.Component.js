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
const UserDetail = ({ queryString }) => (
  <Query
    query={SEARCH_DEV}
    variables={{ queryString: "location:lagos language:javascript" }}
  >
    {({ loading, error, data }) => {
      if (loading) return <Text style={{ flex: 1, alignItems: "center", justifyContent: "center", fontSize: 30 }}>Loading...</Text>;
      if (error) return <Text>Error :{error}</Text>;
      console.log(data, '>>>>>>DATA<<<<<<');

      // const newData = data.search.edges.map((edge) => {
      //   return edge.node.name
      // });

      // console.log('=======================');
      // console.log(newData, 'another one');


      // return data.search.edges.map(({ name, bio, url }) => (
      //   <View style={style.userDetailContainer} key={name}>
      //     <View>
      //       <Text style={style.userName} onPress={() => this.props.navigation.navigate('User')}>{name}</Text>
      //       <Text >{bio}</Text>
      //     </View>
      //   </View>
      // ));

      return (
        // <Text style={style.userName}>{data.search.edges[0].node.name}</Text>
        // <View style={style.userDetailContainer}>
        // <View>
        //     <Text style={style.userName} onPress={() => this.props.navigation.navigate('User')}>{data.search.edges[0].node.name}</Text>
        //     <Text>{data.search.edges[0].node.bio}</Text>
        // </View>
        // </View>
          <FlatList 
          data={data.search.edges} 
          renderItem={({item}) => (
            <View style={style.userDetailContainer}>
              <View>
                <Text style={style.userName} onPress={() => this.props.navigation.navigate('User')}>{`${item.node.name}`}</Text>
                <Text>{`${item.node.bio}`}</Text>
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
