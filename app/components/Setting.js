import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet, SafeAreaView } from 'react-native';
import XAxisScaleTimeExample from './ScaleTime';

const Setting = () => {
  return (
    <View style={styles.container}>
      <XAxisScaleTimeExample />
    </View>
  );
};

export default Setting;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#d6d9dc',
  },
});
