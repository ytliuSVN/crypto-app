import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const Search = () => {
  return (
    <View style={styles.container}>
      {/* <Text style={styles.text}>Search</Text> */}
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#d6d9dc',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
});
