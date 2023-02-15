// Libs
import * as React from 'react';
import classNames from 'classnames';
import { withFormContext } from '../form/withFormContext';
import { FormContextProps } from '../form/FormContext';
import { SubmitProps } from '../submit';
import { Omit } from '../utils/Typescript';
import { SubmitRaw } from './../submit/Submit';
import { withThemeContext } from '../themeProvider/withThemeContext';

// Misc

export enum DynamicSubmitMode {
  Normal,
  Submitting,
  Error,
  Success,
}

export type DynamicSubmitProps = Omit<SubmitProps, 'onClick'> & {
  onClick?: (
    e: React.MouseEvent<HTMLButtonElement>,
    submitting?: () => void,
    error?: () => void,
    success?: () => void,
    reset?: () => void
  ) => void;
  submittingChildren?: JSX.Element | string;
  errorChildren?: JSX.Element | string;
  successChildren?: JSX.Element | string;

  submittingClassName?: string;
  errorClassName?: string;
  successClassName?: string;
  normalClassName?: string;

  submitDisablesInputs?: boolean;
  resetEnablesInputs?: boolean;
} & FormContextProps;

export interface DynamicSubmitState {
  buttonState: DynamicSubmitMode;
}

export class DynamicSubmitRaw extends React.PureComponent<
  DynamicSubmitProps,
  DynamicSubmitState
> {
  public static defaultProps = Object.assign(
    {},
    { validateForm: true, submitDisablesInputs: true, resetEnablesInputs: true }
  );

  constructor(props: DynamicSubmitProps) {
    super(props);
    this.state = {
      buttonState: DynamicSubmitMode.Normal,
    };
    this.handleClick = this.handleClick.bind(this);
    this.submitting = this.submitting.bind(this);
    this.error = this.error.bind(this);
    this.success = this.success.bind(this);
    this.reset = this.reset.bind(this);
  }

  public render() {
    const buttonClassName = classNames(
      this.props.className,
      this.renderClassName()
    );
    return (
      <SubmitRaw
        {...this.props}
        className={buttonClassName}
        onClick={this.handleClick}
      >
        {this.renderChildren()}
      </SubmitRaw>
    );
  }

  private handleClick(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    this.props.submitDisablesInputs &&
      this.props.formContext.disableComponents();
    this.props.onClick &&
      this.props.onClick(
        e,
        this.submitting,
        this.error,
        this.success,
        this.reset
      );
  }

  private submitting() {
    this.setState({ buttonState: DynamicSubmitMode.Submitting });
  }

  private error() {
    this.setState({ buttonState: DynamicSubmitMode.Error });
  }

  private success() {
    this.setState({ buttonState: DynamicSubmitMode.Success });
  }

  private reset() {
    this.props.resetEnablesInputs && this.props.formContext.enableComponents();
    this.setState({ buttonState: DynamicSubmitMode.Normal });
  }

  private renderChildren() {
    switch (this.state.buttonState) {
      case DynamicSubmitMode.Error:
        return this.props.errorChildren
          ? this.props.errorChildren
          : this.props.children;
      case DynamicSubmitMode.Submitting:
        return this.props.submittingChildren
          ? this.props.submittingChildren
          : this.props.children;
      case DynamicSubmitMode.Success:
        return this.props.successChildren
          ? this.props.successChildren
          : this.props.children;
      default:
        return this.props.children;
    }
  }

  private renderClassName() {
    switch (this.state.buttonState) {
      case DynamicSubmitMode.Error:
        return this.props.errorClassName ? this.props.errorClassName : '';
      case DynamicSubmitMode.Submitting:
        return this.props.submittingClassName
          ? this.props.submittingClassName
          : '';
      case DynamicSubmitMode.Success:
        return this.props.successClassName ? this.props.successClassName : '';
      default:
        return this.props.normalClassName ? this.props.normalClassName : '';
    }
  }
}

export const DynamicSubmit = withThemeContext<
  DynamicSubmitProps,
  InstanceType<typeof DynamicSubmitRaw>
>(withFormContext<DynamicSubmitProps>(DynamicSubmitRaw), 'dynamicSubmit');

export default DynamicSubmit;
