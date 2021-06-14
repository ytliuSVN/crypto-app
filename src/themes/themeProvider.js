import {
  DefaultTheme as NavigationDefaultTheme,
  DarkTheme as NavigationDarkTheme,
} from '@react-navigation/native';

import {
  DefaultTheme as PaperDefaultTheme,
  DarkTheme as PaperDarkTheme,
} from 'react-native-paper';

export const CustomDefaultTheme = {
  ...NavigationDefaultTheme,
  ...PaperDefaultTheme,
  colors: {
    ...NavigationDefaultTheme.colors,
    ...PaperDefaultTheme.colors,
    background: '#efefef',
    surface: '#ffffff',
    text: '#333333',
    primary: '#009387',
    secondary: '#03AE9D',
    tertiary: '#454545',
    danger: '#fb2c33',
  },
};

export const CustomDarkTheme = {
  ...NavigationDarkTheme,
  ...PaperDarkTheme,
  colors: {
    ...NavigationDarkTheme.colors,
    ...PaperDarkTheme.colors,
    background: '#252525',
    surface: '#333333',
    text: '#f5f6f7',
    primary: '#52e3d4',
    secondary: '#5bf5e5',
    tertiary: '#e3e3e3',
    danger: '#ff6363',
  },
};
