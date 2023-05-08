import React from "react";
import { ScrollView, View, Text } from "react-native";
import { Icon } from "@rneui/themed";
import { useCallback } from "react";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import CafeCard from "../CafeCard";

SplashScreen.preventAutoHideAsync();

const FeaturedRow = ({ id, title, description }) => {
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);

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
    <View>
      <View className="mt-4 flex-row items-center justify-between px-4">
        <Text
          className="text-white text-2xl"
          style={{ fontFamily: "Uber-Bold" }}
        >
          {title}
        </Text>
        <Icon name="arrowright" color="white" type="antdesign" />
      </View>

      <Text
        className="text-[#616161] px-4 mb-2"
        style={{ fontFamily: "Uber-Medium" }}
      >
        {description}
      </Text>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        className="pl-4"
      >
        <CafeCard
          imgUrl={"https://links.papareact.com/gn7"}
          title={"Shawarma"}
        />
        <CafeCard
          imgUrl={"https://links.papareact.com/gn7"}
          title={"Ayam Gepuk"}
        />
        <CafeCard
          imgUrl={"https://links.papareact.com/gn7"}
          title={"Mi Tarik"}
        />
        <CafeCard
          imgUrl={"https://links.papareact.com/gn7"}
          title={"Takoyaki"}
        />
        <CafeCard
          imgUrl={"https://links.papareact.com/gn7"}
          title={"Roti Tampal"}
        />
      </ScrollView>
    </View>
  );
};

export default FeaturedRow;
