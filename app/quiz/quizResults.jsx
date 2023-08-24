//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { COLORS } from '../constants/theme';

// create a component
const QuizResults = () => {
    return (
        <View style={styles.container}>
            <View style={{
                backgroundColor:'#46736E',
                width: '90%',
                borderRadius: 20,
                padding: 20,
                alignItems: 'center'
            }}>
                <Text style={{color:COLORS.white,fontSize: 30}}>Your Score</Text>

                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                    marginVertical: 30
                }}>
                    <Text style={{
                        fontSize: 100,
                        color: COLORS.white,
                        fontWeight: 'bold'
                    }}>{score}</Text>
                    <Text style={{
                        fontSize: 100, color: COLORS.white,
                        fontWeight: 'bold'
                    }}> / { allQuestions.length }</Text>
                </View>
                {/* Retry Quiz button */}
                <TouchableOpacity
                onPress={()=>{
                    navigation.navigate('Welcome');}}
                style={styles.btn}>
                    <Text style={{
                        textAlign: 'center', color: COLORS.secondary, fontSize: 20
                    }}>Retry</Text>
                </TouchableOpacity>

            </View>

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
