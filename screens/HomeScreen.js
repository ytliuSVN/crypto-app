import React, { useState, useEffect } from 'react';
// import axios from 'axios';
import {
  StatusBar,
  StyleSheet,
  Image,
  Text,
  View,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';

const HomeScreen = ({ navigation }) => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const loadItems = async () => {
      setIsLoading(true);
      const apiURL = `https://jsonplaceholder.typicode.com/photos?_limit=10&_page=${page}`;
      fetch(apiURL)
        .then((res) => res.json())
        .then((resJson) => {
          setData(data.concat(resJson));
          setIsLoading(false);
        });
    };
    loadItems();
  }, [page]);

  // use axios to fetch data
  // useEffect(() => {
  //   setError(false);
  //   setIsLoading(true);
  //   try {
  //     searchCrypto();
  //   } catch (error) {
  //     console.log(error);
  //     // setError(true);
  //   }
  //   setIsLoading(false);
  // }, [page]);

  // const searchCrypto = async () => {
  //   const result = await axios(
  //     `https://jsonplaceholder.typicode.com/photos?_limit=10&_page=${page}`
  //   );
  //   setData(data.concat(result.data));
  // };

  const renderItem = ({ item }) => {
    return (
      <View style={styles.itemRow}>
        <Image style={styles.itemImage} source={{ uri: item.url }} />
        <Text style={styles.itemText}>{item.title}</Text>
        <Text style={styles.itemText}>{item.id}</Text>
      </View>
    );
  };

  const renderFooter = () => {
    return isLoading ? (
      <View style={styles.loader}>
        <ActivityIndicator size='large' color='#0000ff' />
      </View>
    ) : null;
  };

  const fetchMore = () => {
    setPage(page + 1);
    setIsLoading(true);
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        ListFooterComponent={renderFooter}
        onEndReached={fetchMore}
        onEndReachedThreshold={0.5}
      />
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f0f6f0',
    // marginTop: StatusBar.currentHeight || 0,
  },
  itemRow: {
    borderBottomColor: '#ccc',
    marginBottom: 10,
    borderBottomWidth: 1,
  },
  itemImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
  },
  itemText: {
    fontSize: 16,
    padding: 5,
  },
  loader: {
    marginTop: 10,
    alignItems: 'center',
  },
});
