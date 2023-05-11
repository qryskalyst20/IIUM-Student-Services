import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import {
  Menu,
  MenuProvider,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from "react-native-popup-menu";

const CustomPopup = () => {
  const Divider = () => (
    <View
      style={{ height: StyleSheet.hairlineWidth, backgroundColor: "#7F8487" }}
    />
  );

  const [selectedOption, setSelectedOption] = useState("Choose your mahallah");

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  const data = [
    {
      id: 1,
      name: "Mahallah Bilal",
    },
    {
      id: 2,
      name: "Mahallah Ali",
    },
    {
      id: 3,
      name: "Mahallah Siddiq",
    },
    {
      id: 4,
      name: "Mahallah Farouq",
    },
    {
      id: 5,
      name: "Mahallah Usman",
    },
    {
      id: 6,
      name: "Mahallah Aminah",
    },
    {
      id: 7,
      name: "Mahallah Ruqayyah",
    },
    {
      id: 8,
      name: "Mahallah Aisyah",
    },
  ];

  return (
    <MenuProvider className="bg-[#212121] p-2 rounded-xl w-[50%]">
      <Menu>
        <MenuTrigger
          text={selectedOption}
          customStyles={{
            triggerText: {
              color: "white",
            },
          }}
        />
        <MenuOptions>
          <ScrollView style={{ height: 200 }}>
            {data.map((item) => (
              <MenuOption
                key={item.key}
                onSelect={() => handleOptionSelect(item.name)}
              >
                <Text>{item.name}</Text>
              </MenuOption>
            ))}
          </ScrollView>
        </MenuOptions>
      </Menu>
    </MenuProvider>
  );
};

export default CustomPopup;
