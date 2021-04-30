import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../components/Home';
import Create from '../components/Create';
import ProfileNavigator from '../navigation/ProfileNavigator';
import TabBar from '../components/TabBar';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator tabBar={(props) => <TabBar {...props} />}>
      <Tab.Screen
        name='Track'
        component={Home}
        initialParams={{ icon: 'eye' }}
      />
      <Tab.Screen
        name='Stats'
        component={Create}
        initialParams={{ icon: 'linechart' }}
      />
      <Tab.Screen
        name='Settings'
        component={ProfileNavigator}
        initialParams={{ icon: 'setting' }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
