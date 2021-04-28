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
  <Tab.Navigator
    initialRouteName='Home'
    activeColor='#fff'
    barStyle={{ backgroundColor: '#03AE9D' }}
  >
    <Tab.Screen
      name='Home'
      component={HomeStackScreen}
      options={{
        tabBarLabel: 'Track',
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
        backgroundColor: '#03AE9D',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
      headerTitleAlign: 'center'
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
            backgroundColor='#03AE9D'
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
        backgroundColor: '#03AE9D',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
      headerTitleAlign: 'center'
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
            backgroundColor='#03AE9D'
            onPress={() => navigation.openDrawer()}
          ></Icon.Button>
        ),
      }}
    />
  </DetailsStack.Navigator>
);

