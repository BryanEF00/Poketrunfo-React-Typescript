import { useContext, useEffect, useState } from 'react';
import AppContext from '../context/AppContext';
import formatGifName from '../helpers/formatGifName';
import formatPokemonName from '../helpers/formatPokemonName';
import compareScore from '../helpers/game/compareScore';
import compareStats from '../helpers/game/compareStats';
import cpuBestPokemon from '../helpers/game/cpuBestPokemon';
import cpuBestTeam from '../helpers/game/cpuBestTeam';
import generateCpuTeam from '../helpers/game/cpuTeam';
import findStats from '../helpers/game/findStats';
import {
  pokemonStatsName,
  pokemonStatsValue,
} from '../helpers/game/pokemonStats';
import removePokemon from '../helpers/game/removePokemon';
import { IPokemon } from '../interfaces/IPokemon';
import GameWarning from './GameWarning';
import Loading from './Loading';
import PokemonGameTeam from './PokemonGameTeam';
import TurnIndicator from './TurnIndicator';

function CardGame() {
  const { pokemons, selectedPokemons } = useContext(AppContext);
  const [loading, setLoading] = useState(true);
  const [matchResults, setMatchResults] = useState(false);
  const [matchScore, setMatchScore] = useState({ cpu: 0, player: 0 });
  const [matchStats, setMatchStats] = useState({ cpu: 0, player: 0 });
  const [showTeam, setShowTeam] = useState(false);
  const [currentTeam, setCurrentTeam] = useState<IPokemon[]>(selectedPokemons);
  const [currentPokemon, setCurrentPokemon] = useState<IPokemon>(
    currentTeam[0]
  );
  const [cpuTeam, setCpuTeam] = useState<IPokemon[]>(generateCpuTeam(pokemons));
  const [currentCpuPokemon, setCurrentCpuPokemon] = useState<IPokemon>(
    cpuTeam[0]
  );
  const [status, setStatus] = useState(pokemonStatsValue[0]);
  const [turnsLeft, setTurnsLeft] = useState(6);
  const [playerSelectTurn, setPlayerSelectTurn] = useState(true);
  const [showWarning, setShowWarning] = useState(false);
  const [endGame, setEndGame] = useState(false);

  useEffect(
    () => (pokemons.length ? setLoading(false) : setLoading(true)),
    [pokemons]
  );

  useEffect(() => {
    setCurrentTeam(selectedPokemons);
    setCpuTeam(generateCpuTeam(pokemons));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pokemons, selectedPokemons]);

  useEffect(() => {
    setCurrentPokemon(currentTeam[0]);
    setCurrentCpuPokemon(cpuBestPokemon(cpuTeam, status));
  }, [currentTeam, cpuTeam, status]);

  const handleMatch = () => {
    const cpuPokemon = cpuBestPokemon(cpuTeam, status);
    const playerStats = findStats(currentPokemon, status);
    const cpuStats = findStats(cpuPokemon, status);
    const playerScore =
      playerStats > cpuStats ? (matchScore.player += 1) : matchScore.player;
    const cpuScore =
      cpuStats > playerStats ? (matchScore.cpu += 1) : matchScore.cpu;

    setCurrentCpuPokemon(cpuPokemon);
    setMatchStats({ cpu: cpuStats, player: playerStats });
    setMatchScore({ cpu: cpuScore, player: playerScore });
    setMatchResults(true);
  };

  const handleNextRound = () => {
    const currentTurnsLeft = turnsLeft - 1;
    const currentPlayerSelectTurn = !playerSelectTurn;
    const currentCpuTeam = removePokemon(currentCpuPokemon.name, cpuTeam);

    if (!currentPlayerSelectTurn) {
      const bestPokemonByStat = cpuBestTeam(currentCpuTeam);
      setStatus(bestPokemonByStat.stats[0].name);
      setCurrentCpuPokemon(bestPokemonByStat);
    }

    if (currentTurnsLeft > 0) {
      setPlayerSelectTurn(!playerSelectTurn);
      setTurnsLeft(turnsLeft - 1);
      setCpuTeam(removePokemon(currentCpuPokemon.name, cpuTeam));
      setCurrentTeam(removePokemon(currentPokemon.name, currentTeam));
      setMatchResults(false);
    } else {
      setTurnsLeft(turnsLeft - 1);
      setEndGame(true);
    }
  };

  const displayCpuImage = () => {
    return matchResults || !playerSelectTurn ? 'opacity-100' : 'opacity-0';
  };

  return loading ? (
    <Loading />
  ) : (
    <div
      className="w-full min-h-[calc(100vh-70px)] flex flex-col
        justify-between items-center gap-y-5
        md:gap-0 md:text-base
      "
    >
      <div
        className="w-full flex flex-col items-center border-b-2
        justify-center
        md:flex-row md:justify-evenly 
      "
      >
        <div
          className="w-full h-full flex items-center justify-center py-2 px-4 gap-10
          md:w-1/4
        "
        >
          <div>
            <div className="font-semibold">PLAYER</div>
            <div>{matchScore.player}</div>
          </div>
          <div>
            <div className="font-semibold">CPU</div>
            <div>{matchScore.cpu}</div>
          </div>
        </div>
        <select
          className="w-3/4 py-2 px-5 my-2 text-black font-semibold text-base uppercase
          sm:w-2/3
          md:w-1/3
          "
          value={status}
          disabled={!playerSelectTurn || matchResults}
          onChange={({ target: { value } }) => setStatus(value)}
        >
          {pokemonStatsValue.map((value, index) => (
            <option key={value} value={value}>
              {pokemonStatsName[index]}
            </option>
          ))}
        </select>
        <TurnIndicator turn={turnsLeft} />
      </div>
      {endGame ? (
        <div
          className="min-h-[30vw] w-full flex flex-col
            justify-between text-xl gap-5 rounded-lg
            lg:min-h-[25vw]
            xl:min-h-[20vw]
          "
        >
          <div className="font-bold">Game Result:</div>
          <div
            className={`${compareScore(matchScore.player, matchScore.cpu).color}
            text-4xl font-bold`}
          >
            {compareScore(matchScore.player, matchScore.cpu).text}
          </div>
          <div className="flex  justify-center gap-1 text-black dark:text-white text-lg">
            <div>Thank you for playing</div>
            <div>my game!</div>
          </div>
          <div>
            To exit, please use the{' '}
            <span className="text-[#9E69E3] font-bold">Run</span> button.
          </div>
        </div>
      ) : (
        <div className="w-full flex flex-col justify-center">
          <div
            className="w-full flex justify-evenly
              md:justify-center md:gap-5
            "
          >
            <div
              className="w-[45%]
                  md:w-1/5
                  lg:w-1/6
                "
            >
              <img
                className="w-full"
                src={currentPokemon.sprite.back}
                alt="Player Current Pokemon"
              />
            </div>
            <div
              className="w-[45%]
                  md:w-1/5
                  lg:w-1/6
                "
            >
              <img
                className={`w-full ${displayCpuImage()}`}
                src={currentCpuPokemon?.sprite.simple}
                alt="CPU Current Pokemon"
              />
            </div>
          </div>
          <div className="h-28">
            {matchResults ? (
              <button
                type="button"
                onClick={handleNextRound}
                className="bg-green-600 h-11 px-5 text-white font-semibold rounded-lg"
              >
                {turnsLeft > 1 ? 'Next Turn' : 'End Game'}
              </button>
            ) : (
              <div className="h-11 font-bold">VS</div>
            )}
            <div
              className={`${matchResults ? 'opacity-100' : 'opacity-0'} 
              flex justify-evenly font-bold py-2 `}
            >
              <div className="w-[45%]">
                <div
                  className={
                    compareStats(matchStats.player, matchStats.cpu).color
                  }
                >
                  {compareStats(matchStats.player, matchStats.cpu).text}
                </div>
                {matchResults && <div>{findStats(currentPokemon, status)}</div>}
              </div>
              <div className="w-[45%]">
                <div
                  className={
                    compareStats(matchStats.cpu, matchStats.player).color
                  }
                >
                  {compareStats(matchStats.cpu, matchStats.player).text}
                </div>
                {matchResults && (
                  <div>{findStats(currentCpuPokemon, status)}</div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
      <div
        className="w-full grid grid-cols-4 gap-1 p-1
          md:p-4 md:gap-2
         md:w-[95%]
        "
      >
        <div
          className="flex flex-col items-center justify-center col-span-2 py-2 px-3 rounded-xl bg-white dark:bg-neutral-800
            md:flex-row md:gap-1
          "
        >
          <div>What will</div>
          <div>{formatPokemonName(currentPokemon.name)} do?</div>
        </div>
        <div
          className="flex flex-wrap justify-center col-span-2
            gap-1 font-semibold
          "
        >
          <div
            className="w-full flex gap-1
              md:gap-2
            "
          >
            <button
              className="w-1/2 py-2 rounded-xl text-white bg-[#DD5952] disabled:bg-opacity-50"
              type="button"
              disabled={matchResults}
              onClick={handleMatch}
            >
              Fight
            </button>
            <button
              className="w-1/2 py-2 rounded-xl text-white bg-[#9E69E3]"
              type="button"
              onClick={() => setShowWarning(true)}
            >
              Run
            </button>
            {showWarning && <GameWarning setShowWarning={setShowWarning} />}
          </div>
          <button
            className="w-full py-2 rounded-xl bg-white dark:bg-neutral-800 disabled:bg-opacity-50
            md:hidden
            "
            type="button"
            disabled={matchResults}
            onClick={() => setShowTeam(true)}
          >
            Pokemons
          </button>
          {showTeam && (
            <PokemonGameTeam
              setShowTeam={setShowTeam}
              currentTeam={currentTeam}
              currentPokemon={currentPokemon}
              setCurrentPokemon={setCurrentPokemon}
            />
          )}
        </div>
        <div
          className="w-full flex flex-wrap justify-center
            items-center col-span-4 py-2 px-4 gap-2 rounded-xl
            bg-white dark:bg-neutral-800
            md:col-span-2 md:grid md:grid-cols-3 md:place-content-center md:gap-2 md:px-2
          "
        >
          {currentPokemon.stats.map(({ baseStat }, index) => (
            <div
              key={pokemonStatsName[index]}
              className="w-[45%] text-sm
                md:w-full
              "
            >
              <b className="uppercase">{pokemonStatsName[index]}: </b>
              {baseStat.toString().padStart(3, '0')}
            </div>
          ))}
        </div>
        <div
          className="hidden
            md:h-[150px] md:flex md:justify-center md:items-center md:col-span-2
            md:object-scale-down
          "
        >
          <img
            src={`https://projectpokemon.org/images/normal-sprite/${formatGifName(
              currentPokemon.name
            )}.gif`}
            alt="Current Pokemon Gif"
          />
        </div>
        <div
          className="hidden
            md:flex md:col-span-4
          "
        >
          <PokemonGameTeam
            setShowTeam={setShowTeam}
            currentTeam={currentTeam}
            currentPokemon={currentPokemon}
            setCurrentPokemon={setCurrentPokemon}
          />
        </div>
      </div>
    </div>
  );
}

export default CardGame;
