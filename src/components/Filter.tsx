import { useContext, useState } from 'react';
import AppContext from '../context/AppContext';
import filterByName from '../helpers/filter/filterByName';
import filterByNumber from '../helpers/filter/filterByNumber';

interface IInput {
  name: string;
  number: number | null;
}

const DEFAULT_INPUT = { name: '', number: null };

function Filter() {
  const { state, setState, pokemons } = useContext(AppContext);
  const [filter, setFilter] = useState('initialRender');
  const [input, setInput] = useState<IInput>(DEFAULT_INPUT);

  const handleFilterType = () => {
    setState({ ...state, filteredPokemons: pokemons });
    setInput(DEFAULT_INPUT);

    return filter === 'Number' ? setFilter('Name') : setFilter('Number');
  };

  const handleSearch = (value: string) => {
    if (filter === 'Number') {
      setState({
        ...state,
        filteredPokemons: filterByNumber(pokemons, Number(value)),
      });

      return setInput({ ...input, number: Number(value) });
    }

    setState({
      ...state,
      filteredPokemons: filterByName(pokemons, value),
    });

    return setInput({ ...input, name: value });
  };

  // Set CSS Animation
  const handleSliderAnimation = () => {
    if (filter === 'initialRender') {
      return '';
    }

    const checkState =
      filter === 'Number' ? 'animate-slideRight' : 'animate-slideLeft';

    return checkState;
  };

  return (
    <div className="flex flex-col gap-4 text-lg p-5">
      <div className="flex justify-between items-center">
        <h1 className="w-1/2 font-bold uppercase ">Filter :</h1>
        <div className="w-1/2 flex gap-5 items-center justify-center">
          <p className="w-16">{filter === 'Number' ? filter : 'Name'}</p>
          <button
            className="flex items-center  w-12 h-3 rounded-full bg-gray-300 gap-5 dark:bg-neutral-800"
            type="button"
            onClick={handleFilterType}
          >
            <div
              className={`${handleSliderAnimation()} bg-white w-5 h-5 rounded-full border`}
            />
          </button>
        </div>
      </div>
      <input
        className="w-full flex justify-center text-black rounded-md p-1 px-2 border"
        type={filter === 'Number' ? 'number' : 'text'}
        placeholder="Search Pokémon"
        value={input.number && filter === 'Number' ? input.number : input.name}
        onChange={({ target: { value } }) => handleSearch(value)}
      />
    </div>
  );
}

export default Filter;
