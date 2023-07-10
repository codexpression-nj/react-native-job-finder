//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { COLORS, SIZES } from './constants/theme';
import { Stack, useRouter } from 'expo-router';

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

            <Text>Hi There,</Text>
            <Text>Great to see you again.</Text>
            <TextInput
                style={styles.input}
                placeholder='Email'
            />

            <TextInput
                style={styles.input}
                placeholder='Password'
            />
            <Text>Forgot your password? </Text><TouchableOpacity><Text>Let's us help</Text></TouchableOpacity>

            <TouchableOpacity style={styles.btnLogin}
                onPress={() => { router.push('/home') }}>
                <Text>Login</Text>
            </TouchableOpacity>
            <Text>Don't have an account?</Text>
            <TouchableOpacity
                onPress={() => { router.push('/signUp') }}>
                <Text>Sign Up</Text>
            </TouchableOpacity>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 16,
        backgroundColor:COLORS.lightWhite,

    },
    btnLogin: {
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
export default Login;
