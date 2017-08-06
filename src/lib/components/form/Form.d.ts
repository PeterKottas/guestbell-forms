import './form.scss';
import * as React from 'react';
import * as BaseInput from '../input/subComponents/base/BaseInput';
export interface FormValue {
    value: number | string;
    label?: string;
}
export interface FormProps {
    className?: string;
}
export interface FormState {
    isFormValid: boolean;
}
export interface FormContext {
    register: (component: BaseInput.BaseInput<BaseInput.BaseInputProps, BaseInput.BaseInputState>) => void;
    unregister: (component: BaseInput.BaseInput<BaseInput.BaseInputProps, BaseInput.BaseInputState>) => void;
    isFormValid: () => boolean;
    updateCallback: (isComponentValid: boolean, inputId: string) => void;
}
export declare const FormContextType: {
    register: any;
    unregister: any;
    isFormValid: any;
    updateCallback: any;
};
export declare class Form extends React.Component<FormProps, FormState> {
    private components;
    static defaultProps: {};
    static childContextTypes: {
        register: any;
        unregister: any;
        isFormValid: any;
        updateCallback: any;
    };
    private register(component);
    private unregister(component);
    getChildContext(): FormContext;
    private updateCallback(isComponentValid?, inputId?);
    constructor(props: FormProps);
    render(): JSX.Element;
}
export default Form;
