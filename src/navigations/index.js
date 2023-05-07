import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import { NavigationContainer } from "@react-navigation/native";
import TransporterScreen from "../screens/TransporterScreen";
import FoodRunnerScreen from "../screens/FoodRunnerScreen";

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="homescreen" component={HomeScreen} />
        <Stack.Screen name="transporter" component={TransporterScreen} />
        <Stack.Screen name="foodrunner" component={FoodRunnerScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
