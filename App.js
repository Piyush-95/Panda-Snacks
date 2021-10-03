import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import ProductListPage from './src/components/product-list/ProductListPage';

import colors from './src/config/colors';

export default function App() {
  return (
    <View style={styles.container}>
      <ProductListPage />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
});
