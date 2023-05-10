import React from "react";
import { Image, View, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const CategoryCard = ({ imgUrl, title }) => {
  return (
    <TouchableOpacity className="relative mr-2">
      <Image source={{ uri: imgUrl }} className="h-20 w-20 rounded" />
      <Text className="text-white absolute bottom-1 left-1">{title}</Text>
    </TouchableOpacity>
  );
};

export default CategoryCard;
