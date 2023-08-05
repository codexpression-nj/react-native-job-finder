//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

// create a component
const QuizResults = () => {
    return (
        <View style={styles.container}>
            <Text>QuizResults</Text>
        </View>
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
    btn:{
        backgroundColor: COLORS.white,
        paddingHorizontal: 5,
        paddingVertical: 15,
         width: '50%',
          borderRadius: 15,
    }
});

//make this component available to the app
export default QuizResults;
