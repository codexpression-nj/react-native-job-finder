import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './app/home';
import HeaderProfileBtn from './app/components/headerProfileBtn';
import SearchBar from './app/components/searchBar';
// const Stack = createNativeStackNavigator();
import { Stack } from "expo-router";

export default function App() {
  return (
  //   <Stack initialRouteName="welcome">
  //   <Stack.Screen name="home" />
  // </Stack>

  <></>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flex: 1,
    backgroundColor: '#fff',
    
    alignItems: 'center',
    // justifyContent: 'center',
  },
});
