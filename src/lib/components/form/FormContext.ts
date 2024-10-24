import * as React from 'react';
import { PartialBy } from '../utils/Typescript';
import {
  FormComponentContextState,
  FormComponentValidationContextStateBase,
} from './FormValidationContext';

export type OmitFormContext<P extends FormContextProps> = PartialBy<
  P,
  'formContext'
>;

export interface FormContextProps {
  formContext?: FormContextState;
}

export type ComponentsDict = {
  [componentId: string]: FormComponentContextState;
};

export interface FormContextState {
  subscribe: (
    componentId: string,
    componentState: FormComponentContextState
  ) => void;
  unSubscribe: (componentId: string) => void;
  updateCallback: (
    componentId: string,
    newComponentState: FormComponentValidationContextStateBase
  ) => void;
  disableComponents: () => void;
  enableComponents: () => void;
}

const FormContext = React.createContext<FormContextState | undefined>(
  undefined
);
export const FormContextProvider = FormContext.Provider;
export const FormContextConsumer = FormContext.Consumer;
