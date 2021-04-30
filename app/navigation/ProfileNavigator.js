import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Profile from '../components/Profile';
import Details from '../components/Details';

const Stack = createStackNavigator();

const ProfileNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerTransparent: true }}>
      <Stack.Screen name='All Coins' component={Profile} />
      <Stack.Screen name='Details' component={Details} />
    </Stack.Navigator>
  );
};

export default ProfileNavigator;
