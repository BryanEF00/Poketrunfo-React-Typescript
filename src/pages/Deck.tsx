import { useContext } from 'react';
import PokemonSimpleCard from '../components/PokemonSimpleCard';
import AppContext from '../context/AppContext';

function Deck() {
  const { pokemons } = useContext(AppContext);

  return (
    <div className="">
      <div>Filter</div>
      <div className="border-t-2 py-2">
        <div className="flex flex-wrap items-center justify-evenly">
          {pokemons.map((pokemon) => (
            <div
              className="w-[45%] flex flex-col items-center"
              key={pokemon.id}
            >
              <PokemonSimpleCard pokemon={pokemon} />
              <button
                className="w-1/2 h-full bg-blue-600 text-white py-1 rounded-lg font-semibold shadow"
                type="button"
              >
                Save
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Deck;
