//import liraries
import React, { Component,useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList, ActivityIndicator } from 'react-native';
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

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerTitle}>Popular jobs</Text>
                <TouchableOpacity>
                    <Text style={styles.headerBtn}>Show all</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.cardsContainer}>
                {isLoading
                    ? (
                        <ActivityIndicator size='large' color={COLORS.primary} />
                    ) : error ? (
                        <Text>Something went wrong</Text>
                    )
                        : (
                            <FlatList
                                data={data}
                                renderItem={({item}) => ( 
                                    <PopularJobCard 
                                        item={item}
                                        selectedJob={selectedJob}
                                        // handleCardPress={handleCardPress}

                                    />
                                )}
                                keyExtractor={(item) => item.job_id}
                                contentContainerStyle={{ columnGap: SIZES.medium }}
                                horizontal
                            />

                        )

                }
            </View>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        marginTop: SIZES.xLarge,
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
