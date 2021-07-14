type Pokemon = {
    id: number;
    name: string;
    image_url: string;
    number: number;
    weight: number;
    height: number;
    kind: string;
}

type User = {
    user: {
        id: number;
        username: string;
    },
    pokemons: Pokemon[];
}