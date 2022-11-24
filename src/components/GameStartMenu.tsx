import { useState } from 'react';
import CardGame from './CardGame';

function GameStartMenu() {
  const [start, setStart] = useState(false);

  return (
    <div className="w-full min-h-[calc(100vh-70px)] flex flex-col items-center gap-10">
      {start ? (
        <CardGame />
      ) : (
        <>
          <div className="pt-10 px-5">
            If you&apos;re ready, click on the start button!
          </div>
          <button
            className="w-1/2 bg-green-600 text-white
              font-semibold py-2 rounded-lg
              sm:w-1/3
              md:w-1/4
              lg:w-1/5
            "
            type="button"
            onClick={() => setStart(true)}
          >
            Start
          </button>
        </>
      )}
    </div>
  );
}

export default GameStartMenu;
