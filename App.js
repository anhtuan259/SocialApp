import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Ionicons, AntDesign, MaterialCommunityIcons, FontAwesome, FontAwesome5 } from "@expo/vector-icons";
import { styleContainer } from "./styles/styleHome";

import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import LoadingScreen from './screens/LoadingScreen';
import MapScreen from './screens/MapScreen';
import SettingsScreen from './screens/SettingScreen';
import RestaurantScreen from './screens/RestaurantScreen';
import ProfileScreen from './screens/ProfileScreen';

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

const AppTabNavigator = createBottomTabNavigator(

  {
    Profile: {
      screen: ProfileScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => <FontAwesome name="user" size={25} color={tintColor} />
      }
    },
    Restaurant: {
      screen: RestaurantScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => <FontAwesome5 name="store" size={20} color={tintColor} />
      }
    },

    Home: {
      screen: HomeScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) =>
          <MaterialCommunityIcons name="home-circle" size={50} color={'crimson'} style={styleContainer.HomeTab} />

      }
    },

    Map: {
      screen: MapScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => <Ionicons name="map" size={25} color={tintColor} />
      }
    },
    Setting: {
      screen: SettingsScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => <Ionicons name="settings" size={25} color={tintColor} />
      }
    }
  },
  {
    tabBarOptions: {
      activeTintColor: '#161F3D',
      inactiveTintColor: '#B8BBC4',
      showLabel: false,

    },
    initialRouteName: 'Home'
  }
)

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
      App: AppTabNavigator,
      Auth: AuthStack
    },
    {
      initialRouteName: 'Loading',

    }
  )
)

