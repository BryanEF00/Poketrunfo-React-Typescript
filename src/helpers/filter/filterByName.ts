import { IPokemon } from '../../interfaces/IPokemon';

const filterByName = (pokemons: IPokemon[], value: string): IPokemon[] => {
  return pokemons.filter((pokemon) =>
    pokemon.name.toLocaleLowerCase().includes(value.toLocaleLowerCase())
  );
};

export default filterByName;
