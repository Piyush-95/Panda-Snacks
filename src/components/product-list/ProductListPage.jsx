import React, { Component } from 'react';
import { ActivityIndicator, FlatList, View, StyleSheet, TextInput } from 'react-native';

import ProductSection from './ProductSection';
import colors from '../../config/colors';

export default class ProductListPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: [],
            isLoading: true,
            searchText: ''
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
        const { data, isLoading, searchText } = this.state;

        return (
            <View style={styles.sectionList}>
                <TextInput
                    style={styles.input}
                    onChangeText={(searchText) => this.setState({ searchText })}
                    value={searchText}
                    placeholder="Search any product or sections"
                    keyboardType="text"
                />
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
        );
    }
};

const styles = StyleSheet.create({
    sectionList: {
        backgroundColor: colors.white,
        padding: 10,
    },
    input: {
        height: 30,
        backgroundColor: colors.beige,
        borderWidth: 1,
        borderRadius: 10
    }
});