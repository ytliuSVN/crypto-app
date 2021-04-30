import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const Create = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>222</Text>
    </View>
  );
};

export default Create;

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
