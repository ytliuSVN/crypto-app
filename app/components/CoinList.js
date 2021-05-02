import React, { useRef } from 'react';
import {
  Image,
  Animated,
  Text,
  View,
  StyleSheet,
  Pressable,
} from 'react-native';
import faker from 'faker';

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

faker.seed(10);
const DATA = [...Array(30).keys()].map((_, i) => {
  return {
    key: faker.datatype.uuid(),
    image: `https://randomuser.me/api/portraits/${faker.helpers.randomize([
      'women',
      'men',
    ])}/${faker.datatype.number(60)}.jpg`,
    name: faker.name.findName(),
    symbol: faker.vehicle.vrm(),
    jobTitle: faker.name.jobTitle(),
    email: faker.internet.email(),
    commerce:
      faker.commerce.price() * faker.datatype.number({ min: 1, max: 50 }),
    volume:
      faker.datatype.number({ min: 3, max: 100 }) * faker.datatype.number(),
  };
});

const SPACING = 20;
const AVATAR_SIZE = 70;
const ITEM_SIZE = AVATAR_SIZE + SPACING * 3;

const CoinList = () => {
  const scrollY = useRef(new Animated.Value(0)).current;

  const renderItem = ({ item, index }) => {
    const inputRange = [-1, 0, ITEM_SIZE * index, ITEM_SIZE * (index + 2)];
    const opacityInputRange = [
      -1,
      0,
      ITEM_SIZE * index,
      ITEM_SIZE * (index + 0.8),
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

    return (
      <AnimatedPressable
        style={[
          styles.cardList,
          {
            transform: [{ scale }],
            opacity,
          },
        ]}
        onPress={() => alert(`test onPress: ${item.key}`)}
      >
        <Image style={styles.itemImage} source={{ uri: item.image }} />
        <View>
          <Text style={styles.baseText}>
            {item.name} <Text style={styles.innerText}>{item.symbol}</Text>
          </Text>
          <Text style={styles.itemPrice}>
            &euro;{numberFormat(item.commerce)}
          </Text>
          <Text style={styles.itemVolume}>
            &euro;{numberFormat(item.volume)}
          </Text>
        </View>
      </AnimatedPressable>
    );
  };

  return (
    <Animated.FlatList
      data={DATA}
      onScroll={Animated.event(
        [{ nativeEvent: { contentOffset: { y: scrollY } } }],
        {
          useNativeDriver: true,
        }
      )}
      renderItem={renderItem}
      keyExtractor={(item) => item.key}
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
  itemPrice: {
    fontSize: 16,
    opacity: 0.7,
  },
  itemVolume: {
    fontSize: 14,
    opacity: 0.8,
    color: '#03AE9D',
  },
  baseText: {
    fontSize: 22,
    fontWeight: '700',
  },
  innerText: {
    fontSize: 14,
    color: '#9fa6ad',
    fontWeight: 'normal',
  },
});
