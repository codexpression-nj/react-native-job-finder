//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet,Image } from 'react-native';
import { COLORS, SIZES } from '../constants/theme';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { TouchableOpacity } from 'react-native-gesture-handler';
import imgb from '../../assets/imgq.png'
import { useRouter } from "expo-router";

// create a component
const QuizCard = () => {
    const router = useRouter();

    return (
        <View style={styles.container}>
            <Text style={styles.title} numberOfLines={4}>Test your knowledge and prepare for technical interview question</Text>
           
            
            <TouchableOpacity style={styles.startQuiz}
                onPress={()=> {
                    router.push('/quiz/quizCategories')
                }}
            >
                <Text style={styles.btnText} >
                    Take quiz test
                </Text>
            </TouchableOpacity>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        // flex: 1,
        justifyContent: 'center',
        // alignItems: 'center',
        backgroundColor: COLORS.backgroundColour,
        height: 150,
        borderRadius: SIZES.medium,
        marginTop: SIZES.medium
    },
    startQuiz: {
        backgroundColor: COLORS.tertiary,
        borderRadius: SIZES.medium,
        justifyContent: "center",
        alignItems: "center",
        height: 30,
        margin: SIZES.medium,
        width: 150,
        alignSelf: 'flex-end'
    },
    btnText: {
        color: COLORS.lightWhite
    },
    title: {
        color: COLORS.lightWhite,
        margin: SIZES.medium,
        fontSize: SIZES.medium,
        fontWeight: 200,
        width: '60%',

flex:1
    }
});

//make this component available to the app
export default QuizCard;
