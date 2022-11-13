import { IPokemon } from '../../interfaces/IPokemon';

const generateCpuTeam = (pokemons: IPokemon[]) => {
  const randomTeam: IPokemon[] = [];

  for (let index = 0; index < 6; index += 1) {
    const randomNumber = (Math.random() * 150 + 1).toFixed(0);
    const pokemon = pokemons.find(({ id }) => id === Number(randomNumber));
    if (pokemon) randomTeam.push(pokemon);
  }

  return randomTeam;
};

export default generateCpuTeam;
