import React, { useState, useMemo, useCallback } from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  ScrollView,
  Text,
} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const OPTIONS = ['market cap', 'volume'];
const WIDTH = Dimensions.get('window').width;

const ModalPicker = (props) => {
  const [isSelected, setSelected] = useState(false);
  const color = useMemo(() => {
    return isSelected ? '#03AE9D' : '#676767cf';
  }, [isSelected]);
  const onPressCallback = useCallback(() => {
    setSelected((prev) => !prev);
  }, [setSelected]);

  const onPressItem = (option) => {
    props.changeModalVisibility(false);
    props.setData(option);
  };

  const option = OPTIONS.map((item, index) => {
    return (
      <TouchableOpacity
        style={
          index === OPTIONS.length - 1 ? styles.noBorderOption : styles.option
        }
        key={index}
        onPress={() => onPressItem(item)}
      >
        <View style={styles.sort}>
          <Text style={[styles.text, { color }]}>{item}</Text>
          {/* <FontAwesome name='sort-desc' size={24} color='#676767cf' /> */}
          {/* <FontAwesome name='sort-asc' size={24} color='#676767cf' /> */}
        </View>
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

const borderBottomStyle = {
  borderBottomColor: 'black',
  borderBottomWidth: StyleSheet.hairlineWidth,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(29, 29, 29, 0.8)',
  },
  modal: {
    backgroundColor: 'white',
    borderRadius: 10,
    width: WIDTH - 20,
  },
  option: {
    ...borderBottomStyle,
    alignItems: 'center',
  },
  noBorderOption: {
    alignItems: 'center',
  },
  text: {
    margin: 20,
    fontSize: 20,
    fontWeight: 'bold',
    textTransform: 'capitalize',
  },
  sort: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
