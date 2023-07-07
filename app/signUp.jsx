//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Stack,useRouter } from 'expo-router';
import { TouchableOpacity } from 'react-native-gesture-handler';

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
            <TouchableOpacity 
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
        alignItems: 'center',
        backgroundColor: 'white',
    },
});

//make this component available to the app
export default Signup;
