import React from "react";
import { TouchableOpacity, Image, View, Text } from "react-native";

const CafeCard = ({ id, imgUrl, title, address }) => {
  return (
    <TouchableOpacity className="bg-[#212121] mr-3 shadow-[0_35px_60px_-15px_rgba(255, 255, 255)]">
      <Image source={{ uri: imgUrl }} className="h-36 w-64 rounded-sm" />
      <View className="px-3 pb-4">
        <Text className="text-lg pt-2 text-white">{title}</Text>
        <View>
          <Text className="text-xs text-[#616161]">Nearby . {address}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default CafeCard;
