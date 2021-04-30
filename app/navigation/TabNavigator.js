import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../components/Home';
import Create from '../components/Create';
import Profile from '../components/Profile';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name='Home' component={Home} />
      <Tab.Screen name='Create' component={Create} />
      <Tab.Screen name='Profile' component={Profile} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
