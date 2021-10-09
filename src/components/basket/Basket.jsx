import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';

import colors from '../../config/colors';

export default class ProductDetail extends Component {
    constructor(props) {
        super(props);

        this.state = {};
    }
    render() {

        return (
            <View style={styles.product}>
                <Text >Cart</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    product: {
        flex: 1,
        backgroundColor: colors.grey,
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
});