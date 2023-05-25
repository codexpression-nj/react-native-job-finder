import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './app/home';
import HeaderProfileBtn from './app/components/headerProfileBtn';
import SearchBar from './app/components/searchBar';
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Stack.Screen
        options={{
          headerRight: () => (
            <HeaderProfileBtn dimension='100%'/>
          ),
          headerTitle: ""
        }}
      />
      <ScrollView>
        <View style={{flex:1}}>
          <SearchBar></SearchBar>
          <Home></Home>
        </View>
      </ScrollView>
    </SafeAreaView>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
