import React, { useState, useMemo, useCallback } from 'react';
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

const ModalPicker = (props) => {
  const [isSelected, setSelected] = useState(false);
  const color = useMemo(() => {
    return isSelected ? '#03AE9D' : '#676767a1';
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
        <Text style={[styles.text, { color }]}>{item}</Text>
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
    textTransform: 'uppercase',
  },
});
