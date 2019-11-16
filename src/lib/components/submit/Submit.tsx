// Libs
import * as React from 'react';
import {
  BaseInputProps,
  BaseInputState,
  BaseInput,
} from '../base/input/BaseInput';
import { Button, ButtonProps } from '../button/Button';
import { withFormContext } from '../form/withFormContext';
import { OmitFormContext } from '../form/FormContext';
import { FormValidationSummaryRaw } from './../form/FormValidationSummary';
import SubmitValidationSummary from './subComponents/SubmitValidationSummary';

// Misc

type SubmitRawProps = BaseInputProps<never> &
  ButtonProps & {
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
    validateForm?: boolean;
    disabledTitle?: string;
    showValidationSummaryTooltip?: boolean;
  };

export type SubmitProps = OmitFormContext<SubmitRawProps>;

export interface SubmitState extends BaseInputState {}

export class SubmitRaw extends BaseInput<SubmitRawProps, SubmitState, never> {
  public static defaultProps = Object.assign({}, BaseInput.defaultProps, {
    validateForm: true,
    ignoreContext: true,
    reRendersWhenContextChanges: true,
    showValidationSummaryTooltip: true,
  });

  constructor(props: SubmitRawProps) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  public render() {
    const disabled = this.isDisabled();
    return (
      <Button
        {...this.props}
        className={`${this.props.className ? this.props.className : ''}`}
        onClick={this.handleClick}
        disabled={disabled}
        buttonProps={{
          ...this.props.buttonProps,
          type: 'submit',
          title: disabled
            ? this.props.disabledTitle
            : this.props.buttonProps && this.props.buttonProps.title,
        }}
        tooltip={
          this.props.tooltip
            ? this.props.tooltip
            : this.props.showValidationSummaryTooltip &&
              !this.props.formContext.isFormValid && (
                <FormValidationSummaryRaw
                  title="Hang on"
                  footer="... needs fixing"
                  containerClassName=""
                  headerClassName="submitValidationSummary__header"
                  footerClassName="submitValidationSummary__footer"
                  Component={SubmitValidationSummary}
                  formContext={this.props.formContext}
                />
              )
        }
        tooltipProps={{
          theme: 'validation',
          ...this.props.tooltipProps,
        }}
      >
        {this.props.children}
      </Button>
    );
  }

  private handleClick(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    this.props.onClick && this.props.onClick(e);
  }

  private isDisabled() {
    const disabled = this.getDisabled();
    return disabled
      ? disabled
      : this.props.validateForm && this.props.formContext
      ? !this.props.formContext.isFormValid
      : false;
  }
}

export const Submit = withFormContext<SubmitRawProps, SubmitProps>(SubmitRaw);

export default Submit;
