import React, { useState } from 'react';
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
import { useTheme } from '@react-navigation/native';

const SignUpScreen = ({ navigation }) => {
  const { colors } = useTheme();
  const initialState = {
    email: '',
    password: '',
    confirm_password: '',
    check_textInputChange: false,
    secureTextEntry: true,
    confirm_secureTextEntry: true,
  };

  const [data, setData] = useState(initialState);

  const textInputChange = (val) => {
    if (val.trim().length != 0) {
      setData({
        ...data,
        email: val,
        check_textInputChange: true,
      });
    } else {
      setData({
        ...data,
        email: val,
        check_textInputChange: false,
      });
    }
  };

  const handlePasswordChange = (val) => {
    setData({
      ...data,
      password: val,
    });
  };

  const handleConfirmPasswordChange = (val) => {
    setData({
      ...data,
      confirm_password: val,
    });
  };

  const updateSecureTextEntry = () => {
    setData({
      ...data,
      secureTextEntry: !data.secureTextEntry,
    });
  };

  const updateConfirmSecureTextEntry = () => {
    setData({
      ...data,
      confirm_secureTextEntry: !data.confirm_secureTextEntry,
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.textHeader}>Register Now!</Text>
      </View>

      <Animatable.View
        animation='fadeInUpBig'
        style={[
          styles.footer,
          {
            backgroundColor: colors.surface,
          },
        ]}
      >
        <Text
          style={[
            styles.textFooter,
            {
              color: colors.text,
            },
          ]}
        >
          Email
        </Text>
        <View style={styles.action}>
          <AntDesign name='user' color={colors.text} size={20} />
          <TextInput
            placeholder='Your Email'
            placeholderTextColor='#666666'
            style={[
              styles.textInput,
              {
                color: colors.text,
              },
            ]}
            autoCapitalize='none'
            onChangeText={(val) => textInputChange(val)}
          />

          {data.check_textInputChange ? (
            <Animatable.View animation='bounceIn'>
              <Feather name='check-circle' color={colors.secondary} size={20} />
            </Animatable.View>
          ) : null}
        </View>
        <Text
          style={[
            styles.textFooter,
            {
              color: colors.text,
            },
            { marginTop: 35 },
          ]}
        >
          Password
        </Text>
        <View style={styles.action}>
          <AntDesign name='lock1' color={colors.text} size={20} />
          <TextInput
            placeholder='Your Password'
            placeholderTextColor='#666666'
            secureTextEntry={data.secureTextEntry ? true : false}
            style={[
              styles.textInput,
              {
                color: colors.text,
              },
            ]}
            autoCapitalize='none'
            onChangeText={(val) => handlePasswordChange(val)}
          />

          <TouchableOpacity onPress={updateSecureTextEntry}>
            {data.secureTextEntry ? (
              <Feather name='eye-off' color='grey' size={20} />
            ) : (
              <Feather name='eye' color={colors.secondary} size={20} />
            )}
          </TouchableOpacity>
        </View>
        <Text
          style={[
            styles.textFooter,
            {
              color: colors.text,
            },
            { marginTop: 35 },
          ]}
        >
          Confirm Password
        </Text>
        <View style={styles.action}>
          <AntDesign name='lock1' color={colors.text} size={20} />
          <TextInput
            placeholder='Confirm Your Password'
            placeholderTextColor='#666666'
            secureTextEntry={data.confirm_secureTextEntry ? true : false}
            style={[
              styles.textInput,
              {
                color: colors.text,
              },
            ]}
            autoCapitalize='none'
            onChangeText={(val) => handleConfirmPasswordChange(val)}
          />

          <TouchableOpacity onPress={updateConfirmSecureTextEntry}>
            {data.secureTextEntry ? (
              <Feather name='eye-off' color='grey' size={20} />
            ) : (
              <Feather name='eye' color={colors.secondary} size={20} />
            )}
          </TouchableOpacity>
        </View>

        <View style={styles.button}>
          <TouchableOpacity style={styles.signIn}>
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
                Sign Up
              </Text>
            </LinearGradient>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={[
              styles.signIn,
              {
                borderColor: colors.primary,
                borderWidth: 1,
                marginTop: 15,
              },
            ]}
          >
            <Text
              style={[
                styles.textSign,
                {
                  color: colors.primary,
                },
              ]}
            >
              Sign In
            </Text>
          </TouchableOpacity>
        </View>
      </Animatable.View>
    </View>
  );
};

export default SignUpScreen;

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
