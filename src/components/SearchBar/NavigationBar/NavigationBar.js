import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const NavigationBar = () => {
  return (
    <View className="bg-white w-screen py-3 flex flex-row">
      <TouchableOpacity className="basis-1/3 items-center">
        <View>
          <Text>Home</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity className="basis-1/3 items-center">
        <View>
          <Text>Messages</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity className="basis-1/3 items-center">
        <View>
          <Text>Account</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default NavigationBar;
