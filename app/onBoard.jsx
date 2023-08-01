//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList, SafeAreaView, TouchableOpacity, TextInput } from 'react-native';
// import { CheckBox } from 'react-native-web';
import CheckBox from '@react-native-community/checkbox';
// import { SafeAreaView } from 'react-native-web';
import skillExpertise from './service/skillExpertiseData';
import { } from 'react-native-web';
import { COLORS, SIZES } from './constants/theme';
import { Stack } from 'expo-router';

const Item = ({ title }) => (
  <TouchableOpacity style={styles.item}>
    <Text style={styles.skills}>{title}</Text>
  </TouchableOpacity>
);
const OnBoard = () => {
  const { skillsData } = skillExpertise();
  return (
    <SafeAreaView style={styles.container}>
      <Stack.Screen
        options={{
          headerShown: false
        }}
      />
      <View style={styles.titleBox}>
        {/* <SearchBar/> */}
        <Text style={styles.title}>
          What are your skill expertise
        </Text>
        <Text style={styles.subTitle}>Select all that apply</Text>
        <View style={styles.searchContainer}>
          <View style={styles.searchWrapper}>
            <TextInput
              style={styles.searchInput}
              // v
              placeholder='Search'
            />
          </View>


        </View>
      </View>

      <FlatList
        data={skillsData}
        renderItem={({ item }) => <Item title={item} />}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.backgroundColour,
  },
  title: {
    fontSize: 34,
    color: COLORS.white,
    textAlign:'center'
  },
  subTitle:{
    color:COLORS.white,
    fontWeight:300,
    margin:SIZES.medium
  },
  titleBox: {
    marginTop: 100,
    marginBottom: 50,
    alignItems: 'center'
  }, 
  searchContainer: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    marginTop: SIZES.large,
    height: 50,
  },
  searchWrapper: {
    flex: 1,
    backgroundColor: COLORS.tertiary,
    margin: SIZES.large,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: SIZES.medium,
    height: "100%",
  },
  searchInput: {
    // fontFamily: FONT.regular,
    width: "100%",
    height: "100%",
    paddingHorizontal: SIZES.medium,
    color:COLORS.white
  },
  item:{
    backgroundColor:COLORS.tertiary,
    margin:10,
    padding:10,
    borderRadius: SIZES.medium,
    justifyContent:'center'
  }
});

//make this component available to the app
export default OnBoard;