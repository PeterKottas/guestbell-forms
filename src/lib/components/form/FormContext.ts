import * as React from 'react';
import { ValidationError, ComponentApi } from '../base/input';
import { Omit, DeepPartial } from '../utils/Typescript';

export type OmitFormContext<P extends FormContextProps> = Omit<
  P,
  'formContext'
>;

export interface FormComponentValidationContextState {
  isValid: boolean;
  errors: ValidationError[];
  name: JSX.Element | string;
}

export interface FormComponentContextState {
  validation: FormComponentValidationContextState;
  componentApi: ComponentApi;
}

export interface FormContextProps {
  formContext: FormContextState;
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
  isFormValid: boolean;
  updateCallback: (
    componentId: string,
    newComponentState: DeepPartial<FormComponentContextState>
  ) => void;
  disableComponents: () => void;
  enableComponents: () => void;
  components: ComponentsDict;
}

const FormContext = React.createContext<FormContextState | undefined>(
  undefined
);
export const FormContextProvider = FormContext.Provider;
export const FormContextConsumer = FormContext.Consumer;
