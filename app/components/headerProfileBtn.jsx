//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity ,Image} from 'react-native';

// create a component
const HeaderProfileBtn = ({iconUrl}) => {
    return (
     <TouchableOpacity style={styles.btn}>
        <Image
            source={iconUrl}
            resizeMode='cover'
            style={styles.btnImg}
        /> 
     </TouchableOpacity>
    );
};

// define your styles
const styles = StyleSheet.create({
    btn : {
        width:40,
        height: 40,
        backgroundColor:'black',
        borderRadius:5,
        justifyContent: "center",
        alignItems: "center",
    },
    btnImg:{
        width:'100%',
        height: '100%',
        borderRadius:5
    }
});

//make this component available to the app
export default HeaderProfileBtn;
