import React from "react";
import { SafeAreaView, View, Text, StyleSheet } from "react-native";
// import SearchBar from "../../components/SearchBar";
import NavigationBar from "../../components/SearchBar/NavigationBar";
import { useCallback } from "react";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

SplashScreen.preventAutoHideAsync();
const HomeScreen = () => {
  const [fontsLoaded] = useFonts({
    "SF-Pro-Text-Bold": require("../../../assets/fonts/SF-Pro-Text-Bold.otf"),
    "SF-Pro-Text-Medium": require("../../../assets/fonts/SF-Pro-Text-Medium.otf"),
    "Nexa-Heavy": require("../../../assets/fonts/Nexa-Heavy.ttf"),
    "Nexa-ExtraLight": require("../../../assets/fonts/Nexa-ExtraLight.ttf"),
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
    <SafeAreaView
      onLayout={onLayoutRootView}
      className="flex-1 items-center bg-[#121212]"
    >
      {/* <SearchBar placeholder={"Search"} /> */}
      <View className="bg-[#30D5C8] w-screen h-[20%] flex">
        <View className="m-[10%]">
          <Text
            style={{ fontFamily: "SF-Pro-Text-Bold" }}
            className="text-white text-2xl drop-shadow-2xl"
          >
            Hello Danish!
          </Text>
          <Text
            style={{ fontFamily: "SF-Pro-Text-Medium" }}
            className="text-white drop-shadow-2xl"
          >
            Welcome back! You are missed!
          </Text>
        </View>
      </View>
      <View className="absolute bottom-0">
        <NavigationBar />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
