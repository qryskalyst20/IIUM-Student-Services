import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const NavigationBar = () => {
  return (
    <View className="bg-[#212121] w-screen py-5 drop-shadow-2xl flex flex-row">
      <TouchableOpacity className="basis-1/3 items-center">
        <View>
          <Text className="text-white">Home</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity className="basis-1/3 items-center">
        <View>
          <Text className="text-white">Messages</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity className="basis-1/3 items-center">
        <View>
          <Text className="text-white">Account</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default NavigationBar;
