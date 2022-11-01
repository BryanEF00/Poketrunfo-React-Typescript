import { useContext } from 'react';
import PokemonCollectionCard from '../components/PokemonCollectionCard';
import AppContext from '../context/AppContext';
import { IPokemon } from '../interfaces/IPokemon';
import { saveCollection } from '../services/localStorage/collection';

function Collection() {
  const { state, setState, selectedPokemons } = useContext(AppContext);

  const handleRemovePokemon = (pokemon: IPokemon) => {
    const filteredArray = selectedPokemons.filter(
      ({ name }) => name !== pokemon.name
    );
    setState({ ...state, selectedPokemons: filteredArray });
    saveCollection(filteredArray);
  };

  return (
    <div className="w-full flex flex-wrap justify-evenly gap-y-4 py-3">
      {selectedPokemons && selectedPokemons.length >= 1 ? (
        selectedPokemons.map((pokemon) => (
          <div
            key={pokemon.id}
            className="w-[45%] flex flex-col gap-2 items-center"
          >
            <PokemonCollectionCard pokemon={pokemon} />
            <button
              className="w-3/5 text-white bg-red-600 py-1 rounded-lg font-semibold shadow"
              type="button"
              onClick={() => handleRemovePokemon(pokemon)}
            >
              Remove
            </button>
          </div>
        ))
      ) : (
        <div className="w-full flex justify-center text-lg py-10">
          Your collection is empty.
        </div>
      )}
    </div>
  );
}

export default Collection;
