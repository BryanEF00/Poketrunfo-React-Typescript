const formatPokemonName = (name: string) => {
  const formattedName = name.charAt(0).toUpperCase() + name.slice(1);

  return formattedName;
};

export default formatPokemonName;
