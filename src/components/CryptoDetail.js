import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { View, Text, StyleSheet, TouchableHighlight } from 'react-native';
import { ButtonGroup } from 'react-native-elements';
import Area from './Area';
import { useTheme } from '@react-navigation/native';

const CryptoDetail = ({ route }) => {
  const { colors } = useTheme();
  const [selected, setSelected] = useState(2);
  const buttons = ['1 Day', '1 Week', '1 Month'];
  const { itemId } = route.params;

  const period = (selectedIndex) => {
    switch (selectedIndex) {
      case 0:
        return `1 day`;
      case 1:
        return `7 days`;
      case 2:
        return `30 days`;
      default:
        return `30 days`;
    }
  };

  return (
    <View style={[styles.container, { backgroundColor: colors.surface }]}>
      <Text style={[styles.text, { color: colors.secondary }]}>
        {`Price Chart for ${period(selected)}`} (&euro;)
      </Text>
      <Area coinId={itemId} selectedIndex={selected} />
      <ButtonGroup
        buttons={buttons}
        onPress={setSelected}
        selectedIndex={selected}
        Component={TouchableHighlight}
        underlayColor='#919191'
        buttonStyle={{ backgroundColor: colors.background }}
        textStyle={{ color: colors.secondary }}
        selectedButtonStyle={{ backgroundColor: '#03AE9D' }}
        containerStyle={[
          styles.buttonContainer,
          { borderColor: colors.success, borderWidth: 1 },
        ]}
        innerBorderStyle={{ width: 1, color: colors.accent }}
      />
    </View>
  );
};

CryptoDetail.propTypes = {
  itemId: PropTypes.string,
};

export default CryptoDetail;

const styles = StyleSheet.create({
  buttonContainer: {
    height: 50,
    borderRadius: 8,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
});
