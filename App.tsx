import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { useFonts } from 'expo-font';
import {
  Inter_400Regular,
  Inter_500Medium,
} from "@expo-google-fonts/inter";
import {
  Barlow_300Light_Italic,
  Barlow_400Regular,
  Barlow_500Medium,
  Barlow_600SemiBold,
  Barlow_700Bold,
} from "@expo-google-fonts/barlow";
import AppLoading from 'expo-app-loading';

import Feed from "./src/pages/Feed";
import { UserProvider } from "./src/context/UserContext";
import { NavigationContainer } from "@react-navigation/native";
import RootNavigator from "./src/pages/RootNavigator";

export default function App() {
  let [loaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Barlow_300Light_Italic,
    Barlow_400Regular,
    Barlow_500Medium,
    Barlow_600SemiBold,
    Barlow_700Bold,
  });
  
  if (!loaded) return <AppLoading />;

  return (
    // <>
    //   <Feed />
    //   <StatusBar style="dark" backgroundColor="#fff" translucent={false} />
    // </>
    <UserProvider>
      <NavigationContainer>
        <RootNavigator />
        <StatusBar style="dark" backgroundColor="#fff" translucent={false} />
      </NavigationContainer>
    </UserProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});