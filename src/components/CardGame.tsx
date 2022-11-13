import { useContext, useEffect, useState } from 'react';
import AppContext from '../context/AppContext';
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
    <div className="w-full min-h-[50vh] flex items-center justify-center font-bold text-2xl">
      Loading...
    </div>
  ) : (
    <div className="w-full min-h-[calc(100vh-70px)] flex flex-col justify-between items-center">
      <div className="w-full flex flex-col items-center">
        <div className="w-full h-full flex items-center justify-center py-2 px-4 gap-10">
          <div>
            <div>Player</div>
            <div>{matchScore.player}</div>
          </div>
          <div>
            <div>CPU</div>
            <div>{matchScore.cpu}</div>
          </div>
        </div>
        <TurnIndicator turn={turnsLeft} />
      </div>
      {endGame ? (
        <div
          className="h-[40vh] w-full flex flex-col justify-between text-xl bg-white 
        dark:bg-neutral-800 rounded-lg p-5"
        >
          <div>Game Result:</div>
          <div
            className={`${compareScore(matchScore.player, matchScore.cpu).color}
            text-5xl font-bold`}
          >
            {compareScore(matchScore.player, matchScore.cpu).text}
          </div>
          <div className="text-black dark:text-white">
            <div>Thank you for playing</div>
            <div>my game!</div>
          </div>
          <div>
            To exit, please use the{' '}
            <span className="text-[#9E69E3] font-bold">Run</span> button.
          </div>
        </div>
      ) : (
        <>
          <select
            className="w-4/5 py-2 px-5 my-2 text-black"
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
          <div className="w-full flex flex-col justify-center">
            <div className="w-full flex justify-evenly ">
              <div className="w-[45%]">
                <img
                  className="w-full"
                  src={currentPokemon.sprite.back}
                  alt="Player Current Pokemon"
                />
              </div>
              <div className="w-[45%]">
                <img
                  className={`w-full ${displayCpuImage()} 
                `}
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
                  {matchResults && (
                    <div>{findStats(currentPokemon, status)}</div>
                  )}
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
        </>
      )}
      <div className="grid grid-cols-2 gap-1 p-1">
        <div className="flex flex-col items-center justify-center col-span-1 py-2 px-3 rounded-xl bg-white dark:bg-neutral-800">
          <div>What will</div>
          <div>{formatPokemonName(currentPokemon.name)} do?</div>
        </div>
        <div className="flex flex-wrap justify-center col-span-1 gap-1 font-semibold">
          <div className="w-full flex gap-1">
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
            className="w-full py-2 rounded-xl bg-white dark:bg-neutral-800 disabled:bg-opacity-50"
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
        <div className="w-full flex flex-wrap justify-center items-center col-span-2 p-2 gap-2 rounded-xl bg-white dark:bg-neutral-800">
          {currentPokemon.stats.map(({ baseStat }, index) => (
            <div key={pokemonStatsName[index]}>
              <b>{pokemonStatsName[index]}: </b>
              {baseStat.toString().padStart(3, '0')}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CardGame;
