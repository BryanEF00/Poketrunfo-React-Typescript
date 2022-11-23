import { useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import formatPokemonName from '../helpers/formatPokemonName';
import { IPokemon } from '../interfaces/IPokemon';
import PokemonDetailedCard from './PokemonDetailedCard';

interface IProps {
  pokemon: IPokemon;
}

function PokemonSimpleCard({ pokemon }: IProps) {
  const [openCard, setOpenCard] = useState(false);

  const checkPokemonTypesLength = () => {
    return pokemon.types.length > 1 ? pokemon.types[1] : pokemon.types[0];
  };

  return (
    <>
      <button
        type="button"
        className="w-full bg-white dark:bg-neutral-800 flex flex-col items-center rounded-xl pt-4 my-1.5"
        onClick={() => {
          setOpenCard(true);
        }}
      >
        <div className="w-full px-4 font-bold text-sm text-start">
          {`#${pokemon.id.toString().padStart(3, '0')}`}
        </div>
        <div className="w-3/4 h-full">
          <img
            className="w-full h-full"
            src={pokemon.sprite.simple}
            alt={formatPokemonName(pokemon.name)}
          />
        </div>
        <div className="w-full flex flex-col items-center justify-center gap-1 pb-2">
          <div className="flex w-full items-center justify-center gap-0.5 skew-x-[-30deg]">
            <div className={`h-1.5 w-1/3 bg-${pokemon.types[0]}-400`} />
            <div
              className={`h-1.5 w-1/3 bg-${checkPokemonTypesLength()}-400`}
            />
          </div>
          <div>{formatPokemonName(pokemon.name)}</div>
        </div>
      </button>
      {openCard && (
        <div
          className="w-full h-screen fixed top-0 left-0 z-50
        "
        >
          <div className="w-full h-full flex justify-center items-center backdrop-blur-sm backdrop-brightness-50">
            <div
              className="w-11/12 relative flex justify-center
            sm:w-[35%]
            xl:w-[25%]
            3xl:w-[15%]
            "
            >
              <PokemonDetailedCard pokemon={pokemon} />
              <button
                className="absolute top-[5%] right-[10%] z-50"
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

export default PokemonSimpleCard;
