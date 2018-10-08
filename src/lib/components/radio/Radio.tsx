// Libs
import * as React from 'react';
import { BaseInputProps, BaseInputState, BaseInput } from '../base/input/BaseInput';
import { withFormContext } from '../form/withFormContext';
import { OmitFormContext } from '../form/FormContext';

// Misc

interface RadioRawProps extends BaseInputProps<HTMLInputElement> {
    onChange?: never;
    onChecked: (value: string) => void;
    result: string;
    value: string;
    name: string;
}

export type RadioProps = OmitFormContext<RadioRawProps>;

export interface RadioState extends BaseInputState {
}

class RadioRaw extends BaseInput<RadioRawProps, RadioState, HTMLInputElement>  {
    public static defaultProps = Object.assign({}, BaseInput.defaultProps, {});

    constructor(props: RadioRawProps) {
        super(props);
        this.onChecked = this.onChecked.bind(this);
    }

    public render() {
        return (
            <div className={`input__group radio-input ${this.getValidationClass()} ${this.props.className ? this.props.className : ''}`}>
                {!this.props.label && this.renderInput()}
                {this.props.label && <label>{this.renderInput()}{this.props.label}</label>}
            </div>
        );
    }

    private renderInput() {
        return (
            <input
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

export const Radio = withFormContext(RadioRaw);

export default Radio;
