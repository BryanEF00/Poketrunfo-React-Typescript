export interface IStatus {
  name: string;
  baseStat: number;
}

export interface IPokemon {
  id: number;
  name: string;
  sprite: {
    back: string;
    detailed: string;
    simple: string;
  };
  stats: IStatus[];
  types: string[];
}
