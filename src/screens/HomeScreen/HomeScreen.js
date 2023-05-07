import React from "react";
import { SafeAreaView, View, Text, StyleSheet } from "react-native";
// import SearchBar from "../../components/SearchBar";
import NavigationBar from "../../components/SearchBar/NavigationBar";
import ServiceOptions from "../../components/ServiceOptions/ServiceOptions";
import { FontsSetup } from "../../FontsSetup";

const HomeScreen = () => {
  const { onLayoutRootView, fontsLoaded } = FontsSetup();

  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaView onLayout={onLayoutRootView} className="flex-1 bg-[#121212]">
      {/* <SearchBar placeholder={"Search"} /> */}
      <View className="bg-[#30D5C8] w-screen h-[20%] flex">
        <View className="m-[10%]">
          <Text
            style={{ fontFamily: "Uber-Bold" }}
            className="text-white text-2xl drop-shadow-2xl"
          >
            Hello Danish!
          </Text>
          <Text
            style={{ fontFamily: "Uber-Medium" }}
            className="text-white drop-shadow-2xl"
          >
            Welcome back! You are missed!
          </Text>
        </View>
      </View>
      <ServiceOptions />
      <View className="absolute bottom-0">
        <NavigationBar />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
