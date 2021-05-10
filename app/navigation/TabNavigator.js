import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TabBar from '../components/TabBar';
import TrackNavigator from '../navigation/TrackNavigator';
import ProfileNavigator from '../navigation/ProfileNavigator';
import SearchNavigator from '../navigation/SearchNavigator';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator tabBar={(props) => <TabBar {...props} />}>
      <Tab.Screen
        name='Track'
        component={TrackNavigator}
        initialParams={{ icon: 'eye' }}
      />
      <Tab.Screen
        name='Search'
        component={SearchNavigator}
        initialParams={{ icon: 'search1' }}
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
