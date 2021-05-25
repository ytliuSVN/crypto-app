import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TabBar from '../components/TabBar';
import {
  MainStackNavigator,
  SearchStackNavigator,
  SettingStackNavigator,
} from './StackNavigator';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator tabBar={(props) => <TabBar {...props} />}>
      <Tab.Screen
        name='Track'
        component={MainStackNavigator}
        initialParams={{ icon: 'eye' }}
      />
      <Tab.Screen
        name='Search'
        component={SearchStackNavigator}
        initialParams={{ icon: 'search1' }}
      />
      <Tab.Screen
        name='Settings'
        component={SettingStackNavigator}
        initialParams={{ icon: 'setting' }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
