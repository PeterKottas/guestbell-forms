// Styles
import './form.scss';

// Libs
import * as React from 'react';

// Misc
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
    components: { [name: string]: BaseInput<BaseInputProps<AllowedHtmlElements>, BaseInputState, AllowedHtmlElements> };
}

export interface FormContext {
    register: (component: BaseInput<BaseInputProps<AllowedHtmlElements>, BaseInputState, AllowedHtmlElements>) => void;
    unregister: (component: BaseInput<BaseInputProps<AllowedHtmlElements>, BaseInputState, AllowedHtmlElements>) => void;
    isFormValid: () => boolean;
    updateCallback: (isComponentValid: boolean, inputId: string) => void;
    disableInputs: () => void;
    enableInputs: () => void;
}

export const FormContextType = {
    register: PropTypes.func,
    unregister: PropTypes.func,
    isFormValid: PropTypes.func,
    updateCallback: PropTypes.func,
    enableInputs: PropTypes.func,
    disableInputs: PropTypes.func
};

export class Form extends React.Component<FormProps, FormState> {

    public static defaultProps = {
        noValidate: false,
        showExpandAll: true
    };

    public static childContextTypes = FormContextType;

    constructor(props: FormProps) {
        super(props);
        this.register = this.register.bind(this);
        this.unregister = this.unregister.bind(this);
        this.updateCallback = this.updateCallback.bind(this);
        this.disableInputs = this.disableInputs.bind(this);
        this.enableInputs = this.enableInputs.bind(this);
        this.state = {
            isFormValid: false,
            components: {}
        };
    }

    public getChildContext(): FormContext {
        return {
            register: this.register,
            unregister: this.unregister,
            isFormValid: () => this.state.isFormValid,
            updateCallback: this.updateCallback,
            disableInputs: this.disableInputs,
            enableInputs: this.enableInputs
        };
    }

    public disableInputs() {
        Object.keys(this.state.components).forEach(key => {
            const component = this.state.components[key];
            component.disableInput();
        });
    }

    public enableInputs() {
        Object.keys(this.state.components).forEach(key => {
            const component = this.state.components[key];
            component.enableInput();
        });
    }

    public touchAll() {
        Object.keys(this.state.components).forEach(key => {
            const component = this.state.components[key];
            component.touch();
        });
    }

    public unTouchAll() {
        Object.keys(this.state.components).forEach(key => {
            const component = this.state.components[key];
            component.unTouch();
        });
    }

    public componentDidMount() {
        setTimeout(() => this.updateCallback(), 1);
    }

    public render() {
        return <form
            noValidate={true}
            role="form"
            className={`input__form validation-form ${(this.props.className ? this.props.className : '')}`}
            onSubmit={(e) => e.preventDefault() || this.props.onSubmit && this.props.onSubmit()}
        >
            {this.props.children}
        </form>;
    }

    private register(component: BaseInput<BaseInputProps<AllowedHtmlElements>, BaseInputState, AllowedHtmlElements>) {
        if (component) {
            this.setState(previousState => {
                let newComponents = Object.assign({}, previousState.components);
                newComponents[component.inputId] = component;
                return {
                    components: newComponents
                };
            }, () => this.updateCallback());
        }
    }

    private unregister(component: BaseInput<BaseInputProps<AllowedHtmlElements>, BaseInputState, AllowedHtmlElements>) {
        if (component) {
            this.setState(previousState => {
                let newComponents = Object.assign({}, previousState.components);
                delete newComponents[component.inputId];
                return {
                    components: newComponents
                };
            });
        }
    }

    private updateCallback(isComponentValid: boolean = true, inputId: string = '') {
        let valid = false;
        if (isComponentValid) {
            valid = true;
            Object.keys(this.state.components).forEach(key => {
                const component = this.state.components[key];
                if (component && component.inputId !== inputId && component.state && !component.state.valid) {
                    valid = false;
                }
            });
        }
        if (valid !== this.state.isFormValid) {
            this.setState({ isFormValid: valid });
        }
    }
}

export default Form;