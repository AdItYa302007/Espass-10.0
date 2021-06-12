import React, { Component} from 'react';
import { Icon} from 'react-native-elements';
import { View, Text, StyeSheet } from 'react-native';
import {createStackNavigator} from 'react-navigation-stack';
import PasswordSaverScreen from '../screens/PasswordSaverScreen';
export const AppStackNavigator = createStackNavigator({
  PasswordSaverScreen : {
    screen : PasswordSaverScreen,
    navigationOptions:{
      headerShown : false
    }
  },
  
},
  {
    initialRouteName: 'PasswordSaverScreen'
  }
);






