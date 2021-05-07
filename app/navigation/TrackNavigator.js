import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../components/Home';
import CryptoDetail from '../components/CryptoDetail';

const Stack = createStackNavigator();

const screenOptions = {
  headerTransparent: false,
  headerTitleAlign: 'center',
  headerTitleStyle: {
    fontWeight: 'bold',
  },
  headerStyle: {
    backgroundColor: '#03AE9D',
  },
  headerTintColor: '#fff',
};

const TrackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen name='All Coins' component={Home} />
      <Stack.Screen name='Detail' component={CryptoDetail} />
    </Stack.Navigator>
  );
};

export default TrackNavigator;
