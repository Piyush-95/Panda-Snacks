import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, StyleSheet, Text, Image } from 'react-native';

import ProductListPage from '../product-list/ProductListPage';
import Basket from '../basket/Basket';
import Search from '../search/Search';
import Profile from '../profile/Profile';
import colors from '../../config/colors';

const Tab = createBottomTabNavigator();

function Tabs() {
  return (
    <Tab.Navigator
      initialRouteName='Home'
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
        tabBarStyle: {
          position: 'absolute',
          bottom: 15,
          left: 10,
          right: 10,
          elevation: 0,
          borderRadius: 15,
          height: 50,
          backgroundColor: 'white'
        }
      }}
    >
      <Tab.Screen name="Home" component={ProductListPage}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.icon}>
              <Image
                source={require('../../assets/icons/home.png')}
                resizeMode='contain'
                style={{
                  width: 20,
                  height: 15,
                  tintColor: focused ? colors.red : colors.grey
                }} />
              <Text style={{
                textDecorationColor: focused ? colors.red : colors.grey
              }}>HOME</Text>
            </View>
          ),
        }} />
      <Tab.Screen name="Search" component={Search}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.icon}>
              <Image
                source={require('../../assets/icons/search.png')}
                resizeMode='contain'
                style={{
                  width: 20,
                  height: 15,
                  tintColor: focused ? colors.red : colors.grey
                }} />
              <Text style={{
                textDecorationColor: focused ? colors.red : colors.grey
              }}>Search</Text>
            </View>
          ),
        }} />
      <Tab.Screen name="Cart" component={Basket}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.icon}>
              <Image
                source={require('../../assets/icons/shopping-cart.png')}
                resizeMode='contain'
                style={{
                  width: 20,
                  height: 15,
                  tintColor: focused ? colors.red : colors.grey
                }} />
              <Text style={{
                textDecorationColor: focused ? colors.red : colors.grey
              }}>Cart</Text>
            </View>
          ),
        }} />
      <Tab.Screen name="Profile" component={Profile}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.icon}>
              <Image
                source={require('../../assets/icons/user.png')}
                resizeMode='contain'
                style={{
                  width: 20,
                  height: 15,
                  tintColor: focused ? colors.red : colors.grey
                }} />
              <Text style={{
                textDecorationColor: focused ? colors.red : colors.grey
              }}>Profile</Text>
            </View>
          ),
        }} />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  shadow: {
    shadowColor: colors.red,
    shadowOffset: {
      width: 0,
      height: 10
    },
    shadowOpacity: .25,
    shadowRadius: 3.5,
    elevation: 5
  },
  icon: {
    alignItems: 'center',
    justifyContent: 'center',
    top: 2,
  },
});

export default Tabs;