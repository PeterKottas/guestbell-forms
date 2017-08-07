import * as React from 'react';
import { IBaseValidator } from '../../../../lib/index';
export interface BasicProps {
}
export interface BasicState {
    name: string;
    gender: 'M' | 'F' | '';
    email: string;
    age: string;
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
    private handleGenderChange(e);
    private submitForm(e);
    render(): JSX.Element;
}
export default Basic;
