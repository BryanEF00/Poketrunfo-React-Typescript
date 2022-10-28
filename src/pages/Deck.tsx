import { useContext } from 'react';
import Filter from '../components/Filter';
import PokemonSimpleCard from '../components/PokemonSimpleCard';
import AppContext from '../context/AppContext';
import { IPokemon } from '../interfaces/IPokemon';
import { saveCollection } from '../services/localStorage/collection';

function Deck() {
  const { state, setState, filteredPokemons, selectedPokemons } =
    useContext(AppContext);

  const handleSelectedPokemon = (pokemon: IPokemon) => {
    const selectedArray = [...selectedPokemons, pokemon];
    setState({ ...state, selectedPokemons: selectedArray });
    saveCollection(selectedArray);
  };

  const handleDisabledButton = (pokemon: IPokemon) => {
    if (selectedPokemons.length === 6) return true;
    return selectedPokemons.some(({ name }) => name === pokemon.name);
  };

  return (
    <div className="w-full">
      <Filter />
      <div className="border-t-2 py-2">
        <div className="flex flex-wrap items-center justify-evenly">
          {filteredPokemons.map((pokemon) => (
            <div
              className="w-[45%] flex flex-col items-center"
              key={pokemon.id}
            >
              <PokemonSimpleCard pokemon={pokemon} />
              <button
                className="w-1/2 h-full bg-blue-600 text-white py-1 rounded-lg font-semibold shadow
                disabled:opacity-50 disabled:cursor-not-allowed"
                type="button"
                onClick={() => handleSelectedPokemon(pokemon)}
                disabled={handleDisabledButton(pokemon)}
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
