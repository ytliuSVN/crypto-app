import React, { useState, useEffect } from 'react';
import { AreaChart, YAxis, XAxis } from 'react-native-svg-charts';
import { View, Dimensions } from 'react-native';
import * as shape from 'd3-shape';

const { height, width } = Dimensions.get('window');

const XAxisScaleTimeExample = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(DATA);
  }, []);

  // https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=eur&days=7&interval=daily
  const DATA = [
    {
      value: 38515.79282820282,
      timestamp: 1621123200000,
    },
    {
      value: 38340.02021913021,
      timestamp: 1621209600000,
    },
    {
      value: 36013.75689016597,
      timestamp: 1621296000000,
    },
    {
      value: 35248.29953994585,
      timestamp: 1621382400000,
    },
    {
      value: 30638.26648015515,
      timestamp: 1621468800000,
    },
    {
      value: 33070.58223866926,
      timestamp: 1621555200000,
    },
    {
      value: 30656.511792720983,
      timestamp: 1621641600000,
    },
  ];

  const getDateFromTimestamp = (unixTimeStamp) => {
    let date = new Date(unixTimeStamp);
    return (
      (`0${date.getMonth() + 1}`).slice(-2) + '/' + (`0${date.getDate()}`).slice(-2)
    );
  };

  const getDateTimeFromTimestamp = (unixTimeStamp) => {
    let date = new Date(unixTimeStamp);
    return (
      (`0${date.getHours()}`).slice(-2) + ':' + (`0${date.getMinutes()}`).slice(-2)
    );
  };

  return (
    <View style={{ height: 200, width: width - 20, padding: 20 }}>
      <View style={{ height: 200, flexDirection: 'row' }}>
        <YAxis
          data={data}
          contentInset={{ top: 30, bottom: 30 }}
          svg={{
            fill: 'grey',
            fontSize: 10,
          }}
          numberOfTicks={10}
          formatLabel={(value) => `${value} €`}
          yAccessor={({ item }) => item.value}
        />
        <View style={{ flexDirection: 'column', flex: 1, paddingLeft: 10 }}>
          <AreaChart
            style={{ flex: 1 }}
            data={data}
            contentInset={{ top: 30, bottom: 30 }}
            curve={shape.curveNatural}
            svg={{ fill: '#03AE9D' }}
            yAccessor={({ item }) => item.value}
            xAccessor={({ item }) => item.timestamp}
          ></AreaChart>
          <XAxis
            data={data}
            svg={{
              fill: 'grey',
              fontSize: 8,
              fontWeight: 'bold',
              rotation: 20,
              originY: 30,
              y: 5,
            }}
            xAccessor={({ item }) => item.timestamp}
            style={{ marginHorizontal: -5, height: 20, marginTop: 5 }}
            contentInset={{ left: 10, right: 25 }}
            formatLabel={(value) => getDateFromTimestamp(value)}
            // formatLabel={(value) => new Date(value).toLocaleTimeString('en-US')}
          />
        </View>
      </View>
    </View>
  );
};

export default XAxisScaleTimeExample;
