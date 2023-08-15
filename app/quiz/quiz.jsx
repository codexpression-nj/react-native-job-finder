//import liraries
import React, { Component, useEffect, useRef, useState } from 'react';
import { View, Text, StyleSheet,ScrollView ,Animated, TouchableOpacity  } from 'react-native';
import { QUIZQUESTIONS } from '../service/quizData';
import { COLORS, SIZES } from '../constants/theme';
import { useRouter } from "expo-router";

// create a component
const Quiz = () => {
    const router = useRouter();

    const allQuestions = QUIZQUESTIONS['programmingLanguagesAndFrameworks'];
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
    const [isOptionsDisabled, setIsOptionsDisabled] = useState(false);
    const [currentOptionSelected, setCurrentOptionSelected] = useState(null);
    const [correctOption, setCorrectOption] = useState(null);
    const [score, setScore] = useState(0)

    const fadeAnim = useRef(new Animated.Value(0)).current; // Initial value for opacity: 0
    const [progress, setProgress] = useState(new Animated.Value(0));
    const progressAnim = progress.interpolate({
        inputRange: [0, allQuestions.length],
        outputRange: ['0%', '100%']
    })
    const validateAnswer = (selectedOption) => {
        if (isOptionsDisabled == false) {
            let correct_option = allQuestions[currentQuestionIndex]['correct_option'];
            setCurrentOptionSelected(selectedOption);
            setCorrectOption(correct_option);
            setIsOptionsDisabled(true);
            if (selectedOption == correct_option) {
                setScore(score + 1)
            }
        } else {
            handleNext()
        }
    }
    const handleNext = () => {
        if (currentQuestionIndex == allQuestions.length - 1) {
            // navigation.navigate('Result', { score: score });
            router.push(`/result/${score}`);

        
        } else {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
            setCurrentOptionSelected(null);
            setCorrectOption(null);
            setIsOptionsDisabled(false);
        }
        Animated.parallel([
            Animated.timing(progress, {

                toValue: currentQuestionIndex + 2,
                duration: 1000,
                useNativeDriver: false
            }),
            Animated.sequence([
                Animated.timing(fadeAnim, {
                    toValue: 0,
                    duration: 1000,
                    useNativeDriver: false
                }),
                Animated.timing(fadeAnim, {
                    toValue: 1,
                    duration: 1000,
                    useNativeDriver: false
                })
            ])
        ]).start();
    }
    const startQuiz = () => {
        setCurrentQuestionIndex(0);
        setScore(0);
        setCurrentOptionSelected(null);
        setCorrectOption(null);
        setIsOptionsDisabled(false);
        Animated.sequence([
            Animated.timing(fadeAnim, {
                toValue: 0,
                duration: 100,
                useNativeDriver: false
            }),
            Animated.timing(fadeAnim, {
                toValue: 1,
                duration: 1000,
                useNativeDriver: false
            })
        ]).start();


        Animated.timing(progress, {
            toValue: currentQuestionIndex + 1,
            duration: 2000,
            useNativeDriver: false,
        }).start();

    }

    useEffect(() => {
        startQuiz()
    }, []);

    const renderOptions = () => {
        return (
            <View style={{ marginTop: 100 }}>

                {
                    allQuestions[currentQuestionIndex]?.options.map((option, index) => (
                        <Animated.View
                            key={index}
                            style={{
                                opacity: fadeAnim,
                                transform: [{
                                    translateY: fadeAnim.interpolate({
                                        inputRange: [0, 1],
                                        outputRange: [150 / 4 * (index + 10), 0]  // 0 : 150, 0.5 : 75, 1 : 0
                                    }),
                                }],
                            }} >
                            <TouchableOpacity
                                onPress={() => validateAnswer(option)}
                                key={option}
                                style={styles.quizOptions(isOptionsDisabled, option, correctOption, currentOptionSelected)}>
                                <Text style={{ fontSize: 15, color: COLORS.white, textAlign: 'center', }} >{option}</Text>
                            </TouchableOpacity>
                        </Animated.View>
                    ))
                }

            </View>
        )
    }
    return (
        <ScrollView contentContainerStyle={{flexGrow: 1}}>
            <View style={{
                 flex: 1,
                // paddingVertical: 50,
                paddingHorizontal: 16,
                backgroundColor: COLORS.backgroundColour,
                position: 'relative',
            }}>
                <View style={styles.questionCard}>
                    {/* Progress Bar */}
                    <View style={{
                        width: '80%',
                        height: 6,
                        borderRadius: 5,
                        backgroundColor: COLORS.secondary,
                        marginBottom: 10

                    }}>
                        <Animated.View style={[{
                            height: 5,
                            borderRadius: 5,
                            backgroundColor: COLORS.primary
                        }, {
                            width: progressAnim
                        }]}>
                        </Animated.View>
                    </View>
                    <View>
                        <View style={{
                            flexDirection: 'row',
                            alignItems: 'flex-end',
                            margin:5
                            

                        }}>
                            <Text style={{ color: COLORS.gray, fontSize: 15, opacity: 0.6, marginRight: 2 }}>{currentQuestionIndex + 1}</Text>
                            <Text style={{ color: COLORS.gray, fontSize: 13, opacity: 0.6 }}>/ {allQuestions.length}</Text>
                        </View>
   
                        <Text style={{
                            color: 'black',
                            fontSize: 18,
                            textAlign: 'center',

                        }}>{allQuestions[currentQuestionIndex]?.question}</Text>
                    </View>
                   
                </View>
            
                {renderOptions()}
             
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', display: 'flex' ,alignItems:'center'}}>
                    <TouchableOpacity style={styles.nextButton}>
                        <Text style={{ color: 'white' }}>Quit</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.nextButton}>
                        <Text style={{ color: COLORS.secondary }}>Next</Text>
                    </TouchableOpacity>
                </View>
            </View>
         
        </ScrollView>
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
