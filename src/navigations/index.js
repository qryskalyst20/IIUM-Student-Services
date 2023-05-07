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
        <Stack.Screen name="transporterscreen" component={TransporterScreen} />
        <Stack.Screen name="foodrunnerscreen" component={FoodRunnerScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
