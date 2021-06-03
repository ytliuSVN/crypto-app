import React, { useState, useContext } from 'react';
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
import { AuthContext } from '../components/context';

const SignInScreen = ({ navigation }) => {
  const initialState = {
    // email: '',
    username: '',
    password: '',
    check_textInputChange: false,
    secureTextEntry: true,
    isValidUser: true,
    isValidPassword: true,
  };

  const [data, setData] = useState(initialState);

  const { signIn } = useContext(AuthContext);

  const textInputChange = (val) => {
    if (val.trim().length >= 4) {
      setData({
        ...data,
        // email: val,
        username: val,
        check_textInputChange: true,
        isValidUser: true,
      });
    } else {
      setData({
        ...data,
        // email: val,
        username: val,
        check_textInputChange: false,
        isValidUser: false,
      });
    }
  };

  const handlePasswordChange = (val) => {
    if (val.trim().length >= 8) {
      setData({
        ...data,
        password: val,
        isValidPassword: true,
      });
    } else {
      setData({
        ...data,
        password: val,
        isValidPassword: false,
      });
    }
  };

  const updateSecureTextEntry = () => {
    setData({
      ...data,
      secureTextEntry: !data.secureTextEntry,
    });
  };

  const handleValidUser = (val) => {
    if (val.trim().length >= 4) {
      setData({
        ...data,
        isValidUser: true,
      });
    } else {
      setData({
        ...data,
        isValidUser: false,
      });
    }
  };

  const loginHandle = (userName, password) => {
    signIn(userName, password);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.textHeader}>Welcome!</Text>
      </View>

      <Animatable.View animation='fadeInUpBig' style={styles.footer}>
        <Text style={styles.textFooter}>Username</Text>
        <View style={styles.action}>
          <AntDesign name='user' color='#05375a' size={20} />
          <TextInput
            // placeholder='Your Email'
            placeholder='Your Username'
            style={styles.textInput}
            autoCapitalize='none'
            onChangeText={(val) => textInputChange(val)}
            onEndEditing={(e) => handleValidUser(e.nativeEvent.text)}
          />

          {data.check_textInputChange ? (
            <Animatable.View animation='bounceIn'>
              <Feather name='check-circle' color='green' size={20} />
            </Animatable.View>
          ) : null}
        </View>

        {data.isValidUser ? null : (
          <Animatable.View animation='fadeInLeft' duration={500}>
            <Text style={styles.errorMsg}>
              Username must be 4 characters long.
            </Text>
          </Animatable.View>
        )}

        <Text style={[styles.textFooter, { marginTop: 35 }]}>Password</Text>
        <View style={styles.action}>
          <AntDesign name='lock1' color='#05375a' size={20} />
          <TextInput
            placeholder='Your Password'
            secureTextEntry={data.secureTextEntry ? true : false}
            style={styles.textInput}
            autoCapitalize='none'
            onChangeText={(val) => handlePasswordChange(val)}
          />

          <TouchableOpacity onPress={updateSecureTextEntry}>
            {data.secureTextEntry ? (
              <Feather name='eye-off' color='green' size={20} />
            ) : (
              <Feather name='eye' color='grey' size={20} />
            )}
          </TouchableOpacity>
        </View>

        {data.isValidPassword ? null : (
          <Animatable.View animation='fadeInLeft' duration={500}>
            <Text style={styles.errorMsg}>
              Password must be 8 characters long.
            </Text>
          </Animatable.View>
        )}

        <View style={styles.button}>
          <TouchableOpacity
            style={styles.signIn}
            onPress={() => {
              loginHandle(data.username, data.password);
            }}
          >
            <LinearGradient
              colors={['#08d4c4', '#01ab9d']}
              style={styles.signIn}
            >
              <Text
                style={[
                  styles.textSign,
                  {
                    color: '#fff',
                  },
                ]}
              >
                Sign In
              </Text>
            </LinearGradient>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate('SignUpScreen')}
            style={[
              styles.signIn,
              {
                borderColor: '#009387',
                borderWidth: 1,
                marginTop: 15,
              },
            ]}
          >
            <Text
              style={[
                styles.textSign,
                {
                  color: '#009387',
                },
              ]}
            >
              Sign Up
            </Text>
          </TouchableOpacity>
        </View>
      </Animatable.View>
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
  errorMsg: {
    color: '#fb2c33',
    fontSize: 14,
  },
  button: {
    alignItems: 'center',
    marginTop: 50,
  },
  signIn: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  textSign: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});
