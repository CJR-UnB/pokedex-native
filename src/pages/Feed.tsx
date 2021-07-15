import React, { useState, useEffect } from "react";
import { View, StyleSheet, FlatList, ActivityIndicator } from "react-native";
import Card from "../components/Card";
import ModalView from "../components/ModalView";
import api from "../services/api";
import { Sizing, Colors } from "../styles";
import Info from "../components/Info";

export default function Feed() {
  const [showModal, setShowModal] = useState(false);
  const [pokemonName, setPokemonName] = useState("");
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);

  const fetchPokemons = async () => {
    if (loading) return;

    if (page === null) return;

    setLoading(true);

    const response = await api.get(`pokemons?page=${page}`);

    const { data, next_page } = response.data;

    setPokemons([...pokemons, ...data]);
    setPage(next_page);

    setLoading(false);
  };

  useEffect(() => {
    fetchPokemons();
  }, []);

  const handleCardPress = (name: string) => {
    setShowModal(true);
    setPokemonName(name);
  };

  return (
    <View style={styles.container}>
      <FlatList
        contentContainerStyle={styles.flatlist}
        data={pokemons}
        numColumns={2}
        renderItem={({ item }) => (
          <Card onPress={() => handleCardPress(item.name)} pokemon={item} />
        )}
        keyExtractor={(pokemon) => pokemon.id.toString()}
        onEndReached={fetchPokemons}
        onEndReachedThreshold={0.1}
        ListFooterComponent={() =>
          loading ? (
            <ActivityIndicator size={Sizing.x30} color={Colors.primary} />
          ) : (
            <View style={{ height: Sizing.x30 }} />
          )
        }
      />
      <ModalView visible={showModal} closeModal={() => setShowModal(false)}>
        <Info name={pokemonName} />
      </ModalView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  flatlist: {
    alignItems: "center",
  },
});
