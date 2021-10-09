import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, View } from 'react-native';

import colors from './src/config/colors';
import Tabs from './src/components/navigation/Tabs';

export default function App() {
  return (
    <NavigationContainer style={styles.container}>
      <Tabs />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
});
