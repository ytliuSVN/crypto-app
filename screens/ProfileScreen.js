import React, { useRef } from 'react';
import {
  StatusBar,
  FlatList,
  Image,
  Animated,
  Text,
  View,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  Easing,
  SafeAreaViewBase,
  SafeAreaView,
} from 'react-native';
const { width, height } = Dimensions.get('screen');
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

const BG_IMG =
  'https://images.pexels.com/photos/3540807/pexels-photo-3540807.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260';

const SPACING = 20;
const AVATAR_SIZE = 70;
const ITEM_SIZE = AVATAR_SIZE + SPACING * 3;

const ProfileScreen = () => {
  const scrollY = useRef(new Animated.Value(0)).current;

  const renderItem = ({ item, index }) => {
    const inputRange = [-1, 0, ITEM_SIZE * index, ITEM_SIZE * (index + 2)];
    const opacityInputRange = [
      -1,
      0,
      ITEM_SIZE * index,
      ITEM_SIZE * (index + 0.5),
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
    <SafeAreaView style={styles.container}>
      <Image
        style={styles.itemBGImage}
        source={{ uri: BG_IMG }}
        blurRadius={10}
        resizeMode='cover'
      />
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
        contentContainerStyle={styles.contentContainer}
      />
    </SafeAreaView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  contentContainer: {
    padding: SPACING,
    marginTop: StatusBar.currentHeight || 0,
    paddingBottom: 50,
  },
  itemBGImage: {
    ...StyleSheet.absoluteFillObject,
  },
  cardList: {
    flexDirection: 'row',
    padding: SPACING,
    marginBottom: SPACING,
    borderRadius: 12,
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
