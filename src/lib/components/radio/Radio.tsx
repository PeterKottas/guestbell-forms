// Libs
import * as React from 'react';
import {
  BaseInputProps,
  BaseInputState,
  BaseInput,
} from '../base/input/BaseInput';
import { withFormContext } from '../form/withFormContext';

// Misc

export interface RadioProps extends BaseInputProps<HTMLInputElement> {
  onChange?: never;
  onChecked: (value: string) => void;
  result: string;
  value: string;
  name: string;
}

export interface RadioState extends BaseInputState {}

export class RadioRaw extends BaseInput<
  RadioProps,
  RadioState,
  HTMLInputElement
> {
  public static defaultProps = Object.assign({}, BaseInput.defaultProps, {});

  constructor(props: RadioProps) {
    super(props);
    this.onChecked = this.onChecked.bind(this);
  }

  public render() {
    return (
      <div
        className={`radio-input ${this.getValidationClass()} ${
          this.props.className ? this.props.className : ''
        }`}
        ref={this.containerRef}
      >
        {!this.props.label && this.renderInput()}
        {this.props.label && (
          <label>
            {this.renderInput()}
            {this.props.label}
          </label>
        )}
      </div>
    );
  }

  private renderInput() {
    return (
      <input
        {...(this.props.id && {
          id: this.props.id,
        })}
        disabled={this.getDisabled()}
        name={this.props.name}
        value={this.props.value}
        type="radio"
        required={this.props.required}
        checked={this.props.value === this.props.result}
        onChange={this.onChecked}
        onBlur={this.handleBlur}
        onFocus={this.handleFocus}
      />
    );
  }

  private onChecked(e: React.ChangeEvent<HTMLInputElement>) {
    // e.preventDefault();
    this.props.onChecked && this.props.onChecked(e.target.value);
  }
}

export const Radio = withFormContext<RadioProps>(RadioRaw);

export default Radio;
