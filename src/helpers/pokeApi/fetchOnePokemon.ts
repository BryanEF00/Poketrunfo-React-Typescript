import { IPokemon } from '../../interfaces/IPokemon';
import getStats from './getStats';
import getTypes from './getTypes';

const fetchOnePokemon = async (url: string): Promise<IPokemon> => {
  const request = await fetch(url);
  const response = await request.json();
  const { id, name, sprites, stats, types } = response;

  const {
    back_default: back,
    front_default: simple,
    other: {
      home: { front_default: detailed },
    },
  } = sprites;

  const sprite = { back, simple, detailed };

  return { id, name, sprite, stats: getStats(stats), types: getTypes(types) };
};

export default fetchOnePokemon;
