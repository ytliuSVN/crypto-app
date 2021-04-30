import React from 'react';
import { StatusBar, StyleSheet, SafeAreaView, Image } from 'react-native';
import CoinList from './CoinList';

const wallpaperImage = {
  image: require('../../assets/wallpaper.jpeg'),
};

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Image
        style={styles.itemBGImage}
        source={wallpaperImage.image}
        blurRadius={10}
        resizeMode='cover'
      />
      <CoinList />
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    // marginTop: StatusBar.currentHeight || 48,
    paddingBottom: 80,
  },
  itemBGImage: {
    ...StyleSheet.absoluteFillObject,
  },
});
