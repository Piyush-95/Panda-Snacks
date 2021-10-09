import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import Constant from 'expo-constants';

import colors from '../../config/colors';

export default class Profile extends Component {
    constructor(props) {
        super(props);

        this.state = {};
    }
    render() {

        return (
            <View style={styles.product}>
                <Text >Profile</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    product: {
        flex: 1,
        backgroundColor: colors.white,
        justifyContent: 'space-between',
        flexDirection: 'row',
        paddingTop: Constant.statusBarHeight,
    },
});