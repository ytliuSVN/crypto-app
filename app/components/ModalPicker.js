import React, { useState } from 'react';
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
  const [toggleState, setToggleState] = useState('sort-numeric-desc');

  const onPressItem = (option, index) => {
    setActiveIndex(index);
    setSelected(true);
    toggle(option);
    // props.changeModalVisibility(false);
  };

  const toggle = (option) => {
    setToggleState(
      toggleState === 'sort-numeric-desc'
        ? 'sort-numeric-asc'
        : 'sort-numeric-desc'
    );

    const key = option.replace(/\s+/g, '_').toLowerCase();
    const order = toggleState.replace('sort-numeric-', '');
    // valid values: market_cap_desc, market_cap_asc, volume_desc, volume_asc
    props.setData(`${key}_${order}`);
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
            <FontAwesome name={toggleState} size={24} color='#03AE9D' />
          ) : null}
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
