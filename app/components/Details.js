import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const Details = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Details</Text>
    </View>
  );
};

export default Details;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#76a6ef',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFF',
  },
});
