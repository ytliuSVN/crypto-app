import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { View, Text, StyleSheet } from 'react-native';
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
      <Text style={styles.text}>
        {`Price Chart for ${period(selected)}`} (&euro;)
      </Text>
      <Area coinId={itemId} selectedIndex={selected} />
      <ButtonGroup
        buttons={buttons}
        onPress={setSelected}
        selectedIndex={selected}
        selectedButtonStyle={{ backgroundColor: '#04c2af' }}
        containerStyle={{ height: 50 }}
        innerBorderStyle={{ width: 1, color: '#e0e0e0' }}
      />
    </View>
  );
};

CryptoDetail.propTypes = {
  itemId: PropTypes.string,
};

export default CryptoDetail;

const styles = StyleSheet.create({
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
