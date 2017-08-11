//Styles
import './form.scss';

//Libs
import * as React from 'react';

//Misc
import * as BaseInput from '../input/subComponents/base/BaseInput';
import * as PropTypes from 'prop-types';

export interface FormValue {
    value: number | string;
    label?: string;
}

export interface FormProps {
    className?: string;
    noValidate?: boolean;
}

export interface FormState {
    isFormValid: boolean;
}

export interface FormContext {
    register: (component: BaseInput.BaseInput<BaseInput.BaseInputProps, BaseInput.BaseInputState>) => void;
    unregister: (component: BaseInput.BaseInput<BaseInput.BaseInputProps, BaseInput.BaseInputState>) => void;
    isFormValid: () => boolean;
    updateCallback: (isComponentValid: boolean, inputId: string) => void;
    disableInputs: () => void;
    enableInputs: () => void;
}

export const FormContextType = {
    register: PropTypes.func.isRequired,
    unregister: PropTypes.func.isRequired,
    isFormValid: PropTypes.func.isRequired,
    updateCallback: PropTypes.func.isRequired,
    enableInputs: PropTypes.func.isRequired,
    disableInputs: PropTypes.func.isRequired
};

export class Form extends React.Component<FormProps, FormState> {
    private components: { [name: string]: BaseInput.BaseInput<BaseInput.BaseInputProps, BaseInput.BaseInputState> };

    public static defaultProps = {
        noValidate: false
    }

    static childContextTypes = FormContextType;

    private register(component: BaseInput.BaseInput<BaseInput.BaseInputProps, BaseInput.BaseInputState>) {
        this.components[component.inputId] = component;
        this.updateCallback();
    };

    private unregister(component: BaseInput.BaseInput<BaseInput.BaseInputProps, BaseInput.BaseInputState>) {
        delete this.components[component.inputId];
    };

    private getChildContext(): FormContext {
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
        Object.keys(this.components).forEach(key => {
            const component = this.components[key];
            component.disableInput();
        });
    }

    public enableInputs() {
        Object.keys(this.components).forEach(key => {
            const component = this.components[key];
            component.enableInput();
        });
    }

    public touchAll() {
        Object.keys(this.components).forEach(key => {
            const component = this.components[key];
            component.touch();
        });
    }

    public unTouchAll() {
        Object.keys(this.components).forEach(key => {
            const component = this.components[key];
            component.unTouch();
        });
    }

    componentDidMount() {
        setTimeout(() => this.updateCallback(), 1);
    }

    private updateCallback(isComponentValid: boolean = true, inputId: string = '') {
        let valid = false;
        if (isComponentValid) {
            valid = true;
            Object.keys(this.components).forEach(key => {
                const component = this.components[key];
                if (component.inputId != inputId && !component.state.valid) {
                    valid = false;
                }
            });
        }
        this.setState({ isFormValid: valid });
    }

    constructor(props: FormProps) {
        super();
        this.components = {};
        this.register = this.register.bind(this);
        this.unregister = this.unregister.bind(this);
        this.updateCallback = this.updateCallback.bind(this);
        this.disableInputs = this.disableInputs.bind(this);
        this.enableInputs = this.enableInputs.bind(this);
        this.state = {
            isFormValid: false
        };
    }

    public render() {
        return <form noValidate={true} role="form" className={`validation-form ${(this.props.className ? this.props.className : '')}`}>
            {this.props.children}
        </form>;
    }
}

export default Form;

