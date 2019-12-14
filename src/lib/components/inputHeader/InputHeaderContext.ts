import * as React from 'react';
import {
  InputHeaderApi,
  InputHeaderProps,
  InputHeaderState,
} from './InputHeader';
import { PartialBy } from '../utils/Typescript';

export type OmitInputHeaderContext<
  P extends InputHeaderContextProps
> = PartialBy<P, 'inputHeaderContext'>;

export interface InputHeaderComponentContextState {
  props: InputHeaderProps;
  state: InputHeaderState;
  componentApi: InputHeaderApi;
  componentId: string;
}

export type InputHeaderComponentsDict = {
  [componentId: string]: InputHeaderComponentContextState;
};

export interface InputHeaderContextState {
  registerInputHeader: (
    componentId: string,
    component: InputHeaderComponentContextState
  ) => void;
  unregisterInputHeader: (componentId: string) => void;
  stateChanged: () => void;
  components: InputHeaderComponentsDict;
}

export interface InputHeaderContextProps {
  inputHeaderContext?: InputHeaderContextState;
}

const InputHeaderContext = React.createContext<
  InputHeaderContextState | undefined
>(undefined);
export const InputHeaderContextProvider = InputHeaderContext.Provider;
export const InputHeaderContextConsumer = InputHeaderContext.Consumer;
