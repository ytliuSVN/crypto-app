import React, { useState } from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const FloatingButton = ({ onPress, icon, color }) => {
  return (
    <TouchableOpacity style={styles.circle} onPress={onPress}>
      <Icon name={icon} color={color} size={26} />
    </TouchableOpacity>
  );
};

export default FloatingButton;

const styles = StyleSheet.create({
  circle: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 50,
    height: 50,
    position: 'absolute',
    bottom: 25,
    right: 15,
    backgroundColor: '#01a699',
    borderRadius: 100,
    elevation: 2,
  },
});
