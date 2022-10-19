interface IGetStatus {
  stat: { name: string };
  base_stat: number;
}

const getStats = (status: IGetStatus[]) => {
  const filterStats = status
    .splice(1)
    .map(({ stat: { name }, base_stat: baseStat }) => ({
      name,
      baseStat,
    }));

  return filterStats;
};

export default getStats;
