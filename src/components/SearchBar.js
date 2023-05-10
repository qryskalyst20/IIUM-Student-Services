import React from "react";
import { SafeAreaView, TextInput, TouchableOpacity } from "react-native";
import { Icon } from "@rneui/themed";

const SearchBar = ({ placeholder }) => {
  return (
    <SafeAreaView className="bg-[#212121] w-[90%] py-4 px-6 rounded-xl mt-6 flex-row items-center">
      <Icon
        name="search1"
        color="#515151"
        type="antdesign"
        size={20}
        style={{ marginRight: 5 }}
      />
      <TextInput
        placeholder={placeholder}
        placeholderTextColor={"#515151"}
        className="text-white text-lg"
      />
    </SafeAreaView>
  );
};

export default SearchBar;
