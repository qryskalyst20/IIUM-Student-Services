import React, { useEffect, useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  ScrollView,
  RefreshControl,
} from "react-native";
import SearchBar from "../components/SearchBar";
import NavigationBar from "../components/NavigationBar";
import ServiceOptions from "../components/ServiceOptions";
import { useCallback } from "react";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
// import Categories from "../../components/Categories";
import FeaturedRow from "../components/FeaturedRow";
import TransportOption from "../components/TransportOption";
import CustomPopup from "../components/CustomPopup";
import { client } from "../../sanity";

SplashScreen.preventAutoHideAsync();

const HomeScreen = () => {
  const [refreshing, setRefreshing] = React.useState(false);
  const [featuredCategories, setFeaturedCategories] = useState([]);

  useEffect(() => {
    client
      .fetch(
        `
    *[_type == "featured"]{
      ...,}
    `
      )
      .then((data) => {
        setFeaturedCategories(data);
      });
  }, []);

  // ------WORKING FUNCTION(FOR REFERENCE DONT TOUCH)-----
  //
  // async function fetchData() {
  //   const data = await client.fetch(`*[_type == "featured"] {...}`);
  //   // Do something with the fetched data
  //   console.log(data);
  // }

  // fetchData();
  //
  // ------WORKING FUNCTION(FOR REFERENCE DONT TOUCH)-----

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);

  const [fontsLoaded] = useFonts({
    "Uber-Bold": require("../../assets/fonts/UberMoveBold.otf"),
    "Uber-Medium": require("../../assets/fonts/UberMoveMedium.otf"),
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
    <SafeAreaView
      onLayout={onLayoutRootView}
      className="flex-1 min-h-screen bg-[#121212]"
    >
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
        <View className="mt-[10%] ml-[10%]">
          <Text
            style={{ fontFamily: "Uber-Bold" }}
            className="text-[#F4FEFD] text-2xl drop-shadow-2xl"
          >
            IIUM Community Services
          </Text>
          <Text
            style={{ fontFamily: "Uber-Medium" }}
            className="text-[#F4FEFD] drop-shadow-2xl"
          >
            By students, for students
          </Text>
        </View>

        <View className="w-screen items-center mb-[5%]">
          <SearchBar placeholder={"Search your order!"} />
        </View>

        <ServiceOptions />
        <TransportOption />

        {/* <View>
          <Categories />
        </View> */}

        {/* {featuredCategories?.map(
          (category) = (
            <FeaturedRow>
              {" "}
              key={category._id} id={category._id} title={category.name}{" "}
              description={category.short_description}{" "}
            </FeaturedRow>
          ))
        )} */}

        <View>
          <FeaturedRow
            id="1"
            title="Best Deals!"
            description="Students favourite choice!"
          />
          <FeaturedRow
            id="12"
            title="Your Favourite Cafe!"
            description="Taste every food from various cafe!"
          />
          {/* <FeaturedRow
            id="123"
            title="Offers near you!"
            description="Why not support your local restaurant tonight!"
          /> */}
        </View>

        {/* <View className="absolute bottom-0">
          <NavigationBar />
        </View> */}
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
