import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const CryptoDetail = () => {
  return (
    <View style={styles.container}>
      {/* <Text style={styles.text}>CryptoDetail</Text> */}
    </View>
  );
};

export default CryptoDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: '#7d76ef',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFF',
  },
});
