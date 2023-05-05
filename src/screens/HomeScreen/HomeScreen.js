import React from "react";
import { SafeAreaView, View, Text } from "react-native";
// import SearchBar from "../../components/SearchBar";
import NavigationBar from "../../components/SearchBar/NavigationBar";

const HomeScreen = () => {
  return (
    <SafeAreaView className="flex-1 items-center bg-[#121212]">
      {/* <SearchBar placeholder={"Search"} /> */}
      <View className="bg-[#30D5C8] w-screen h-[20%] flex">
        <View className="m-[10%]">
          <Text className="text-white text-2xl font-bold">Hello Danish!</Text>
          <Text className="text-white font-semibold">
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
