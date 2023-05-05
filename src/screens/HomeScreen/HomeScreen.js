import React from "react";
import { SafeAreaView, View } from "react-native";
// import SearchBar from "../../components/SearchBar";
import NavigationBar from "../../components/SearchBar/NavigationBar";

const HomeScreen = () => {
  return (
    <SafeAreaView className="flex-1 items-center bg-[#121212]">
      {/* <SearchBar placeholder={"Search"} /> */}

      <View className="absolute bottom-0">
        <NavigationBar />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
