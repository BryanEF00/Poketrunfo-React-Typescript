import { IPokemon } from '../../interfaces/IPokemon';

const findStats = (pokemon: IPokemon, status: string) => {
  const stats = pokemon.stats.find(({ name }) => name === status);

  if (!stats) throw new Error();

  return stats.baseStat;
};

export default findStats;
