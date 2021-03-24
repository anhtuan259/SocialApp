import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Ionicons, AntDesign, MaterialCommunityIcons, FontAwesome } from "@expo/vector-icons";

import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import LoadingScreen from './screens/LoadingScreen';
import MapScreen from './screens/MapScreen';

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




class ProfileScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Profile</Text>
      </View>
    );
  }
}

class SettingsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Settings!</Text>
      </View>
    );
  }
}

// const AppStack = createStackNavigator({
//   Home: HomeScreen
// })

const AppTabNavigator = createBottomTabNavigator(

  {
    Profile: {
      screen: ProfileScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => <FontAwesome name="user" size={25} color={tintColor} />
      }
    },

    Home: {
      screen: HomeScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => <Ionicons name="ios-home" size={25} color={tintColor} />
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
      initialRouteName: 'Home'
    }
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

