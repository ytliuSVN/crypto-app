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
      <Tab.Screen
        name='Track'
        component={Home}
        initialParams={{ icon: 'home' }}
      />
      <Tab.Screen
        name='Stats'
        component={Create}
        initialParams={{ icon: 'linechart' }}
      />
      <Tab.Screen
        name='Settings'
        component={Profile}
        initialParams={{ icon: 'setting' }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
