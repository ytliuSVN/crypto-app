import React, { useState, useCallback } from 'react';
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
  const [activeIndex, setActiveIndex] = useState();

  const onPressCallback = useCallback(() => {
    setSelected((prev) => !prev);
  }, [setSelected]);

  const onPressItem = (option, index) => {
    setActiveIndex(index);
    setSelected(true);
    props.setData(option);
    // props.changeModalVisibility(false);
  };

  const option = OPTIONS.map((item, index) => {
    return (
      <TouchableOpacity
        style={
          index === OPTIONS.length - 1 ? styles.noBorderOption : styles.option
        }
        key={index}
        onPress={() => onPressItem(item, index)}
      >
        <View style={styles.sort}>
          <Text
            style={[
              activeIndex === index && isSelected
                ? styles.textActive
                : styles.textInactive,
              ,
              styles.text,
            ]}
          >
            {item}
          </Text>

          {activeIndex === index && isSelected ? (
            <FontAwesome name='sort-desc' size={24} color='#03AE9D' />
          ) : null}

          {/* <FontAwesome name='sort-desc' size={24} color='#03AE9D' /> */}
          {/* <FontAwesome name='sort-asc' size={24} color='#03AE9D' /> */}
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
  textActive: {
    color: '#03AE9D',
  },
  textInactive: {
    color: '#676767cf',
  },
  sort: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
