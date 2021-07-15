import React, { useState } from "react";
import { SafeAreaView, View, Image, Text, TextInput, StyleSheet } from "react-native";

import Button from "../components/Button";
import LinkButton from "../components/LinkButton";
import { useUser } from "../context/UserContext";
import api from "../services/api";
import { Colors, Sizing } from "../styles";

export default function Login() {
  const [username, setUsername] = useState("");
  const [error, setError] = useState("");

  const { setUser } = useUser();

  const handleLogin = () => {
    api
      .get(`users/${username}`)
      .then((response) => {
        setUser(response.data);
      })
      .catch(() => setError("Esse usuário não existe"));
  };

  return (
    <SafeAreaView style={styles.layout}>
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={require("../../assets/illustrations/login-illustration.png")}
        />
      </View>
      <Text style={styles.title}>
        Explore e descubra{"\n"} o maravilhoso{"\n"} mundo Pokémon
      </Text>
      <Text style={styles.subtitle}>Temos que pegar!</Text>
      <TextInput
        style={styles.input}
        value={username}
        onChangeText={setUsername}
        placeholder="Nome do treinador"
      />
      {!!error && <Text style={styles.errorMessage}>{error}</Text>}
      <Button style={styles.button} text="Entrar" onPress={handleLogin}></Button>
      <LinkButton text="Criar conta" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  layout: {
    backgroundColor: Colors.white,
    paddingHorizontal: Sizing.x50,
    paddingVertical: Sizing.x40,
    justifyContent: "center",
    flex: 1,
  },
  container: {},
  image: {
    height: 150,
    width: "100%",
    resizeMode: "contain",
    marginBottom: Sizing.x30,
  },
  title: {
    fontFamily: "Barlow_700Bold",
    color: Colors.gray300,
    fontSize: 30,
    textAlign: "center",
  },
  subtitle: {
    fontFamily: "Barlow_500Medium",
    color: Colors.gray500,
    fontSize: 18,
    textAlign: "center",
    marginBottom: Sizing.x60,
  },
  input: {
    backgroundColor: Colors.gray700,
    borderRadius: Sizing.x10,
    fontFamily: "Barlow_500Medium",
    color: Colors.gray500,
    fontSize: 16,
    paddingVertical: Sizing.x20,
    paddingHorizontal: Sizing.x30,
  },
  errorMessage: {
    fontFamily: "Barlow_400Regular",
    color: Colors.primary,
    fontSize: 14,
    marginLeft: Sizing.x10,
  },
  buttonText: {
    fontFamily: "Barlow_600SemiBold",
    color: Colors.white,
    fontSize: 18,
  },
  button: {
    marginTop: Sizing.x30,
    marginBottom: Sizing.x50,
  },
});
