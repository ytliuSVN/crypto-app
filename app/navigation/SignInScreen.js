import React from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Platform,
  TextInput,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import { LinearGradient } from 'expo-linear-gradient';
import { AntDesign } from '@expo/vector-icons';
import Feather from 'react-native-vector-icons/Feather';

const SignInScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.textHeader}>Welcome!</Text>
      </View>
      <View style={styles.footer}>
        <Text style={styles.textFooter}>Email</Text>
        <View style={styles.action}>
          <AntDesign name='user' color='#05375a' size={20} />
          <TextInput
            placeholder='Your Email'
            style={styles.textInput}
            autoCapitalize='none'
          />
          <Feather name='check-circle' color='green' size={20} />
        </View>
        <Text style={[styles.textFooter, { marginTop: 35 }]}>Password</Text>
        <View style={styles.action}>
          <AntDesign name='lock1' color='#05375a' size={20} />
          <TextInput
            placeholder='Your Password'
            secureTextEntry={true}
            style={styles.textInput}
            autoCapitalize='none'
          />
          <Feather name='eye-off' color='green' size={20} />
        </View>
      </View>
    </View>
  );
};

export default SignInScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#03AE9D',
  },
  header: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
    paddingBottom: 50,
  },
  footer: {
    flex: 3,
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  textHeader: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 30,
  },
  textFooter: {
    color: '#05375a',
    fontSize: 18,
  },
  action: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
    paddingBottom: 5,
  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS === 'ios' ? 0 : -4,
    paddingLeft: 10,
    color: '#05375a',
  },
});
