import { useCallback } from "react";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

export const useCustomScreenSetup = () => {
  SplashScreen.preventAutoHideAsync();

  const [fontsLoaded] = useFonts({
    "Uber-Bold": require("~/assets/fonts/UberMoveBold.otf"),
    "Uber-Medium": require("~/assets/fonts/UberMoveMedium.otf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return { onLayoutRootView, fontsLoaded };
};
