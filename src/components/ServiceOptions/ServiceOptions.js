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
    screen: "transporter",
  },
  {
    id: "2",
    title: "Food Runner",
    image: "https://links.papareact.com/28w",
    screen: "foodrunner",
  },
];

const ServiceOptions = () => {
  const navigation = useNavigations();

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
          <TouchableOpacity className="p-2 pl-6 pb-8 pt-4 m-2 w-40 bg-[#212121]">
            <Image
              source={{ uri: item.image }}
              style={{ width: 100, height: 100, resizeMode: "contain" }}
            />
            <Text
              className="text-white mt-2"
              style={{ fontFamily: "Uber-Bold" }}
            >
              {item.title}
            </Text>
            <View className="bg-black p-2 rounded-full w-10 mt-4">
              <Icon name="arrowright" color="white" type="antdesign" />
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default ServiceOptions;
