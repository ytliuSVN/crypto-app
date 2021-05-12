import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  SafeAreaView,
  ActivityIndicator,
} from 'react-native';
import { AreaChart, Grid, YAxis, XAxis } from 'react-native-svg-charts';
import * as shape from 'd3-shape';
import { COINGECKO_URL } from '@env';
import useRequest from './Hooks/UseFetch';

const { height, width } = Dimensions.get('window');

const Area = ({ coinId, days }) => {
  const urlParams = `vs_currency=eur&days=${days}&interval=daily`;
  const baseUrl = `${COINGECKO_URL}/api/v3/coins/${coinId}/market_chart?${urlParams}`;

  const { data, loading, error } = useRequest(baseUrl);

  const contentInset = { top: 30, bottom: 30 };
  const labels = {
    fill: 'grey',
    fontSize: 10,
  };

  const formatCash = (n) => {
    if (n < 1e3) return n;
    if (n >= 1e3 && n < 1e6) return +(n / 1e3).toFixed(1) + 'K';
    if (n >= 1e6 && n < 1e9) return +(n / 1e6).toFixed(1) + 'M';
    if (n >= 1e9 && n < 1e12) return +(n / 1e9).toFixed(1) + 'B';
    if (n >= 1e12) return +(n / 1e12).toFixed(1) + 'T';
  };

  const renderChart = () => {
    return (
      <SafeAreaView style={styles.wrapper}>
        <YAxis
          data={data}
          contentInset={contentInset}
          svg={labels}
          numberOfTicks={5}
          formatLabel={(value) => `€${formatCash(value)}`}
        />
        <View style={styles.main}>
          <AreaChart
            style={styles.container}
            data={data}
            contentInset={contentInset}
            curve={shape.curveNatural}
            svg={{ fill: 'rgba(3, 174, 157, 0.4)' }}
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

  return loading ? (
    <ActivityIndicator style={styles.loader} size='large' color='#03AE9D' />
  ) : (
    renderChart()
  );
};

Area.propTypes = {
  coinId: PropTypes.string,
  days: PropTypes.number,
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
  loader: {
    justifyContent: 'space-around',
    height: height / 2,
    width: width - 80,
  },
});
