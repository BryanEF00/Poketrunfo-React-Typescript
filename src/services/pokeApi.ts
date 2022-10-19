import fetchOnePokemon from '../helpers/pokeApi/fetchOnePokemon';
import { IPokemon } from '../interfaces/IPokemon';

interface IPokeApiFetch {
  name: string;
  url: string;
}

const fetchAllPokemons = async (): Promise<IPokemon[]> => {
  const url = 'https://pokeapi.co/api/v2/pokemon/?limit=151&offset=0';
  const request = await fetch(url);
  const response = await request.json();
  const result = await response.results;

  const fetchIndividualPokemonData = await Promise.all(
    result.map(async (pokemon: IPokeApiFetch) => fetchOnePokemon(pokemon.url))
  );

  return fetchIndividualPokemonData;
};

export default fetchAllPokemons;
