import * as React from 'react';
import * as PropTypes from 'prop-types';
import { BaseInput, BaseInputProps, BaseInputState, AllowedHtmlElements } from '../base/input/BaseInput';
export interface FormValue {
    value: number | string;
    label?: string;
}
export interface FormProps {
    className?: string;
    noValidate?: boolean;
    onSubmit?: () => void;
}
export interface FormState {
    isFormValid: boolean;
    components: {
        [name: string]: BaseInput<BaseInputProps<AllowedHtmlElements>, BaseInputState, AllowedHtmlElements>;
    };
}
export interface FormContext {
    register: (component: BaseInput<BaseInputProps<AllowedHtmlElements>, BaseInputState, AllowedHtmlElements>) => void;
    unregister: (component: BaseInput<BaseInputProps<AllowedHtmlElements>, BaseInputState, AllowedHtmlElements>) => void;
    isFormValid: () => boolean;
    updateCallback: (isComponentValid: boolean, inputId: string) => void;
    disableInputs: () => void;
    enableInputs: () => void;
}
export declare const FormContextType: {
    register: PropTypes.Requireable<(...args: any[]) => any>;
    unregister: PropTypes.Requireable<(...args: any[]) => any>;
    isFormValid: PropTypes.Requireable<(...args: any[]) => any>;
    updateCallback: PropTypes.Requireable<(...args: any[]) => any>;
    enableInputs: PropTypes.Requireable<(...args: any[]) => any>;
    disableInputs: PropTypes.Requireable<(...args: any[]) => any>;
};
export declare class Form extends React.Component<FormProps, FormState> {
    static defaultProps: {
        noValidate: boolean;
        showExpandAll: boolean;
    };
    static childContextTypes: {
        register: PropTypes.Requireable<(...args: any[]) => any>;
        unregister: PropTypes.Requireable<(...args: any[]) => any>;
        isFormValid: PropTypes.Requireable<(...args: any[]) => any>;
        updateCallback: PropTypes.Requireable<(...args: any[]) => any>;
        enableInputs: PropTypes.Requireable<(...args: any[]) => any>;
        disableInputs: PropTypes.Requireable<(...args: any[]) => any>;
    };
    constructor(props: FormProps);
    getChildContext(): FormContext;
    disableInputs(): void;
    enableInputs(): void;
    touchAll(): void;
    unTouchAll(): void;
    componentDidMount(): void;
    render(): JSX.Element;
    private register;
    private unregister;
    private updateCallback;
}
export default Form;
