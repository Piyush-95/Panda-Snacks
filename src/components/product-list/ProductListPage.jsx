import React, { Component } from 'react';
import { ActivityIndicator, FlatList, View, StyleSheet } from 'react-native';

import ProductSection from './ProductSection';
import Location from '../location/Location';
import colors from '../../config/colors';

export default class ProductListPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: [],
            isLoading: true
        };
    }

    async getProducts() {
        try {
            // TODO : api call need to be added
            const json = require('../../../mock-data/product-list/products.json');
            this.setState({ data: json });
        } catch (error) {
            console.log(error);
        } finally {
            this.setState({ isLoading: false });
        }
    }

    componentDidMount() {
        this.getProducts();
    }

    render() {
        const { data, isLoading } = this.state;

        return (
            <View style={styles.listPage}>
                <Location />
                <View style={styles.sectionList}>
                    {isLoading ? <ActivityIndicator /> : (
                        <FlatList
                            data={data}
                            keyExtractor={({ sectionId }, index) => sectionId.toString()}
                            renderItem={({ item }) => (
                                <ProductSection section={item} />
                            )}
                        />
                    )}
                </View>
            </View>
        );
    }
};

const styles = StyleSheet.create({
    listPage: {
        //
    },
    sectionList: {
        backgroundColor: colors.white,
        padding: 10,
    },
});