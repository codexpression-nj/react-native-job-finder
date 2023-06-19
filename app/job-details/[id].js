//import liraries
import React, { Component, useCallback, useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, ActivityIndicator } from 'react-native';
import { Stack, useRouter, useSearchParams } from "expo-router";
import useFetch from '../service/jobService';
import { COLORS, SIZES } from '../constants/theme';

// create a component
const JobDetails = () => {
    const params = useSearchParams();
    const router = useRouter();
    const { data, isLoading, error, refetch } = useFetch("job-details", {
        job_id: params.id,
      });

      const [refreshing,setRefreshing] = useState(false);

      const onRefresh = useCallback(() =>{
        setRefreshing(true)
        refetch()
        setRefreshing(false)
      },[]);


    return (
        <SafeAreaView style={styles.container}>
            <>
                { isLoading? (
                    <ActivityIndicator/>
                ):error ? (
                   <Text></Text>
                ) : data.length === 0 ? (
                    <Text>NO data</Text>
                ): (
                    <View style={{padding: SIZES.medium,paddingBottom:100}}>
                        <Text>{data[0].employer_name}</Text>
                     
                    </View>
                )
            }
            </>
        </SafeAreaView>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:COLORS.lightWhite
    },
});

//make this component available to the app
export default JobDetails;
