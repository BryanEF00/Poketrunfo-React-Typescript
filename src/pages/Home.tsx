import CardHome from '../components/CardHome';

function Home() {
  return (
    <div className="flex flex-col items-center justify-center p-5">
      <h1 className="text-center text-4xl font-bold px-5">
        Welcome to Pokétrunfo!
      </h1>
      <section className="w-full flex flex-col items-center py-5">
        <p className="py-2">This is a Trump Card Game.</p>
        <CardHome />
      </section>
      <p className="text-center px-5">
        You can build your team, choosing between 151 Pokemons.
      </p>
    </div>
  );
}

export default Home;
