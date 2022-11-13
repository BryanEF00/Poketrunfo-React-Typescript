import { Dispatch, SetStateAction, useContext } from 'react';
import { FaTimes } from 'react-icons/fa';
import AppContext from '../context/AppContext';
import { IPokemon } from '../interfaces/IPokemon';
import PokemonSimpleCard from './PokemonSimpleCard';

interface IProps {
  setShowTeam: Dispatch<SetStateAction<boolean>>;
  currentTeam: IPokemon[];
  currentPokemon: IPokemon;
  setCurrentPokemon: Dispatch<SetStateAction<IPokemon>>;
}

function PokemonGameTeam({
  setShowTeam,
  currentTeam,
  currentPokemon,
  setCurrentPokemon,
}: IProps) {
  const handleSelectPokemon = (pokemon: IPokemon) => {
    setCurrentPokemon(pokemon);
    setShowTeam(false);
  };

  return (
    <div className="w-full min-h-screen absolute top-0 left-0 bg-zinc-100 dark:bg-neutral-900 pb-3">
      <div className="w-full flex justify-between py-3 px-8 ">
        <div className="">Your Team</div>
        <button type="button" onClick={() => setShowTeam(false)}>
          <FaTimes size={30} color="red" />
        </button>
      </div>
      <div className="flex flex-wrap items-center justify-evenly">
        {currentTeam.map((pokemon) => (
          <div className="w-[45%] flex flex-col items-center" key={pokemon.id}>
            <PokemonSimpleCard pokemon={pokemon} />
            <button
              className="w-1/2 h-full bg-green-600 text-white py-1 rounded-lg font-semibold shadow
                disabled:opacity-50 disabled:cursor-not-allowed"
              type="button"
              onClick={() => handleSelectPokemon(pokemon)}
              disabled={pokemon.name === currentPokemon.name}
            >
              Select
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PokemonGameTeam;
