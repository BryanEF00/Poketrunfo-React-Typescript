import { IPokemon } from '../../interfaces/IPokemon';

const randomPokemon = (pokemons: IPokemon[]) => {
  const randomNumber = (Math.random() * 150 + 1).toFixed(0);
  const pokemon = pokemons.find(({ id }) => id === Number(randomNumber));
  return pokemon;
};

export default randomPokemon;
