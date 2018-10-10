// Libs
import * as React from 'react';

// Misc
import InputGroup from '../inputGroup/InputGroup';
import { BaseInputProps, BaseInputState, BaseInput } from '../base/input/BaseInput';
import { withFormContext } from '../form/withFormContext';
import { OmitFormContext } from '../form/FormContext';
import { InnerRefProps } from './../../types/InnerRefProps';

export interface TextRawProps extends BaseInputProps<HTMLInputElement> {
    mask?: string;
    reverse?: boolean;
    placeholder?: string;
    stopClickPropagation?: boolean;
    inputRef?: React.Ref<HTMLInputElement>;
    readOnly?: boolean;
    type?: 'number' | 'text';
}

export type TextProps = OmitFormContext<TextRawProps> & InnerRefProps<TextRaw>;

export interface TextState extends BaseInputState {
}

export class TextRaw extends BaseInput<TextRawProps, TextState, HTMLInputElement>  {
    public static defaultProps = Object.assign({}, BaseInput.defaultProps, { type: 'text', placeholder: '', stopClickPropagation: true, readOnly: false });

    constructor(props: TextRawProps) {
        super(props);
    }

    public render() {
        return (
            <InputGroup title={this.props.title}>
                <div
                    className={`input__base text-input ${this.getValidationClass()} 
                    ${(this.props.readOnly ? 'text-input--readOnly' : '')} ${(this.props.className ? this.props.className : '')}`}
                    onClick={this.containerClick}
                    ref={this.containerRef}
                >
                    <input
                        ref={this.inputRef}
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
                        type={this.props.type}
                    />
                    <span className="highlight" />
                    <span className="bar" />
                    {this.renderDefaultValidation()}
                    {this.props.label && <label className={(this.props.readOnly ? 'label--focused' : '')}>{this.renderLabel()}</label>}
                </div>
            </InputGroup>
        );
    }

    private containerClick = (e: React.MouseEvent<HTMLDivElement>) => this.props.stopClickPropagation && e.stopPropagation();

    private onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => this.props.onKeyDown && this.props.onKeyDown(e);
}

export const Text = withFormContext<TextRawProps, TextProps>(TextRaw);

export default Text;
