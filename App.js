
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import LoadingScreen from './screens/LoadingScreen';

import * as firebase from 'firebase';

var firebaseConfig = {
  apiKey: "AIzaSyA6geeLnpoM_JEgYDTaixoS04-_i0WLdf4",
  authDomain: "socialapp-2251a.firebaseapp.com",
  projectId: "socialapp-2251a",
  storageBucket: "socialapp-2251a.appspot.com",
  messagingSenderId: "1066815893837",
  appId: "1:1066815893837:web:92db6448e6af9277e54704"
};
// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
  console.log('connected!');
}


const AppStack = createStackNavigator({
  Home: HomeScreen
})

const AuthStack = createStackNavigator({
  Login: {
    screen: LoginScreen,
  },

  Register: {
    screen: RegisterScreen
  }
})



export default createAppContainer(
  createSwitchNavigator(
    {
      Loading: LoadingScreen,
      App: AppStack,
      Auth: AuthStack
    },
    {
      initialRouteName: 'Loading',

    }
  )
)

