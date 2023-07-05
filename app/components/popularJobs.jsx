//import liraries
import React, { Component, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList, ActivityIndicator, ScrollView, SafeAreaView, Image } from 'react-native';
import { useRouter } from "expo-router";
import useFetch from '../service/jobService';
import { SIZES, COLORS } from '../constants/theme';
import PopularJobCard from './popularJobCard';
import networkError from '../../assets/networkError.png';
import errorNotfound from '../../assets/404.png';
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
                        <ActivityIndicator style={styles.img} size='large' color={COLORS.primary} />
                    ) : error ? (
                        (() => {
                            if (error.code === 'ERR_NETWORK') {
                                return (
                                    <View style={styles.img}>
                                        <Text style={{ fontWeight: "bold" }}>Oooop..No Network Connection</Text>
                                        <Image
                                            source={networkError}
                                            resizeMode='contain'
                                            style={{ width: '100%', height: 250, margin: 20, padding: 20 }}
                                        />
                                        <Text>Please check your internet connection and try again</Text>
                                    </View>)
                            } else if (error.code === 'ERR_BAD_REQUEST') {
                                return (
                                    <View style={styles.img}>
                                        <Image
                                            source={errorNotfound}
                                            resizeMode='contain'
                                            style={{ width: '100%', height: 150, margin: 20, padding: 20 }}
                                        />
                                        <Text style={{ fontWeight: "bold" }}>Oooop.. something is not right ..</Text>

                                    </View>)
                            }

                        })()
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
        flex: 1
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
    img: {
        display: 'flex',
        alignContent: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 'auto',
        // flex: 3,

    },

});

//make this component available to the app
export default PopularJobs;
