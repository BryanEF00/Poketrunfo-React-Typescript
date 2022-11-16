import PokemonDetailedCard from '../components/PokemonDetailedCard';
import pokemonMock from '../helpers/pokemonMock';
import DeckCard from '../assets/Painel_Deck.svg';
import CollectionCard from '../assets/Painel_Colecao.svg';
import GameCard from '../assets/Painel_Combate.svg';

function Home() {
  return (
    <div
      className="flex flex-col items-center justify-center p-5
    lg:p-10"
    >
      <section
        className="w-full flex flex-col justify-center items-center
        lg:flex-row lg:justify-evenly"
      >
        <div className="h-full lg:flex justify-between items-center  lg:flex-col lg:gap-5">
          <h1 className="text-center text-3xl font-bold px-4">
            Welcome to Pokétrunfo!
          </h1>
          <p className="lg:text-lg text-center py-2">
            This is a Trump Card Game.
          </p>
          <div
            className="w-full overflow-x-scroll flex justify-start gap-1
          sm:overflow-x-visible sm:justify-center"
          >
            <img className="sm:w-[30%]" src={DeckCard} alt="Deck Card" />
            <img
              className="sm:w-[30%]"
              src={CollectionCard}
              alt="Collection Card"
            />
            <img className="sm:w-[30%]" src={GameCard} alt="Game Card" />
          </div>
          <h3 className="text-center text-lg py-4">
            You can build your team, choosing between the Pokémon&apos;s first
            generation
          </h3>
        </div>
        <div
          className="w-11/12 flex justify-center
        sm:w-7/12
        lg:w-1/4
        "
        >
          <PokemonDetailedCard pokemon={pokemonMock} />
        </div>
      </section>
    </div>
  );
}

export default Home;
