import { IPokemon } from '../interfaces/IPokemon';

const pokemonMock: IPokemon = {
  id: 25,
  name: 'Pikachu',
  sprite: {
    back: '',
    simple:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png',
    detailed:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/25.png',
  },
  stats: [
    {
      baseStat: 55,
      name: 'attack',
    },
    {
      baseStat: 40,
      name: 'defense',
    },
    {
      baseStat: 50,
      name: 'special-attack',
    },
    {
      baseStat: 50,
      name: 'special-defense',
    },
    {
      baseStat: 90,
      name: 'speed',
    },
  ],
  types: ['electric'],
};

export default pokemonMock;
