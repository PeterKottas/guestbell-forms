// Styles
import './form.scss';

// Libs
import * as React from 'react';

// Misc
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
    components: { [name: string]: BaseInput.BaseInput<BaseInput.BaseInputProps, BaseInput.BaseInputState> };
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

    public static defaultProps = {
        noValidate: false,
        showExpandAll: true
    }

    public static childContextTypes = FormContextType;

    private register(component: BaseInput.BaseInput<BaseInput.BaseInputProps, BaseInput.BaseInputState>) {
        if (component) {
            this.setState(previousState => {
                let newComponents = Object.assign({}, previousState.components);
                newComponents[component.inputId] = component;
                return {
                    components: newComponents
                };
            }, () => this.updateCallback());
        }
    };

    private unregister(component: BaseInput.BaseInput<BaseInput.BaseInputProps, BaseInput.BaseInputState>) {
        if (component) {
            this.setState(previousState => {
                let newComponents = Object.assign({}, previousState);
                delete newComponents[component.inputId];
                return {
                    components: newComponents
                };
            });
        }
    };

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

    componentDidMount() {
        setTimeout(() => this.updateCallback(), 1);
    }

    private updateCallback(isComponentValid: boolean = true, inputId: string = '') {
        let valid = false;
        if (isComponentValid) {
            valid = true;
            Object.keys(this.state.components).forEach(key => {
                const component = this.state.components[key];
                if (component && component.inputId != inputId && component.state && !component.state.valid) {
                    valid = false;
                }
            });
        }
        this.setState({ isFormValid: valid });
    }

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

    public render() {
        return <form noValidate={true} role="form" className={`validation-form ${(this.props.className ? this.props.className : '')}`}>
            {this.props.children}
        </form>;
    }
}

export default Form;

