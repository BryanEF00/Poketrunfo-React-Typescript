import { useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import formatPokemonName from '../helpers/formatPokemonName';
import { IPokemon } from '../interfaces/IPokemon';
import PokemonDetailedCard from './PokemonDetailedCard';

interface IProps {
  pokemon: IPokemon;
}

function PokemonCollectionCard({ pokemon }: IProps) {
  const [openCard, setOpenCard] = useState(false);

  return (
    <>
      <button
        type="button"
        className="w-full h-56 bg-white dark:bg-neutral-800 flex flex-col justify-end items-center rounded-xl pt-4"
        onClick={() => setOpenCard(true)}
      >
        <div className="w-full px-4 font-bold text-sm text-start">
          {`#${pokemon.id.toString().padStart(3, '0')}`}
        </div>
        <div className="w-10/12 h-full flex py-2">
          <img
            className="m-auto"
            src={`https://projectpokemon.org/images/normal-sprite/${pokemon.name}.gif`}
            alt={formatPokemonName(pokemon.name)}
          />
        </div>
        <div className="w-full flex flex-col items-center justify-center text-lg gap-1 pb-2">
          <div>{formatPokemonName(pokemon.name)}</div>
        </div>
      </button>
      {openCard && (
        <div className="w-full h-screen fixed top-0 left-0 z-20">
          <div className="w-full h-full flex justify-center items-center backdrop-blur-sm backdrop-brightness-50">
            <button
              className="absolute top-[17%] right-[15%] z-20"
              type="button"
              onClick={() => setOpenCard(false)}
            >
              <FaTimes size={28} className="text-red-500" />
            </button>
            <div className="w-11/12 flex justify-center">
              <PokemonDetailedCard pokemon={pokemon} />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default PokemonCollectionCard;
