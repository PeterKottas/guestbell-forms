// Libs
import * as React from 'react';

// Misc
import InputGroup from '../inputGroup/InputGroup';
import * as PlusIcon from 'material-design-icons/content/svg/production/ic_add_circle_outline_24px.svg';
import {
  BaseInputProps,
  BaseInputState,
  BaseInput,
  ValidationError,
  defaultBaseTranslations,
} from '../base/input/BaseInput';
import { Button } from '../button/Button';
import { withFormContext } from '../form/withFormContext';
import { withThemeContext } from '../themeProvider/withThemeContext';

export interface SelectValue {
  value: number | string;
  label?: string;
  forceSelected?: boolean;
}

export interface SelectProps extends BaseInputProps<HTMLSelectElement> {
  values?: SelectValue[];
  defaultEmpty?: boolean;
  multiple?: boolean;
  selectedValues?: SelectValue[];
  onSelectedValuesChange?: (newValues: SelectValue[]) => void;
  inputRef?: (input: HTMLSelectElement) => void;
  readOnly?: boolean;
  readonlyEmptyPlaceholder?: string;
  after?: React.ReactNode;
  before?: React.ReactNode;
  placeholder?: string;
  filterExisting?: (
    existing: SelectValue[],
    selected: SelectValue[]
  ) => SelectValue[];
  children?: React.ReactNode;
}

export interface SelectState extends BaseInputState { }

export class SelectRaw extends BaseInput<
  SelectProps,
  SelectState,
  HTMLSelectElement
> {
  public static defaultProps = Object.assign({}, BaseInput.defaultProps, {
    defaultEmpty: true,
    multiple: false,
    readOnly: false,
    readonlyEmptyPlaceholder: 'N/A',
  });

  constructor(props: SelectProps) {
    super(props);
    const val = !props.value
      ? props.defaultEmpty
        ? ''
        : props.values && props.values.length > 0
          ? props.values[0]
          : ''
      : props.value;
    this.state = Object.assign(this.state, { value: val });
    this.handleChangeCustom = this.handleChangeCustom.bind(this);
  }

  public componentDidMount() {
    this.props.multiple && this.handleValid(this.props.selectedValues);
  }

  public componentDidUpdate(oldProps: SelectProps) {
    if (
      oldProps.value !== this.props.value ||
      oldProps.validators !== this.props.validators ||
      oldProps.customValidators !== this.props.customValidators ||
      oldProps.required !== this.props.required ||
      oldProps.selectedValues !== this.props.selectedValues
    ) {
      if (this.props.multiple) {
        this.handleValid(this.props.selectedValues);
      } else {
        this.handleValueChange(this.props.value, true, [], this.props);
      }
    }
  }

  public render() {
    const finalValues = this.props.multiple
      ? this.props.filterExisting
        ? this.props.filterExisting(
          this.props.values,
          this.props.selectedValues
        )
        : this.props.values.filter(
          (item) =>
            this.props.selectedValues.findIndex(
              (t) => t.value === item.value
            ) < 0
        )
      : this.props.values;
    return (
      <InputGroup
        title={this.props.title}
        tooltip={this.props.tooltip}
        className={this.props.inputGroupClassName}
      >
        <div
          className={
            'input__base select-input ' +
            this.getValidationClass() +
            ' ' +
            (this.props.className ? this.props.className : '') +
            ' ' +
            (this.props.readOnly ? 'readonly' : '') +
            ' ' +
            (this.props.multiple ? 'multiple' : '') +
            ' ' +
            (this.props.placeholder ? 'select-input--hasPlaceholder' : '')
          }
          ref={this.containerRef}
        >
          {this.props.children}
          {this.renderSelectedValues()}
          {finalValues.length > 0 &&
            ((this.props.multiple && !this.props.readOnly) ||
              !this.props.multiple) && (
              <div className="select-input__select__wrapper">
                {this.props.before}
                {(!this.props.multiple && !this.props.readOnly) ||
                  this.props.multiple ? (
                  <select
                    {...(this.props.id && {
                      id: this.props.id,
                    })}
                    ref={this.inputRef}
                    disabled={this.getDisabled()}
                    required={this.props.required}
                    onChange={this.handleChangeCustom}
                    value={this.state.value}
                    className={
                      'select-input__select ' +
                      (this.state.value !== '' ||
                        (this.props.selectedValues &&
                          this.props.selectedValues.length > 0)
                        ? 'filled'
                        : '')
                    }
                    onBlur={this.handleBlur}
                    onFocus={this.handleFocus}
                    tabIndex={0}
                  >
                    {this.props.defaultEmpty && (
                      <option
                        key={-1}
                        disabled={true}
                        value=""
                        style={{ display: 'none' }}
                      />
                    )}
                    {finalValues.map((value, index) => (
                      <option key={index} value={value.value}>
                        {value.label ? value.label : value.value}
                      </option>
                    ))}
                  </select>
                ) : (
                  <span
                    className={
                      'select-input__select ' +
                      (this.state.value !== '' ||
                        (this.props.selectedValues &&
                          this.props.selectedValues.length > 0)
                        ? 'filled'
                        : '')
                    }
                  >
                    {this.renderReadonly()}
                  </span>
                )}
                {this.renderPlaceholder(finalValues)}
                <span className="highlight" />
                <span className="bar" />
                {this.renderDefaultValidation()}
                {this.props.after}
              </div>
            )}
          {this.props.label && (this.props.multiple || (finalValues.length > 0)) && (
            <label className={this.props.placeholder ? 'label--focused' : ''}>{this.renderLabel()}</label>
          )}
        </div>
      </InputGroup>
    );
  }

  protected handleValueChange(
    value: string,
    isValid: boolean = true,
    errors: ValidationError[] = [],
    props: SelectProps = this.props,
    initializing: boolean = false
  ) {
    if (!this.props.multiple) {
      return super.handleValueChange(
        value,
        isValid,
        errors,
        props,
        initializing
      );
    } else if (!initializing) {
      this.handleValid(this.props.selectedValues);
    }
    return {
      isValid: true,
      errors: [],
    };
  }

  protected handleBlur() {
    this.props.onBlur && this.props.onBlur();
    let state = { focused: false };
    if (!this.state.touched && this.props.touchOn === 'blur') {
      state = Object.assign(state, { touched: true });
      if (!this.props.multiple) {
        this.handleValueChange(this.state.value);
      } else {
        this.handleValid(this.props.selectedValues);
      }
    }
    this.setState(state);
  }

  protected handleFocus() {
    this.props.onFocus?.();
    let state = { focused: true };
    if (!this.state.touched && this.props.touchOn === 'focus') {
      state = Object.assign(state, { touched: true });
      if (!this.props.multiple) {
        this.handleValueChange(this.state.value);
      } else {
        this.handleValid(this.props.selectedValues);
      }
    }
    this.setState(state);
  }

  private handleChangeCustom(event: React.ChangeEvent<HTMLSelectElement>) {
    if (this.props.multiple) {
      let value = event.target.value;
      let val = this.props.values.filter((item) => item.value === value)[0];
      if (!val) {
        if (!isNaN(Number(value))) {
          let valNumber = Number(value);
          val = this.props.values.filter((item) => item.value === valNumber)[0];
        }
      }
      let newValues = this.props.selectedValues.concat(val);
      if (val) {
        this.props.onSelectedValuesChange &&
          this.props.onSelectedValuesChange(newValues);
        this.handleValid(newValues);
        this.setState({ value: '' });
      }
    } else {
      this.handleChange(event);
    }
  }

  private handleValid(newValues: SelectValue[]) {
    let isValid = true;
    let errors: ValidationError[] = [];
    if (this.props.required) {
      if (newValues.length === 0) {
        isValid = false;
        errors.push(this.getTranslations(defaultBaseTranslations).required);
      }
    }
    if (this.props.customValidators) {
      this.props.customValidators.forEach((customValidator) => {
        let validInner = false;
        validInner = customValidator.Validate(
          this.state?.value,
          this.props.required,
          (error) => errors.push(error)
        );
        if (isValid && !validInner) {
          isValid = validInner;
        }
      });
    }
    if (isValid) {
      this.setValid();
    } else {
      this.setInvalid(errors);
    }
  }

  private renderPlaceholder(finalValues: SelectValue[]) {
    if (!this.props.placeholder) {
      return null;
    }

    // For multiple select, show placeholder as long as there are options to pick
    if (this.props.multiple) {
      if (finalValues.length === 0) {
        return null;
      }
    } else {
      // For single select, hide when has value
      const hasValue = this.state.value !== '';
      if (hasValue) {
        return null;
      }
    }

    return (
      <span className="select-input__placeholder">
        {this.props.placeholder}
      </span>
    );
  }

  private renderReadonly() {
    const value = this.props.values.filter(
      (item) => item.value.toString() === this.state.value
    )[0];
    return value ? (value.label ? value.label : value.value) : '';
  }

  private renderSelectedValues() {
    return this.props.multiple ? (
      this.props.selectedValues.length > 0 ? (
        <div className="select-input__selectedValue__wrapper">
          {this.props.selectedValues.map((item, index) => (
            <div className="select-input__selectedValue" key={index}>
              {item.label ? item.label : item.value}
              {!this.props.readOnly && (
                <Button
                  disabled={item.forceSelected}
                  circular={true}
                  blank={true}
                  onClick={this.removeItemClick(item, index)}
                  className="ml-1 transform-rotate--45 line-height--0 p-0"
                >
                  <PlusIcon />
                </Button>
              )}
            </div>
          ))}
        </div>
      ) : (
        this.props.readOnly && (
          <div className="select-input__selectedValue__wrapper">
            <div className="select-input__selectedValue">
              {this.props.readonlyEmptyPlaceholder}
            </div>
          </div>
        )
      )
    ) : null;
  }

  private removeItemClick = (_: SelectValue, index: number) => () => {
    const newValues = this.props.selectedValues.filter((_, i) => i !== index);
    this.handleValid(newValues);
    this.props.onSelectedValuesChange &&
      this.props.onSelectedValuesChange(newValues);
  };
}

export const Select = withThemeContext<
  SelectProps,
  InstanceType<typeof SelectRaw>
>(withFormContext<SelectProps>(SelectRaw), 'select');

export default Select;
