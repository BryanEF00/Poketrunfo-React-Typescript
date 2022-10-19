import { createContext } from 'react';
import { IAppContext } from '../interfaces/IAppContext';

const AppContext = createContext({} as IAppContext);

export default AppContext;
