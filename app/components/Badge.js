import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const Badge = ({ value }) => {
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <Text style={styles.badgeText}>{value}</Text>
      </View>
    </View>
  );
};

export default Badge;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignSelf: 'center',
    backgroundColor: '#eff2f5',
    borderRadius: 4,
  },
  wrapper: {
    paddingVertical: 2,
    paddingHorizontal: 6,
  },
  badgeText: {
    fontSize: 14,
    color: '#58667e',
    textTransform: 'uppercase',
  },
});
