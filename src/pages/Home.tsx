import PokemonDetailedCard from '../components/PokemonDetailedCard';
import pokemonMock from '../helpers/pokemonMock';

function Home() {
  return (
    <div className="flex flex-col items-center justify-center p-5">
      <h1 className="text-center text-4xl font-bold px-5">
        Welcome to Pokétrunfo!
      </h1>
      <section className="w-full flex flex-col items-center py-5">
        <p className="py-2">This is a Trump Card Game.</p>
        <PokemonDetailedCard pokemon={pokemonMock} />
      </section>
      <p className="text-center">
        {/* eslint-disable-next-line react/no-unescaped-entities */}
        You can build your team, choosing between the Pokémon's first generation
      </p>
    </div>
  );
}

export default Home;
