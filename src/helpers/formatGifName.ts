const formatGifName = (name: string) => {
  if (name === 'mr-mime') return name.replace('-', '.');
  if (name.includes('-')) return name.replace('-', '_');

  return name;
};

export default formatGifName;
