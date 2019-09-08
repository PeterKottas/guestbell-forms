// Libs
import * as React from 'react';

// Misc
import InputGroup from '../inputGroup/InputGroup';
import {
  BaseInputProps,
  BaseInput,
  BaseInputState,
} from '../base/input/BaseInput';
var classNames = require('classnames');
import { withFormContext } from '../form/withFormContext';
import { OmitFormContext } from '../form/FormContext';
import { InnerRefProps } from './../../types/InnerRefProps';

export interface CheckboxRawProps extends BaseInputProps<HTMLInputElement> {
  onChecked?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onChange?: never;
  value?: never;
  type?: string;
  checked?: boolean;
}

export type CheckboxProps = OmitFormContext<CheckboxRawProps> &
  InnerRefProps<CheckboxRawProps>;

export interface CheckboxState extends BaseInputState {
  checked: boolean;
}

export class CheckboxRaw extends BaseInput<
  CheckboxRawProps,
  CheckboxState,
  HTMLInputElement
> {
  public static defaultProps = Object.assign({}, BaseInput.defaultProps, {
    checked: false,
  });

  constructor(props: CheckboxRawProps) {
    super(props, false);
    this.state = Object.assign(this.state, {
      checked: props.checked,
      isValid: props.required ? props.checked : true,
      errors: props.required && !props.checked ? ['Required'] : [],
    });
    this.handleChecked = this.handleChecked.bind(this);
    this.subscribeSelf(props);
  }

  public componentWillReceiveProps(newProps: CheckboxProps) {
    if (newProps.checked !== this.state.checked) {
      this.setState({ checked: newProps.checked });
    }
  }

  public render() {
    const containerClassName = classNames([
      'input__base checkbox-input',
      this.getValidationClass(),
      this.props.className,
      { ['checkbox-input--with-label']: Boolean(this.props.label) },
      { ['checkbox-input--disabled']: this.props.disabled },
    ]);
    return (
      <InputGroup title={this.props.title} tooltip={this.props.tooltip}>
        <div className={containerClassName} ref={this.containerRef}>
          {!this.props.label && this.renderTooltip(this.renderInput())}
          {this.renderDefaultValidation()}
          {this.props.label && (
            <label>
              {this.renderInput()}
              {this.renderLabel()}
            </label>
          )}
        </div>
      </InputGroup>
    );
  }

  private handleChecked(e: React.ChangeEvent<HTMLInputElement>) {
    this.props.onChecked && this.props.onChecked(e);
    this.setState({ checked: !this.state.checked });
    if (!this.state.checked) {
      this.setValid();
    } else {
      if (this.props.required) {
        this.setInvalid(['Required']);
      }
    }
  }

  private renderInput() {
    return (
      <input
        {...(this.props.id && { id: this.props.id })}
        disabled={this.getDisabled()}
        type="checkbox"
        required={this.props.required}
        checked={this.state.checked}
        onChange={this.handleChecked}
        onBlur={this.handleBlur}
        onFocus={this.handleFocus}
      />
    );
  }
}

export const Checkbox = withFormContext<CheckboxRawProps, CheckboxProps>(
  CheckboxRaw
);

export default Checkbox;
