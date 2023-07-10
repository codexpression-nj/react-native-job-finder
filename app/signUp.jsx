//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Stack,useRouter } from 'expo-router';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import { COLORS, SIZES } from './constants/theme';

// create a component
const Signup = () => {
    const route = useRouter()
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
             <TextInput
                style={styles.input}
                placeholder='Name'
            />
  <TextInput
                style={styles.input}
                placeholder='Email'
            />
            <TextInput
                style={styles.input}
                placeholder='Password'
            />
            <TouchableOpacity
                style={styles.signUPbtn} 
                onPress={() => {route.push('/home')}}>
                <Text>Sign Up</Text>
            </TouchableOpacity>
            <TouchableOpacity 
                onPress={() => {route.push('/login')}}>
                <Text>Login</Text>
            </TouchableOpacity>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding:16,
        backgroundColor: COLORS.lightWhite,
    },
    signUPbtn:{
        backgroundColor: COLORS.secondary,
        borderRadius: SIZES.medium,
        justifyContent: "center",
        alignItems: "center",
        height: 50,
        margin: SIZES.medium,
        marginTop: SIZES.large
    },
    input: {
        height: 50,
        margin:6,
        padding:16,
        backgroundColor: COLORS.white,
        marginRight: SIZES.small,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: SIZES.medium,
    },
});

//make this component available to the app
export default Signup;
