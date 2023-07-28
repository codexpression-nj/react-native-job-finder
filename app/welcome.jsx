//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity,Image } from 'react-native';
import { COLORS } from './constants/theme';
import { SIZES } from './constants/theme';
import { Stack,useRouter } from 'expo-router';
import pic from '../assets/wel2.png'
// create a component
const Welcome = () => {
    const router = useRouter()
    return (
        // <View></View>
        <View style={styles.container}>
            <Stack.Screen 
                options = {{
                    // headerStyle: { backgroundColor: COLORS.white },
                    headerShadowVisible: false,
                    headerTitle: "",
                    headerShown:false
                }}
            />

            <View style={styles.img}>
                <Image 
                    resizeMode='contain'
                    style={{height:270, marginTop: 'auto'}}
                source={pic}/>
            </View>
            <View style={styles.bottomView}>
                <Text style={styles.title}>Find a perfect job match</Text>
                <Text style={styles.subTittle}>Finding your dream johb is no much easier and faster like never before</Text>
                <TouchableOpacity style={styles.getStartedBtn}
                    onPress={() => {router.push('/login')}}
                >
                    <Text style={styles.btnText}>Let's Get Started</Text>
                </TouchableOpacity>
              
            </View>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 3,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.white,
    },
    img:{
        flex:1.5,
        // justifyContent: 'center',
        // alignItems: 'center',
       
    },
    getStartedBtn: {
        backgroundColor: COLORS.secondary,
        borderRadius:SIZES.medium,
        justifyContent: "center",
        alignItems: "center",
        height: 50,
        margin:SIZES.medium,
        marginTop:SIZES.large
    }, 
     btnText: {
        fontSize: SIZES.medium,
        color: COLORS.white,
      },
      bottomView:{
        flex:1,
        width:'100%',
        backgroundColor: '#ffffff',
        borderTopLeftRadius:SIZES.medium,
        borderTopRightRadius:SIZES.medium,
        marginTop:SIZES.small,
      },
      title:{
        color:COLORS.primary,
        fontWeight:'bold',
        fontSize:SIZES.xLarge,
        width: 150,
        margin:SIZES.medium
      },
      subTittle:{
        color:COLORS.primary,
        margin:SIZES.medium,
        fontSize:SIZES.medium,
        fontWeight:300

      }
});

//make this component available to the app
export default Welcome;
