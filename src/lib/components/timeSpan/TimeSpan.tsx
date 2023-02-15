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
import { Duration, duration } from 'moment';
import { withThemeContext } from '../themeProvider/withThemeContext';
import classNames from 'classnames';

export enum TimeSpanUnit {
  Dynamic = 0,
  Millisecond = 1,
  Second = 2,
  Minute = 4,
  Hour = 8,
  Day = 16,
  Year = 32,
}

export const allTimeSpanUnits: TimeSpanUnit =
  TimeSpanUnit.Day |
  TimeSpanUnit.Hour |
  TimeSpanUnit.Millisecond |
  TimeSpanUnit.Minute |
  TimeSpanUnit.Second |
  TimeSpanUnit.Year;

function getValues<T>(enumeration: T): T[keyof T][] {
  var values: T[keyof T][] = [];
  for (var value in enumeration) {
    if (isNaN(Number(value))) {
      values.push(enumeration[value]);
    }
  }
  return values;
}

const allUnits = getValues(TimeSpanUnit);

export interface TimeSpanProps extends BaseInputProps<HTMLInputElement> {
  onChange?: never;
  timeSpanChange: (time: Duration) => void;
  timeSpan: Duration;
  min?: Duration;
  max?: Duration;
  initialUnits?: TimeSpanUnit;
  units?: TimeSpanUnit;
  validUnits?: TimeSpanUnit;
  unitToString?: (unit: TimeSpanUnit) => string;
}

export interface TimeSpanState extends BaseInputState {
  currentUnitText: string;
  currentUnit: TimeSpanUnit;
}

export class TimeSpanRaw extends BaseInput<
  TimeSpanProps,
  TimeSpanState,
  HTMLInputElement
> {
  public static defaultProps = (Object.assign({}, BaseInput.defaultProps, {
    type: 'time',
    placeholder: '',
    validUnits: allTimeSpanUnits,
    initialUnits: allTimeSpanUnits,
    units: TimeSpanUnit.Dynamic,
    unitToString: (unit: TimeSpanUnit) => {
      switch (unit) {
        case TimeSpanUnit.Millisecond:
          return 'ms';
        case TimeSpanUnit.Second:
          return 's';
        case TimeSpanUnit.Minute:
          return 'm';
        case TimeSpanUnit.Hour:
          return 'h';
        case TimeSpanUnit.Day:
          return 'd';
        case TimeSpanUnit.Year:
          return 'y';
        default:
          return '';
      }
    },
    min: duration(0),
  }) as unknown) as TimeSpanProps;

  constructor(props: TimeSpanProps) {
    super(props);
    this.removeUnitClick = this.removeUnitClick.bind(this);
    this.addUnitClick = this.addUnitClick.bind(this);
    this.onUnitChanged = this.onUnitChanged.bind(this);
  }

  public render() {
    const { timeSpan, validUnits, initialUnits, units: _units } = this.props;
    const units = _units || this.getUnits(timeSpan, validUnits, initialUnits);
    const unitsArr = allUnits.filter(u => (units & u) !== 0).reverse();
    return (
      <InputGroup
        title={this.props.title}
        tooltip={this.props.tooltip}
        className={this.props.inputGroupClassName}
      >
        <div
          {...(this.props.id && {
            id: this.props.id,
          })}
          className={
            'input__base timeSpan-input ' +
            this.getValidationClass() +
            ' ' +
            (this.props.className ? this.props.className : '')
          }
          ref={this.containerRef}
        >
          {unitsArr.map(unit => (
            <div className="" key={unit}>
              <div className="timeSpan-input__arrows__container">
                <button
                  className="plus"
                  onClick={this.addUnitClick}
                  {...(this.props.id && {
                    id: this.props.id + '-add-hours-button',
                  })}
                  data-unit={unit}
                  tabIndex={0}
                >
                  <ArrowIcon />
                </button>
                <div className="input-padding">
                  <input
                    {...(this.props.id && {
                      id: this.props.id + '-' + unit + '-input',
                    })}
                    disabled={this.getDisabled()}
                    required={this.props.required}
                    className={classNames('timeSpan-input__time', {
                      filled: this.state.value,
                      'timeSpan-input__time--ms':
                        unit === TimeSpanUnit.Millisecond,
                    })}
                    onChange={this.onUnitChanged}
                    value={
                      this.state.currentUnit === unit
                        ? this.state.currentUnitText
                        : this.getValue(timeSpan, unit)
                    }
                    onBlur={this.onBlur}
                    onFocus={this.handleFocus}
                    type="number"
                    data-unit={unit}
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
                  data-unit={unit}
                  tabIndex={0}
                >
                  <ArrowIcon />
                </button>
              </div>
              {this.props.unitToString(unit)}
            </div>
          ))}
          {this.renderDefaultValidation()}
          <span className="highlight" />
          <span className={'bar ' + (this.state.focused ? 'focused' : '')} />
          {this.props.label && (
            <label
              className={classNames('timeSpan-input__label label--focused')}
            >
              {this.renderLabel()}
            </label>
          )}
        </div>
      </InputGroup>
    );
  }

  private getUnits(
    time: Duration,
    validUnits: TimeSpanUnit,
    initialUnits: TimeSpanUnit
  ) {
    if (time === null || time === undefined) {
      return initialUnits;
    }
    const ms = time.asMilliseconds();
    let units: TimeSpanUnit = TimeSpanUnit.Millisecond | TimeSpanUnit.Second;
    if (ms >= 1000) {
      units += TimeSpanUnit.Minute;
    }
    if (ms >= 60000) {
      units += TimeSpanUnit.Hour;
    }
    if (ms >= 60 * 60000) {
      units += TimeSpanUnit.Day;
    }
    if (ms >= 24 * 60 * 60000) {
      units += TimeSpanUnit.Year;
    }
    const tagMask = allTimeSpanUnits & ~validUnits;
    units &= ~tagMask;
    return units || initialUnits;
  }

  private getValue(time: Duration, unit: TimeSpanUnit) {
    if (!time || !unit) {
      return 0;
    }
    switch (unit) {
      case TimeSpanUnit.Millisecond:
        return Math.floor(time.get('millisecond'));
      case TimeSpanUnit.Second:
        return Math.floor(time.get('second'));
      case TimeSpanUnit.Minute:
        return Math.floor(time.get('minute'));
      case TimeSpanUnit.Hour:
        return Math.floor(time.get('hour'));
      case TimeSpanUnit.Day:
        return Math.floor(time.get('day'));
      case TimeSpanUnit.Year:
        return Math.floor(time.get('year'));
      default:
        return 0;
    }
  }

  private oneUnitInMs(unit: TimeSpanUnit) {
    if (!unit) {
      return 0;
    }
    switch (unit) {
      case TimeSpanUnit.Millisecond:
        return 1;
      case TimeSpanUnit.Second:
        return 1000;
      case TimeSpanUnit.Minute:
        return 60000;
      case TimeSpanUnit.Hour:
        return 3600000;
      case TimeSpanUnit.Day:
        return 24 * 3600000;
      case TimeSpanUnit.Year:
        return 24 * 365 * 3600000;
      default:
        return 0;
    }
  }

  private maxOfUnit(unit: TimeSpanUnit) {
    if (!unit) {
      return 0;
    }
    switch (unit) {
      case TimeSpanUnit.Millisecond:
        return 1000;
      case TimeSpanUnit.Second:
        return 60;
      case TimeSpanUnit.Minute:
        return 60;
      case TimeSpanUnit.Hour:
        return 24;
      case TimeSpanUnit.Day:
        return 365;
      case TimeSpanUnit.Year:
        return 9999;
      default:
        return 0;
    }
  }

  private commitState() {
    if (this.state.currentUnit) {
      var num = Number(this.state.currentUnitText);
      if (!isNaN(num)) {
        const newOfUnitMs = num * this.oneUnitInMs(this.state.currentUnit);
        const oldOfUnitMs =
          this.getValue(this.props.timeSpan, this.state.currentUnit) *
          this.oneUnitInMs(this.state.currentUnit);
        const maxOfUnitMs =
          this.maxOfUnit(this.state.currentUnit) *
          this.oneUnitInMs(this.state.currentUnit);
        const moreThanMax = maxOfUnitMs < newOfUnitMs;
        const diff = newOfUnitMs - oldOfUnitMs;
        if (moreThanMax) {
          this.handleLimits(duration(newOfUnitMs, 'millisecond'));
        } else {
          this.handleLimits(
            duration(
              (this.props.timeSpan?.asMilliseconds() || 0) + diff,
              'millisecond'
            )
          );
        }
      }
      this.setState({ currentUnit: undefined, currentUnitText: undefined });
    }
  }

  private onBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    this.commitState();
    this.handleBlur(e);
  };

  private removeUnitClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const unit: TimeSpanUnit = Number(e.currentTarget.dataset.unit);
    const diff = -1 * this.oneUnitInMs(unit);
    const newDate = duration(
      (this.props.timeSpan?.asMilliseconds() || 0) + diff,
      'millisecond'
    );
    this.handleLimits(newDate);
  };

  private onUnitChanged = (e: React.ChangeEvent<HTMLInputElement>) => {
    // this.handleHoursChange(e.target.value);
    const unit: TimeSpanUnit = Number(e.currentTarget.dataset.unit);
    this.setState({ currentUnitText: e.target.value, currentUnit: unit });
  };

  private onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      this.commitState();
    }
  };

  private addUnitClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const unit: TimeSpanUnit = Number(e.currentTarget.dataset.unit);
    const diff = this.oneUnitInMs(unit);
    const newDate = duration(
      (this.props.timeSpan?.asMilliseconds() || 0) + diff,
      'milliseconds'
    );
    this.handleLimits(newDate);
  };

  private handleLimits(time: Duration) {
    if (this.props.min) {
      if (time.asMilliseconds() - this.props.min.asMilliseconds() <= 0) {
        this.props.timeSpanChange(this.props.min.clone());
        return;
      }
    }
    if (this.props.max) {
      if (this.props.max.asMilliseconds() - time.asMilliseconds() <= 0) {
        this.props.timeSpanChange(this.props.max.clone());
        return;
      }
    }
    this.props.timeSpanChange(time);
  }
}

export const TimeSpan = withThemeContext<
  TimeSpanProps,
  InstanceType<typeof TimeSpanRaw>
>(withFormContext<TimeSpanProps>(TimeSpanRaw), 'timeSpan');

export default TimeSpan;
