import React from 'react';
import { Text, View, FlatList, Image } from 'react-native';
import ProfileImage from '../Components/ProfileImage.Component';
import RepoCard from '../Components/Card.Component';
import UserInformation from '../Components/UserInfo.Component';
import { Query } from "react-apollo";
import { gql } from "apollo-boost";
import style from '../Styles/AllStyle';

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
      if (loading) return <Image source={require('../Assets/loader.gif')} style={{ marginTop: 160, marginLeft: 50 }} />;
      if (error) return <Text>Error :{error}</Text>;
      const user = Object.values(data);

      return (
        <FlatList
          data={user}
          renderItem={({ item }) => (
            <View style={style.container}>
              <ProfileImage UserProfileImage={`${item.avatarUrl}`} />
              <RepoCard 
              Cardnumber={`${item.repositories.totalCount}`} 
              Starrednumber={`${item.starredRepositories.totalCount}`}
              Profilename={`${item.name}`}
              ProfileLoginName={`${item.login}`} 
              ProfileBio={`${item.bio}`} 
              view={'View on Github'}
              githubUrl={`${item.url}`}
              />
              <UserInformation view={'Share Profile'} />
            </View>
          )}
          keyExtractor={(item, index) => index.toString()}
        />
      );
    }}
  </Query>
  
);

export default Profile
