import { useContext, useEffect } from 'react';
import AppContext from '../context/AppContext';
import randomPokemon from '../helpers/collection/randomPokemon';
import randomTeam from '../helpers/collection/randomTeam';
import {
  readCollection,
  saveCollection,
} from '../services/localStorage/collection';

function GenerateTeam() {
  const { state, setState, pokemons, selectedPokemons } =
    useContext(AppContext);

  const handleGeneratePokemon = () => {
    const random = randomPokemon(pokemons);
    const isDuplicate = selectedPokemons?.find(({ id }) => id === random?.id);

    if (random && !isDuplicate) {
      const selectedArray = [...selectedPokemons, random];
      setState({ ...state, selectedPokemons: selectedArray });
      saveCollection(selectedArray);
    } else {
      handleGeneratePokemon();
    }
  };

  useEffect(() => {
    readCollection();
  }, [selectedPokemons]);

  const handleGenerateTeam = () => {
    const selectedTeam = randomTeam(pokemons);
    setState({ ...state, selectedPokemons: selectedTeam });
    saveCollection(selectedTeam);
  };

  const handleRemoveAll = () => {
    setState({ ...state, selectedPokemons: [] });
    saveCollection([]);
  };

  return (
    <div className="flex flex-col gap-4 text-lg p-5 sm:w-11/12 sm:mx-auto">
      <div className="flex justify-between items-center">
        <h1 className="w-1/2 font-bold uppercase ">Collection :</h1>
      </div>
      <h3 className="text-center">Add a random Pokémon or Team.</h3>
      <div className="w-full flex flex-wrap justify-center gap-3">
        <button
          type="button"
          className="w-[45%] bg-green-500 text-white font-semibold py-1 rounded-lg disabled:opacity-50
          md:w-[35%]
          lg:w-[20%]
          xl:w-[15%]"
          disabled={selectedPokemons?.length === 6}
          onClick={handleGeneratePokemon}
        >
          + Pokémon
        </button>
        <button
          type="button"
          className="w-[45%] bg-[#9E69E3] text-white font-semibold py-1 rounded-lg disabled:opacity-50
          md:w-[35%]
          lg:w-[20%]
          xl:w-[15%]"
          disabled={selectedPokemons?.length > 0}
          onClick={handleGenerateTeam}
        >
          + Team
        </button>
        <button
          type="button"
          className="w-[45%] border-2 py-1 font-semibold border-red-600 rounded-lg text-red-600 bg-zinc-100 
          dark:bg-neutral-900 disabled:opacity-50
          md:w-[35%]
          lg:w-[20%]
          xl:w-[15%]"
          onClick={handleRemoveAll}
          disabled={selectedPokemons?.length === 0}
        >
          Remove All
        </button>
      </div>
    </div>
  );
}

export default GenerateTeam;
