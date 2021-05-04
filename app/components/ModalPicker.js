import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  ScrollView,
  Text,
} from 'react-native';

const OPTIONS = ['name', 'price', 'volume'];
const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

const ModalPicker = (props) => {
  const onPressItem = (option) => {
    props.changeModalVisibility(false);
    props.setData(option);
  };

  const option = OPTIONS.map((item, index) => {
    return (
      <TouchableOpacity
        style={styles.option}
        key={index}
        onPress={() => onPressItem(item)}
      >
        <Text style={styles.text}>{item}</Text>
      </TouchableOpacity>
    );
  });

  return (
    <TouchableOpacity
      onPress={() => props.changeModalVisibility(false)}
      style={styles.container}
    >
      <View style={styles.modal}>
        <ScrollView>{option}</ScrollView>
      </View>
    </TouchableOpacity>
  );
};
export default ModalPicker;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  modal: {
    backgroundColor: 'white',
    borderRadius: 10,
    width: WIDTH - 20,
  },
  option: {
    alignItems: 'center',
  },
  text: {
    margin: 20,
    fontSize: 20,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
});
