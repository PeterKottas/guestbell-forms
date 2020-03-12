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

export interface CheckboxProps extends BaseInputProps<HTMLInputElement> {
  onChecked?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onChange?: never;
  value?: never;
  type?: string;
  checked?: boolean;
}

export interface CheckboxState extends BaseInputState {
  checked: boolean;
}

export class CheckboxRaw extends BaseInput<
  CheckboxProps,
  CheckboxState,
  HTMLInputElement
> {
  public static defaultProps = Object.assign({}, BaseInput.defaultProps, {
    checked: false,
  });

  constructor(props: CheckboxProps) {
    super(props, false);
    this.state = Object.assign(this.state, {
      checked: props.checked,
      isValid: props.required ? props.checked : true,
      errors:
        props.required && !props.checked
          ? [this.props.errorsTranslations.required]
          : [],
    });
    this.handleChecked = this.handleChecked.bind(this);
    this.subscribeSelf(props);
  }

  public componentDidUpdate() {
    if (this.props.checked !== this.state.checked) {
      this.setState({ checked: this.props.checked });
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
    if (!this.props.disabled) {
      this.props.onChecked && this.props.onChecked(e);
      this.setState({ checked: !this.state.checked });
      if (!this.state.checked) {
        this.setValid();
      } else {
        if (this.props.required) {
          this.setInvalid([this.props.errorsTranslations.required]);
        }
      }
    }
  }

  private renderInput() {
    return (
      <input
        {...(this.props.id && { id: this.props.id })}
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

export const Checkbox = withFormContext<CheckboxProps>(CheckboxRaw);

export default Checkbox;
