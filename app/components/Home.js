import React, { useState, useEffect } from 'react';
import {
  StatusBar,
  StyleSheet,
  SafeAreaView,
  Image,
  Modal,
} from 'react-native';
import CoinList from './CoinList';
import ModalPicker from './ModalPicker';
import FloatingButton from './FloatingButton';

const Home = ({ navigation }) => {
  const [sortTarget, setSortTarget] = useState('market_cap_desc');
  const [modalVisible, setModalVisible] = useState(false);
  const changeModalVisibility = (bool) => {
    setModalVisible(bool);
  };

  const setData = (option) => {
    setSortTarget(option);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Image
        style={styles.itemBGImage}
        source={require('../../assets/wallpaper.jpeg')}
        blurRadius={10}
        resizeMode='cover'
      />
      <FloatingButton
        icon='funnel-outline'
        color='white'
        onPress={() => changeModalVisibility(true)}
      />
      <Modal
        transparent={true}
        animationType='fade'
        visible={modalVisible}
        onRequestClose={() => changeModalVisibility(false)}
      >
        <ModalPicker
          changeModalVisibility={changeModalVisibility}
          setData={setData}
        />
      </Modal>
      <CoinList navigation={navigation} order={sortTarget}/>
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
