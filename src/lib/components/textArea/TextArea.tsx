//Styles
import './textArea.scss';

//Libs
import * as React from 'react';
import Textarea from "react-textarea-autosize";

//Misc
import InputGroup from '../inputGroup/InputGroup';
import { BaseInputProps, BaseInputState, BaseInput } from '../base/input/BaseInput';

export interface TextAreaProps extends BaseInputProps<HTMLTextAreaElement> {
    mask?: string;
    reverse?: boolean;
    placeholder?: string;
    stopClickPropagation?: boolean;
    inputRef?: (input: HTMLTextAreaElement) => void;
    readOnly?: boolean;
    type?:'number'|'text';
    minRows?: number;
    maxRows?: number;
}

export interface TextAreaState extends BaseInputState {
}

export class TextArea extends BaseInput<TextAreaProps, TextAreaState, HTMLTextAreaElement>  {
    public static defaultProps = Object.assign(BaseInput.defaultProps, { type: "text", placeholder: '', stopClickPropagation: true, readOnly: false });

    constructor(props) {
        super(props);
    }

    public render() {
        return <InputGroup title={this.props.title}>
            <div
                className={`input__base textArea-input ${this.getValidationClass()} ${(this.props.readOnly ? 'textArea-input--readOnly' : '')} ${this.props.className ? this.props.className : ''}`}
                onClick={e => this.props.stopClickPropagation && e.stopPropagation()}
            >
                <Textarea
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
                    onKeyDown={e=>this.props.onKeyDown && this.props.onKeyDown(e)}
                    minRows={this.props.minRows}
                    maxRows={this.props.maxRows}
                />
                <span className="highlight"></span>
                <span className="bar"></span>
                {this.renderDefaultValidation()}
                {this.props.label && <label>{this.renderLabel()}</label>}
            </div>
        </InputGroup>;
    }
}
export default TextArea;
