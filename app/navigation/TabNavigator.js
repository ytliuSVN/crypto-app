import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Chart from '../components/Chart';
import TabBar from '../components/TabBar';
import ProfileNavigator from '../navigation/ProfileNavigator';
import TrackNavigator from '../navigation/TrackNavigator';

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
        name='Stats'
        component={Chart}
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
