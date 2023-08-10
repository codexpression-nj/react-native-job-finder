//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

// create a component
const Quiz = () => {
    return (
        <View style={styles.container}>
            <Text>Quiz</Text>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
    questionCard: {
        marginTop: 50,
        marginVertical: 10,
        padding: 40,
        // borderTopRightRadius: 40,
        borderRadius: 10,
        backgroundColor: 'white',
        alignItems: 'center',
        shadowColor: '#171717',
        shadowOffset: { width: -6, height: 6 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
        // height:'40%'
    },
    quizOptions: (isOptionsDisabled, option, correctOption, currentOptionSelected) => ({
        // backgroundColor:s COLORS.backgroundColour,
        borderRadius: 5,
        padding: 5,
        paddingHorizontal: 50,
        marginVertical: 5,
        height: 60,
        alignItems:'center',
        backgroundColor: isOptionsDisabled ?
            option == correctOption
                ? COLORS.green
                : option == currentOptionSelected
                    ? 'red'
                    : 'grey'
            : '#46736E',
        // borderWidth: 1
        justifyContent:'center'
    }),
    nextButton:{
        paddingHorizontal: 5,
        paddingVertical: 15,
         width: '30%', 
         borderRadius: 5,
        //  backgroundColor: COLORS.white,
         alignItems:'center',
         marginTop:20
    }

});

//make this component available to the app
export default Quiz;
