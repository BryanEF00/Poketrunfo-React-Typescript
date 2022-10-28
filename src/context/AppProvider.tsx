import { ReactNode, useEffect, useMemo, useState } from 'react';
import { IAppContext } from '../interfaces/IAppContext';
import { IInitialState } from '../interfaces/IInitialState';
import { readCollection } from '../services/localStorage/collection';
import { readTheme } from '../services/localStorage/theme';
import fetchAllPokemons from '../services/pokeApi';
import AppContext from './AppContext';

interface IProps {
  children: ReactNode;
}

const INITIAL_STATE: IInitialState = {
  pokemons: [],
  filteredPokemons: [],
  selectedPokemons: [],
  theme: readTheme() ? readTheme() : 'light',
};

function AppProvider({ children }: IProps) {
  const [state, setState] = useState(INITIAL_STATE);
  const value: IAppContext = useMemo(
    () => ({ ...state, state, setState }),
    [state, setState]
  );

  useEffect(() => {
    fetchAllPokemons().then((pokemons) => {
      setState((prevState) => ({
        ...prevState,
        pokemons,
        filteredPokemons: pokemons,
      }));
    });
  }, []);

  useEffect(() => {
    const readCollectionLocalStorage = readCollection();

    if (readCollectionLocalStorage !== null) {
      setState({ ...state, selectedPokemons: readCollectionLocalStorage });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export default AppProvider;
