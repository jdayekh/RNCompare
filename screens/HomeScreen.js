import '../global.js';

import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import landing from './landing';
import login from './login';
import profile from './profile';
import register from './register';

const HomeStack = createStackNavigator();

const HomeScreen = ({navigation}) => {
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: global.primary_color,
          shadowColor: global.dark_gray, // iOS
          elevation: 4, // Android
        },
        headerTintColor: global.background_color,
        headerTitleStyle: {
          color: global.background_color,
        },
      }}>
      <HomeStack.Screen
        name="landing"
        component={landing}
        options={({route}) => ({
          title: 'Login API',
          headerBackTitleVisible: false,
          headerShown: true,
        })}
      />

      <HomeStack.Screen
        name="Login"
        component={login}
        options={({route}) => ({
          title: 'Login',
          headerBackTitleVisible: false,
          headerShown: true,
        })}
      />

      <HomeStack.Screen
        name="Profile"
        component={profile}
        options={({route}) => ({
          title: 'Profile',
          headerBackTitleVisible: false,
          headerShown: true,
        })}
      />

      <HomeStack.Screen
        name="Register"
        component={register}
        options={({route}) => ({
          title: 'Register',
          headerBackTitleVisible: false,
          headerShown: true,
        })}
      />
    </HomeStack.Navigator>
  );
};

export default HomeScreen;
