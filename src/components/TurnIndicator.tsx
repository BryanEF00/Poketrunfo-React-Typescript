interface IProps {
  turn: number;
}

function TurnIndicator({ turn = 6 }: IProps) {
  return (
    <div
      className="w-4/5 flex items-center justify-center gap-2
        py-2
        md:w-1/3 md:gap-1
      "
    >
      {Array(turn)
        .fill('')
        .map((_, index) => (
          <div
            key={`turn-${index + 1}`}
            className="w-[10vw] h-[10vw] flex items-center
              pokeball rounded-full shadow-sm
              sm:w-[8vw] sm:h-[8vw]
              md:w-[4.25vw] md:h-[4.25vw]
              lg:w-[4vw] lg:h-[4vw]
              xl:w-[3.5vw] xl:h-[3.5vw]
              2xl:w-[2.5vw] 2xl:h-[2.5vw]
              3xl:w-[2vw] 3xl:h-[2vw]
            "
          >
            <div
              className="bg-black flex justify-center
                items-center w-full h-[1.5vw]
                md:h-[0.8vw]
                xl:h-[0.6vw]
                2xl:h-[0.5vw]
                3xl:h-[0.4vw]
              "
            >
              <div
                className="bg-white w-[4.75vw] h-[4.75vw]
                  border-4 border-black rounded-full shadow-inner
                  sm:w-[3.5vw] sm:h-[3.5vw] sm:border-[5px]
                  md:w-[2vw] md:h-[2vw] md:border-4
                  lg:w-[1.75vw] lg:h-[1.75vw] lg:border-4
                  xl:w-[1.5vw] xl:h-[1.5vw] xl:border-4
                  2xl:w-[1.1vw] 2xl:h-[1.1vw] 2xl:border-4
                  3xl:w-[0.9vw] 3xl:h-[0.9vw] 3xl:border-4
                "
              />
            </div>
          </div>
        ))}
    </div>
  );
}

export default TurnIndicator;
