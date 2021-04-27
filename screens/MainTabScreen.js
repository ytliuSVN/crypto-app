import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';

import HomeScreen from './HomeScreen';
import DetailsScreen from './DetailsScreen';
import StatsScreen from './StatsScreen';
import ProfileScreen from './ProfileScreen';

const Tab = createMaterialBottomTabNavigator();
const HomeStack = createStackNavigator();
const DetailsStack = createStackNavigator();

const MainTabScreen = () => (
  <Tab.Navigator initialRouteName='Home' activeColor='#fff'>
    <Tab.Screen
      name='Home'
      component={HomeStackScreen}
      options={{
        tabBarLabel: 'Track',
        tabBarColor: '#851dd6',
        tabBarIcon: ({ color }) => (
          <Icon name='ios-list' color={color} size={26} />
        ),
      }}
    />
    <Tab.Screen
      name='Settings'
      component={DetailsStackScreen}
      options={{
        tabBarLabel: 'Settings',
        tabBarColor: '#1f65ff',
        tabBarIcon: ({ color }) => (
          <Icon name='ios-settings' color={color} size={26} />
        ),
      }}
    />
    <Tab.Screen
      name='Profile'
      component={ProfileScreen}
      options={{
        tabBarLabel: 'Profile',
        tabBarColor: '#694fad',
        tabBarIcon: ({ color }) => (
          <Icon name='ios-logo-bitcoin' color={color} size={26} />
        ),
      }}
    />
    <Tab.Screen
      name='Stats'
      component={StatsScreen}
      options={{
        tabBarLabel: 'Stats',
        tabBarColor: '#d02860',
        tabBarIcon: ({ color }) => (
          <Icon name='ios-stats-chart' color={color} size={26} />
        ),
      }}
    />
  </Tab.Navigator>
);

export default MainTabScreen;

const HomeStackScreen = ({ navigation }) => (
  <HomeStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: '#851dd6',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }}
  >
    <HomeStack.Screen
      name='Home'
      component={HomeScreen}
      options={{
        title: 'Track',
        headerLeft: () => (
          <Icon.Button
            name='ios-menu'
            size={25}
            backgroundColor='#851dd6'
            onPress={() => navigation.openDrawer()}
          ></Icon.Button>
        ),
      }}
    />
  </HomeStack.Navigator>
);

const DetailsStackScreen = ({ navigation }) => (
  <DetailsStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: '#1f65ff',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }}
  >
    <DetailsStack.Screen
      name='Details'
      component={DetailsScreen}
      options={{
        headerLeft: () => (
          <Icon.Button
            name='ios-menu'
            size={25}
            backgroundColor='#1f65ff'
            onPress={() => navigation.openDrawer()}
          ></Icon.Button>
        ),
      }}
    />
  </DetailsStack.Navigator>
);
