import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import BottomTabNavigator from './TabNavigator';
import SearchNavigator from './SearchNavigator';
import SettingNavigator from './SettingNavigator';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator initialRouteName='Track'>
      <Drawer.Screen name='Track' component={BottomTabNavigator} />
      <Drawer.Screen name='Search' component={SearchNavigator} />
      <Drawer.Screen name='Settings' component={SettingNavigator} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
