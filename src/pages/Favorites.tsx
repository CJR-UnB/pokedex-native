import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { useUser } from "../context/UserContext";
import FavoriteCard from "../components/FavoriteCard";
import { Colors, Sizing } from "../styles";
import api from "../services/api";

export default function Favorites() {
  const { user, setUser } = useUser();

  if (user == null) return null;

  const removeFavorite = async (name: string) => {
    await api.delete(`/users/${user?.user.username}/starred/${name}`);
    setUser({
      ...user,
      pokemons: user?.pokemons.filter((pokemon) => pokemon.name !== name),
    });
  };

  if (user == null) return null;

  if (user.pokemons.length === 0) {
    return (
      <View style={styles.emptyContainer}>
        <Text style={styles.text}>Você não possui nenhum pokemón favorito</Text>
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <FlatList
        contentContainerStyle={styles.flatList}
        data={user.pokemons}
        renderItem={({ item }) => (
          <FavoriteCard onRemove={() => removeFavorite(item.name)} pokemon={item} />
        )}
        keyExtractor={(pokemon) => pokemon.id.toString()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  flatList: {
    paddingHorizontal: Sizing.x20,
  },
  emptyContainer: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: Colors.gray500,
  },
});
