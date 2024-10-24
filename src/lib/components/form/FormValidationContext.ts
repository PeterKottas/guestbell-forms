import * as React from 'react';
import { ValidationError, ComponentApi } from '../base/input';
import { PartialBy } from '../utils/Typescript';

export type OmitFormValidationContext<P extends FormValidationContextProps> =
  PartialBy<P, 'formValidationContext'>;

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

export interface FormValidationContextProps {
  formValidationContext?: FormValidationContextState;
}

export type ComponentsDict = {
  [componentId: string]: FormComponentContextState;
};

export interface FormValidationContextState {
  isFormValid: boolean;
  components: ComponentsDict;
}

const FormValidationContext = React.createContext<
  FormValidationContextState | undefined
>(undefined);
export const FormValidationContextProvider = FormValidationContext.Provider;
export const FormValidationContextConsumer = FormValidationContext.Consumer;
