import React, { useState, useEffect } from 'react';
import { COINGECKO_URL } from '@env';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  SafeAreaView,
  ActivityIndicator,
  Image,
  Dimensions,
  TextInput,
} from 'react-native';
import axios from 'axios';
import Badge from './Badge';

const { height, width } = Dimensions.get('window');

const SPACING = 20;
const AVATAR_SIZE = 40;

const Search = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [query, setQuery] = useState('');
  const [arrayHolder, setArrayHolder] = useState([]);

  useEffect(() => {
    setError(false);
    setLoading(true);
    try {
      fetchCrypto();
    } catch (error) {
      console.error(error);
      setError(true);
    }
    setLoading(false);
  }, []);

  const fetchCrypto = async () => {
    const urlParams = `vs_currency=eur&order=market_cap_desc&per_page=100&page=1&sparkline=false`;
    const API_ENDPOINT = `${COINGECKO_URL}/api/v3/coins/markets?${urlParams}`;

    axios
      .get(API_ENDPOINT)
      .then((res) => {
        setData(res.data);
        setArrayHolder(res.data);
      })
      .catch((error) => {
        console.error('Axios GET request failed');
      });
  };

  if (loading) {
    return (
      <View style={styles.loader}>
        <ActivityIndicator size='large' color='#03AE9D' />
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.loader}>
        <Text style={{ fontSize: 18 }}>
          Error fetching data... Check your network connection!
        </Text>
      </View>
    );
  }

  const renderItem = ({ item }) => {
    return (
      <View style={styles.listItem}>
        <Image source={{ uri: item.image }} style={styles.coverImage} />
        <View style={styles.metaInfo}>
          <Text style={styles.title}>{item.name}</Text>
          <Badge value={item.symbol} />
        </View>
      </View>
    );
  };

  const handleSearch = (text) => {
    const newData = arrayHolder.filter((item) => {
      const itemSymbol = item.symbol.toUpperCase();
      const itemName = item.name.toUpperCase();
      const formattedQuery = text.toUpperCase();
      return (
        itemSymbol.includes(formattedQuery) || itemName.includes(formattedQuery)
      );
    });

    setData(newData);
    setQuery(text);
  };

  const renderSearchBox = () => {
    return (
      <View style={styles.searchBox}>
        <TextInput
          autoCapitalize='none'
          autoCorrect={false}
          clearButtonMode='always'
          value={query}
          onChangeText={(queryText) => handleSearch(queryText)}
          placeholder='Search'
          style={styles.searchInput}
          underlineColorAndroid='transparent'
        />
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      {renderSearchBox()}
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#d6d9dc',
  },
  text: {
    fontSize: 20,
    color: '#101010',
    marginTop: 60,
    fontWeight: '700',
  },
  listItem: {
    width: width,
    marginTop: 10,
    paddingVertical: SPACING,
    paddingHorizontal: SPACING,
    backgroundColor: '#fff',
    flexDirection: 'row',
  },
  coverImage: {
    width: AVATAR_SIZE,
    height: AVATAR_SIZE,
    borderRadius: AVATAR_SIZE,
  },
  metaInfo: {
    flexDirection: 'row',
    marginLeft: 10,
  },
  title: {
    fontSize: 18,
    padding: 10,
    fontWeight: '700',
  },
  loader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchBox: {
    backgroundColor: '#fff',
    padding: 10,
    marginVertical: 10,
    borderRadius: 20,
  },
  searchInput: {
    backgroundColor: '#fff',
    paddingHorizontal: 20,
  },
});
