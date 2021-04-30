import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../components/Home';
import Create from '../components/Create';
import Profile from '../components/Profile';
import TabBar from '../components/TabBar';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator tabBar={(props) => <TabBar {...props} />}>
      <Tab.Screen name='Track' component={Home} />
      <Tab.Screen name='Stats' component={Create} />
      <Tab.Screen name='Settings' component={Profile} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
