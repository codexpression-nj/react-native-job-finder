//import liraries
import React, { Component,useState,useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';


// create a component
const skillExpertise = () => {

    const [skillsData, setSkillData] = useState(['python','java','react native','ionic','reactJS','ionic','database','xamarin']);

    
    return {skillsData};
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
});

//make this component available to the app
export default skillExpertise;
