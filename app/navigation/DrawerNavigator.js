import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import BottomTabNavigator from './TabNavigator';
import { DrawerContent } from './DrawerContent';

// import RootStackScreen from './RootStackScreen';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    // <RootStackScreen />
    <Drawer.Navigator drawerContent={(props) => <DrawerContent {...props} />}>
      <Drawer.Screen name='HomeDrawer' component={BottomTabNavigator} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
