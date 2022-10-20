export interface IStatus {
  name: string;
  baseStat: number;
}

export interface IPokemon {
  id: number;
  name: string;
  sprite: {
    simple: string;
    detailed: string;
  };
  stats: IStatus[];
  types: string[];
}
