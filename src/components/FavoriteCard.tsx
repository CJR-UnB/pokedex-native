import { MaterialIcons } from "@expo/vector-icons";
import React from "react";

import { View, Text, Image, StyleSheet } from "react-native";
import { BorderlessButton } from "react-native-gesture-handler";
import { Colors, Sizing } from "../styles";
import { capitalize } from "../utils";
import TypeIcon from "./TypeIcon";

type FavoriteCardProps = {
  pokemon: Pokemon;
  onRemove: () => void;
};

export default function FavoriteCard({ pokemon, onRemove }: FavoriteCardProps) {
  return (
    <View style={styles.card}>
      <Image style={styles.image} source={{ uri: pokemon.image_url }} />
      <View style={styles.content}>
        <View>
          <Text style={styles.name}>{capitalize(pokemon.name)}</Text>
          <Text style={styles.number}>#{pokemon.number}</Text>
        </View>
        <View style={styles.types}>
          {pokemon.kind.split(";").map((type) => (
            <TypeIcon key={type} type={type} />
          ))}
        </View>
      </View>
      <BorderlessButton onPress={onRemove}>
        <MaterialIcons name="delete-outline" size={Sizing.x30} color={Colors.gray500} />
      </BorderlessButton>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: Colors.white,
    borderRadius: Sizing.x10,
    paddingHorizontal: Sizing.x20,
    paddingVertical: Sizing.x10,
    marginVertical: Sizing.x10,
    flexDirection: "row",
    alignItems: "center",

    // ios
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    // android
    elevation: 5,
  },
  content: {
    justifyContent: "space-around",
    alignItems: "flex-start",
    alignSelf: "stretch",
    marginHorizontal: Sizing.x20,
    flex: 1,
  },
  name: {
    color: Colors.gray100,
    fontFamily: "Barlow_500Medium",
    fontSize: 16,
  },
  number: {
    color: Colors.gray300,
    fontFamily: "Barlow_300Light_Italic",
    fontSize: 14,
  },
  image: {
    width: 96,
    height: 96,
  },
  types: {
    flexDirection: "row",
    justifyContent: "center",
  },
  trash: {
    margin: Sizing.x10,
    padding: Sizing.x10,
  },
});
