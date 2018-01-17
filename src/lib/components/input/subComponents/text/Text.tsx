//Styles
import './text.scss';

//Libs
import * as React from 'react';

//Misc
import * as BaseInput from '../base/BaseInput';
import InputGroup from '../inputGroup/InputGroup';

export interface TextProps extends BaseInput.BaseInputProps {
    mask?: string;
    reverse?: boolean;
    placeholder?: string;
    stopClickPropagation?: boolean;
    inputRef?: (input: HTMLInputElement) => void;
    readOnly?: boolean;
}

export interface TextState extends BaseInput.BaseInputState {
}

export class Text extends BaseInput.BaseInput<TextProps, TextState>  {
    public static defaultProps = Object.assign(BaseInput.BaseInput.defaultProps, { type: "text", placeholder: '', stopClickPropagation: true, readOnly: false });

    constructor(props) {
        super(props);
    }

    public render() {
        return <InputGroup title={this.props.title}>
            <div
                className={`input__base text-input ${this.getValidationClass()} ${(this.props.readOnly ? 'text-input--readOnly' : '')} ${this.props.className ? this.props.className : ''}`}
                onClick={e => this.props.stopClickPropagation && e.stopPropagation()}
            >
                <input
                    ref={elem => this.props.inputRef && this.props.inputRef(elem)}
                    placeholder={this.props.placeholder}
                    disabled={this.getDisabled()}
                    required={this.props.required}
                    className={this.state.value ? 'filled' : ''}
                    onChange={this.handleChange}
                    value={this.state.value}
                    onBlur={this.handleBlur}
                    onFocus={this.handleFocus}
                    readOnly={this.props.readOnly}
                />
                <span className="highlight"></span>
                <span className="bar"></span>
                {this.renderDefaultValidation()}
                {this.props.label && <label>{this.props.label}</label>}
            </div>
        </InputGroup>;
    }
}
export default Text;
