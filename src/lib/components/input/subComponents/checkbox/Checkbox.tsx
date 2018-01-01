//Styles
import './checkbox.scss';

//Libs
import * as React from 'react';

//Misc
import * as BaseInput from '../base/BaseInput';
import InputGroup from '../inputGroup/InputGroup';

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
        if (!this.props.ignoreContext) {
            this.context && this.context.updateCallback && this.context.updateCallback(this.state.valid, this.inputId);
        }
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

    public componentWillReceiveProps(newProps: CheckboxProps) {
        if (newProps.checked !== this.state.checked) {
            this.setState({ checked: newProps.checked });
        }
    }

    public render() {
        return <InputGroup title={this.props.title}>
            <div className={`input__base checkbox-input ${this.getValidationClass()} ${this.props.className ? this.props.className : ''} ${this.props.label ? 'checkbox-input--with-label' : ''}`}>
                {!this.props.label && this.renderInput()}
                {this.renderDefaultValidation()}
                {this.props.label && <label>{this.renderInput()}{this.props.label}</label>}
            </div>
        </InputGroup>;
    }
}
export default Checkbox;
