import React from "react";
import { FlatList, View, Text, TouchableOpacity } from "react-native";

const data = [
  {
    id: "1",
    title: "Transporter",
    screen: "transporter",
  },
  {
    id: "2",
    title: "Food Runner",
    screen: "foodrunner",
  },
];

const ServiceOptions = () => {
  return (
    <View>
      <FlatList
        data={data}
        horizontal
        renderItem={({ item }) => (
          <TouchableOpacity>
            <Text className="text-white">{item.title}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default ServiceOptions;
