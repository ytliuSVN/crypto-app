import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const Profile = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>333</Text>
      <Button
        onPress={() => navigation.navigate('Details')}
        title='move to another screen!'
      />
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
