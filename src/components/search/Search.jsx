import React, { Component } from 'react';
import { TextInput, View, StyleSheet, TouchableOpacity, Image } from 'react-native';

import colors from '../../config/colors';
import Location from '../location/Location';

export default class Search extends Component {
    constructor(props) {
        super(props);

        this.state = {
            searchText: ''
        };
    }
    render() {
        const { searchText } = this.state;

        return (
            <View style={styles.searchPage}>
                <Location />
                <View style={styles.search}>
                    <TextInput
                        style={styles.input}
                        onChangeText={(searchText) => this.setState({ searchText })}
                        value={searchText}
                        placeholder="Search any product or sections"
                        keyboardType="default"
                    />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    searchPage: {
        backgroundColor: colors.white,
    },
    search: {
        padding: 15,
    },
    input: {
        height: 30,
        backgroundColor: colors.beige,
        borderWidth: 1,
        borderRadius: 10
    }
});