import { ReactNode, useMemo, useState } from 'react';
import { IInitialState } from '../interfaces/IInitialState';
import AppContext from './AppContext';

interface IProps {
  children: ReactNode;
}

const INITIAL_STATE: IInitialState = {
  pokemons: [],
};

function AppProvider({ children }: IProps) {
  const [state, setState] = useState(INITIAL_STATE);
  const value = useMemo(() => ({ ...state, setState }), [state, setState]);

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export default AppProvider;
