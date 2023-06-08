//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

// create a component
const SearchBar = () => {
    return (
      <View>
        <View>
            <TextInput
                style={styles.input}
                placeholder='What job are you looking for?'
            />
        </View>
        <TouchableOpacity style={styles.btn}>
<Text>seracg</Text>
        </TouchableOpacity>
      </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
    input:{
        // width: "100%",
        // height: "100%",
    },
    btn:{
        width:50,
        height:'100%',
        backgroundColor:'amber',
        borderRadius:10,
        justifyContent:'center',
        alignItems:'center'
    }
});

//make this component available to the app
export default SearchBar;
