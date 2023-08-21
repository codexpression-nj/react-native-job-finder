//import liraries
import React, { Component, useCallback, useState } from 'react';
import { View, Text, StyleSheet,RefreshControl, SafeAreaView, ActivityIndicator,ScrollView } from 'react-native';
import { Stack, useRouter, useSearchParams } from "expo-router";
import useFetch from '../service/jobService';
import { COLORS, SIZES } from '../constants/theme';

// create a component
const JobDetails = () => {
    const params = useSearchParams();
    const router = useRouter();
    const { data, isLoading, error, refresh } = useFetch("job-details", {
        job_id: params.id,
    });

    const [refreshing, setRefreshing] = useState(false);

    const onRefresh = useCallback(() => {
        setRefreshing(true)
        refresh()
        setRefreshing(false)
    }, []); 


    return (
        <SafeAreaView style={styles.container}>
            <Stack.Screen
        options={{
          headerStyle: { backgroundColor: COLORS.lightWhite },
          headerShadowVisible: false,
          headerBackVisible: false,
        //   headerLeft: () => (
        //     <ScreenHeaderBtn
        //       iconUrl={icons.left}
        //       dimension='60%'
        //       handlePress={() => router.back()}
        //     />
        //   ),
        //   headerRight: () => (
        //     <ScreenHeaderBtn iconUrl={icons.share} dimension='60%' />
        //   ),
          headerTitle: "",
        }}
      />
            <>
                {isLoading ? (
                    <ActivityIndicator />
                ) : error ? (
                    <Text>Something went wrong</Text>
                ) : data.length === 0 ? (
                    <Text>NO data</Text>
                ) : (
                    <>
                      <ScrollView showsVerticalScrollIndicator={false}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
        >
                    <View style={styles.companyContainer}>
                        <View style={styles.companyLogo}>

                        </View>
                        
                        <View style={{ padding: SIZES.medium, paddingBottom: 100 }}>
                            <Text>{data[0].employer_name}</Text>
                            <Text>{data[0].job_country}</Text>
                            <Text>{data[0].job_title}</Text>

                        </View>
                    </View>

                        <View style={styles.aboutContainer}>
                            <Text style={styles.aboutTitle}>About the job:</Text>
                            <View style={styles.aboutContent}>
                                <Text style={styles.aboutContext}>{data[0].job_description ?? "n/a"}</Text>
                            </View>
                        </View>
        </ScrollView>

                    </>

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
        backgroundColor: COLORS.lightWhite
    },
    aboutContainer:{
        marginTop: SIZES.large,
        backgroundColor: "#FFF",
        borderRadius: SIZES.medium,
        padding: SIZES.medium,
    },
    aboutContent:{
        marginVertical: SIZES.small,

    },
    aboutContext:{
        fontSize: SIZES.medium - 2,
        color: COLORS.gray,
        // fontFamily: FONT.regular,
        marginVertical: SIZES.small / 1.25,
    },
    aboutTitle:{
        fontSize: SIZES.large,
        color: COLORS.primary,
    },
    companyContainer:{
        marginVertical: SIZES.medium,
        justifyContent: "center",
        alignItems: "center",
    },
    companyLogo:{
        width: 80,
        height: 80,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#FFF",
        borderRadius: SIZES.large,
    }

});

//make this component available to the app
export default JobDetails;
