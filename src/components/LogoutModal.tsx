import React, { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import Button from "../components/Button";
import { useUser } from "../context/UserContext";
import { Colors, Sizing } from "../styles";

type LogoutModalProps = {
  onDismiss: () => void;
};
export default function LogoutModal({ onDismiss }: LogoutModalProps) {
  const [showModal, setShowModal] = useState(false);
  const { setUser } = useUser();
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Deseja sair da conta?</Text>
      <View style={styles.buttonsContainer}>
        <Button style={styles.button} variant="ghost" text="Não" onPress={onDismiss} />
        <Button style={styles.button} text="Sim" onPress={() => setUser()} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    padding: Sizing.x40,
    backgroundColor: Colors.white,
  },
  text: {
    fontFamily: "Barlow_700Bold",
    fontSize: Sizing.x30,
    color: Colors.gray100,
    marginBottom: Sizing.x40,
  },
  button: {
    flex: 1,
    marginHorizontal: Sizing.x10,
  },
  buttonsContainer: {
    flexDirection: "row",
  },
});
