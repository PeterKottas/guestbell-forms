// Libs
import * as React from 'react';

// Misc
import { FormContextState, FormComponentContextState, FormContextProvider } from './FormContext';

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
    contextState: FormContextState;
}

export class Form extends React.PureComponent<FormProps, FormState> {

    public static defaultProps = {
        noValidate: false,
        showExpandAll: true
    };

    constructor(props: FormProps) {
        super(props);
        this.subscribe = this.subscribe.bind(this);
        this.unSubscribe = this.unSubscribe.bind(this);
        this.updateCallback = this.updateCallback.bind(this);
        this.disableComponents = this.disableComponents.bind(this);
        this.enableComponents = this.enableComponents.bind(this);
        this.state = {
            contextState: {
                subscribe: this.subscribe,
                unSubscribe: this.unSubscribe,
                isFormValid: false,
                updateCallback: this.updateCallback,
                disableComponents: this.disableComponents,
                enableComponents: this.enableComponents,
                components: {}
            },
        };
    }

    public disableComponents() {
        Object.keys(this.state.contextState.components).forEach(key => {
            const component = this.state.contextState.components[key];
            component.componentApi.disableComponent();
        });
    }

    public enableComponents() {
        Object.keys(this.state.contextState.components).forEach(key => {
            const component = this.state.contextState.components[key];
            component.componentApi.enableComponent();
        });
    }

    public touchAll() {
        Object.keys(this.state.contextState.components).forEach(key => {
            const component = this.state.contextState.components[key];
            component.componentApi.touch();
        });
    }

    public unTouchAll() {
        Object.keys(this.state.contextState.components).forEach(key => {
            const component = this.state.contextState.components[key];
            component.componentApi.unTouch();
        });
    }

    public render() {
        return (
            <form
                noValidate={true}
                role="form"
                className={`input__form validation-form ${(this.props.className ? this.props.className : '')}`}
                onSubmit={this.onSubmit}
            >
                <FormContextProvider value={this.state.contextState}>
                    {this.props.children}
                </FormContextProvider>
            </form>
        );
    }

    private onSubmit = (e: React.FormEvent) => e.preventDefault() || this.props.onSubmit && this.props.onSubmit();

    private subscribe(componentId: string, componentState: FormComponentContextState) {
        if (componentId) {
            this.setState(previousState => {
                let components = Object.assign({}, previousState.contextState.components);
                if (componentState) {
                    components[componentId] = componentState;
                }
                return {
                    contextState: {
                        ...previousState.contextState,
                        components
                    },
                };
            });
        }
    }

    private unSubscribe(componentId: string) {
        if (componentId) {
            this.setState(previousState => {
                let components = Object.assign({}, previousState.contextState.components);
                delete components[componentId];
                return {
                    contextState: { ...previousState.contextState, components },
                };
            });
        }
    }

    private updateCallback(componentId: string, componentState: FormComponentContextState) {
        this.setState(previousState => {
            let valid = componentState.validation && componentState.validation.isValid;
            let components = Object.assign({}, previousState.contextState.components);
            const previousComponent = components[componentId];
            if (componentState && previousComponent) {
                components[componentId] = {
                    ...previousComponent,
                    ...componentState,
                    validation: {
                        ...previousComponent.validation,
                        ...componentState.validation
                    },
                };
                Object.keys(components).forEach(key => {
                    const component = components[key];
                    if (component && component.componentId !== componentId && component.validation && !component.validation.isValid) {
                        valid = false;
                    }
                });
            }
            return {
                contextState: {
                    ...this.state.contextState,
                    components,
                    isFormValid: valid
                },
            };
        });
    }
}

export default Form;