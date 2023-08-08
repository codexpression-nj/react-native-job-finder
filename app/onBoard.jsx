//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList, SafeAreaView, TouchableOpacity, TextInput } from 'react-native';
import skillExpertise from './service/skillExpertiseData';
import { COLORS, SIZES } from './constants/theme';
import { Stack,useRouter } from 'expo-router';

const Item = ({ title }) => (
  <TouchableOpacity style={styles.item}>
    <Text style={styles.skills}>{title}</Text>
  </TouchableOpacity>
);
const OnBoard = () => {
  const { skillsData } = skillExpertise();
  const route = useRouter()

  return (
    <SafeAreaView style={styles.container}>
      <Stack.Screen
        options={{
          headerShown: false
        }}
      />
      <TouchableOpacity 
      style={styles.skipBtn
        
      }
      onPress={() => { route.push('/home') }}

      >
        <Text>
          Skip
        </Text>
      </TouchableOpacity>
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
    // alignItems: 'center',
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
    // backgroundColor:COLORS.tertiary,
    margin:10,
    padding:10,
    borderRadius: SIZES.medium,
    justifyContent:'center',
    alignContent:'center',
    // width: '80%',
    alignItems: 'center',
    borderWidth:1,
    borderColor:COLORS.tertiary

  } ,skills:{
    color:COLORS.tertiary,
    fontSize:20, 
    // fontWeight:300
  },
  skipBtn:{
    alignContent:'flex-end',
    margin:30
  }
});

//make this component available to the app
export default OnBoard;