import React from 'react';
import PropTypes from 'prop-types';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const Tab = ({ color, tab, onPress, icon }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      {icon && <AntDesign name={icon} size={20} color={color} />}
      <Text style={{ color: color }}>{tab.name}</Text>
    </TouchableOpacity>
  );
};

Tab.propTypes = {
  color: PropTypes.string,
  tab: PropTypes.object,
  onPress: PropTypes.func,
  icon: PropTypes.string,
};

export default React.memo(Tab);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
});
