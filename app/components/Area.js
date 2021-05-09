import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Dimensions, SafeAreaView } from 'react-native';
import { AreaChart, Grid, YAxis, XAxis } from 'react-native-svg-charts';
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
  const contentInset = { top: 30, bottom: 30 };
  const labels = {
    fill: 'grey',
    fontSize: 10,
  };

  useEffect(() => {
    setData(DATA);
  }, []);

  const formatCash = (n) => {
    if (n < 1e3) return n;
    if (n >= 1e3 && n < 1e6) return +(n / 1e3).toFixed(1) + 'K';
    if (n >= 1e6 && n < 1e9) return +(n / 1e6).toFixed(1) + 'M';
    if (n >= 1e9 && n < 1e12) return +(n / 1e9).toFixed(1) + 'B';
    if (n >= 1e12) return +(n / 1e12).toFixed(1) + 'T';
  };

  return (
    <SafeAreaView style={styles.wrapper}>
      <YAxis
        data={data}
        contentInset={contentInset}
        svg={labels}
        // numberOfTicks={5}
        formatLabel={(value) => `€${formatCash(value)}`}
      />
      <View style={styles.main}>
        <AreaChart
          style={styles.container}
          data={data}
          contentInset={contentInset}
          curve={shape.curveNatural}
          svg={{ fill: 'rgba(3, 174, 157, 0.8)' }}
        >
          <Grid
            svg={{ stroke: 'rgba(151, 151, 151, 0.09)' }}
            belowChart={true}
          />
        </AreaChart>
        <XAxis
          style={styles.xAxis}
          data={data}
          contentInset={{ left: 30, right: 30 }}
          svg={labels}
          formatLabel={(value, index) => index}
        />
      </View>
    </SafeAreaView>
  );
};

export default Area;

const styles = StyleSheet.create({
  wrapper: {
    height: height / 2,
    flexDirection: 'row',
  },
  main: {
    flexDirection: 'column',
  },
  container: {
    height: height / 2,
    width: width - 80,
    marginLeft: 12,
  },
  xAxis: {
    marginHorizontal: -10,
    marginTop: 10,
  },
});
