import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Foundation, AntDesign } from '@expo/vector-icons';

const Tab = ({ color, tab, onPress, icon }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      {icon && <AntDesign name={icon} size={20} color={color} />}
      <Text style={{ color: color }}>{tab.name}</Text>
    </TouchableOpacity>
  );
};

export default Tab;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
  },
});
