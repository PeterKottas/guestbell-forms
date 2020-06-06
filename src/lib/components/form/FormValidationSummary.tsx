import * as React from 'react';
import guid from '../utils/Guid';
import { withFormContext } from './withFormContext';
import { FormContextProps, FormComponentContextState } from './FormContext';
import { Button } from './../button/Button';
var classNames = require('classnames');

import * as ArrowIcon from 'material-design-icons/maps/svg/production/ic_my_location_24px.svg';

export interface FormValidationSummaryComponentProps {
  componentsWithErrors: FormComponentContextState[];
}

export type FormValidationSummaryProps = {
  containerClassName?: string;
  headerClassName?: string;
  footerClassName?: string;
  title?: string | JSX.Element;
  footer?: string | JSX.Element;
  Component?:
    | React.ComponentType<FormValidationSummaryComponentProps>
    | React.StatelessComponent<FormValidationSummaryComponentProps>;
} & FormContextProps;

export interface FormValidationSummaryState {}

export const DefaultComponent: React.FC<FormValidationSummaryComponentProps> = props => (
  <React.Fragment>
    {props.componentsWithErrors.map((component, index) => {
      return (
        <div key={index} className="formValidationSummary__item">
          <div className="formValidationSummary__item__header">
            {component.validation.name ? component.validation.name : 'unknown'}
          </div>
          <div className="formValidationSummary__item__errors">
            {component.validation.errors &&
              component.validation.errors.map((err, errIndex) => (
                <span
                  className="formValidationSummary__item__error"
                  key={errIndex}
                >
                  {err}
                </span>
              ))}
          </div>
          <div style={{ flex: 'auto' }} />
          {component.componentApi &&
            component.componentApi.focus &&
            component.componentApi.scrollTo && (
              <Button
                icon={true}
                className="formValidationSummary__item__locate-button"
                circular={true}
                type="error"
                small={true}
                blank={true}
                onClick={() => {
                  component.componentApi.scrollTo();
                  component.componentApi.focus();
                }}
              >
                <ArrowIcon />
              </Button>
            )}
        </div>
      );
    })}
  </React.Fragment>
);

export class FormValidationSummaryRaw extends React.PureComponent<
  FormValidationSummaryProps,
  FormValidationSummaryState
> {
  public static defaultProps = {
    title: 'Hang on',
    footer: '... needs fixing',
    Component: DefaultComponent,
    containerClassName: 'formValidationSummary',
    headerClassName: 'formValidationSummary__header',
    footerClassName: 'formValidationSummary__footer',
  };

  public componentId = guid();

  public render() {
    const componentsWithErrors = this.props.formContext
      ? Object.keys(this.props.formContext.components)
          .map(key => this.props.formContext.components[key])
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
    const containerClassName = classNames(this.props.containerClassName);
    const headerClassName = classNames(this.props.headerClassName);
    const footerClassName = classNames(this.props.footerClassName);
    return (
      componentsWithErrors.length > 0 && (
        <div className={containerClassName}>
          {this.props.title && (
            <div className={headerClassName}>{this.props.title}</div>
          )}
          <this.props.Component componentsWithErrors={componentsWithErrors} />
          {this.props.footer && (
            <div className={footerClassName}>{this.props.footer}</div>
          )}
        </div>
      )
    );
  }
}

export const FormValidationSummary = withFormContext<
  FormValidationSummaryProps
>(FormValidationSummaryRaw);
