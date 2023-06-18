//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity,Image } from 'react-native';
import { SIZES, COLORS } from '../constants/theme';

// create a component
const PopularJobCard = ({ item, selectedJob,handleCardPress }) => {
    return (
      <TouchableOpacity
      style={styles.container(selectedJob, item)}
      onPress={() => handleCardPress(item)}

      >
  <TouchableOpacity style={styles.logoContainer(selectedJob, item)}>
        <Image
          source={{
            uri: item?.employer_logo
              ? item.employer_logo
              : "https://t4.ftcdn.net/jpg/05/05/61/73/360_F_505617309_NN1CW7diNmGXJfMicpY9eXHKV4sqzO5H.jpg",
          }}
          resizeMode='contain'
          style={styles.logoImage}
        />
        
      </TouchableOpacity>
      <Text style={styles.companyName} numberOfLines={1}>
        {item.employer_name}
      </Text>

      <View style={styles.infoContainer}>
        <Text style={styles.jobName(selectedJob, item)} numberOfLines={1}>
          {item.job_title}
        </Text>
        <View style={styles.infoWrapper}>
          <Text style={styles.publisher(selectedJob, item)}>
            {item?.job_publisher} -
          </Text>
          <Text style={styles.location}> {item.job_country}</Text>
        </View>
      </View>
      </TouchableOpacity>
    );
};

// define your styles
const styles = StyleSheet.create({
   
    container: (selectedJob, item) => ({
        width: 250,
        padding: SIZES.xLarge,
        backgroundColor: selectedJob === item.job_id ? COLORS.primary : "#FFF",
        borderRadius: SIZES.medium,
        justifyContent: "space-between",
        // ...SHADOWS.medium,
        shadowColor: COLORS.white,
      }),
      logoContainer: (selectedJob, item) => ({
        width: 50,
        height: 50,
        backgroundColor: selectedJob === item.job_id ? "#FFF" : COLORS.white,
        borderRadius: SIZES.medium,
        justifyContent: "center",
        alignItems: "center",
      }),
      logoImage: {
        width: "70%",
        height: "70%",
      },
      companyName: {
        fontSize: SIZES.medium,
        color: "#B3AEC6",
        marginTop: SIZES.small / 1.5,
      },
      infoContainer: {
        marginTop: SIZES.large,
      },
      jobName: (selectedJob, item) => ({
        fontSize: SIZES.large,
        color: selectedJob === item.job_id ? COLORS.white : COLORS.primary,
      }),
      infoWrapper: {
        flexDirection: "row",
        marginTop: 5,
        justifyContent: "flex-start",
        alignItems: "center",
      },
      publisher: (selectedJob, item) => ({
        fontSize: SIZES.medium - 2,
        color: selectedJob === item.job_id ? COLORS.white : COLORS.primary,
      }),
      location: {
        fontSize: SIZES.medium - 2,
        color: "#B3AEC6",
      },
});

//make this component available to the app
export default PopularJobCard;
