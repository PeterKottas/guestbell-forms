// Libs
import * as React from 'react';
import {
  BaseInputProps,
  BaseInputState,
  BaseInput,
  defaultBaseTranslations,
} from '../base/input/BaseInput';
import { Button, ButtonProps } from '../button/Button';
import { FormValidationSummaryRaw } from './../form/FormValidationSummary';
import SubmitValidationSummary from './subComponents/SubmitValidationSummary';
import { withThemeContext } from '../themeProvider/withThemeContext';
import { withFormValidationContext } from '../form/withFormValidationContext';
import { FormValidationContextProps } from '../form/FormValidationContext';

// Misc
export const defaultSubmitTranslations = {
  ...defaultBaseTranslations,
  hangOn: 'Hang on',
  needsFixing: '... needs fixing',
};

export type SubmitTranslations = Partial<typeof defaultSubmitTranslations>;

export type SubmitProps = BaseInputProps<never, SubmitTranslations> &
  ButtonProps & {
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
    validateForm?: boolean;
    disabledTitle?: string;
    showValidationSummaryTooltip?: boolean;
  } & FormValidationContextProps;

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
              this.props.formValidationContext &&
              !this.props.formValidationContext.isFormValid && (
                <FormValidationSummaryRaw
                  title={translations.hangOn}
                  footer={translations.needsFixing}
                  containerClassName=""
                  headerClassName="submitValidationSummary__header"
                  footerClassName="submitValidationSummary__footer"
                  Component={SubmitValidationSummary}
                  formValidationContext={this.props.formValidationContext}
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
      : this.props.validateForm && this.props.formValidationContext
      ? !this.props.formValidationContext.isFormValid
      : false;
  }
}

export const Submit = withThemeContext<
  SubmitProps,
  InstanceType<typeof SubmitRaw>
>(withFormValidationContext<SubmitProps>(SubmitRaw), 'submit');

export default Submit;
