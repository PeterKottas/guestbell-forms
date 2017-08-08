import * as React from 'react';
import { IBaseValidator } from '../../../../lib/index';
export interface BasicProps {
}
export interface BasicState {
    name: string;
    gender: 'M' | 'F' | '';
    email: string;
    age: string;
    checkbox1: boolean;
    checkbox2: boolean;
    validateFormSubmit: boolean;
    food: string;
    food2: string;
    touchOn: "blur" | "focus";
}
export declare class AgeValidator implements IBaseValidator {
    static instance: AgeValidator;
    Validate(value: string, isRequired: boolean, addError: (error: string) => void): boolean;
}
export declare class Basic extends React.Component<BasicProps, BasicState> {
    private form;
    private initialState;
    constructor();
    private handleNameChange(e);
    private handleEmailChange(e);
    private handleAgeChange(e);
    private handleCheckbox1Check(e);
    private handleCheckbox2Check(e);
    private handleGenderChange(e);
    private handleValidateFormSubmitChecked(e);
    private submitForm(e);
    private dynamicSubmitSuccessForm(e, submiting, error, success, reset);
    private dynamicSubmitErrorForm(e, submiting, error, success, reset);
    render(): JSX.Element;
}
export default Basic;
