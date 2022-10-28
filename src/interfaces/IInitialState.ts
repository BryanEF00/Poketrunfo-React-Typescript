import { IPokemon } from './IPokemon';

export interface IInitialState {
  pokemons: IPokemon[];
  filteredPokemons: IPokemon[];
  selectedPokemons: IPokemon[];
  theme: string;
}
