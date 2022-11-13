import { Dispatch } from 'react';
import { useNavigate } from 'react-router-dom';

interface IProps {
  setShowWarning: Dispatch<React.SetStateAction<boolean>>;
}

function GameWarning({ setShowWarning }: IProps) {
  const navigate = useNavigate();

  return (
    <div className="w-full h-screen fixed top-0 left-0 flex items-center justify-center">
      <div className="w-full h-full flex justify-center items-center backdrop-blur-sm backdrop-brightness-50">
        <div className="w-4/5 bg-white dark:bg-neutral-800 grid grid-cols-2 place-items-center gap-2 p-5 rounded-lg">
          <div className="col-span-2 mb-5">Leave the game?</div>
          <button
            className="w-full col-span-1 text-white bg-red-500 py-2 rounded-lg"
            type="button"
            onClick={() => setShowWarning(false)}
          >
            No
          </button>
          <button
            className="w-full col-span-1 text-white bg-green-600 py-2 rounded-lg"
            type="button"
            onClick={() => navigate('/')}
          >
            Yes
          </button>
        </div>
      </div>
    </div>
  );
}

export default GameWarning;
