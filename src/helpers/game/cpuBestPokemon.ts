import { IPokemon } from '../../interfaces/IPokemon';
import findStats from './findStats';

const cpuBestPokemon = (cpu: IPokemon[], status: string) => {
  const pokemons = [...cpu];
  const bestPokemon = pokemons.sort(
    (a, b) => findStats(b, status) - findStats(a, status)
  );

  return bestPokemon[0];
};

export default cpuBestPokemon;
