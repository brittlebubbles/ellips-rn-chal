import { StyleSheet, Text, View } from "react-native";

import AppNavigator from "./navigation";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { useFonts } from "expo-font";

export default function App() {
  return (
    <>
      <AppNavigator />
    </>
  );
}
