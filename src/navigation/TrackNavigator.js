import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../components/Home';
import CryptoDetail from '../components/CryptoDetail';
import Icon from 'react-native-vector-icons/Ionicons';

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

const TrackNavigator = ({ navigation }) => {
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen
        name='All Coins'
        component={Home}
        options={{
          headerLeft: () => (
            <Icon.Button
              name='ios-menu'
              size={30}
              backgroundColor='#03AE9D'
              onPress={() => {
                navigation.toggleDrawer();
              }}
            />
          ),
        }}
      />
      <Stack.Screen name='Detail' component={CryptoDetail} />
    </Stack.Navigator>
  );
};

export default TrackNavigator;
