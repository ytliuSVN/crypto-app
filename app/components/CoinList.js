import React, { useRef, useState, useEffect } from 'react';
import axios from 'axios';
import { COINGECKO_URL } from '@env';
import {
  Image,
  Animated,
  Text,
  View,
  StyleSheet,
  Pressable,
  ActivityIndicator,
} from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);
const SPACING = 20;
const AVATAR_SIZE = 70;
const ITEM_SIZE = AVATAR_SIZE + SPACING * 3;

const CoinList = ({ navigation }) => {
  const [coins, setCoins] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setError(false);
    setLoading(true);
    try {
      fetchCrypto();
    } catch (error) {
      console.error(error);
      setError(true);
    }
    setLoading(false);
  }, [page]);

  const fetchCrypto = async () => {
    const perPage = 25;
    const urlParams = `vs_currency=eur&order=market_cap_desc&per_page=${perPage}&page=${page}&sparkline=false`;
    const baseUrl = `${COINGECKO_URL}/api/v3/coins/markets?${urlParams}`;

    axios
      .get(baseUrl)
      .then((res) => {
        if (page > 1) {
          setCoins([...coins, ...res.data]);
        } else {
          setCoins(res.data);
        }
      })
      .catch((error) => {
        console.error('Axios GET request failed');
      });
  };

  const scrollY = useRef(new Animated.Value(0)).current;

  const renderItem = ({ item, index }) => {
    const inputRange = [-1, 0, ITEM_SIZE * index, ITEM_SIZE * (index + 2)];
    const opacityInputRange = [
      -1,
      0,
      ITEM_SIZE * index,
      ITEM_SIZE * (index + 1.2),
    ];

    const scale = scrollY.interpolate({
      inputRange,
      outputRange: [1, 1, 1, 0],
    });

    const opacity = scrollY.interpolate({
      inputRange: opacityInputRange,
      outputRange: [1, 1, 1, 0],
    });

    const numberFormat = (num) => {
      return num.toString().replace(/^[+-]?\d+/, (int) => {
        return int.replace(/(\d)(?=(\d{3})+$)/g, '$1,');
      });
    };

    const percentageFormat = (num) => {
      return (Math.round(num * 100) / 100).toFixed(2);
    };

    const renderPriceChange = (price) => {
      if (price > 0) {
        return (
          <Text style={styles.rise}>
            <AntDesign name='caretup' color='#03AE9D' size={10} />{' '}
            {percentageFormat(item.price_change_percentage_24h)}%
          </Text>
        );
      } else {
        return (
          <Text style={styles.drop}>
            <AntDesign name='caretdown' color='#ff252c' size={10} />{' '}
            {percentageFormat(item.price_change_percentage_24h)}%
          </Text>
        );
      }
    };

    return (
      <AnimatedPressable
        style={[
          styles.cardList,
          {
            transform: [{ scale }],
            opacity,
          },
        ]}
        onPress={() => navigation.navigate('Detail', { itemId: `${item.id}` })}
      >
        <Image style={styles.itemImage} source={{ uri: item.image }} />
        <View style={styles.wrapper}>
          <View style={styles.coinText}>
            <Text
              style={styles.baseText}
              ellipsizeMode='tail'
              numberOfLines={1}
            >
              {item.name}
            </Text>
            <Text style={styles.innerText}>{item.symbol}</Text>
          </View>
          <Text style={styles.itemVolume}>
            &euro;{numberFormat(item.total_volume)}
          </Text>
          <View style={styles.combo}>
            <Text style={styles.itemPrice}>
              &euro;{numberFormat(item.current_price)}
            </Text>
            {renderPriceChange(item.price_change_percentage_24h)}
          </View>
        </View>
      </AnimatedPressable>
    );
  };

  const renderFooter = () => {
    return (
      <View style={styles.footer}>
        {loading ? (
          <ActivityIndicator
            style={styles.loader}
            size='large'
            color='#03AE9D'
          />
        ) : null}
      </View>
    );
  };

  const fetchMore = () => {
    setPage(page + 1);
    setLoading(true);
  };

  return (
    <Animated.FlatList
      data={coins}
      onScroll={Animated.event(
        [{ nativeEvent: { contentOffset: { y: scrollY } } }],
        {
          useNativeDriver: true,
        }
      )}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      ListFooterComponent={renderFooter}
      onEndReachedThreshold={0.5}
      onEndReached={fetchMore}
    />
  );
};

export default CoinList;

const styles = StyleSheet.create({
  cardList: {
    flexDirection: 'row',
    padding: SPACING,
    marginBottom: SPACING,
    borderBottomLeftRadius: 100,
    borderTopLeftRadius: 100,
    borderBottomRightRadius: 80,
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 10 },
    shadowRadius: 20,
    elevation: 3,
    backgroundColor: '#fff',
    // transform: [{ scale }],
  },
  itemImage: {
    width: AVATAR_SIZE,
    height: AVATAR_SIZE,
    borderRadius: AVATAR_SIZE,
    marginRight: SPACING / 2,
  },
  wrapper: {
    flex: 1,
    marginRight: SPACING,
  },
  itemPrice: {
    fontSize: 16,
    opacity: 0.7,
  },
  itemVolume: {
    fontSize: 14,
    color: '#03AE9D',
  },
  coinText: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 'auto',
  },
  baseText: {
    fontSize: 22,
    fontWeight: '700',
    marginRight: 10,
    width: SPACING * 9,
  },
  innerText: {
    fontSize: 18,
    color: '#9fa6ad',
    fontWeight: 'normal',
    textTransform: 'uppercase',
  },
  footer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  loader: {
    padding: SPACING / 2,
    justifyContent: 'space-around',
    width: AVATAR_SIZE,
    height: AVATAR_SIZE,
  },
  combo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  rise: {
    color: '#03AE9D',
    fontSize: 16,
  },
  drop: {
    color: '#ff252c',
    fontSize: 16,
  },
});
