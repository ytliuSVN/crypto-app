import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import BottomTabNavigator from './TabNavigator';
import { DrawerContent } from './DrawerContent';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      initialRouteName='Track'
      drawerContent={(props) => <DrawerContent {...props} />}
    >
      <Drawer.Screen name='Track' component={BottomTabNavigator} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
