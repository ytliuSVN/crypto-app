import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Setting from '../components/Setting';
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

const SettingNavigator = ({ navigation }) => {
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen
        name='Settings'
        component={Setting}
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
    </Stack.Navigator>
  );
};

export default SettingNavigator;
