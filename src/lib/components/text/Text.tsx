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
import classNames from 'classnames';

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
  sizeFromValue?: boolean;
  onNumberChange?: (number: number, isValid: boolean) => void;
  number?: number;
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
    if (props.number !== undefined || props.onNumberChange) {
      const value = props.number?.toString() ?? '';
      const res = this.handleValueChange(value, true, [], props, true);
      this.state = {
        ...this.state,
        isValid: res.isValid,
        errors: res.errors,
        value,
      };
      if (!this.props.ignoreContext) {
        this.props.formContext &&
          this.props.formContext.updateCallback(this.componentId, {
            validation: {
              isValid: res.isValid,
              errors: res.errors,
            },
          });
      }
    }
  }

  public componentDidUpdate(prevProps: TextProps, prevState: TextState) {
    if (
      this.props.onNumberChange &&
      (this.state.isValid !== prevState.isValid ||
        this.state.value !== prevState.value) &&
      this.props.number !== Number(this.state.value)
    ) {
      const num = Number(this.state.value);
      if (this.state.value === '') {
        this.props.onNumberChange(undefined, this.state.isValid);
      } else if (!isNaN(num)) {
        this.props.onNumberChange(num, this.state.isValid);
      }
    }
    if (
      (prevProps.number !== undefined || this.props.number !== undefined) &&
      this.props.number !== prevProps.number
    ) {
      this.handleValueChange(this.props.number?.toString() ?? '');
    }
    if (
      !this.props.onNumberChange &&
      (prevProps.value !== this.props.value ||
        prevProps.validators !== this.props.validators ||
        prevProps.customValidators !== this.props.customValidators ||
        prevProps.required !== this.props.required)
    ) {
      this.handleValueChange(this.props.value, true, [], this.props);
    }
  }

  public render() {
    const clearButtonHidden = !this.state.value?.length || this.props.disabled;
    return (
      <InputGroup
        title={this.props.title}
        tooltip={this.props.tooltip}
        className={this.props.inputGroupClassName}
      >
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
              value={this.state.value ?? ''}
              onBlur={this.handleBlur}
              onFocus={this.handleFocus}
              readOnly={this.props.readOnly}
              onKeyDown={this.onKeyDown}
              type={this.props.type}
              onClick={this.props.onClick}
              maxLength={this.props.maxLength}
              size={
                this.props.sizeFromValue
                  ? this.props.value?.length || 1
                  : undefined
              }
            />
            {this.props.after}
            {!this.props.readOnly && this.props.showClearButton && (
              <Button
                {...(this.props.id && {
                  id: this.props.id + '-clear-button',
                })}
                disabled={clearButtonHidden}
                unobtrusive={true}
                noShadow={true}
                onClick={this.clearClick}
                className={classNames(
                  'text-input__clearButton line-height--0',
                  {
                    'text-input__clearButton--hidden': clearButtonHidden,
                  }
                )}
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
