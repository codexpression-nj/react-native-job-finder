//import liraries
import React, { Component, useState } from 'react';
import { View, Text, Image, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import { COLORS, SIZES, SHADOWS } from './constants/theme';
import HeaderGreeting from './components/headerGreeting';
import { Stack, useRouter } from "expo-router";
import HeaderProfileBtn from './components/headerProfileBtn';
import profile from '../assets/NokwandaPic.jpg'
import PopularJobs from './components/popularJobs';
// create a component
const Home = () => {
    const router = useRouter()
    const [searchTerm, setSearchTerm] = useState("")

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
            <Stack.Screen
                options={{
                    headerStyle: { backgroundColor: COLORS.lightWhite },
                    headerShadowVisible: false,

                    headerRight: () => (
                        <HeaderProfileBtn iconUrl={profile} dimension='100%' />
                    ),
                    headerTitle: "",
                }}
            />
            <ScrollView>
                <View style={{
                    flex: 1,
                    padding: SIZES.medium,
                }}>
                    <HeaderGreeting />
                    <PopularJobs/>
                </View>
            </ScrollView>

        </SafeAreaView>
    );
};

// define your styles
const styles = StyleSheet.create({

});

//make this component available to the app
export default Home;
