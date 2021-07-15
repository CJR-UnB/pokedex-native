import React, { useState } from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { MaterialTopTabBarProps } from "@react-navigation/material-top-tabs";
import { Colors, Sizing } from "../styles";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import ModalView from "./ModalView";
import LogoutModal from "./LogoutModal";

export default function Header({ state, navigation }: MaterialTopTabBarProps) {
  const [showModal, setShowModal] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.options}>
        <Pressable style={styles.pressable} onPress={() => navigation.navigate("Feed")}>
          <Text style={[styles.text, state.index === 0 ? styles.selected : null]}>Todos</Text>
        </Pressable>
        <Pressable style={styles.pressable} onPress={() => navigation.navigate("Favorites")}>
          <Text style={[styles.text, state.index === 1 ? styles.selected : null]}>Favoritos</Text>
        </Pressable>
      </View>
      <Pressable onPress={() => setShowModal(true)}>
        <MaterialCommunityIcons name="logout" size={24} color={Colors.gray100} />
      </Pressable>
      <ModalView visible={showModal} closeModal={() => setShowModal(false)}>
        <LogoutModal onDismiss={() => setShowModal(false)} />
      </ModalView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 80,
    width: "100%",
    backgroundColor: Colors.white,
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    paddingHorizontal: Sizing.x40,
  },
  options: {
    flexDirection: "row",
  },
  pressable: {
    paddingRight: Sizing.x10,
  },
  text: {
    fontFamily: "Barlow_700Bold",
    color: Colors.gray500,
    fontSize: 24,
  },
  selected: {
    color: Colors.primary,
  },
});
