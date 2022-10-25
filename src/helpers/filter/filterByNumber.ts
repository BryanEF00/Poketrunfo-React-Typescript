import { IPokemon } from '../../interfaces/IPokemon';

const filterByNumber = (pokemons: IPokemon[], value: number): IPokemon[] => {
  if (!value) {
    return pokemons;
  }

  return pokemons.filter((pokemon) => pokemon.id === value);
};

export default filterByNumber;
