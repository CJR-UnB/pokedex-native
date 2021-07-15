import { AntDesign } from "@expo/vector-icons";
import React, { useEffect, useState } from "react";

import { View, Text, Image, StyleSheet, Pressable, ActivityIndicator } from "react-native";
import api from "../services/api";
import { Colors, Sizing } from "../styles";
import TypeIcon from "./TypeIcon";
import { capitalize } from "../utils";
import { useUser } from "../context/UserContext";

type InfoProps = {
  name: string;
};

export default function Info({ name }: InfoProps) {
  const { user, setUser } = useUser();
  const [pokemon, setPokemon] = useState<Pokemon>();
  const isFavorite = user?.pokemons.some((pokemon) => pokemon.name === name);

  useEffect(() => {
    api.get(`pokemons/${name}`).then((response) => setPokemon(response.data));
  }, []);

  if (user == null) return null;
  if (pokemon == null) return null;

  const toggleFavorite = async () => {
    if (isFavorite) {
      await api.delete(`users/${user?.user.username}/starred/${name}`);
      setUser({
        ...user,
        pokemons: user?.pokemons.filter((pokemon) => pokemon.name !== name),
      });
    } else {
      await api.post(`users/${user?.user.username}/starred/${name}`),
        setUser({
          ...user,
          pokemons: [...user.pokemons, pokemon],
        });
    }
  };

  return (
    <>
      <View style={styles.header}>
        <View style={styles.heart}>
          <Pressable onPress={toggleFavorite}>
            <AntDesign
              name={isFavorite ? "heart" : "hearto"}
              size={Sizing.x40}
              color={Colors.white}
            />
          </Pressable>
        </View>
        <View>
          <Text style={styles.name}>{capitalize(pokemon.name)}</Text>
          <Text style={styles.number}>#{pokemon.number}</Text>
        </View>
        <Image style={styles.image} source={{ uri: pokemon.image_url }} />
      </View>
      <View style={styles.content}>
        <View style={styles.stats}>
          <View style={styles.stat}>
            <Text style={styles.statName}>Altura</Text>
            <Text style={styles.statValue}>{pokemon.height}</Text>
          </View>
          <View style={styles.stat}>
            <Text style={styles.statName}>Peso</Text>
            <Text style={styles.statValue}>{pokemon.weight}</Text>
          </View>
        </View>
        <View style={styles.types}>
          {pokemon.kind.split(";").map((type) => (
            <View key={type} style={styles.type}>
              <TypeIcon size="big" key={type} type={type} />
              <Text style={styles.typeName}>{capitalize(type)}</Text>
            </View>
          ))}
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: Colors.primary,
    padding: Sizing.x40,
    paddingBottom: Sizing.x100,
    height: Sizing.x200,
    borderTopLeftRadius: Sizing.x40,
    borderTopRightRadius: Sizing.x40,
  },
  heart: {
    margin: Sizing.x40,
    padding: Sizing.x10,
    position: "absolute",
    top: 0,
    right: 0,
    zIndex: 1,
  },
  name: {
    fontFamily: "Barlow_700Bold",
    fontSize: 36,
    color: Colors.white,
  },
  number: {
    fontFamily: "Barlow_500Medium",
    fontSize: 24,
    color: Colors.white,
  },
  image: {
    position: "absolute",
    alignSelf: "center",
    height: Sizing.x200,
    width: Sizing.x200,
    top: Sizing.x100,
  },
  content: {
    zIndex: -1,
    paddingTop: Sizing.x100,
    backgroundColor: Colors.white,
    height: Sizing.x200 + Sizing.x100,
  },
  stats: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  stat: {
    alignItems: "center",
  },
  statName: {
    fontFamily: "Inter_500Medium",
    fontSize: 18,
    color: Colors.gray300,
  },
  statValue: {
    fontFamily: "Barlow_600SemiBold",
    fontSize: 36,
    color: Colors.gray300,
  },
  types: {
    flexDirection: "row",
    justifyContent: "center",
  },
  type: {
    margin: Sizing.x20,
    alignItems: "center",
  },
  typeName: {
    fontFamily: "Inter_500Medium",
    fontSize: 14,
    color: Colors.gray300,
  },
});
