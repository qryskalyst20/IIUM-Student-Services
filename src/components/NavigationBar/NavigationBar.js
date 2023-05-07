import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useCallback } from "react";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

SplashScreen.preventAutoHideAsync();

const NavigationBar = () => {
  const [fontsLoaded] = useFonts({
    "Uber-Bold": require("../../../assets/fonts/UberMoveBold.otf"),
    "Uber-Medium": require("../../../assets/fonts/UberMoveMedium.otf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }
  return (
    <View className="bg-[#212121] w-screen py-5 drop-shadow-2xl flex flex-row">
      <TouchableOpacity className="basis-1/3 items-center">
        <View>
          <Text style={{ fontFamily: "Uber-Medium" }} className="text-white">
            Home
          </Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity className="basis-1/3 items-center">
        <View>
          <Text style={{ fontFamily: "Uber-Medium" }} className="text-white">
            Messages
          </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity className="basis-1/3 items-center">
        <View>
          <Text style={{ fontFamily: "Uber-Medium" }} className="text-white">
            Account
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default NavigationBar;
