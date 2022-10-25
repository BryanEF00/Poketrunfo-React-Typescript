import { IPokemon } from '../../interfaces/IPokemon';

const filterByName = (pokemons: IPokemon[], value: string): IPokemon[] => {
  return pokemons.filter((pokemon) => pokemon.name.includes(value));
};

export default filterByName;
