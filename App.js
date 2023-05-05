import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";

export default function App() {
  return (
    <View className="flex-1 bg-[#212121] items-center justify-center">
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar hidden />
    </View>
  );
}
