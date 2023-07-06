//import liraries
import { Stack } from 'expo-router';
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { COLORS, SIZES } from './constants/theme';

// create a component
const Login = () => {
    return (
        <View style={styles.container}>
             <Stack.Screen 
                options = {{
                    // headerStyle: { backgroundColor: COLORS.white },
                    headerShadowVisible: false,
                    headerTitle: "",
                    headerShown:false
                }}
            />

            <TouchableOpacity style={styles.btnLogin}>
                <Text>Login</Text>
            </TouchableOpacity>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        // backgroundColor: '#2c3e50',
    },
    btnLogin:{
        backgroundColor: COLORS.secondary,
        borderRadius:SIZES.medium,
        justifyContent: "center",
        alignItems: "center",
        height: 50,
        margin:SIZES.medium,
        marginTop:SIZES.large
    }
});

//make this component available to the app
export default Login;
