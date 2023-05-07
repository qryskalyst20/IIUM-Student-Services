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
            className="p-2 m-2 w-auto bg-[#4ce2d6] rounded-2xl flex items-center justify-center"
            onPress={() => navigation.navigate(item.screen)}
          >
            <Image
              source={{ uri: item.image }}
              style={{ width: 50, height: 50, resizeMode: "contain" }}
            />
            <Text
              className="text-white drop-shadow-2xl mt-2"
              style={{ fontFamily: "Uber-Medium" }}
            >
              {item.title}
            </Text>
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
