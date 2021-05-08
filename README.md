# Crypto Tracker App

A Crypto Tracker App built using React Native, utilizing [**CoinGecko API**](https://www.coingecko.com/api/documentations/v3) [~~CoinMarketCap API~~](https://coinmarketcap.com/api/documentation/v1/#tag/exchange) to track the price of cryptocurrencies.
## User Stories

- [ ] The user can request the list of cryptocurrencies from the CoinGecko API and see the results collated together.
- [ ] Progressively load more list items by scrolling down the list.
- [ ] The user can sort the cryptocurrencies based on their `name`, `price`, and `volume`.

## App Details

### Screenshots

| Prices by Market Cap  | Detail Screen |
| :-: | :-: |
| ![Prices Screen](./assets/screenshot/prices.png) | ![Detail Screen](./assets/screenshot/detail.png) |

### Loading Environment Variables

In the root directory/top-level of your app, create a `.env` file.

```
COINGECKO_URL=https://api.coingecko.com
```

## Useful links and resources
- [Why I’ve built a Coinmarketcap proxy](https://medium.com/@theBliz/why-ive-built-a-coinmarketcap-proxy-e06c898b5765)
- [Infinite scroll/Paginating FlatList with just hooks and function components](https://medium.com/@srbkrishnan/infinite-scroll-pagination-in-flatlist-with-hooks-and-function-components-c9c08bba23a8)
- [React Native Scroll Item animation effect - FlatList and Animated API](https://www.youtube.com/watch?v=F8x-dyIsrJ8)
- [CryptoTracker](https://github.com/SpiralDevelopment/CryptoTracker)
- [How to Properly Use Environment Variables in an Expo React Native App](https://medium.com/swlh/how-to-properly-use-environment-variables-in-an-expo-react-native-app-7ab852590b30#:~:text=An%20environment%20variable%20is%20a,to%20be%20imported%20at%20all.)
- [The top 8 React Native chart libraries for 2021](https://blog.logrocket.com/the-top-8-react-native-chart-libraries-for-2021/)