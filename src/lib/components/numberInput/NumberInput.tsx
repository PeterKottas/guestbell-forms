import * as ArrowIcon from 'material-design-icons/hardware/svg/production/ic_keyboard_arrow_down_24px.svg';

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
import classNames from 'classnames';

export interface NumberInputProps extends BaseInputProps<HTMLInputElement> {
  value?: never;
  onChange?: never;
  onNumberChange: (num: number) => void;
  number: number;
  min?: number;
  max?: number;
  unit?: string;
}

export interface NumberInputState extends BaseInputState {
  currentText: string;
}

export class NumberInputRaw extends BaseInput<
  NumberInputProps,
  NumberInputState,
  HTMLInputElement
> {
  public static defaultProps = (Object.assign({}, BaseInput.defaultProps, {
    type: 'time',
    placeholder: '',
  }) as unknown) as Partial<NumberInputProps>;

  constructor(props: NumberInputProps) {
    super(props);
    this.removeUnitClick = this.removeUnitClick.bind(this);
    this.addUnitClick = this.addUnitClick.bind(this);
    this.onUnitChanged = this.onUnitChanged.bind(this);
  }

  public render() {
    const { unit } = this.props;
    return (
      <InputGroup
        title={this.props.title}
        className={this.props.inputGroupClassName}
        tooltip={this.props.tooltip}
      >
        <div
          {...(this.props.id && {
            id: this.props.id,
          })}
          className={
            'input__base number-input ' +
            this.getValidationClass() +
            ' ' +
            (this.props.className ? this.props.className : '')
          }
          ref={this.containerRef}
        >
          <div className="">
            <div className="number-input__arrows__container">
              <button
                className="plus"
                onClick={this.addUnitClick}
                {...(this.props.id && {
                  id: this.props.id + '-add-hours-button',
                })}
                tabIndex={0}
              >
                <ArrowIcon />
              </button>
              <div className="input-padding">
                <input
                  {...(this.props.id && {
                    id: this.props.id + '-input',
                  })}
                  disabled={this.getDisabled()}
                  required={this.props.required}
                  className={classNames('number-input__time', {
                    filled: this.props.number !== undefined,
                  })}
                  onChange={this.onUnitChanged}
                  value={
                    this.state.currentText !== undefined
                      ? this.state.currentText
                      : this.props.number
                  }
                  onBlur={this.onBlur}
                  onFocus={this.handleFocus}
                  type="number"
                  onKeyDown={this.onKeyDown}
                />
                <span className="highlight" />
              </div>
              <button
                className="minus"
                onClick={this.removeUnitClick}
                {...(this.props.id && {
                  id: this.props.id + '-subtract-hours-button',
                })}
                tabIndex={0}
              >
                <ArrowIcon />
              </button>
            </div>
            {unit}
          </div>
          {this.renderDefaultValidation()}
          <span className="highlight" />
          <span className={'bar ' + (this.state.focused ? 'focused' : '')} />
          {this.props.label && (
            <label className={classNames('number-input__label label--focused')}>
              {this.renderLabel()}
            </label>
          )}
        </div>
      </InputGroup>
    );
  }

  private commitState() {
    if (this.state.currentText) {
      var num = Number(this.state.currentText);
      if (!isNaN(num)) {
        this.handleLimits(num);
      }
      this.setState({ currentText: undefined });
    }
  }

  private onBlur = () => {
    this.commitState();
    this.handleBlur();
  };

  private removeUnitClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    this.handleLimits((this.props.number || 0) - 1);
  };

  private onUnitChanged = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ currentText: e.target.value });
  };

  private onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      this.commitState();
    }
  };

  private addUnitClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    this.handleLimits((this.props.number || 0) + 1);
  };

  private handleLimits(num: number) {
    if (this.props.min !== undefined) {
      if (num - this.props.min <= 0) {
        this.props.onNumberChange(this.props.min);
        return;
      }
    }
    if (this.props.max !== undefined) {
      if (this.props.max - num <= 0) {
        this.props.onNumberChange(this.props.max);
        return;
      }
    }
    this.props.onNumberChange(num);
  }
}

export const NumberInput = withThemeContext<
  NumberInputProps,
  InstanceType<typeof NumberInputRaw>
>(withFormContext<NumberInputProps>(NumberInputRaw), 'numberInput');

export default NumberInput;
