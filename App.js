import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
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
import MainTabScreen from './screens/MainTabScreen';

const Drawer = createDrawerNavigator();

const App = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);

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
    // increment page for the next call
    setPage(page + 1);
    setIsLoading(true);
  };

  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName='Home'>
        <Drawer.Screen name='Home' component={MainTabScreen} />
      </Drawer.Navigator>
    </NavigationContainer>

    // <SafeAreaView style={styles.container}>
    //   <FlatList
    //     data={data}
    //     renderItem={renderItem}
    //     keyExtractor={(item, index) => index.toString()}
    //     ListFooterComponent={renderFooter}
    //     onEndReached={fetchMore}
    //     onEndReachedThreshold={0.5}
    //   />
    // </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f0f6f0',
    marginTop: StatusBar.currentHeight || 0,
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
