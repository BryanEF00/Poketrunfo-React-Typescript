import { IPokemon } from '../../interfaces/IPokemon';

const removePokemon = (name: string, team: IPokemon[]) => {
  const newTeam = team.filter((pokemon) => pokemon.name !== name);

  return newTeam;
};

export default removePokemon;
