import { IPokemon } from '../interfaces/IPokemon';

interface IProps {
  pokemon: IPokemon;
}

function PokemonDetailedCard({ pokemon }: IProps) {
  const setBarColor = () =>
    pokemon.types.length > 1 ? `fill-${pokemon.types[1]}-400` : `fill-white`;

  const setStats = pokemon.stats.map(({ baseStat }) =>
    baseStat.toString().padStart(3, '0')
  );

  const setStatsBar = pokemon.stats.map(({ name, baseStat }) => {
    if (name === 'attack') {
      return `${((baseStat / 190) * 195).toFixed(0)}px`;
    }
    if (name === 'defense') {
      return `${((baseStat / 250) * 195).toFixed(0)}px`;
    }
    if (name === 'special-attack') {
      return `${((baseStat / 194) * 195).toFixed(0)}px`;
    }
    if (name === 'special-defense') {
      return `${((baseStat / 250) * 195).toFixed(0)}px`;
    }

    return `${((baseStat / 200) * 195).toFixed(0)}px`;
  });

  return (
    <div className="w-11/12 shadow rounded-3xl relative flex justify-center items-center ">
      <p className="w-full absolute text-black text-center font-bold text-2xl bottom-[33.80%]">
        {pokemon.name}
      </p>
      <p className="min-w-[80px] absolute text-black text-center font-semibold text-base uppercase top-[28.5%] right-3">
        {pokemon.types[0]}
      </p>
      {pokemon.types.length > 1 && (
        <p className="min-w-[80px] absolute text-black text-center font-semibold text-base uppercase top-[41.35%] right-3">
          {pokemon.types[1]}
        </p>
      )}
      <svg viewBox="0 0 460 800">
        <g id="Pokemon Card" filter="url(#filter0_d_104_149)">
          <g clipPath="url(#clip0_104_149)">
            <rect width="460" height="800" rx="24" fill="white" />
            <g id="Group 5">
              <path
                id="Curva inferior"
                d="M-1.78814e-06 127V-7.62939e-06H309L236.363 5.18982C144.236 11.7722 58.8216 55.7906 -1.78814e-06 127V127Z"
                className={
                  pokemon.types.length > 1
                    ? `fill-${pokemon.types[1]}-400`
                    : `fill-${pokemon.types[0]}-400`
                }
              />
              <g id="Frame 24">
                <text
                  id="Pokemon Number"
                  fill="black"
                  xmlSpace="preserve"
                  style={{ whiteSpace: 'pre' }}
                  fontFamily="Montserrat"
                  fontSize="20"
                  fontWeight="800"
                  letterSpacing="0em"
                >
                  <tspan x="20.1582" y="41.17">
                    {`#${pokemon.id.toString().padStart(3, '0')}`}
                  </tspan>
                </text>
              </g>
            </g>
            <g id="Frame 16">
              <g id="Frame 20">
                <circle
                  id="Type 1"
                  cx="400.5"
                  cy="185.416"
                  r="30"
                  className={`fill-${pokemon.types[0]}-400`}
                />
              </g>
              {pokemon.types.length > 1 && (
                <g id="Frame 22">
                  <g id="Frame 21">
                    <circle
                      id="Type 2"
                      cx="400.5"
                      cy="297.022"
                      r="20"
                      className={`fill-${pokemon.types[1]}-400`}
                    />
                  </g>
                </g>
              )}
            </g>
            <rect
              id="Image"
              y="22"
              width="384"
              height="464"
              fill="url(#pattern0)"
            />
            <g id="Frame">
              <path
                id="Vector"
                d="M0 459.041V800H460V390.413C406.025 435.046 276.306 466.508 124.759 466.508C83.0362 466.58 41.3556 464.085 0 459.041Z"
                className={`fill-${pokemon.types[0]}-400`}
              />
            </g>
            <g id="Frame 28" clipPath="url(#clip1_104_149)">
              <g id="Frame 13">
                <g id="Status n&#195;&#163;o mecher">
                  <g id="Frame 7">
                    <rect
                      x="39"
                      y="539.19"
                      width="120"
                      height="33.4233"
                      rx="16.7116"
                      className="fill-white"
                    />
                    <text
                      id="ATTACK"
                      fill="black"
                      xmlSpace="preserve"
                      style={{ whiteSpace: 'pre' }}
                      fontFamily="Montserrat"
                      fontSize="16"
                      fontWeight="800"
                      letterSpacing="0em"
                    >
                      <tspan x="64.9062" y="561.35">
                        ATTACK
                      </tspan>
                    </text>
                  </g>
                  <g id="Frame 8">
                    <rect
                      x="39"
                      y="589.037"
                      width="120"
                      height="33.4233"
                      rx="16.7116"
                      className="fill-white"
                    />
                    <text
                      id="DEFENSE"
                      fill="black"
                      xmlSpace="preserve"
                      style={{ whiteSpace: 'pre' }}
                      fontFamily="Montserrat"
                      fontSize="16"
                      fontWeight="800"
                      letterSpacing="0em"
                    >
                      <tspan x="59.5078" y="611.196">
                        DEFENSE
                      </tspan>
                    </text>
                  </g>
                  <g id="Frame 9">
                    <rect
                      x="39"
                      y="638.884"
                      width="120"
                      height="33.4233"
                      rx="16.7116"
                      className="fill-white"
                    />
                    <text
                      id="SP. ATK"
                      fill="black"
                      xmlSpace="preserve"
                      style={{ whiteSpace: 'pre' }}
                      fontFamily="Montserrat"
                      fontSize="16"
                      fontWeight="800"
                      letterSpacing="0em"
                    >
                      <tspan x="66.4375" y="661.043">
                        SP. ATK
                      </tspan>
                    </text>
                  </g>
                  <g id="Frame 10">
                    <rect
                      x="39"
                      y="688.73"
                      width="120"
                      height="33.4233"
                      rx="16.7116"
                      className="fill-white"
                    />
                    <text
                      id="SP. DEF"
                      fill="black"
                      xmlSpace="preserve"
                      style={{ whiteSpace: 'pre' }}
                      fontFamily="Montserrat"
                      fontSize="16"
                      fontWeight="800"
                      letterSpacing="0em"
                    >
                      <tspan x="66.4219" y="710.889">
                        SP. DEF
                      </tspan>
                    </text>
                  </g>
                  <g id="Frame 11">
                    <rect
                      x="39"
                      y="738.577"
                      width="120"
                      height="33.4233"
                      rx="16.7116"
                      className="fill-white"
                    />
                    <text
                      id="SPEED"
                      fill="black"
                      xmlSpace="preserve"
                      style={{ whiteSpace: 'pre' }}
                      fontFamily="Montserrat"
                      fontSize="16"
                      fontWeight="800"
                      letterSpacing="0em"
                    >
                      <tspan x="70.6406" y="760.736">
                        SPEED
                      </tspan>
                    </text>
                  </g>
                </g>
                <g id="Bars">
                  <g id="ATK Bar">
                    <rect
                      x="171"
                      y="551.19"
                      width="195"
                      height="10.9048"
                      rx="5.45239"
                      className={`${setBarColor()}`}
                      style={{ width: setStatsBar[0] }}
                    />
                  </g>
                  <g id="DEF Bar">
                    <rect
                      x="171"
                      y="600.667"
                      width="195"
                      height="10.9048"
                      rx="5.45239"
                      className={`${setBarColor()}`}
                      style={{ width: setStatsBar[1] }}
                    />
                  </g>
                  <g id="SP Atk Bar">
                    <rect
                      x="171"
                      y="650.143"
                      width="195"
                      height="10.9048"
                      rx="5.45239"
                      className={`${setBarColor()}`}
                      style={{ width: setStatsBar[2] }}
                    />
                  </g>
                  <g id="SP Def Bar">
                    <rect
                      x="171"
                      y="699.619"
                      width="195"
                      height="10.9048"
                      rx="5.45239"
                      className={`${setBarColor()}`}
                      style={{ width: setStatsBar[3] }}
                    />
                  </g>
                  <g id="Spd Bar">
                    <rect
                      x="171"
                      y="749.095"
                      width="195"
                      height="10.9048"
                      rx="5.45239"
                      className={`${setBarColor()}`}
                      style={{ width: setStatsBar[4] }}
                    />
                  </g>
                </g>
                <g id="Status Numbers">
                  <g id="ATK">
                    <rect
                      x="375.288"
                      y="539.19"
                      width="49.4233"
                      height="33.4233"
                      rx="16.7116"
                      className="fill-white"
                    />
                    <text
                      id="000"
                      fill="black"
                      xmlSpace="preserve"
                      style={{ whiteSpace: 'pre' }}
                      fontFamily="Montserrat"
                      fontSize="16"
                      fontWeight="800"
                      letterSpacing="0em"
                    >
                      <tspan x="383.57" y="561.35">
                        {setStats[0]}
                      </tspan>
                    </text>
                  </g>
                  <g id="DEF">
                    <rect
                      x="375.288"
                      y="589.037"
                      width="49.4233"
                      height="33.4233"
                      rx="16.7116"
                      className="fill-white"
                    />
                    <text
                      id="000_2"
                      fill="black"
                      xmlSpace="preserve"
                      style={{ whiteSpace: 'pre' }}
                      fontFamily="Montserrat"
                      fontSize="16"
                      fontWeight="800"
                      letterSpacing="0em"
                    >
                      <tspan x="383.57" y="611.196">
                        {setStats[1]}
                      </tspan>
                    </text>
                  </g>
                  <g id="SP.ATK">
                    <rect
                      x="375.288"
                      y="638.884"
                      width="49.4233"
                      height="33.4233"
                      rx="16.7116"
                      className="fill-white"
                    />
                    <text
                      id="000_3"
                      fill="black"
                      xmlSpace="preserve"
                      style={{ whiteSpace: 'pre' }}
                      fontFamily="Montserrat"
                      fontSize="16"
                      fontWeight="800"
                      letterSpacing="0em"
                    >
                      <tspan x="383.57" y="661.043">
                        {setStats[2]}
                      </tspan>
                    </text>
                  </g>
                  <g id="SP. DEF_2">
                    <rect
                      x="375.288"
                      y="688.73"
                      width="49.4233"
                      height="33.4233"
                      rx="16.7116"
                      className="fill-white"
                    />
                    <text
                      id="000_4"
                      fill="black"
                      xmlSpace="preserve"
                      style={{ whiteSpace: 'pre' }}
                      fontFamily="Montserrat"
                      fontSize="16"
                      fontWeight="800"
                      letterSpacing="0em"
                    >
                      <tspan x="383.57" y="710.889">
                        {setStats[3]}
                      </tspan>
                    </text>
                  </g>
                  <g id="SPD">
                    <rect
                      x="375.288"
                      y="738.577"
                      width="49.4233"
                      height="33.4233"
                      rx="16.7116"
                      className="fill-white"
                    />
                    <text
                      id="000_5"
                      fill="black"
                      xmlSpace="preserve"
                      style={{ whiteSpace: 'pre' }}
                      fontFamily="Montserrat"
                      fontSize="16"
                      fontWeight="800"
                      letterSpacing="0em"
                    >
                      <tspan x="383.57" y="760.736">
                        {setStats[4]}
                      </tspan>
                    </text>
                  </g>
                </g>
              </g>
            </g>
          </g>
        </g>
        <defs>
          <filter
            id="filter0_d_104_149"
            x="-4"
            y="0"
            width="468"
            height="808"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feComposite in2="hardAlpha" operator="out" />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_104_149"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_104_149"
              result="shape"
            />
          </filter>
          <pattern
            id="pattern0"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <use
              xlinkHref="#image0_104_149"
              transform="translate(0 0.0862069) scale(0.00195312 0.00161638)"
            />
          </pattern>
          <clipPath id="clip0_104_149">
            <rect width="460" height="800" rx="24" fill="white" />
          </clipPath>
          <clipPath id="clip1_104_149">
            <rect
              width="407"
              height="273"
              fill="white"
              transform="translate(27 499)"
            />
          </clipPath>
          <image
            id="image0_104_149"
            data-name="pika.png"
            width="512"
            height="512"
            xlinkHref={pokemon.sprite.detailed}
          />
        </defs>
      </svg>
    </div>
  );
}

export default PokemonDetailedCard;
