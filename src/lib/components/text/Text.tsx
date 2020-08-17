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
import { withThemeContext } from '../themeProvider/withThemeContext';
import Button from '../button';
import * as PlusIcon from 'material-design-icons/content/svg/production/ic_add_24px.svg';

export interface TextProps extends BaseInputProps<HTMLInputElement> {
  mask?: string;
  reverse?: boolean;
  placeholder?: string;
  stopClickPropagation?: boolean;
  inputRef?: React.Ref<HTMLInputElement>;
  readOnly?: boolean;
  type?: 'number' | 'text';
  maxLength?: number;
  showClearButton?: boolean;
  after?: React.ReactNode;
  before?: React.ReactNode;
}

export interface TextState extends BaseInputState {}

export class TextRaw extends BaseInput<TextProps, TextState, HTMLInputElement> {
  public static defaultProps = Object.assign({}, BaseInput.defaultProps, {
    type: 'text',
    stopClickPropagation: true,
    readOnly: false,
  }) as TextProps;

  constructor(props: TextProps) {
    super(props);
  }

  public render() {
    return (
      <InputGroup title={this.props.title} tooltip={this.props.tooltip}>
        <div
          className={`input__base text-input ${this.getValidationClass()} 
                    ${this.props.readOnly ? 'text-input--readOnly' : ''} ${
            this.props.className ? this.props.className : ''
          }`}
          onClick={this.containerClick}
          ref={this.containerRef}
        >
          <div className="text-input__textWrapper">
            {this.props.before}
            <input
              {...(this.props.id && {
                id: this.props.id,
              })}
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
              onClick={this.props.onClick}
              maxLength={this.props.maxLength}
            />
            {this.props.after}
            {this.state.value?.length > 0 &&
              !this.props.disabled &&
              !this.props.readOnly &&
              this.props.showClearButton && (
                <Button
                  {...(this.props.id && {
                    id: this.props.id + '-clear-button',
                  })}
                  unobtrusive={true}
                  noShadow={true}
                  onClick={this.clearClick}
                  className="text-input__clearButton line-height--0"
                >
                  <PlusIcon className="transform-rotate--45 line-height--0" />
                </Button>
              )}
            <span className="highlight" />
            <span className="bar" />
            {this.renderDefaultValidation()}
            {this.props.label && (
              <label className={this.props.readOnly ? 'label--focused' : ''}>
                {this.renderLabel()}
              </label>
            )}
          </div>
        </div>
      </InputGroup>
    );
  }

  private clearClick = () => {
    if (this.inputRef.current) {
      var nativeTextAreaValueSetter = Object.getOwnPropertyDescriptor(
        window.HTMLInputElement.prototype,
        'value'
      ).set;
      if (nativeTextAreaValueSetter) {
        nativeTextAreaValueSetter.call(this.inputRef.current, '');

        const event = new Event('input', { bubbles: true });
        this.inputRef.current.dispatchEvent(event);
      }
    }
  };

  private containerClick = (e: React.MouseEvent<HTMLDivElement>) =>
    this.props.stopClickPropagation && e.stopPropagation();

  private onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) =>
    this.props.onKeyDown && this.props.onKeyDown(e);
}

export const Text = withThemeContext<TextProps, InstanceType<typeof TextRaw>>(
  withFormContext<TextProps>(TextRaw),
  'text'
);

export default Text;
