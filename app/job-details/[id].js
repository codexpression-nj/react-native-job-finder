//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import { Stack, useRouter, useSearchParams } from "expo-router";
import useFetch from '../service/jobService';

// create a component
const JobDetails = () => {
    const params = useSearchParams();
    const router = useRouter();
    const { data, isLoading, error, refetch } = useFetch("job-details", {
        job_id: params.id,
      });


    return (
        <SafeAreaView style={styles.container}>
            <Text>JobDetails</Text>
        </SafeAreaView>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
});

//make this component available to the app
export default JobDetails;
