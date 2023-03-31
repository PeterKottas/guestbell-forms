// Libs
import * as React from 'react';

// Misc
import {
  FormContextState,
  FormComponentContextState,
  FormContextProvider,
  ComponentsDict,
} from './FormContext';
import { withThemeContext } from '../themeProvider/withThemeContext';
import { ThemeContextProps } from '../themeProvider/ThemeContext';
import { ValidationError } from '../base/input';

export type FormProps = React.PropsWithChildren<
  ThemeContextProps & {
    id?: string;
    className?: string;
    noValidate?: boolean;
    onSubmit?: () => void;
    extraComponents?: ComponentsDict;
    component?: keyof JSX.IntrinsicElements;
    onValidChanged?: (isValid: boolean, errors?: ValidationError[]) => void;
  }
>;

export interface FormState {
  contextState: FormContextState;
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
      contextState: {
        subscribe: this.subscribe,
        unSubscribe: this.unSubscribe,
        isFormValid: true,
        updateCallback: this.updateCallback,
        disableComponents: this.disableComponents,
        enableComponents: this.enableComponents,
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
      this.state.contextState?.isFormValid !==
      prevState?.contextState?.isFormValid
    ) {
      const componentsWithErrors = this.state.contextState
        ? Object.keys(this.state.contextState.components)
            .map(key => this.state.contextState.components[key])
            .filter(component => {
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
        this.state.contextState?.isFormValid,
        componentsWithErrors.reduce(
          (prev, current) => [...prev, ...current.validation.errors],
          []
        )
      );
    }
  }

  public disableComponents() {
    const components = {
      ...this.state.contextState.components,
      ...this.props.extraComponents,
    };
    Object.keys(components).forEach(key => {
      const component = components[key];
      component &&
        component.componentApi &&
        component.componentApi.disableComponent &&
        component.componentApi.disableComponent();
    });
  }

  public enableComponents() {
    const components = {
      ...this.state.contextState.components,
      ...this.props.extraComponents,
    };
    Object.keys(components).forEach(key => {
      const component = components[key];
      component &&
        component.componentApi &&
        component.componentApi.enableComponent &&
        component.componentApi.enableComponent();
    });
  }

  public touchAll() {
    const components = {
      ...this.state.contextState.components,
      ...this.props.extraComponents,
    };
    Object.keys(components).forEach(key => {
      const component = components[key];
      component &&
        component.componentApi &&
        component.componentApi.touch &&
        component.componentApi.touch();
    });
  }

  public unTouchAll() {
    const components = {
      ...this.state.contextState.components,
      ...this.props.extraComponents,
    };
    Object.keys(components).forEach(key => {
      const component = components[key];
      component &&
        component.componentApi &&
        component.componentApi.unTouch &&
        component.componentApi.unTouch();
    });
  }

  public render() {
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
        <FormContextProvider value={this.mergeContext()}>
          {this.props.children}
        </FormContextProvider>
      </this.props.component>
    );
  }

  private mergeContext(): FormContextState {
    if (!this.props.extraComponents) {
      return this.state.contextState;
    }
    const isFormValid =
      this.state.contextState.isFormValid &&
      this.getIsFormValid(this.props.extraComponents);
    return {
      ...this.state.contextState,
      components: {
        ...this.state.contextState.components,
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
      this.setState(previousState => {
        let components = Object.assign(
          {},
          previousState.contextState.components
        );
        if (componentState) {
          components[componentId] = componentState;
        }
        let isFormValid = this.getIsFormValid(components);
        return {
          contextState: {
            ...previousState.contextState,
            components,
            isFormValid,
          },
        };
      });
    }
  }

  private unSubscribe(componentId: string) {
    if (componentId) {
      this.setState(previousState => {
        let components = Object.assign(
          {},
          previousState.contextState.components
        );
        delete components[componentId];
        let isFormValid = this.getIsFormValid(components);
        return {
          contextState: {
            ...previousState.contextState,
            components,
            isFormValid,
          },
        };
      });
    }
  }

  private getIsFormValid(
    components: ComponentsDict = this.state.contextState.components,
    initialValid: boolean = true
  ): boolean {
    let isFormValid = initialValid;
    Object.keys(components).forEach(key => {
      const component = components[key];
      if (component && component.validation && !component.validation.isValid) {
        isFormValid = false;
      }
    });
    return isFormValid;
  }

  private updateCallback(
    componentId: string,
    componentState: FormComponentContextState
  ) {
    this.setState(previousState => {
      let components = Object.assign({}, previousState.contextState.components);
      const previousComponent = components[componentId];
      if (componentState && previousComponent) {
        components[componentId] = {
          ...previousComponent,
          ...componentState,
          validation: {
            ...previousComponent.validation,
            ...componentState.validation,
          },
        };
      }
      let isFormValid = this.getIsFormValid(components);
      return {
        contextState: {
          ...this.state.contextState,
          components,
          isFormValid,
        },
      };
    });
  }
}

export default withThemeContext<FormProps, InstanceType<typeof Form>>(
  Form,
  'form'
);
