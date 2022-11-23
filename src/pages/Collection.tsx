import { useContext } from 'react';
import GenerateTeam from '../components/GenerateTeam';
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
    <div className="w-full">
      <GenerateTeam />
      <div
        className="w-full flex flex-wrap justify-center mx-auto gap-4 py-3 
      md:w-[80%]
      lg:w-[75%]
      xl:w-[66%]
      "
      >
        {selectedPokemons && selectedPokemons.length >= 1 ? (
          selectedPokemons.map((pokemon) => (
            <div
              key={pokemon.id}
              className="w-[45%] flex flex-col gap-2 items-center
            md:w-[30%]
            "
            >
              <PokemonCollectionCard pokemon={pokemon} />
              <button
                className="w-3/5 text-white bg-red-600 py-1 rounded-lg font-semibold shadow
              md:w-1/2
              "
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
    </div>
  );
}

export default Collection;
