import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const Greeting = (props) => {
  return (
    <View style={styles.center}>
      <Text>Hello {props.name}</Text>
    </View>
  );
};

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <View style={styles.container}>
      <Greeting name='AslanT' />
      <Greeting name='Jaina' />

      <Text>You clicked {count} times</Text>

      <Button
        onPress={() => setCount(count + 1)}
        title='Click me!'
        color='#841584'
        accessibilityLabel="Learn more about this purple button"
      />

      <StatusBar style='auto' />
    </View>
  );
};

export default App;

// React Native Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#c4d5ff99',
    alignItems: 'center',
    justifyContent: 'center',
  },
  center: {
    alignItems: 'center',
    backgroundColor: '#efefef',
  },
});
