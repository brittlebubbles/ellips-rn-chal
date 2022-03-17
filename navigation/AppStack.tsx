import * as React from "react";

import { Text, View } from "react-native";

import Home from "../screens/Home";
import Login from "../screens/Login";
import MyCart from "../screens/MyCart";
import { NavigationContainer } from "@react-navigation/native";
import ProductDetail from "../screens/ProductDetail";
import Register from "../screens/Register";
import { RootStackParamList } from "../types";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function AppStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Register"
        component={Register}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ProductDetail"
        component={ProductDetail}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="MyCart"
        component={MyCart}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
