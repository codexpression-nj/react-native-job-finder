//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

// create a component
const SearchBar = () => {
    return (
        <View style={styles.container}>
            <View >
                <TextInput
                    style={styles.input}
                    placeholder='What job are you looking for?'
                />
                <TouchableOpacity style={styles.btn}>
                    <Text>search</Text>
                </TouchableOpacity>
            </View>

        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",
        // 
        // justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
    input: {
        // width: "100%",
        height: 50,
        backgroundColor: 'white',
        marginTop: 40
    },
    btn: {
        width: 100,
        backgroundColor: 'white',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

//make this component available to the app
export default SearchBar;
