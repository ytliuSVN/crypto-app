import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const Chart = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Let's Draw!</Text>
    </View>
  );
};

export default Chart;

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
    color: '#fff',
  },
});
