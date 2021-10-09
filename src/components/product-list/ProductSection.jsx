import React, { Component } from 'react';
import { Text, View, FlatList, StyleSheet, TouchableOpacity, Image } from 'react-native';

import ProductDetail from './ProductDetail';
import colors from '../../config/colors';

export default class ProductSection extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isOpened: false,
        };
    }

    render() {
        const { isOpened } = this.state;

        return (
            <View style={styles.section}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => { this.setState({ isOpened: !isOpened }) }}
                >
                    <Text style={styles.name}>{this.props.section.name}</Text>
                    <Image
                        source={require('../../assets/icons/top-arrow.png')}
                        style={[
                            styles.toggleIcon, !isOpened ? {
                                transform: [{ rotate: "180deg" }]
                            } : null
                        ]}
                    />
                </TouchableOpacity>
                {isOpened ? (
                    <FlatList
                        data={this.props.section.products}
                        keyExtractor={({ sku }, index) => sku.toString()}
                        renderItem={({ item }) => (
                            <ProductDetail detail={item} />
                        )}
                    />
                ) : null}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    section: {
        flex: 1,
        backgroundColor: colors.white,
    },
    name: {
        fontWeight: 'bold',
        color: colors.skyblue
    },
    button: {
        backgroundColor: colors.white,
        height: 25,
        justifyContent: 'space-between',
        flexDirection: 'row'
    },
    toggleIcon: {
        width: 25,
        height: 25,
    }
});