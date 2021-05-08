import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Dimensions, SafeAreaView } from 'react-native';
import { AreaChart, Grid } from 'react-native-svg-charts';
import * as shape from 'd3-shape';
// import { DATA } from '../../dataset/Data';

const { height, width } = Dimensions.get('window');

const Area = ({ coinId }) => {
  const [data, setData] = useState([]);

  const DATA = [
    48097.49969239491,
    47047.72809852492,
    47437.639045229014,
    44498.3953336929,
    47831.061167924854,
    46834.930702231,
    47159.75662737094,
    47772.0856970536,
  ];

  useEffect(() => {
    setData(DATA);
  }, []);

  return (
    <SafeAreaView>
      <AreaChart
        style={styles.container}
        data={data}
        contentInset={{ top: 30, bottom: 30 }}
        curve={shape.curveNatural}
        svg={{ fill: 'rgba(3, 174, 157, 0.8)' }}
      >
        <Grid svg={{ stroke: 'rgba(151, 151, 151, 0.09)' }} belowChart={true} />
      </AreaChart>
    </SafeAreaView>
  );
};

export default Area;

const styles = StyleSheet.create({
  container: {
    height: height / 4,
    width: width - 20,
  },
});
