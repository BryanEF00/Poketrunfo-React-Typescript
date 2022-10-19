interface IGetTypes {
  type: { name: string };
}

const getTypes = (types: IGetTypes[]) => {
  const filterTypes = types.map(({ type }) => type.name);

  return filterTypes;
};

export default getTypes;
