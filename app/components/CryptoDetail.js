import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { View, Text, StyleSheet } from 'react-native';
import { ButtonGroup } from 'react-native-elements';
import Area from './Area';

const CryptoDetail = ({ route }) => {
  const buttons = ['1 Day', '1 Week', '1 Month'];
  const { itemId } = route.params;
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Price Chart for 30 days (&euro;)</Text>
      <Area coinId={itemId} days={30} />
      <ButtonGroup buttons={buttons} containerStyle={{ height: 50 }} />
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
    backgroundColor: '#efefef',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
});
