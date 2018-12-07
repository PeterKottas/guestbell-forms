import * as React from 'react';
import { Omit } from '../utils/Typescript';
import { InputHeaderApi, InputHeaderProps, InputHeaderState } from './InputHeader';

export type OmitInputHeaderContext<P extends InputHeaderContextProps> = Omit<P, 'inputHeaderContext'>;

export interface InputHeaderComponentContextState {
  props: InputHeaderProps;
  state: InputHeaderState;
  componentApi: InputHeaderApi;
  componentId: string;
}

export type InputHeaderComponentsDict = { [componentId: string]: InputHeaderComponentContextState };

export interface InputHeaderContextState {
  registerInputHeader: (componentId: string, component: InputHeaderComponentContextState) => void;
  unregisterInputHeader: (componentId: string) => void;
  stateChanged: () => void;
  components: InputHeaderComponentsDict;
}

export interface InputHeaderContextProps {
  inputHeaderContext: InputHeaderContextState;
}

const InputHeaderContext = React.createContext<InputHeaderContextState | undefined>(undefined);
export const InputHeaderContextProvider = InputHeaderContext.Provider;
export const InputHeaderContextConsumer = InputHeaderContext.Consumer;