import { IPokemon } from '../../interfaces/IPokemon';

const cpuBestTeam = (cpu: IPokemon[]) => {
  const pokemons = [...cpu];
  const sortPokemonStatsByHighest: IPokemon[] = pokemons.map((pokemon) => {
    pokemon.stats.sort((a, b) => b.baseStat - a.baseStat);

    return pokemon;
  });

  const sortTeamStatsByHighest = sortPokemonStatsByHighest.sort(
    (a, b) => b.stats[0].baseStat - a.stats[0].baseStat
  );

  return sortTeamStatsByHighest[0];
};

export default cpuBestTeam;
