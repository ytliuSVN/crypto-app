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
} from 'react-native';
import axios from 'axios';
import Badge from './Badge';

const SPACING = 20;
const AVATAR_SIZE = 48;

const Search = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [query, setQuery] = useState('');
  const [arrayHolder, setArrayHolder] = useState([]);
  const [showEmpty, setShowEmpty] = useState(false);

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
    !newData?.length ? setShowEmpty(true) : setShowEmpty(false);
  };

  const renderSearchBox = () => {
    return (
      <View style={styles.searchBox}>
        <SearchBar
          placeholder='Search'
          value={query}
          onChangeText={(queryText) => handleSearch(queryText)}
          lightTheme={true}
          showCancel={true}
          round={true}
        />
      </View>
    );
  };

  const renderSearchEmpty = () => {
    return (
      <View style={styles.empty}>
        <Text style={styles.emptyText}>Wow, such empty.</Text>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <Image
        style={styles.itemBGImage}
        source={require('../../assets/wallpaper.jpeg')}
        blurRadius={10}
        resizeMode='cover'
      />
      {renderSearchBox()}
      {showEmpty ? (
        renderSearchEmpty()
      ) : (
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      )}
    </SafeAreaView>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingBottom: SPACING * 8,
  },
  itemBGImage: {
    ...StyleSheet.absoluteFillObject,
  },
  searchBox: {
    marginBottom: SPACING / 2,
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
  empty: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyText: {
    fontSize: 18,
    color: '#939699',
    fontWeight: '400',
  },
});
