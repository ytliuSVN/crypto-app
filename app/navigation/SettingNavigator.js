import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Setting from '../components/Setting';

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

const SettingNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen name='Settings' component={Setting} />
    </Stack.Navigator>
  );
};

export default SettingNavigator;
