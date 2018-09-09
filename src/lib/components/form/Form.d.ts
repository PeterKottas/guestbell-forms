import './form.scss';
import * as React from 'react';
import * as BaseInput from '../input/subComponents/base/BaseInput';
import * as PropTypes from 'prop-types';
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
        [name: string]: BaseInput.BaseInput<BaseInput.BaseInputProps<any>, BaseInput.BaseInputState, any>;
    };
}
export interface FormContext {
    register: (component: BaseInput.BaseInput<BaseInput.BaseInputProps<any>, BaseInput.BaseInputState, any>) => void;
    unregister: (component: BaseInput.BaseInput<BaseInput.BaseInputProps<any>, BaseInput.BaseInputState, any>) => void;
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
    private register;
    private unregister;
    getChildContext(): FormContext;
    disableInputs(): void;
    enableInputs(): void;
    touchAll(): void;
    unTouchAll(): void;
    componentDidMount(): void;
    private updateCallback;
    constructor(props: FormProps);
    render(): JSX.Element;
}
export default Form;
