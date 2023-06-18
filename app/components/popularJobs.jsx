//import liraries
import React, { Component, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList, ActivityIndicator, ScrollView, SafeAreaView } from 'react-native';
import { useRouter } from "expo-router";
import useFetch from '../service/jobService';
import { SIZES, COLORS } from '../constants/theme';
import PopularJobCard from './popularJobCard';
// create a component
const PopularJobs = () => {
    const router = useRouter();
    const { data, isLoading, error } = useFetch("search", {
        query: "React developer",
        num_pages: "1",
    });

    const [selectedJob, setSelectedJob] = useState();
    const renderItem = ({ item }) => (
        <PopularJobCard 
        item={item} 
        selectedJob={selectedJob} 
        handleCardPress={handleCardPress}
        />
      );
      const handleCardPress = (item) => {
        console.log(item);
        router.push(`/job-details/${item.job_id}`);
        setSelectedJob(item.job_id);
      };
    
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.cardsContainer} showsVerticalScrollIndicator={false}>
                {isLoading
                    ? (
                        <ActivityIndicator size='large' color={COLORS.primary} />
                    ) : error ? (
                        <Text>Something went wrong</Text>
                    )
                        : (
                           <View>
                           <FlatList
                                data={data}
                                renderItem={renderItem}
                                keyExtractor={(item) => item.job_id}
                                contentContainerStyle={{ columnGap: SIZES.small }}
                            />
                           </View>
                        )

                }
            </View>
        </SafeAreaView>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        marginTop: SIZES.xLarge,
        flex:1
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    headerTitle: {
        fontSize: SIZES.large,
        color: COLORS.primary,
    },
    headerBtn: {
        fontSize: SIZES.medium,
        color: COLORS.gray,
    },
    cardsContainer: {
        marginTop: SIZES.medium,
    },
});

//make this component available to the app
export default PopularJobs;
