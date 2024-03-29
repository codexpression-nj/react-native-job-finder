//import liraries
import React, { Component,useState } from 'react';
import { View, Text, StyleSheet,FlatList ,TouchableOpacity} from 'react-native';
import { COLORS } from '../constants/theme';
import categories from '../service/categories';
import { Stack,useRouter } from 'expo-router';

const Item = ({ title,onPress}) => (
    <TouchableOpacity
        onPress={onPress}
        style={styles.itemContainer}
    >
        <Text style={styles.itemText}>{title}</Text>
    </TouchableOpacity>
);
// create a component
const QuizCategories = () => {
    const router = useRouter()
    const [selectedCategory, setSelectedCategory] = useState('')

    const handleCardPress = (item) => {
        console.log(item);
        setSelectedCategory(item)
        // setSelectedJob(item.job_id);
        router.push(`/quiz/${item.name}`);
    };
    return (
        <View style={styles.container}>
              <Stack.Screen 
                options = {{
                    // headerStyle: { backgroundColor: COLORS.white },
                    headerShadowVisible: false,
                    headerTitle: "",
                    headerShown:false
                }}
            />
        <FlatList
            data={categories}
            renderItem={
                ({ item }) => <Item onPress={handleCardPress} title={item.name} 
                />
            }
            keyExtractor={(item) => item.id}
        />
    </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: COLORS.backgroundColour
    },
    itemContainer: {
        borderRadius: 20,
        padding: 20,
        marginVertical: 8,
        alignItems: "center",
        justifyContent: "center",
        height: 100,
        backgroundColor:'#46736E'
    },
    itemText: {
        color: "white",
        fontWeight:'100',
        fontSize:18
    },
});

//make this component available to the app
export default QuizCategories;
