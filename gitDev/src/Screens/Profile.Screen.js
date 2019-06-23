import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Button, FlatList } from 'react-native';
import Search from '../Components/Search.Component';
import UserDetail from '../Components/UserDetails.Component';
import ProfileImage from '../Components/ProfileImage.Component';
import RepoCard from '../Components/Card.Component';
import UserInformation from '../Components/UserInfo.Component';
import ProfileButton from '../Components/Button.Component';
import { Query } from "react-apollo";
import { gql } from "apollo-boost";
import style from '../Styles/AllStyle';

// get the url from the params,  pass it on to the SEARCH_DEV 


const Profile = ({ queryString, navigation }) => (
  navigationOptions = {
    title: 'Home',
    fontSize: 400,
    headerStyle: {
      backgroundColor: '#f4511e',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  },

  userLogin = navigation.getParam('userlogin', 'NO_ID'),

SEARCH_DEV = gql`
query{
  user(login:${userLogin}){
     name
     bio
     url
     avatarUrl
     login
     repositories{
      totalCount
      }
     starredRepositories{
            totalCount
          }
 
  }
 }
`,
  <Query
    query={SEARCH_DEV}
    variables={{ queryString: "location:lagos language:java" }}
  >
    {({ loading, error, data }) => {
      if (loading) return <Text style={{textAlign: "center", justifyContent: "center", fontSize: 30 }}>Loading...</Text>;
      if (error) return <Text>Error :{error}</Text>;
      const user = Object.values(data);

      return (
        <FlatList
          data={user}
          renderItem={({ item }) => (
            <View style={style.container}>
              <ProfileImage UserProfileImage={`${item.avatarUrl}`} />
              <RepoCard Cardnumber={`${item.repositories.totalCount}`} Starrednumber={`${item.starredRepositories.totalCount}`} />
              <UserInformation Profilename={`${item.name}`} ProfileBio={`${item.bio}`} />
            </View>
          )}
          keyExtractor={(item, index) => index.toString()}
        />
      );
    }}
  </Query>
  
);

export default Profile
