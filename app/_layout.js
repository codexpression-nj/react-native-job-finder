import { Stack } from "expo-router/stack";

export const unstable_settings = {
    // Ensure any route can link back to `/`
    initialRouteName: "welcome",
  };
  
const Layout = () =>{
  return <Stack initialRouteName="welcome">
          <Stack.Screen name="home" />
          <Stack.Screen name="welcome" />
          <Stack.Screen name="login" />
          <Stack.Screen name="signUp" />
  </Stack>;
}
export default Layout;
