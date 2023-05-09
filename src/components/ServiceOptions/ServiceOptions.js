import React from "react";
import {
  FlatList,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Icon } from "@rneui/themed";
import { useCallback } from "react";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

SplashScreen.preventAutoHideAsync();

const data = [
  {
    id: "1",
    title: "Transporter",
    image: "https://links.papareact.com/3pn",
    screen: "transporterscreen",
  },
  {
    id: "2",
    title: "Food Runner",
    image: "https://links.papareact.com/28w",
    screen: "foodrunnerscreen",
  },
];

const ServiceOptions = () => {
  const navigation = useNavigation();

  const [fontsLoaded] = useFonts({
    "Uber-Bold": require("../../../assets/fonts/UberMoveBold.otf"),
    "Uber-Medium": require("../../../assets/fonts/UberMoveMedium.otf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }
  return (
    <View onLayout={onLayoutRootView}>
      <FlatList
        data={data}
        horizontal
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            className="p-2 m-2 h-36 w-64 bg-[#0EF6CC] rounded-2xl flex-col items-center justify-center"
            onPress={() => navigation.navigate(item.screen)}
          >
            <Image
              source={{ uri: item.image }}
              style={{
                width: 120,
                height: 120,
                resizeMode: "contain",
                margin: 0,
              }}
            />
            <View className="flex-row w-full space-evenly">
              <Text
                className="text-[#1B2223] flex-1 mx-4"
                style={{ fontFamily: "Uber-Bold", fontSize: 15 }}
              >
                {item.title}
              </Text>
              <Icon
                style={{ width: 50, height: 50, marginHorizontal: 1 }}
                name="right"
                color="black"
                type="antdesign"
              />
            </View>

            {/* <View className="bg-black p-2 rounded-full w-10 mt-4">
              <Icon name="arrowright" color="white" type="antdesign" />
            </View> */}
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default ServiceOptions;
