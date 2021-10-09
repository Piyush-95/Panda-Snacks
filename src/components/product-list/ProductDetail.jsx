import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';

import colors from '../../config/colors';

export default class ProductDetail extends Component {
    constructor(props) {
        super(props);

        this.state = {};
    }
    render() {
        const product = this.props.detail;

        return (
            <View style={styles.product}>
                <View style={styles.detailSection}>
                    <Text style={styles.name}>{product.name}</Text>
                    <Text>
                        <Image
                            source={require('../../assets/icons/currency.png')}
                            style={styles.currency}
                        />
                        {product.price}
                    </Text>
                </View>
                <View style={styles.buttonSection}>
                    <TouchableOpacity
                        style={[
                            styles.button,
                            product.stock === 0 ? styles.disabled : null
                        ]}
                        disabled={product.stock === 0}
                        onPress={() => { console.log('ProductAdded', product.name); }}
                    >
                        <Text style={styles.buttonText}>Add</Text>
                    </TouchableOpacity>
                </View>
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
        borderBottomWidth: 1,
        borderBottomColor: colors.grey
    },
    detailSection: {
        //
    },
    name: {
        fontWeight: 'bold',
        fontSize: 12
    },
    buttonSection: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        borderRadius: 10,
        backgroundColor: colors.pink,
        width: 30,
        height: 25
    },
    buttonText: {
        color: colors.black
    },
    disabled: {
        opacity: .5
    },
    currency: {
        width: 12,
        height: 12,
    }
});