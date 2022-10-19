import { ReactNode, useEffect, useMemo, useState } from 'react';
import { IInitialState } from '../interfaces/IInitialState';
import fetchAllPokemons from '../services/pokeApi';
import AppContext from './AppContext';

interface IProps {
  children: ReactNode;
}

const INITIAL_STATE: IInitialState = {
  pokemons: [],
};

function AppProvider({ children }: IProps) {
  const [state, setState] = useState(INITIAL_STATE);
  const value = useMemo(
    () => ({ ...state, state, setState }),
    [state, setState]
  );

  useEffect(() => {
    fetchAllPokemons().then((pokemons) => {
      setState({ ...state, pokemons });
    });
  }, [state]);

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export default AppProvider;
