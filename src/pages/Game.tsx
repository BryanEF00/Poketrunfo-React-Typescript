import { useContext } from 'react';
import GameStartMenu from '../components/GameStartMenu';
import AppContext from '../context/AppContext';

function Game() {
  const { selectedPokemons } = useContext(AppContext);

  return (
    <div className="w-full min-h-[calc(100vh-70px)] text-center text-lg">
      {selectedPokemons.length < 6 ? (
        <div className="pt-10 px-5">
          you need at least <b>6 Pokemons</b> in your team.
        </div>
      ) : (
        <GameStartMenu />
      )}
    </div>
  );
}

export default Game;
