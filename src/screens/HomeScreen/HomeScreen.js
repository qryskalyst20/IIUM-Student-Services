import React, { useEffect, useLayoutEffect, useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  ScrollView,
  RefreshControl,
} from "react-native";
// import SearchBar from "../../components/SearchBar";
import NavigationBar from "../../components/NavigationBar";
import ServiceOptions from "../../components/ServiceOptions/ServiceOptions";
import { useCallback } from "react";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import Categories from "../../components/Categories";
import FeaturedRow from "../../components/FeaturedRow";
import sanityClient from "../../../sanity";

SplashScreen.preventAutoHideAsync();
const HomeScreen = () => {
  const [refreshing, setRefreshing] = React.useState(false);
  const [featuredCategories, setFeaturedCategories] = useState([]);

  useEffect(() => {
    sanityClient.fetch(
      `
    *[_type == "featured" && _id == $id]{
      ...,
      cafe[]->{
        ...,
        dishes[]->,
        type->{
          name
        }
      },
    }[0]
    `,
      { id }
    );
  });

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
    <SafeAreaView onLayout={onLayoutRootView} className="flex-1 bg-[#121212]">
      <ScrollView
        className="flex-1"
        contentContainerStyle={{ flexGrow: 1 }}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
            progressBackgroundColor={"#30D5C8"}
            colors={["#ffd700", "white"]}
          />
        }
      >
        {/* <SearchBar placeholder={"Search"} /> */}
        <View className="bg-[#30D5C8] pb-6 w-screen">
          <View className="m-[10%]">
            <Text
              style={{ fontFamily: "Uber-Bold" }}
              className="text-white text-2xl drop-shadow-2xl"
            >
              IIUM Community Services
            </Text>
            <Text
              style={{ fontFamily: "Uber-Medium" }}
              className="text-white drop-shadow-2xl"
            >
              By students, for students
            </Text>
          </View>
          <ServiceOptions />
        </View>

        <View>
          <Categories />
        </View>

        <View>
          <FeaturedRow
            id="1"
            title="Featured"
            description="Paid placements from our partners"
          />
          <FeaturedRow
            id="12"
            title="Tasty Discounts!"
            description="Everyone's been enjoying these juicy discounts!"
          />
          <FeaturedRow
            id="123"
            title="Offers near you!"
            description="Why not support your local restaurant tonight!"
          />
        </View>

        <View className="absolute bottom-0">
          <NavigationBar />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
