import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const StatsScreen = () => {
  return (
    <View style={styles.container}>
      <Text>StatsScreen</Text>
      <Button title='Click Here' onPress={() => alert('Button Clicked!')} />
    </View>
  );
};

export default StatsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
