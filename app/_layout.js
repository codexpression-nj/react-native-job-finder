import { Stack } from "expo-router/stack";

export const unstable_settings = {
    initialRouteName: "welcome",
  };
  
const Layout = () =>{
  return <Stack initialRouteName="welcome">
          <Stack.Screen name="home" />
          <Stack.Screen name="welcome" />
          <Stack.Screen name="login" />
          <Stack.Screen name="signUp" />
          <Stack.Screen name="onBoard" />
          <Stack.Screen name="resetPassword" />
          <Stack.Screen name="quiz/quiz" />
          <Stack.Screen name="quiz/quizCategories" />
  </Stack>;
}
export default Layout;
