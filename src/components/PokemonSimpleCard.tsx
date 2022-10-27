import formatPokemonName from '../helpers/formatPokemonName';
import { IPokemon } from '../interfaces/IPokemon';

interface IProps {
  pokemon: IPokemon;
}

function PokemonSimpleCard({ pokemon }: IProps) {
  const checkPokemonTypesLength = () => {
    return pokemon.types.length > 1 ? pokemon.types[1] : pokemon.types[0];
  };

  return (
    <div className="w-full bg-white dark:bg-neutral-800 flex flex-col items-center rounded-xl pt-4 my-1.5">
      <div className="w-full px-4 font-bold text-sm">
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
          <div className={`h-1.5 w-1/3 bg-${checkPokemonTypesLength()}-400`} />
        </div>
        <div>{formatPokemonName(pokemon.name)}</div>
      </div>
    </div>
  );
}

export default PokemonSimpleCard;
