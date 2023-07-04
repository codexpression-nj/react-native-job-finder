//import liraries
import React, { Component,useState } from 'react';
import { View, Text, StyleSheet,TextInput,
    TouchableOpacity,
    Image,
    FlatList } from 'react-native';
import { SIZES,COLORS } from '../constants/theme';
import { useRouter } from "expo-router";
import icons from '../constants/icons';

// create a component
const jobTypes = ["Full-time", "Part-time", "Contractor"];

const HeaderGreeting = () => {
    const router = useRouter();
    const [activeJobType, setActiveJobType] = useState("Full-time");

    return (
        <View>
        <View style={styles.container}>
          <Text style={styles.userName}>Hello Nokwanda</Text>
          <Text style={styles.welcomeMessage}>Find your perfect job</Text>
        </View>
  
        <View style={styles.searchContainer}>
          <View style={styles.searchWrapper}>
            <TextInput
              style={styles.searchInput}
            //   value={searchTerm}
            //   onChangeText={(text) => setSearchTerm(text)}
              placeholder='What are you looking for?'
            />
          </View>
  
          <TouchableOpacity style={styles.searchBtn} 
        //   onPress={handleClick}
          >
            <Image
              source={icons.search}
              resizeMode='contain'
              style={styles.searchBtnImage}
            />
          </TouchableOpacity>
        </View>
  
        <View style={styles.tabsContainer}>
          <FlatList
            data={jobTypes}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={styles.tab(activeJobType, item)}
                onPress={() => {
                  setActiveJobType(item);
                  // router.push(`/search/${item}`);
                }}
              >
                <Text style={styles.tabText(activeJobType, item)}>{item}</Text>
              </TouchableOpacity>
            )}
            keyExtractor={(item) => item}
            contentContainerStyle={{ columnGap: SIZES.small }}
            horizontal
          />
        </View>
      </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        width: "100%",
    // backgroundColor:'red'

      },
      userName: {
        // fontFamily: FONT.regular,
        fontSize: SIZES.large,
        color: COLORS.secondary,
      },
      welcomeMessage: {
        // fontFamily: FONT.bold,
        fontSize: SIZES.xLarge,
        color: COLORS.primary,
        marginTop: 2,
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
        backgroundColor: COLORS.white,
        marginRight: SIZES.small,
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
      },
      searchBtn: {
        width: 50,
        height: "100%",
        backgroundColor: COLORS.secondary,
        borderRadius: SIZES.medium,
        justifyContent: "center",
        alignItems: "center",
      },
      searchBtnImage: {
        width: "50%",
        height: "50%",
        tintColor: COLORS.white,
      },
      tabsContainer: {
        width: "100%",
        marginTop: SIZES.medium,
      },
      tab: (activeJobType, item) => ({
        paddingVertical: SIZES.small / 2,
        paddingHorizontal: SIZES.small,
        borderRadius: SIZES.medium,
        borderWidth: 1,
        borderColor: activeJobType === item ? COLORS.primary : COLORS.gray2,
      }),
      tabText: (activeJobType, item) => ({
        // fontFamily: FONT.medium,
        color: activeJobType === item ? COLORS.primary : COLORS.gray2,
      }),
});

//make this component available to the app
export default HeaderGreeting;
