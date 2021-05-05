import React, { useState } from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Modal,
} from 'react-native';
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

  return (
    <View style={styles.container}>
      <FloatingButton
        icon='funnel-outline'
        color='white'
        onPress={() => changeModalVisibility(true)}
      />
      <Button
        onPress={() => navigation.navigate('Details')}
        title='move to another screen!'
      />
      <TouchableOpacity
        onPress={() => changeModalVisibility(true)}
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
