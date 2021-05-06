import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { COINGECKO_URL } from '@env';
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

const Home = () => {
  const [chooseData, setChooseData] = useState('Sort by...');
  const [modalVisible, setModalVisible] = useState(false);
  const changeModalVisibility = (bool) => {
    setModalVisible(bool);
  };

  const setData = (option) => {
    setChooseData(option);
  };

  const [coins, setCoins] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setError(false);
    setIsLoading(true);
    try {
      searchCrypto();
    } catch (error) {
      console.error(error);
      setError(true);
    }
    setIsLoading(false);
  }, []);

  const searchCrypto = async () => {
    const qs = `vs_currency=eur&order=market_cap_desc&per_page=10&page=1&sparkline=false`;
    const baseUrl = `${COINGECKO_URL}/api/v3/coins/markets?${qs}`;

    axios
      .get(baseUrl)
      .then((res) => {
        setCoins(res.data);
      })
      .catch((error) => {
        console.error('Axios GET request failed');
      });
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
      <CoinList data={coins} />
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
