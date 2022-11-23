import { IPokemon } from '../../interfaces/IPokemon';

const randomTeam = (pokemons: IPokemon[]) => {
  const team: IPokemon[] = [];

  for (let index = 0; index < 6; index += 1) {
    const randomNumber = (Math.random() * 150 + 1).toFixed(0);
    const pokemon = pokemons.find(({ id }) => id === Number(randomNumber));
    if (pokemon) team.push(pokemon);
  }

  return team;
};

export default randomTeam;
