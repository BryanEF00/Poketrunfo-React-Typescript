import { Dispatch, SetStateAction } from 'react';
import { IInitialState } from './IInitialState';

export interface IAppContext extends IInitialState {
  state: IInitialState;
  setState: Dispatch<SetStateAction<IInitialState>>;
}
