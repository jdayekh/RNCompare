/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import './global.js';

import {
  AppRegistry,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import HomeScreen from './screens/HomeScreen';
import Login from './screens/login';
import {NavigationContainer} from '@react-navigation/native';
import Profile from './screens/profile';
import React from 'react';
import Register from './screens/register';

const App = ({navigation}) => {
  return (
    <NavigationContainer>
      <StatusBar barStyle="dark-content" />
      <HomeScreen navigation={navigation} />
    </NavigationContainer>
  );
};



export default App;
