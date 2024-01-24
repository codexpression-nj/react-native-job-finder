//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Image } from 'react-native';
import { COLORS, SIZES } from './constants/theme';
import { Stack, useRouter } from 'expo-router';
import logo from '../assets/appLogo.png'

// create a component
const Login = () => {
    const router = useRouter()
    return (
        <View style={styles.container}>
            <Stack.Screen
                options={{
                    // headerStyle: { backgroundColor: COLORS.white },
                    headerShadowVisible: false,
                    headerTitle: "",
                    headerShown: false
                }}
            />
            <Image source={logo} style={styles.logo} />

            <View style={{ marginBottom: 32 }}>
                <Text style={styles.greeting}>Hi There,</Text>
                <Text style={styles.welcomeMessage}>Great to see you again.</Text>
            </View>

            <TextInput
                style={styles.input}
                placeholder='Email'
            />

            <TextInput
                style={styles.input}
                placeholder='Password'
            />
            <View style={styles.forgotPassword}>
                <Text style={{ fontWeight: '300' }}>Forgot? </Text>
                <TouchableOpacity
                onPress={() => { router.push('/resetPassword') }}
                >
                    <Text style={{ fontWeight: '300', color: COLORS.secondary }}>Let's us help</Text></TouchableOpacity>
            </View>

            <TouchableOpacity style={styles.btnLogin}
                onPress={() => { router.replace('/onBoard') }}>
                <Text style={{ color: COLORS.white }}>Login</Text>
            </TouchableOpacity>

            <View style={styles.signup}>
                <Text style={{ fontWeight: '300' }}>Don't have an account? </Text>
                <TouchableOpacity
                    onPress={() => { router.push('/signUp') }}>
                    <Text style={{ fontWeight: '300', color: COLORS.secondary }} >Sign Up</Text>
                </TouchableOpacity>
            </View>

        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 16,
        backgroundColor: COLORS.lightWhite,

    },
    btnLogin: {
        backgroundColor: COLORS.secondary,
        borderRadius: SIZES.medium,
        justifyContent: "center",
        alignItems: "center",
        height: 50,
        margin: SIZES.medium,
        marginTop: 50
    },
    input: {
        height: 50,
        margin: 6,
        padding: 16,
        backgroundColor: COLORS.white,
        marginRight: SIZES.small,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: SIZES.medium,
    },
    greeting: {
        fontSize: SIZES.large,
        color: COLORS.secondary,
        fontWeight:'300'

    },
    welcomeMessage: {
        fontSize: SIZES.medium,
        color: COLORS.primary,
        marginTop: 2,
        fontWeight:'300'
    },
    forgotPassword: {
        display: 'flex',
        flexDirection: 'row',
        alignSelf: 'flex-end',
        marginRight: 16
    },
    signup: {
        display: 'flex',
        flexDirection: 'row',
        // alignSelf:'flex-end',
        marginLeft: 16
    },
    logo: {
        height: 80,
        width: 80,
        alignSelf: 'center',
        marginBottom: 50
    }
});

//make this component available to the app
export default Login;
