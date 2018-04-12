//Styles
import './textArea.scss';

//Libs
import * as React from 'react';
import Textarea from "react-textarea-autosize";

//Misc
import * as BaseInput from '../base/BaseInput';
import InputGroup from '../inputGroup/InputGroup';

export interface TextAreaProps extends BaseInput.BaseInputProps<HTMLTextAreaElement> {
    mask?: string;
    reverse?: boolean;
    placeholder?: string;
    stopClickPropagation?: boolean;
    inputRef?: (input: HTMLTextAreaElement) => void;
    readOnly?: boolean;
    type?:'number'|'text';
}

export interface TextAreaState extends BaseInput.BaseInputState {
}

export class TextArea extends BaseInput.BaseInput<TextAreaProps, TextAreaState, HTMLTextAreaElement>  {
    public static defaultProps = Object.assign(BaseInput.BaseInput.defaultProps, { type: "text", placeholder: '', stopClickPropagation: true, readOnly: false });

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
                />
                <span className="highlight"></span>
                <span className="bar"></span>
                {this.renderDefaultValidation()}
                {this.props.label && <label>{this.props.label}</label>}
            </div>
        </InputGroup>;
    }
}
export default TextArea;
