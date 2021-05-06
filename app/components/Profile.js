import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Modal,
} from 'react-native';
import axios from 'axios';
import { COINGECKO_URL } from '@env';
import ModalPicker from './ModalPicker';
import FloatingButton from './FloatingButton';

const Profile = ({ navigation }) => {
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
    const qs = `vs_currency=eur&order=market_cap_desc&per_page=2&page=1&sparkline=false`;
    const baseUrl = `${COINGECKO_URL}/api/v3/coins/markets?${qs}`;

    axios
      .get(baseUrl)
      .then((res) => {
        console.log(res.data);
        // if (page > 1) {
        //   let arr = [...data, ...res.data];
        //   setCoins(arr);
        // } else {
        //   setCoins(res.data);
        // }
      })
      .catch((error) => {
        console.error('Axios GET request failed');
      });
  };

  return (
    <View style={styles.container}>
      <FloatingButton
        icon='funnel-outline'
        color='white'
        // onPress={() => changeModalVisibility(true)}
      />
      <Button
        onPress={() => navigation.navigate('Details')}
        title='move to another screen!'
      />
      <TouchableOpacity
        // onPress={() => changeModalVisibility(true)}
        style={styles.touchableOpacity}
      >
        <Text style={styles.text}>{chooseData}</Text>
      </TouchableOpacity>
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
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#d6d9dc',
  },
  text: {
    marginVertical: 20,
    fontSize: 25,
  },
  touchableOpacity: {
    backgroundColor: 'orange',
    alignSelf: 'stretch',
    paddingHorizontal: 20,
    marginHorizontal: 20,
  },
});
