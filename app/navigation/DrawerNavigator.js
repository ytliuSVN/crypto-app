import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { DrawerContent } from './DrawerContent';
import BottomTabNavigator from './TabNavigator';
import RootStackScreen from './RootStackScreen';

const Drawer = createDrawerNavigator();

const DrawerNavigator = ({ userToken }) => {
  return userToken !== null ? (
    <Drawer.Navigator drawerContent={(props) => <DrawerContent {...props} />}>
      <Drawer.Screen name='HomeDrawer' component={BottomTabNavigator} />
    </Drawer.Navigator>
  ) : (
    <RootStackScreen />
  );
};

export default DrawerNavigator;
