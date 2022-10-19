import { IPokemon } from '../../interfaces/IPokemon';
import getStats from './getStats';
import getTypes from './getTypes';

const fetchOnePokemon = async (url: string): Promise<IPokemon> => {
  const request = await fetch(url);
  const response = await request.json();
  const { id, name, sprites, stats, types } = response;

  const {
    other: {
      home: { front_default: sprite },
    },
  } = sprites;

  return { id, name, sprite, stats: getStats(stats), types: getTypes(types) };
};

export default fetchOnePokemon;
