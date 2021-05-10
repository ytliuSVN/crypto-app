import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Search from '../components/Search';

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

const SearchNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen name='Search' component={Search} />
    </Stack.Navigator>
  );
};

export default SearchNavigator;
