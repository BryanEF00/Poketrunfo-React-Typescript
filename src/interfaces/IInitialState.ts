import { IPokemon } from './IPokemon';

export interface IInitialState {
  pokemons: IPokemon[];
  filteredPokemons: IPokemon[];
  selectedPokemons: IPokemon[];
  cpuPokemons: IPokemon[];
  cpuSelectedPokemon: IPokemon;
  theme: string;
}
