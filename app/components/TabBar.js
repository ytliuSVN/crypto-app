import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, Dimensions } from 'react-native';
import Tab from './Tab';
const { width } = Dimensions.get('screen');

const TabBar = ({ state, navigation }) => {
  const [selected, setSelected] = useState('Track');
  const { routes } = state;
  const renderColor = (currentTab) =>
    currentTab === selected ? '#03AE9D' : 'black';

  const handlePress = (activeTab) => {
    setSelected(activeTab);
  };

  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
        {routes.map((route) => (
          <Tab
            tab={route}
            //   icon={}
            onPress={() => handlePress(route.name)}
            color={renderColor(route.name)}
            key={route.key}
          />
        ))}
      </View>
    </View>
  );
};

export default TabBar;

const styles = StyleSheet.create({
  wrapper: {
    position: 'absolute',
    bottom: 20,
    alignItems: 'center',
    justifyContent: 'center',
    width,
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    width: 250,
    borderRadius: 100,
  },
});
