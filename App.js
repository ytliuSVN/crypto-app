import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import MainTabScreen from './screens/MainTabScreen';
import { Text, View } from 'react-native';

const Drawer = createDrawerNavigator();

const App = () => {
  const Article = () => {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Article Screen</Text>
      </View>
    );
  };

  const MyDrawer = () => {
    return (
      <Drawer.Navigator initialRouteName='Home'>
        <Drawer.Screen name='Home' component={MainTabScreen} />
        <Drawer.Screen name='Article' component={Article} />
      </Drawer.Navigator>
    );
  };

  return (
    <NavigationContainer>
      <MyDrawer />
    </NavigationContainer>
  );
};

export default App;
