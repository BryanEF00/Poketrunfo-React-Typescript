interface IProps {
  turn: number;
}

function TurnIndicator({ turn = 6 }: IProps) {
  return (
    <div className="w-4/5 flex items-center justify-center gap-2 border-b-2 py-2">
      {Array(turn)
        .fill('')
        .map((_, index) => (
          <div
            key={`turn-${index + 1}`}
            className="w-[10vw] h-[10vw] flex items-center pokeball rounded-full shadow-sm"
          >
            <div className="bg-black flex justify-center items-center w-full h-[1.5vw]">
              <div className="bg-white w-[4.75vw] h-[4.75vw] border-4 border-black rounded-full shadow-inner" />
            </div>
          </div>
        ))}
    </div>
  );
}

export default TurnIndicator;
