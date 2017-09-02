//Styles
import './radio.scss';

//Libs
import * as React from 'react';

//Misc
import * as BaseInput from '../base/BaseInput';

export interface RadioProps extends BaseInput.BaseInputProps {
    onChange?: never;
    onChecked: (value: string) => void;
    result: string;
    value: string;
    name: string;
}

export interface RadioState extends BaseInput.BaseInputState {
}

export class Radio extends BaseInput.BaseInput<RadioProps, RadioState>  {
    public static defaultProps = Object.assign(BaseInput.BaseInput.defaultProps, { });

    constructor(props: RadioProps) {
        super(props);
        this.onChecked = this.onChecked.bind(this);
    }

    private renderInput() {
        return <input
            disabled={this.getDisabled()}
            name={this.props.name}
            value={this.props.value}
            type="radio"
            required={this.props.required}
            checked={this.props.value == this.props.result}
            onChange={this.onChecked}
            onBlur={this.handleBlur}
            onFocus={this.handleFocus}
        />;
    }

    private onChecked(e: React.ChangeEvent<HTMLInputElement>) {
        //e.preventDefault();
        this.props.onChecked && this.props.onChecked(e.target.value);
    }

    public render() {
        return <div className={`input__group radio-input ${this.getValidationClass()} ${this.props.className?this.props.className:''}`}>
            {!this.props.label && this.renderInput()}
            {this.renderDefaultValidation()}
            {this.props.label && <label>{this.renderInput()}{this.props.label}</label>}
        </div>;
    }
}
export default Radio;
