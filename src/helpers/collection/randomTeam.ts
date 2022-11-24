import { IPokemon } from '../../interfaces/IPokemon';
import randomPokemon from './randomPokemon';

const randomTeam = (pokemons: IPokemon[]) => {
  const team: IPokemon[] = [];

  while (team.length < 6) {
    const pokemon = randomPokemon(pokemons);
    const isDuplicate = team.find(({ id }) => id === pokemon?.id);

    if (pokemon && !isDuplicate) {
      team.push(pokemon);
    }
  }

  return team;
};

export default randomTeam;
