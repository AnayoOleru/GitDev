import React from 'react';
import { createStackNavigator, createAppContainer, createBottomTabNavigator } from "react-navigation";
import DevList from './Screens/DevList.Screen';
import Profile from './Screens/Profile.Screen';
import About from './Screens/About.Screen';
  
  // const TabNavigator = createBottomTabNavigator(
  //   {
  //     Home: DevList,
  //     About: About
  //   },
  //   {
  //       initialRouteName: "Home"
  //     }
  // );

  const AppNavigator = createStackNavigator(
    {
      Home: DevList,
      User: Profile 
    },
    {
      initialRouteName: "Home"
    }
  );

export default createAppContainer(AppNavigator);