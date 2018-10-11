// Libs
import * as React from 'react';

// Misc
import { FormContextState, FormComponentContextState, FormContextProvider, ComponentsDict } from './FormContext';

export interface FormProps {
    className?: string;
    noValidate?: boolean;
    onSubmit?: () => void;
    extraComponents?: ComponentsDict;
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
                isFormValid: true,
                updateCallback: this.updateCallback,
                disableComponents: this.disableComponents,
                enableComponents: this.enableComponents,
                components: {}
            },
        };
    }

    public disableComponents() {
        const components = { ...this.state.contextState.components, ...this.props.extraComponents };
        Object.keys(components).forEach(key => {
            const component = components[key];
            component && component.componentApi && component.componentApi.disableComponent && component.componentApi.disableComponent();
        });
    }

    public enableComponents() {
        const components = { ...this.state.contextState.components, ...this.props.extraComponents };
        Object.keys(components).forEach(key => {
            const component = components[key];
            component && component.componentApi && component.componentApi.enableComponent && component.componentApi.enableComponent();
        });
    }

    public touchAll() {
        const components = { ...this.state.contextState.components, ...this.props.extraComponents };
        Object.keys(components).forEach(key => {
            const component = components[key];
            component && component.componentApi && component.componentApi.touch && component.componentApi.touch();
        });
    }

    public unTouchAll() {
        const components = { ...this.state.contextState.components, ...this.props.extraComponents };
        Object.keys(components).forEach(key => {
            const component = components[key];
            component && component.componentApi && component.componentApi.unTouch && component.componentApi.unTouch();
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
                <FormContextProvider value={this.mergeContext()}>
                    {this.props.children}
                </FormContextProvider>
            </form>
        );
    }

    private mergeContext(): FormContextState {
        if (!this.props.extraComponents) {
            return this.state.contextState;
        }
        const isFormValid = this.state.contextState.isFormValid && this.getIsFormValid(this.props.extraComponents);
        return {
            ...this.state.contextState,
            components: {
                ...this.state.contextState.components,
                ...this.props.extraComponents
            },
            isFormValid
        };
    }

    private onSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        this.props.onSubmit && this.props.onSubmit();
    }

    private subscribe(componentId: string, componentState: FormComponentContextState) {
        if (componentId) {
            this.setState(previousState => {
                let components = Object.assign({}, previousState.contextState.components);
                if (componentState) {
                    components[componentId] = componentState;
                }
                let isFormValid = this.getIsFormValid(components);
                return {
                    contextState: {
                        ...previousState.contextState,
                        components,
                        isFormValid
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
                let isFormValid = this.getIsFormValid(components);
                return {
                    contextState: {
                        ...previousState.contextState,
                        components,
                        isFormValid
                    },
                };
            });
        }
    }

    private getIsFormValid(components: ComponentsDict = this.state.contextState.components, initialValid: boolean = true): boolean {
        let isFormValid = initialValid;
        Object.keys(components).forEach(key => {
            const component = components[key];
            if (component && component.validation && !component.validation.isValid) {
                isFormValid = false;
            }
        });
        return isFormValid;
    }

    private updateCallback(componentId: string, componentState: FormComponentContextState) {
        this.setState(previousState => {
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

            }
            let isFormValid = this.getIsFormValid(components);
            return {
                contextState: {
                    ...this.state.contextState,
                    components,
                    isFormValid
                },
            };
        });
    }
}

export default Form;