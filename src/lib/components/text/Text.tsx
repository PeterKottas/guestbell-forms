// Styles
require('./text.scss');

// Libs
import * as React from 'react';

// Misc
import InputGroup from '../inputGroup/InputGroup';
import { BaseInputProps, BaseInputState, BaseInput } from '../base/input/BaseInput';

export interface TextProps extends BaseInputProps<HTMLInputElement> {
    mask?: string;
    reverse?: boolean;
    placeholder?: string;
    stopClickPropagation?: boolean;
    inputRef?: (input: HTMLInputElement) => void;
    readOnly?: boolean;
    type?: 'number' | 'text';
}

export interface TextState extends BaseInputState {
}

export class Text extends BaseInput<TextProps, TextState, HTMLInputElement>  {
    public static defaultProps = Object.assign(BaseInput.defaultProps, { type: 'text', placeholder: '', stopClickPropagation: true, readOnly: false });

    constructor(props: TextProps) {
        super(props);
    }

    public render() {
        return (
            <InputGroup title={this.props.title}>
                <div
                    className={`input__base text-input ${this.getValidationClass()} 
                    ${(this.props.readOnly ? 'text-input--readOnly' : '')} ${(this.props.className ? this.props.className : '')}`}
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
                        onKeyDown={e => this.props.onKeyDown && this.props.onKeyDown(e)}
                        type={this.props.type}
                    />
                    <span className="highlight" />
                    <span className="bar" />
                    {this.renderDefaultValidation()}
                    {this.props.label && <label>{this.renderLabel()}</label>}
                </div>
            </InputGroup>
        );
    }
}
export default Text;
