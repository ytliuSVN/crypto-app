import React, { useRef, useState, useEffect } from 'react';
import {
  Image,
  Animated,
  Text,
  View,
  StyleSheet,
  Pressable,
  ActivityIndicator,
} from 'react-native';

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);
const SPACING = 20;
const AVATAR_SIZE = 70;
const ITEM_SIZE = AVATAR_SIZE + SPACING * 3;

const CoinList = ({ data }) => {
  const [loading, setLoading] = useState(false);

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
        onPress={() => alert(`test onPress: ${item.id}`)}
      >
        <Image style={styles.itemImage} source={{ uri: item.image }} />
        <View>
          <Text style={styles.baseText}>
            {item.name} <Text style={styles.innerText}>{item.symbol}</Text>
          </Text>
          <Text style={styles.itemPrice}>
            &euro;{numberFormat(item.current_price)}
          </Text>
          <Text style={styles.itemVolume}>
            &euro;{numberFormat(item.total_volume)}
          </Text>
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
        ) : // <Image
        //   style={styles.loader}
        //   source={require('../../assets/spinner.gif')}
        //   resizeMode='contain'
        //   resizeMethod='resize'
        // />
        null}
      </View>
    );
  };

  return (
    <Animated.FlatList
      data={data}
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
});
