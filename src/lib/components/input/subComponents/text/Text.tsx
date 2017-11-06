//Styles
import './text.scss';

//Libs
import * as React from 'react';

//Misc
import * as BaseInput from '../base/BaseInput';

export interface TextProps extends BaseInput.BaseInputProps {
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    mask?: string;
    reverse?: boolean;
    placeholder?: string;
}

export interface TextState extends BaseInput.BaseInputState {
}

export class Text extends BaseInput.BaseInput<TextProps, TextState>  {
    public static defaultProps = Object.assign(BaseInput.BaseInput.defaultProps, { type: "text", placeholder: '' });

    constructor(props) {
        super(props);
    }

    public render() {
        return <div className={`input__group text-input ${this.getValidationClass()} ${this.props.className ? this.props.className : ''}`}>
            <input
                placeholder={this.props.placeholder}
                disabled={this.getDisabled()}
                required={this.props.required}
                className={this.state.value ? 'filled' : ''}
                onChange={this.handleChange}
                value={this.state.value}
                onBlur={this.handleBlur}
                onFocus={this.handleFocus}
            />
            <span className="highlight"></span>
            <span className="bar"></span>
            {this.renderDefaultValidation()}
            {this.props.label && <label>{this.props.label}</label>}
        </div>;
    }
}
export default Text;
