// Libs
import * as React from 'react';

// Misc
import {
  FormContextState,
  FormContextProvider,
  ComponentsDict,
} from './FormContext';
import { withThemeContext } from '../themeProvider/withThemeContext';
import { ThemeContextProps } from '../themeProvider/ThemeContext';
import {
  FormComponentContextState,
  FormComponentValidationContextStateBase,
  FormValidationContextProvider,
  FormValidationContextState,
} from './FormValidationContext';

export type FormProps = React.PropsWithChildren<
  ThemeContextProps & {
    id?: string;
    className?: string;
    noValidate?: boolean;
    onSubmit?: () => void;
    extraComponents?: ComponentsDict;
    component?: keyof JSX.IntrinsicElements;
    onValidChanged?: (
      isValid: boolean,
      errors?: FormComponentContextState[]
    ) => void;
  }
>;

export interface FormState {
  formContext: FormContextState;
  formValidationContext: FormValidationContextState;
}

export class Form extends React.PureComponent<FormProps, FormState> {
  public static defaultProps = {
    noValidate: false,
    showExpandAll: true,
    component: 'form' as keyof JSX.IntrinsicElements,
  };

  constructor(props: FormProps) {
    super(props);
    this.subscribe = this.subscribe.bind(this);
    this.unSubscribe = this.unSubscribe.bind(this);
    this.updateCallback = this.updateCallback.bind(this);
    this.disableComponents = this.disableComponents.bind(this);
    this.enableComponents = this.enableComponents.bind(this);
    this.state = {
      formContext: {
        subscribe: this.subscribe,
        unSubscribe: this.unSubscribe,
        updateCallback: this.updateCallback,
        disableComponents: this.disableComponents,
        enableComponents: this.enableComponents,
      },
      formValidationContext: {
        isFormValid: true,
        components: {},
      },
    };
  }

  public componentDidUpdate(
    prevProps: Readonly<FormProps>,
    prevState: Readonly<FormState>,
    snapshot?: any
  ): void {
    if (
      this.state.formValidationContext?.isFormValid !==
      prevState?.formValidationContext?.isFormValid
    ) {
      const componentsWithErrors = this.state.formContext
        ? Object.keys(this.state.formValidationContext.components)
            .map((key) => this.state.formValidationContext.components[key])
            .filter((component) => {
              if (!component.validation.isValid && !component.validation.name) {
                console.warn(
                  component,
                  'Has validation error. FormValidationSummary is present but the component has no validation name'
                );
              }
              return !component.validation.isValid;
            })
        : [];
      this.props.onValidChanged?.(
        this.state.formValidationContext?.isFormValid,
        componentsWithErrors
      );
    }
  }

  public disableComponents() {
    const components = {
      ...this.state.formValidationContext.components,
      ...this.props.extraComponents,
    };
    Object.keys(components).forEach((key) => {
      const component = components[key];
      component &&
        component.componentApi &&
        component.componentApi.disableComponent &&
        component.componentApi.disableComponent();
    });
  }

  public enableComponents() {
    const components = {
      ...this.state.formValidationContext.components,
      ...this.props.extraComponents,
    };
    Object.keys(components).forEach((key) => {
      const component = components[key];
      component &&
        component.componentApi &&
        component.componentApi.enableComponent &&
        component.componentApi.enableComponent();
    });
  }

  public touchAll() {
    const components = {
      ...this.state.formValidationContext.components,
      ...this.props.extraComponents,
    };
    Object.keys(components).forEach((key) => {
      const component = components[key];
      component &&
        component.componentApi &&
        component.componentApi.touch &&
        component.componentApi.touch();
    });
  }

  public unTouchAll() {
    const components = {
      ...this.state.formValidationContext.components,
      ...this.props.extraComponents,
    };
    Object.keys(components).forEach((key) => {
      const component = components[key];
      component &&
        component.componentApi &&
        component.componentApi.unTouch &&
        component.componentApi.unTouch();
    });
  }

  public render() {
    const validationContext = this.mergeContext();
    return (
      <this.props.component
        {...(this.props.id && { id: this.props.id })}
        noValidate={true}
        role="form"
        className={`input__form validation-form ${
          this.props.className ? this.props.className : ''
        }`}
        onSubmit={this.onSubmit}
      >
        <FormContextProvider value={this.state.formContext}>
          <FormValidationContextProvider value={validationContext}>
            {this.props.children}
          </FormValidationContextProvider>
        </FormContextProvider>
      </this.props.component>
    );
  }

  private mergeContext(): FormValidationContextState {
    if (!this.props.extraComponents) {
      return this.state.formValidationContext;
    }
    const isFormValid =
      this.state.formValidationContext.isFormValid &&
      this.getIsFormValid(this.props.extraComponents);
    return {
      ...this.state.formValidationContext,
      components: {
        ...this.state.formValidationContext.components,
        ...this.props.extraComponents,
      },
      isFormValid,
    };
  }

  private onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    this.props.onSubmit && this.props.onSubmit();
  };

  private subscribe(
    componentId: string,
    componentState: FormComponentContextState
  ) {
    if (componentId) {
      this.setState((previousState) => {
        let components = Object.assign(
          {},
          previousState.formValidationContext.components
        );
        if (componentState) {
          components[componentId] = componentState;
        }
        let isFormValid = this.getIsFormValid(components);
        return {
          formValidationContext: {
            ...previousState.formValidationContext,
            components,
            isFormValid,
          },
          formContext: previousState.formContext,
        };
      });
    }
  }

  private unSubscribe(componentId: string) {
    if (componentId) {
      this.setState((previousState) => {
        let components = Object.assign(
          {},
          previousState.formValidationContext.components
        );
        delete components[componentId];
        let isFormValid = this.getIsFormValid(components);
        return {
          formContext: previousState.formContext,
          formValidationContext: {
            ...previousState.formValidationContext,
            components,
            isFormValid,
          },
        };
      });
    }
  }

  private getIsFormValid(
    components: ComponentsDict = this.state.formValidationContext.components,
    initialValid: boolean = true
  ): boolean {
    let isFormValid = initialValid;
    Object.keys(components).forEach((key) => {
      const component = components[key];
      if (component && component.validation && !component.validation.isValid) {
        isFormValid = false;
      }
    });
    return isFormValid;
  }

  private updateCallback(
    componentId: string,
    componentState: FormComponentValidationContextStateBase
  ) {
    this.setState((previousState) => {
      let components = Object.assign(
        {},
        previousState.formValidationContext.components
      );
      const previousComponent = components[componentId];
      if (
        previousComponent &&
        previousComponent.validation &&
        previousComponent.validation.isValid === componentState.isValid &&
        previousComponent.validation.errors?.length ===
          componentState.errors?.length &&
        previousComponent.validation.errors?.every(
          (error, index) => error === componentState.errors?.[index]
        )
      ) {
        return previousState;
      }
      if (componentState && previousComponent) {
        components[componentId] = {
          ...previousComponent,
          validation: {
            ...previousComponent.validation,
            ...componentState,
          },
        };
      }
      let isFormValid = this.getIsFormValid(components);
      return {
        formValidationContext: {
          ...this.state.formValidationContext,
          components,
          isFormValid,
        },
        formContext: previousState.formContext,
      };
    });
  }
}

export default withThemeContext<FormProps, InstanceType<typeof Form>>(
  Form,
  'form'
);
