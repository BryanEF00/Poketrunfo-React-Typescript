import { IPokemon } from './IPokemon';

export interface IInitialState {
  pokemons: IPokemon[];
  filteredPokemons: IPokemon[];
  theme: string;
}
