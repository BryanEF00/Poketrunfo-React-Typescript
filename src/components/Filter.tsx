import { useState } from 'react';

function Filter() {
  const [filter, setFilter] = useState('initialRender');
  const [input, setInput] = useState({ name: '', number: 0 });

  const handleFilter = () => {
    setInput({ name: '', number: 0 });

    return filter === 'Number' ? setFilter('Name') : setFilter('Number');
  };

  const handleSlider = () => {
    if (filter === 'initialRender') {
      return '';
    }

    const checkState =
      filter === 'Number' ? 'animate-slideRight' : 'animate-slideLeft';

    return checkState;
  };

  const handleSearch = (value: string) => {
    if (filter === 'Number')
      return setInput({ ...input, number: Number(value) });

    return setInput({ ...input, name: value });
  };

  return (
    <div className="flex flex-col gap-4 text-lg p-5">
      <div className="flex justify-between items-center">
        <h1 className="w-1/2 font-bold uppercase ">Filter :</h1>
        <div className="w-1/2 flex gap-5 items-center justify-center">
          <p className="w-16">{filter === 'Number' ? filter : 'Name'}</p>
          <button
            className="flex items-center  w-12 h-3 rounded-full bg-gray-100 gap-5 dark:bg-neutral-800"
            type="button"
            onClick={handleFilter}
          >
            <div
              className={`${handleSlider()} bg-white w-5 h-5 rounded-full border`}
            />
          </button>
        </div>
      </div>
      <input
        className="w-full flex justify-center text-black rounded-md p-1 px-2 border"
        type={filter === 'Number' ? 'number' : 'text'}
        placeholder="Search Pokémon"
        value={filter === 'Number' ? input.number : input.name}
        onChange={({ target: { value } }) => handleSearch(value)}
        min="1"
      />
    </div>
  );
}

export default Filter;
