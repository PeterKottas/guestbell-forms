//Styles
import './checkbox.scss';

//Libs
import * as React from 'react';

//Misc
import * as BaseInput from '../base/BaseInput';

export interface CheckboxProps extends BaseInput.BaseInputProps {
    onChecked?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onChange?: never;
    value?: never;
    type?: string;
    checked?: boolean;
}

export interface CheckboxState extends BaseInput.BaseInputState {
    checked: boolean;
}

export class Checkbox extends BaseInput.BaseInput<CheckboxProps, CheckboxState>  {
    public static defaultProps = Object.assign(BaseInput.BaseInput.defaultProps, { checked: false });

    constructor(props: CheckboxProps) {
        super(props);
        this.state = Object.assign(this.state, { checked: props.checked, valid: props.required ? props.checked : true });
        this.handleChecked = this.handleChecked.bind(this);
    }

    private handleChecked(e: React.ChangeEvent<HTMLInputElement>) {
        this.props.onChecked && this.props.onChecked(e);
        this.setState({ checked: !this.state.checked })
        if (!this.state.checked) {
            this.setValid();
        }
        else {
            if (this.props.required) {
                this.setInvalid();
            }
        }
    }

    componentDidMount() {
        this.context.updateCallback(this.state.valid, this.inputId);
    }

    private renderInput() {
        return <input
            disabled={this.getDisabled()}
            type="checkbox"
            required={this.props.required}
            checked={this.state.checked}
            onChange={this.handleChecked}
            onBlur={this.handleBlur}
            onFocus={this.handleFocus}
        />;
    }

    public render() {
        return <div className={`input__group checkbox-input ${this.getValidationClass()}`}>
            {!this.props.label && this.renderInput()}
            {this.renderDefaultValidation()}
            {this.props.label && <label>{this.renderInput()}{this.props.label}</label>}
        </div>;
    }
}
export default Checkbox;
