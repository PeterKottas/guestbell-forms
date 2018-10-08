// Libs
import * as React from 'react';
import Textarea from 'react-textarea-autosize';

// Misc
import InputGroup from '../inputGroup/InputGroup';
import { BaseInputProps, BaseInputState, BaseInput } from '../base/input/BaseInput';
import { withFormContext } from '../form/withFormContext';
import { OmitFormContext } from '../form/FormContext';

interface TextAreaRawProps extends BaseInputProps<HTMLTextAreaElement> {
    mask?: string;
    reverse?: boolean;
    placeholder?: string;
    stopClickPropagation?: boolean;
    inputRef?: (input: HTMLTextAreaElement) => void;
    readOnly?: boolean;
    type?: 'number' | 'text';
    minRows?: number;
    maxRows?: number;
}

export type TextAreaProps = OmitFormContext<TextAreaRawProps>;

export interface TextAreaState extends BaseInputState {
}

class TextAreaRaw extends BaseInput<TextAreaRawProps, TextAreaState, HTMLTextAreaElement>  {
    public static defaultProps = Object.assign({}, BaseInput.defaultProps, {
        type: 'text',
        placeholder: '',
        stopClickPropagation: true,
        readOnly: false,
    });

    constructor(props: TextAreaRawProps) {
        super(props);
    }

    public render() {
        return (
            <InputGroup title={this.props.title}>
                <div
                    className={`input__base textArea-input ${this.getValidationClass()} 
                    ${(this.props.readOnly ? 'textArea-input--readOnly' : '')} 
                    ${this.props.className ? this.props.className : ''}`}
                    onClick={this.onContainerClick}
                >
                    <Textarea
                        ref={this.elemRef}
                        placeholder={this.props.placeholder}
                        disabled={this.getDisabled()}
                        required={this.props.required}
                        className={this.state.value ? 'filled' : ''}
                        onChange={this.handleChange}
                        value={this.state.value}
                        onBlur={this.handleBlur}
                        onFocus={this.handleFocus}
                        readOnly={this.props.readOnly}
                        onKeyDown={this.onKeyDown}
                        minRows={this.props.minRows}
                        maxRows={this.props.maxRows}
                    />
                    <span className="highlight" />
                    <span className="bar" />
                    {this.renderDefaultValidation()}
                    {this.props.label && <label>{this.renderLabel()}</label>}
                </div>
            </InputGroup>
        );
    }

    private onKeyDown = e => this.props.onKeyDown && this.props.onKeyDown(e);

    private elemRef = elem => this.props.inputRef && this.props.inputRef(elem);

    private onContainerClick = e => this.props.stopClickPropagation && e.stopPropagation();
}

export const TextArea = withFormContext(TextAreaRaw);

export default TextArea;
