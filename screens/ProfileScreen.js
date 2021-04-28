import React from 'react';
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
    key: faker.random.uuid(),
    image: `https://randomuser.me/api/portraits/${faker.helpers.randomize([
      'women',
      'men',
    ])}/${faker.random.number(60)}.jpg`,
    name: faker.name.findName(),
    jobTitle: faker.name.jobTitle(),
    email: faker.internet.email(),
  };
});

const SPACING = 20;
const AVATAR_SIZE = 70;

const ProfileScreen = () => {
  const renderItem = ({ item, index }) => {
    return (
      <View style={styles.itemRow}>
        <Image style={styles.itemImage} source={{ uri: item.image }} />
        <View>
          <Text>{item.name}</Text>
          <Text>{item.jobTitle}</Text>
          <Text>{item.email}</Text>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* <StatusBar hidden /> */}
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.key}
        // ListFooterComponent={renderFooter}
        // onEndReachedThreshold={0.5}
        // onEndReached={fetchMore}
      />
    </SafeAreaView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: StatusBar.currentHeight || 0,
  },
  itemRow: {
    flexDirection: 'row',
  },
  itemImage: {
    width: AVATAR_SIZE,
    height: AVATAR_SIZE,
    borderRadius: AVATAR_SIZE,
    marginRight: SPACING / 2,
  },
  itemText: {
    fontSize: 16,
    padding: 5,
  },
});
