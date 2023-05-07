import { StatusBar } from "expo-status-bar";
import { Text, SafeAreaView } from "react-native";
import "react-native-gesture-handler";
import Navigation from "./src/navigations";
import { Provider } from "react-redux";
import store from "./src/store";

export default function App() {
  return (
    <Provider store={store}>
      <SafeAreaView className="flex-1">
        <StatusBar hidden />
        <Navigation />
      </SafeAreaView>
    </Provider>
  );
}
