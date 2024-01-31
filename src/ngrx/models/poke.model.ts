export interface PokeList {
  id: number;
  pokemon_species: pokemonSpecies[];
}

export interface pokemonSpecies {
  name: string;
  url: string;
}
