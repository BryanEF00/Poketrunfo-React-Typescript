import { useContext, useEffect, useState } from 'react';
import PokemonSimpleCard from '../components/PokemonSimpleCard';
import AppContext from '../context/AppContext';
import formatPokemonName from '../helpers/formatPokemonName';
import pokemonStats from '../helpers/game/pokemonStats';
import { IPokemon } from '../interfaces/IPokemon';

function Game() {
  const { selectedPokemons, pokemons } = useContext(AppContext);

  const [CPUPokemons, setCPUPokemons] = useState<IPokemon[]>([]);
  const [roundSelectedPokemon, setRoundSelectedPokemon] = useState<IPokemon>(
    selectedPokemons[0]
  );
  const [starGame, setStarGame] = useState(false);
  const [openTeam, setOpenTeam] = useState(false);

  useEffect(() => {
    setRoundSelectedPokemon(selectedPokemons[0]);
  }, [selectedPokemons]);

  const CPURandomCards = () => {
    const randomCards: IPokemon[] = [];

    for (let index = 0; index < 6; index += 1) {
      const randomNumber = Math.round(Math.random() * 150 + 1);
      const randomPokemon = pokemons.find(
        (pokemon) => pokemon.id === randomNumber
      );
      if (randomPokemon) randomCards.push(randomPokemon);
    }

    setCPUPokemons(randomCards);
  };

  const handleStartGame = () => {
    CPURandomCards();
    setStarGame(true);
  };

  const gameStartPage = (status: boolean) => {
    return status ? (
      <div className="w-full min-h-[calc(100vh-70px)] flex flex-col items-center justify-between p-2">
        <div>CPU Pokemons Left: {CPUPokemons.length}</div>
        <label className="flex flex-col" htmlFor="pokemonAttribute">
          <p>Select an attribute: </p>
          <select
            className="p-2 text-black border border-black dark:border-white rounded"
            id="pokemonAttribute"
          >
            {pokemonStats.map((stat) => (
              <option key={stat} value={stat}>
                {stat}
              </option>
            ))}
          </select>
        </label>
        <section className="w-full flex flex-col">
          <div className="w-1/2 ml-2 flex">
            <img
              className="w-full"
              src={roundSelectedPokemon.sprite.back}
              alt="Selected Pokemon"
            />
          </div>
          <div className="min-h-[80px] flex gap-1">
            <div className="w-1/2 flex flex-col items-center justify-center border border-black dark:border-white rounded p-2">
              <p>What will</p>
              <p>{formatPokemonName(roundSelectedPokemon.name)} do?</p>
            </div>
            <div className="w-1/2 flex flex-col justify-center items-center gap-1">
              <div className="w-full h-full flex justify-between items-center gap-1">
                <button
                  className="w-1/2 h-full border border-black dark:border-white rounded"
                  type="button"
                >
                  Fight
                </button>
                <button
                  className="w-1/2 h-full border border-black dark:border-white rounded"
                  type="button"
                >
                  Run
                </button>
              </div>
              <button
                className="w-full h-full border border-black dark:border-white rounded"
                type="button"
                onClick={() => setOpenTeam(true)}
              >
                Pokémons
              </button>
            </div>
          </div>
          <div className="flex flex-wrap justify-center items-center border border-black dark:border-white rounded mt-1">
            {roundSelectedPokemon.stats.map(({ name, baseStat }) => (
              <div key={name} className="p-1 text-center">
                <b>{formatPokemonName(name)}:</b> {baseStat}
              </div>
            ))}
          </div>
        </section>
        {openTeam && (
          <div className="w-full min-h-screen absolute top-0 left-0 flex flex-col justify-center items-center bg-zinc-100 z-50">
            <div className="w-full  flex justify-between px-10">
              <p>Your Team</p>
              <button type="button" onClick={() => setOpenTeam(false)}>
                Close
              </button>
            </div>
            <div className="flex flex-wrap items-center justify-evenly">
              {selectedPokemons.map((pokemon) => (
                <div
                  className="w-[40%] flex flex-col items-center"
                  key={pokemon.id}
                >
                  <PokemonSimpleCard pokemon={pokemon} />
                  <button
                    className="w-1/2 bg-green-500 py-1 text-white font-semibold rounded"
                    type="button"
                    onClick={() => setRoundSelectedPokemon(pokemon)}
                  >
                    Select
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    ) : (
      <section className="flex flex-col items-center text-xl gap-10 pt-20">
        <div className="text-center">
          <p>If you&apos;re ready, click on</p>
          <p>the start button!</p>
        </div>
        <button
          className="w-1/2 bg-green-500 text-white font-semibold py-2 rounded-lg"
          type="button"
          onClick={handleStartGame}
        >
          Start
        </button>
      </section>
    );
  };

  return (
    <div className="w-full flex justify-center items-center">
      {selectedPokemons.length === 6 ? (
        gameStartPage(starGame)
      ) : (
        <div className="w-full flex flex-col text-xl text-center mx-5 pt-20">
          <p>
            You need <b>6 Pokémons</b>
          </p>
          <p>in your team to start the game.</p>
        </div>
      )}
    </div>
  );
}

export default Game;
