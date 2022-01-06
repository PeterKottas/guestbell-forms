// Libs
import * as React from 'react';

// Misc
import InputGroup from '../inputGroup/InputGroup';
import {
  BaseInputProps,
  BaseInputState,
  BaseInput,
} from '../base/input/BaseInput';
import { withFormContext } from '../form/withFormContext';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import { withThemeContext } from '../themeProvider/withThemeContext';

export interface TextAreaProps extends BaseInputProps<HTMLTextAreaElement> {
  mask?: string;
  reverse?: boolean;
  placeholder?: string;
  stopClickPropagation?: boolean;
  inputRef?: (input: HTMLTextAreaElement) => void;
  readOnly?: boolean;
  type?: 'number' | 'text';
  minRows?: number;
  maxRows?: number;
  maxLength?: number;
}

export interface TextAreaState extends BaseInputState {}

export class TextAreaRaw extends BaseInput<
  TextAreaProps,
  TextAreaState,
  HTMLTextAreaElement
> {
  public static defaultProps = (Object.assign({}, BaseInput.defaultProps, {
    type: 'text',
    placeholder: '',
    stopClickPropagation: true,
    readOnly: false,
  }) as unknown) as TextAreaProps;
  private elem: HTMLTextAreaElement;

  constructor(props: TextAreaProps) {
    super(props);
  }

  public render() {
    return (
      <InputGroup title={this.props.title}>
        <div
          className={`input__base textArea-input ${this.getValidationClass()} 
                    ${this.props.readOnly ? 'textArea-input--readOnly' : ''} 
                    ${this.props.className ? this.props.className : ''}`}
          onClick={this.onContainerClick}
          ref={this.containerRef}
        >
          <TextareaAutosize
            {...(this.props.id && {
              id: this.props.id,
            })}
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
            rows={this.props.minRows}
            rowsMax={this.props.maxRows}
            maxLength={this.props.maxLength}
          />
          <span className="highlight" />
          <span className="bar" />
          {this.renderDefaultValidation()}
          {this.props.label && <label>{this.renderLabel()}</label>}
        </div>
      </InputGroup>
    );
  }

  public focus() {
    this.elem && this.elem.focus();
  }

  private onKeyDown = e => this.props.onKeyDown && this.props.onKeyDown(e);

  private elemRef = (elem: HTMLTextAreaElement) => {
    this.elem = elem;
    this.props.inputRef && this.props.inputRef(elem);
  };

  private onContainerClick = e =>
    this.props.stopClickPropagation && e.stopPropagation();
}

export const TextArea = withThemeContext<
  TextAreaProps,
  InstanceType<typeof TextAreaRaw>
>(withFormContext<TextAreaProps>(TextAreaRaw), 'textArea');

export default TextArea;
