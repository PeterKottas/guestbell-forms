import * as React from 'react';
import { ValidationError, ComponentApi } from '../base/input';
import { PartialBy } from '../utils/Typescript';

export type OmitFormContext<P extends FormContextProps> = PartialBy<
  P,
  'formContext'
>;

export interface FormComponentValidationContextStateBase {
  isValid: boolean;
  errors: ValidationError[];
}

export interface FormComponentValidationContextState
  extends FormComponentValidationContextStateBase {
  name: JSX.Element | string;
}

export interface FormComponentContextState {
  validation: FormComponentValidationContextState;
  componentApi: ComponentApi;
}

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
  isFormValid: boolean;
  updateCallback: (
    componentId: string,
    newComponentState: FormComponentValidationContextStateBase
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
