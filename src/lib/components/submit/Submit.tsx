// Libs
import * as React from 'react';
import {
  BaseInputProps,
  BaseInputState,
  BaseInput,
  defaultBaseTranslations,
} from '../base/input/BaseInput';
import { Button, ButtonProps } from '../button/Button';
import { withFormContext } from '../form/withFormContext';
import { FormValidationSummaryRaw } from './../form/FormValidationSummary';
import SubmitValidationSummary from './subComponents/SubmitValidationSummary';

// Misc
export const defaultSubmitTranslations = {
  ...defaultBaseTranslations,
  hangOn: 'Hang on',
  needsFixing: '... needs fixing',
};

export type SubmitTranslations = Partial<typeof defaultSubmitTranslations>;

export type SubmitProps = BaseInputProps<never> &
  ButtonProps & {
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
    validateForm?: boolean;
    disabledTitle?: string;
    showValidationSummaryTooltip?: boolean;
  };

export interface SubmitState extends BaseInputState {}

export class SubmitRaw extends BaseInput<
  SubmitProps,
  SubmitState,
  never,
  SubmitTranslations
> {
  public static defaultProps = Object.assign({}, BaseInput.defaultProps, {
    validateForm: true,
    ignoreContext: true,
    reRendersWhenContextChanges: true,
    showValidationSummaryTooltip: true,
    preventsDefault: true,
  });

  constructor(props: SubmitProps) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  public render() {
    const disabled = this.isDisabled();
    const translations = this.getTranslations(defaultSubmitTranslations);
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
                  title={translations.hangOn}
                  footer={translations.needsFixing}
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
    if (this.props.preventsDefault) {
      e.preventDefault();
    }
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

export const Submit = withFormContext<SubmitProps>(SubmitRaw);

export default Submit;
