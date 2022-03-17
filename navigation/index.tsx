import { Text, View } from "react-native";

import AppStack from "./AppStack";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

export default function AppNavigator() {
  return (
    <SafeAreaProvider>
      <StatusBar backgroundColor="transparent" translucent />
      <NavigationContainer>
        <AppStack />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
