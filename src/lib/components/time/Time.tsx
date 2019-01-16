import * as ArrowIcon from 'material-design-icons/hardware/svg/production/ic_keyboard_arrow_down_24px.svg';

// Libs
import * as React from 'react';

// Misc
import InputGroup from '../inputGroup/InputGroup';
import {
  BaseInputProps,
  BaseInputState,
  BaseInput
} from '../base/input/BaseInput';
import { withFormContext } from '../form/withFormContext';
import { OmitFormContext } from '../form/FormContext';
import { InnerRefProps } from './../../types/InnerRefProps';
import TimeUtil from '../utils/TimeUtil';

export interface TimeRawProps extends BaseInputProps<HTMLInputElement> {
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  timeChange: (time: Date) => void;
  time: Date;
  min?: Date;
  max?: Date;
  label?: never;
  showDateDiff?: boolean;
}

export type TimeProps = OmitFormContext<TimeRawProps> & InnerRefProps<TimeRawProps>;

export interface TimeState extends BaseInputState {
  hoursText?: string;
  minutesText?: string;
}

export class TimeRaw extends BaseInput<
  TimeRawProps,
  TimeState,
  HTMLInputElement
> {
  public static defaultProps = Object.assign({}, BaseInput.defaultProps, {
    type: 'time',
    placeholder: ''
  });

  constructor(props: TimeRawProps) {
    super(props);
    this.handleHoursChange = this.handleHoursChange.bind(this);
    this.handleMinutesChange = this.handleMinutesChange.bind(this);
  }

  public render() {
    var hours = this.props.time.getHours();
    hours = (hours + 24) % 24;
    var mid = 'AM';
    if (hours % 24 >= 12) {
      hours = hours % 12;
      mid = 'PM';
    }
    if (hours % 12 === 0) {
      // At 00 hours we need to show 12 am
      hours = 12;
    }
    if (this.props.showDateDiff && this.props.min) {
      const diffDays = TimeUtil.dayDiff(this.props.min, this.props.time);
      if (diffDays > 0) {
        mid += ' +' + diffDays.toString();
      }
    }
    return (
      <InputGroup title={this.props.title}>
        <div
          className={
            'input__base time-input ' +
            this.getValidationClass() +
            ' ' +
            (this.props.className ? this.props.className : '')
          }
          ref={this.containerRef}
        >
          <div className="">
            <div className="time-input__arrows__container">
              <button className="plus" onClick={this.addHourClick}>
                <ArrowIcon />
              </button>
              <div className="input-padding">
                <input
                  disabled={this.getDisabled()}
                  required={this.props.required}
                  className={
                    'time-input__time ' + (this.state.value ? 'filled' : '')
                  }
                  onChange={this.onHoursChanged}
                  value={
                    this.state.hoursText !== undefined
                      ? this.state.hoursText
                      : hours
                  }
                  onBlur={this.onBlur}
                  onFocus={this.handleFocus}
                  type="number"
                />
                <span className="highlight" />
              </div>
              <button className="minus" onClick={this.removeHourClick}>
                <ArrowIcon />
              </button>
            </div>
          </div>
          <span className="">:</span>
          <div className="">
            <div className="time-input__arrows__container">
              <button className="plus" onClick={this.addMinuteClick}>
                <ArrowIcon />
              </button>
              <div className="input-padding">
                <input
                  disabled={this.getDisabled()}
                  required={this.props.required}
                  className={
                    'time-input__time ' + (this.state.value ? 'filled' : '')
                  }
                  onChange={this.onMinutesChanged}
                  value={
                    this.state.minutesText !== undefined
                      ? this.state.minutesText
                      : this.props.time.getMinutes() < 10
                      ? '0' + this.props.time.getMinutes().toString()
                      : this.props.time.getMinutes().toString()
                  }
                  onBlur={this.onBlur}
                  onFocus={this.handleFocus}
                  type="number"
                />
                <span className="highlight" />
              </div>
              <button className="minus" onClick={this.removeMinuteClick}>
                <ArrowIcon />
              </button>
            </div>
          </div>
          <div>
            <span className="time-input__am-pm">{mid}</span>
          </div>
          {this.renderDefaultValidation()}
        </div>
      </InputGroup>
    );
  }

  private onBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    if (this.state.hoursText) {
      this.handleHoursChange(this.state.hoursText);
    }
    if (this.state.minutesText) {
      this.handleMinutesChange(this.state.minutesText);
    }
    this.setState({ minutesText: undefined, hoursText: undefined }, () =>
      this.handleBlur(e)
    );
  }

  private onMinutesChanged = (e: React.ChangeEvent<HTMLInputElement>) => {
    // this.handleMinutesChange(e.target.value);
    this.setState({ minutesText: e.target.value });
  }

  private removeMinuteClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    this.handleMinutesChange((this.props.time.getMinutes() - 1).toString());
  }

  private addMinuteClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    this.handleMinutesChange((this.props.time.getMinutes() + 1).toString());
  }

  private removeHourClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    this.handleHoursChange((this.props.time.getHours() - 1).toString());
  }

  private onHoursChanged = (e: React.ChangeEvent<HTMLInputElement>) => {
    // this.handleHoursChange(e.target.value);
    this.setState({ hoursText: e.target.value });
  }

  private addHourClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    this.handleHoursChange((this.props.time.getHours() + 1).toString());
  }

  private handleLimits(time: Date) {
    if (this.props.min) {
      if (time.getTime() - this.props.min.getTime() <= 0) {
        this.props.timeChange(new Date(this.props.min.getTime()));
        return;
      }
    }
    if (this.props.max) {
      if (this.props.max.getTime() - time.getTime() <= 0) {
        this.props.timeChange(new Date(this.props.max.getTime()));
        return;
      }
    }
    this.props.timeChange(time);
  }

  private handleHoursChange(hoursString: string) {
    let num = Number(hoursString);
    if (hoursString === '') {
      num = 0;
    }
    if (!isNaN(num)) {
      let newTime: Date = new Date(this.props.time.getTime());
      newTime.setHours(num);
      this.handleLimits(newTime);
    }
  }

  private handleMinutesChange(minutesString: string) {
    let num = Number(minutesString);
    if (minutesString === '') {
      num = 0;
    }
    if (!isNaN(num)) {
      let newTime: Date = new Date(this.props.time.getTime());
      newTime.setMinutes(num);
      this.handleLimits(newTime);
    }
  }
}

export const Time = withFormContext<TimeRawProps, TimeProps>(TimeRaw);

export default Time;
