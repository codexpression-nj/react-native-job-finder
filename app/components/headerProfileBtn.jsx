//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

// create a component
const HeaderProfileBtn = () => {
    return (
     <TouchableOpacity style={styles.btn}>
        
     </TouchableOpacity>
    );
};

// define your styles
const styles = StyleSheet.create({
    btn : {
        width:40,
        height: 40,
        backgroundColor:'black',
        borderRadius:5
    },
});

//make this component available to the app
export default HeaderProfileBtn;
