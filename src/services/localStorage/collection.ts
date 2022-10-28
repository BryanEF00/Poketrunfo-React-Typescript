import { IPokemon } from '../../interfaces/IPokemon';

const COLLECTION = 'collection';

export const readCollection = () => {
  const read = localStorage.getItem(COLLECTION);

  if (!read) {
    return localStorage.setItem(COLLECTION, JSON.stringify([]));
  }

  return JSON.parse(read);
};

export const saveCollection = (value: IPokemon[]) =>
  localStorage.setItem(COLLECTION, JSON.stringify(value));
