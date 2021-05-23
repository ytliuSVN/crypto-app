import React from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  SafeAreaView,
  ActivityIndicator,
} from 'react-native';
import { Defs, LinearGradient, Stop, Path } from 'react-native-svg';
import { AreaChart, Grid, YAxis, XAxis } from 'react-native-svg-charts';
import * as shape from 'd3-shape';
import { COINGECKO_URL } from '@env';
import useRequest from './Hooks/UseFetch';

const { height, width } = Dimensions.get('window');

const Area = ({ coinId, selectedIndex }) => {
  const handleUrlParams = (selectedIndex) => {
    switch (selectedIndex) {
      case 0:
        return `vs_currency=eur&days=1&interval=hourly`;
      case 1:
        return `vs_currency=eur&days=7&interval=daily`;
      case 2:
        return `vs_currency=eur&days=30&interval=daily`;
      default:
        return `vs_currency=eur&days=30&interval=daily`;
    }
  };

  const urlParams = handleUrlParams(selectedIndex);
  const baseUrl = `${COINGECKO_URL}/api/v3/coins/${coinId}/market_chart?${urlParams}`;

  const { data, loading, error } = useRequest(baseUrl);

  const contentInset = { top: 30, bottom: 30 };
  const labelsY = { fill: 'grey', fontSize: 10 };
  const labelsX = {
    fill: 'gray',
    fontSize: 10,
    rotation: 20,
    originY: 30,
    y: 5,
  };

  const Line = ({ line }) => (
    <Path
      key={'line'}
      d={line}
      stroke={'rgb(3, 174, 157)'}
      fill={'none'}
      strokeWidth='1.5'
    />
  );

  const Gradient = ({ index }) => (
    <Defs key={index}>
      <LinearGradient id={'gradient'} x1={'0%'} y1={'0%'} x2={'0%'} y2={'80%'}>
        <Stop offset={'0%'} stopColor={'rgb(35, 196, 188)'} stopOpacity={0.3} />
        <Stop
          offset={'100%'}
          stopColor={'rgb(179, 255, 251)'}
          stopOpacity={0.1}
        />
      </LinearGradient>
    </Defs>
  );

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
          svg={labelsY}
          formatLabel={(value) => `${formatCash(value)}`}
        />
        <View style={styles.container}>
          <AreaChart
            style={styles.main}
            data={data}
            contentInset={contentInset}
            curve={shape.curveNatural}
            svg={{ fill: 'url(#gradient)' }}
          >
            <Grid
              svg={{ stroke: 'rgba(151, 151, 151, 0.09)' }}
              belowChart={true}
            />
            <Line />
            <Gradient />
          </AreaChart>
          <XAxis
            style={styles.xAxis}
            data={data}
            contentInset={{ left: 30, right: 30 }}
            numberOfTicks={15}
            svg={labelsX}
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
  selectedIndex: PropTypes.oneOf([0, 1, 2]),
};

export default React.memo(Area);

const styles = StyleSheet.create({
  wrapper: {
    height: height / 2 + 60,
    flexDirection: 'row',
    padding: 20,
  },
  container: {
    flexDirection: 'column',
    paddingLeft: 10,
  },
  main: {
    height: height / 2,
    width: width - 80,
  },
  xAxis: {
    marginHorizontal: -15,
    marginTop: 10,
    height: 20,
  },
  loader: {
    justifyContent: 'space-around',
    height: height / 2 + 60,
    width: width - 80,
  },
});
