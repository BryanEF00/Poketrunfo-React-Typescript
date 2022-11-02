import CarouselHome from '../components/CarouselHome';
import PokemonDetailedCard from '../components/PokemonDetailedCard';
import pokemonMock from '../helpers/pokemonMock';

function Home() {
  return (
    <div className="flex flex-col items-center justify-center p-5">
      <h1 className="text-center text-3xl font-bold px-5">
        Welcome to Pokétrunfo!
      </h1>
      <section className="w-full flex flex-col items-center">
        <p className="py-2">This is a Trump Card Game.</p>
        <CarouselHome />
        <p className="text-center py-4">
          You can build your team, choosing between the Pokémon&apos;s first
          generation
        </p>
        <PokemonDetailedCard pokemon={pokemonMock} />
      </section>
    </div>
  );
}

export default Home;
