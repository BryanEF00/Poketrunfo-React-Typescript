import { useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import formatGifName from '../helpers/formatGifName';
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
        className="w-full h-52 bg-white dark:bg-neutral-800 flex flex-col justify-end items-center rounded-xl pt-2 pb-1"
        onClick={() => setOpenCard(true)}
      >
        <div className="w-full px-4 font-bold text-sm text-start">
          {`#${pokemon.id.toString().padStart(3, '0')}`}
        </div>
        <div className="h-full flex">
          <img
            className="max-h-[90%] m-auto object-scale-down"
            src={`https://projectpokemon.org/images/normal-sprite/${formatGifName(
              pokemon.name
            )}.gif`}
            alt={formatPokemonName(pokemon.name)}
          />
        </div>
        <div className="w-full flex flex-col items-center justify-center text-lg">
          <div>{formatPokemonName(pokemon.name)}</div>
        </div>
      </button>
      {openCard && (
        <div className="w-full h-screen fixed top-0 left-0 z-20">
          <div className="w-full h-full flex justify-center items-center backdrop-blur-sm backdrop-brightness-50">
            <div className="w-11/12 relative flex justify-center">
              <PokemonDetailedCard pokemon={pokemon} />
              <button
                className="absolute top-[5%] right-[12.5%] z-20"
                type="button"
                onClick={() => setOpenCard(false)}
              >
                <FaTimes size={28} className="text-red-500" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default PokemonCollectionCard;
