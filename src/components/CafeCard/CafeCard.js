import React from "react";
import { TouchableOpacity, Image, View, Text } from "react-native";

const CafeCard = ({ id, imgUrl, title, address }) => {
  return (
    <TouchableOpacity className="bg-[#3A4F50] mr-3 rounded-xl shadow-[0_35px_60px_-15px_rgba(255, 255, 255)]">
      <Image source={{ uri: imgUrl }} className="h-36 w-64 rounded-xl" />
      <View className="px-3 pb-4">
        <Text className="text-lg pt-2 text-[#F4FEFD]">{title}</Text>
        <View>
          <Text className="text-xs text-[#F4FEFD]">Nearby . {address}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default CafeCard;
