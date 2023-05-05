import { StatusBar } from "expo-status-bar";
import { Text, SafeAreaView } from "react-native";
import "react-native-gesture-handler";
import Navigation from "./src/navigations";

export default function App() {
  return (
    <SafeAreaView className="flex-1">
      <StatusBar hidden />
      <Navigation />
    </SafeAreaView>
  );
}
