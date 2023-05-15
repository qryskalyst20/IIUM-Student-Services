import { StyleSheet, Text, View } from "react-native";
import React from "react";
import {
  Menu,
  MenuProvider,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from "react-native-popup-menu";

const CustomPopup = () => {
  const Divider = () => (
    <View
      style={{ height: StyleSheet.hairlineWidth, backgroundColor: "#7F8487" }}
    />
  );

  return (
    <MenuProvider style={styles.container}>
      <Menu>
        <MenuTrigger
          text="Click for Option menu"
          customStyles={{
            triggerWrapper: {
              top: -20,
            },
          }}
        />
        <MenuOptions customStyles={{ optionsContainer: styles.menuOptions }}>
          <MenuOption onSelect={() => alert(`Save`)} text="Save" />
          <MenuOption onSelect={() => alert(`Delete`)} text="Delete" />
          <MenuOption onSelect={() => alert(`Delete`)} text="Delete" />
          <MenuOption onSelect={() => alert(`Delete`)} text="Delete" />
          <MenuOption onSelect={() => alert(`Delete`)} text="Delete" />
          <MenuOption onSelect={() => alert(`Delete`)} text="Delete" />
        </MenuOptions>
      </Menu>
    </MenuProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    padding: 30,
    flexDirection: "column",
  },
  menuOptions: {
    zIndex: 9999,
  },
});

export default CustomPopup;
