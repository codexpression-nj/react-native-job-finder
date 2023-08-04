//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { COLORS, SIZES } from '../constants/theme';

// create a component
const HeaderProfileBtn = ({ iconUrl }) => {
    return (
        <View>
            <TouchableOpacity style={styles.btn}>
                <Image
                    source={iconUrl}
                    resizeMode='cover'
                    style={styles.btnImg}
                />
            </TouchableOpacity>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    btn: {
        width: 40,
        height: 40,
        backgroundColor: 'black',
        borderRadius: 5,
        justifyContent: "center",
        alignItems: "center",
    },
    btnImg: {
        width: '100%',
        height: '100%',
        borderRadius: 5
    },
    container: {
        width: "100%",
    },
    userName: {
        fontSize: SIZES.large,
        color: COLORS.secondary,
    },
    welcomeMessage: {
        fontSize: SIZES.medium,
        color: COLORS.primary,
        marginTop: 2,
    },
});

//make this component available to the app
export default HeaderProfileBtn;
