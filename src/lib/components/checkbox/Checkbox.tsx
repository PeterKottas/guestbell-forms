// Libs
import * as React from 'react';

// Misc
import InputGroup from '../inputGroup/InputGroup';
import {
  BaseInputProps,
  BaseInput,
  BaseInputState,
  defaultBaseTranslations,
} from '../base/input/BaseInput';
var classNames = require('classnames');
import { withFormContext } from '../form/withFormContext';
import { withThemeContext } from '../themeProvider/withThemeContext';

export interface CheckboxProps extends BaseInputProps<HTMLInputElement> {
  onChecked?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onChange?: never;
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
  }) as CheckboxProps;

  constructor(props: CheckboxProps) {
    super(props, false);
    this.state = Object.assign(this.state, {
      checked: props.checked,
      isValid: props.required ? props.checked : true,
      errors:
        props.required && !props.checked
          ? [this.getTranslations(defaultBaseTranslations).required]
          : [],
    });
    this.handleChecked = this.handleChecked.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.subscribeSelf(props);
  }

  public componentDidUpdate(oldProps: CheckboxProps) {
    if (this.props.checked !== this.state.checked) {
      this.setState({ checked: this.props.checked });
      if (this.props.checked) {
        this.setValid();
      } else {
        if (this.props.required) {
          this.setInvalid([
            this.getTranslations(defaultBaseTranslations).required,
          ]);
        }
      }
    }
    if (oldProps.required !== this.props.required) {
      if (this.props.required && !this.props.checked) {
        this.setInvalid([
          this.getTranslations(defaultBaseTranslations).required,
        ]);
      } else {
        this.setValid();
      }
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
          {this.props.title && !this.props.label && this.renderInput()}
          {!this.props.title &&
            !this.props.label &&
            this.renderTooltip(this.renderInput())}
          {this.renderDefaultValidation()}
          {this.props.label && (
            <label className="checkbox-input__label">
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
          this.setInvalid([
            this.getTranslations(defaultBaseTranslations).required,
          ]);
        }
      }
    }
  }

  protected handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (!this.props.disabled) {
      if (e.key === 'Enter') {
        this.inputRef.current?.click();
      }
    }
  }

  private renderInput() {
    return (
      <input
        {...(this.props.id && { id: this.props.id })}
        ref={this.inputRef}
        value={this.props.value || ''}
        type="checkbox"
        required={this.props.required}
        checked={this.state.checked}
        onChange={this.handleChecked}
        onBlur={this.handleBlur}
        onFocus={this.handleFocus}
        onKeyDown={this.handleKeyDown}
        tabIndex={this.props.disabled ? -1 : 0}
      />
    );
  }
}

export const Checkbox = withThemeContext<
  CheckboxProps,
  InstanceType<typeof CheckboxRaw>
>(withFormContext<CheckboxProps>(CheckboxRaw), 'checkbox');

export default Checkbox;
