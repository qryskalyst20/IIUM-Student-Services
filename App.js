import { StatusBar } from "expo-status-bar";
import { Text, SafeAreaView } from "react-native";
import "react-native-gesture-handler";
import Navigation from "./src/navigations";
import { Provider } from "react-redux";
import store from "./src/store";
import { SafeAreaProvider } from "react-native-safe-area-context";
import "react-native-url-polyfill/auto";

export default function App() {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <SafeAreaView className="flex-1">
          <StatusBar hidden />
          <Navigation />
        </SafeAreaView>
      </SafeAreaProvider>
    </Provider>
  );
}
