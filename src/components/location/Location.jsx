import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import Constant from 'expo-constants';

import colors from '../../config/colors';

export default class Location extends Component {
    constructor(props) {
        super(props);

        this.state = {
            location: 'Location',
        };
    }
    render() {
        return (
            <View style={styles.header}>
                <Entypo name="location-pin" size={24} color="red" />
                <Text style={styles.text}>{this.state.location}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: colors.white,
        flexDirection: 'row',
        paddingTop: Constant.statusBarHeight,
        paddingLeft: 5,
        paddingBottom: 5,
    },
    text: {
        borderBottomWidth: 2,
        borderBottomColor: colors.black,
        borderStyle: 'dotted'
    },
});