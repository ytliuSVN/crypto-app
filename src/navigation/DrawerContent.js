import React, { useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import {
  Avatar,
  Title,
  Caption,
  Drawer,
  Text,
  Switch,
  useTheme,
} from 'react-native-paper';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { AntDesign } from '@expo/vector-icons';
import { AuthContext } from '../components/context';

export function DrawerContent(props) {
  const paperTheme = useTheme();
  const { signOut, toggleTheme } = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <DrawerContentScrollView {...props}>
        <View style={styles.drawerContent}>
          <View style={styles.userInfoSection}>
            <View
              style={{
                flexDirection: 'row',
                marginTop: 15,
              }}
            >
              <Avatar.Image
                source={{
                  uri: 'https://yt3.ggpht.com/yti/ANoDKi6Kl6p1jVqDcBK64osPvT_a98fxeuigyU9YEpShRw=s88-c-k-c0x00ffffff-no-rj-mo',
                }}
                size={50}
              />
              <View style={{ marginLeft: 15, flexDirection: 'column' }}>
                <Title style={styles.title}>Penny Liu</Title>
                <Caption
                  style={styles.caption}
                  ellipsizeMode='tail'
                  numberOfLines={1}
                >
                  im.penny@protonmail.com
                </Caption>
              </View>
            </View>
          </View>
          <Drawer.Section style={styles.drawerSection}>
            <DrawerItem
              icon={({ color, size }) => (
                <AntDesign name='home' color={color} size={size} />
              )}
              label='Home'
              onPress={() => {
                props.navigation.navigate('Track');
              }}
            />
            <DrawerItem
              icon={({ color, size }) => (
                <AntDesign name='search1' color={color} size={size} />
              )}
              label='Search'
              onPress={() => {
                props.navigation.navigate('Search');
              }}
            />
            <DrawerItem
              icon={({ color, size }) => (
                <AntDesign name='setting' color={color} size={size} />
              )}
              label='Settings'
              onPress={() => {
                props.navigation.navigate('Settings');
              }}
            />
          </Drawer.Section>
          <Drawer.Section title='Preferences'>
            <View style={styles.preference}>
              <Text>Dark Theme</Text>
              <Switch
                value={paperTheme.dark}
                onValueChange={() => toggleTheme()}
              />
            </View>
          </Drawer.Section>
        </View>
      </DrawerContentScrollView>
      <Drawer.Section style={styles.bottomDrawerSection}>
        <DrawerItem
          icon={({ color, size }) => (
            <AntDesign name='logout' color={color} size={size} />
          )}
          label='Sign Out'
          onPress={() => {
            signOut();
          }}
        />
      </Drawer.Section>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  drawerContent: {
    flex: 1,
  },
  userInfoSection: {
    paddingLeft: 20,
  },
  title: {
    fontSize: 16,
    marginTop: 3,
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
    maxWidth: 180,
  },
  row: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
  },
  drawerSection: {
    marginTop: 15,
  },
  bottomDrawerSection: {
    marginBottom: 15,
    borderTopColor: '#ededed',
    borderTopWidth: 0.5,
  },
  preference: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
});
