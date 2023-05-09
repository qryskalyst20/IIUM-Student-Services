import React from "react";
import { SafeAreaView, TextInput, TouchableOpacity } from "react-native";

const SearchBar = ({ placeholder }) => {
  return (
    <SafeAreaView className="bg-[#212121] w-[90%] py-4 px-6 rounded-xl mt-6">
      <TextInput
        placeholder={placeholder}
        placeholderTextColor={"#515151"}
        className="text-white"
      />
    </SafeAreaView>
  );
};

export default SearchBar;
