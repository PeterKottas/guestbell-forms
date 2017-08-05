//Styles
import './textInput.scss';

//Libs
import * as React from 'react';

//Misc
import * as BaseInput from '../base/BaseInput';

export interface TextInputProps extends BaseInput.BaseInputProps {
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    type?: string;
}

interface TextInputState extends BaseInput.BaseInputState {
}

export class TextInput extends BaseInput.BaseInput<TextInputProps, TextInputState>  {
    public static defaultProps = Object.assign(BaseInput.BaseInput.defaultProps, { type: "text" });

    constructor(props) {
        super(props);
    }

    public render() {
        return <div className={`input__group text-input ${this.getValidationClass()}`}>
            <input
                type={this.props.type}
                required={this.props.required}
                className={this.getValue() ? 'filled' : ''}
                onChange={this.handleChange}
                value={this.getValue()}
                onBlur={this.handleBlur}
            />
            <span className="highlight"></span>
            <span className="bar"></span>
            {this.renderDefaultValidation()}
            {this.props.label && <label>{this.props.label}</label>}
        </div>;
    }
}
export default TextInput;
