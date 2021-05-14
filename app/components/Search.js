import React, { useState, useEffect } from 'react';
import { COINGECKO_URL } from '@env';
import { SearchBar } from 'react-native-elements';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  SafeAreaView,
  ActivityIndicator,
  Image,
  Dimensions,
} from 'react-native';
import axios from 'axios';
import Badge from './Badge';

const { height, width } = Dimensions.get('window');

const SPACING = 20;
const AVATAR_SIZE = 48;

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
      <SearchBar
        placeholder='Search'
        value={query}
        onChangeText={(queryText) => handleSearch(queryText)}
        lightTheme={true}
        showCancel={true}
        round={true}
      />
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
    // padding: SPACING,
    // marginBottom: SPACING,
  },
  text: {
    fontSize: 20,
    color: '#101010',
    marginTop: 60,
    fontWeight: '700',
  },
  listItem: {
    marginRight: SPACING / 2,
    marginLeft: SPACING / 2,
    padding: SPACING,
    marginBottom: SPACING / 2,
    paddingVertical: SPACING,
    paddingHorizontal: SPACING,
    backgroundColor: '#fff',
    flexDirection: 'row',
    borderRadius: 100,
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 10 },
    shadowRadius: 20,
    elevation: 3,
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
});
