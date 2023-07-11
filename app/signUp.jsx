//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet,Image } from 'react-native';
import { Stack, useRouter } from 'expo-router';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import { COLORS, SIZES } from './constants/theme';
import logo from '../assets/appLogo.png'

// create a component
const Signup = () => {
    const route = useRouter()
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
            <Image source={logo} style={styles.logo}/>
            <View style={{marginBottom:32}}>
            <Text style={styles.greeting}>Hi There,</Text>
            <Text style={styles.welcomeMessage}>Great to see you.</Text>
            </View>
           
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
                onPress={() => { route.push('/home') }}>
                <Text style={{color:COLORS.white}}>Sign Up</Text>
            </TouchableOpacity>
            <View style={styles.login}>
            <Text style={{ fontWeight: '300' }}>Have an account? </Text>
            <TouchableOpacity
                onPress={() => { route.push('/login') }}>
                <Text style={{ fontWeight: '300', color: COLORS.secondary }} >Login</Text>
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
    signUPbtn: {
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
      logo:{
        height: 80,
        width: 80,
        alignSelf:'center',
        marginBottom:50
      },
      login: {
        display: 'flex',
        flexDirection: 'row',
        // alignSelf:'flex-end',
        marginLeft: 16
    },

});

//make this component available to the app
export default Signup;
