import React, { useRef } from 'react';
import { Image, Animated, Text, View, StyleSheet } from 'react-native';
import faker from 'faker';

faker.seed(10);
const DATA = [...Array(30).keys()].map((_, i) => {
  return {
    key: faker.datatype.uuid(),
    image: `https://randomuser.me/api/portraits/${faker.helpers.randomize([
      'women',
      'men',
    ])}/${faker.datatype.number(60)}.jpg`,
    name: faker.name.findName(),
    jobTitle: faker.name.jobTitle(),
    email: faker.internet.email(),
  };
});

const SPACING = 20;
const AVATAR_SIZE = 70;
const ITEM_SIZE = AVATAR_SIZE + SPACING * 3;

const CoinList = ({ navigation }) => {
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

    return (
      <Animated.View
        style={[
          styles.cardList,
          {
            transform: [{ scale }],
            opacity,
          },
        ]}
        // onPress={() => navigation.navigate('Details')}
      >
        <Image style={styles.itemImage} source={{ uri: item.image }} />
        <View>
          <Text style={styles.itemName}>{item.name}</Text>
          <Text style={styles.itemTitle}>{item.jobTitle}</Text>
          <Text style={styles.itemEmail}>{item.email}</Text>
        </View>
      </Animated.View>
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
  itemName: {
    fontSize: 22,
    fontWeight: '700',
  },
  itemTitle: {
    fontSize: 16,
    opacity: 0.7,
  },
  itemEmail: {
    fontSize: 14,
    opacity: 0.8,
    color: '#03AE9D',
  },
});
