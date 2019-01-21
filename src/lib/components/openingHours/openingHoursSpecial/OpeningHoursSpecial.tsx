import * as PlusIcon from 'material-design-icons/content/svg/production/ic_add_circle_outline_24px.svg';
import * as DateIcon from 'material-design-icons/action/svg/production/ic_event_24px.svg';

// Libs
import * as React from 'react';
try {
  var DatePicker = require('react-datepicker').default;
} catch {
  DatePicker = undefined;
}

// Misc
import OpeningHoursUtil from '../utils/OpeningHoursUtil';
import {
  OpeningHoursDayObj,
  OpeningHoursDay
} from '../openingHoursDay/OpeningHoursDay';
import {
  BaseInputProps,
  BaseInputState,
  BaseInput
} from '../../base/input/BaseInput';
import { Button } from '../../button/Button';
import { OmitFormContext } from '../../form/FormContext';
import { withFormContext } from '../../form/withFormContext';
import { InnerRefProps } from './../../../types/InnerRefProps';

export interface OpeningHoursSpecialDayObj extends OpeningHoursDayObj {
  date?: Date;
}

export interface OpeningHoursSpecialRawProps extends BaseInputProps<never> {
  days: OpeningHoursSpecialDayObj[];
  onDaysChange: (days: OpeningHoursSpecialDayObj[]) => void;
  placeholder?: string;
}

export type OpeningHoursSpecialProps = OmitFormContext<
  OpeningHoursSpecialRawProps
> &
  InnerRefProps<OpeningHoursSpecialRawProps>;

export interface OpeningHoursSpecialState extends BaseInputState {}

const DAY_FORMAT = 'dd/M/YYYY';

export class DateInput extends React.PureComponent<{
  value?: string;
  onClick?: () => void;
}> {
  public render() {
    return (
      <Button blank={true} type="primary" onClick={this.props.onClick}>
        <div style={{ display: 'flex' }}>
          <DateIcon style={{ marginRight: 4 }} />
          {this.props.children ? this.props.children : this.props.value}
        </div>
      </Button>
    );
  }
}

export class OpeningHoursSpecialRaw extends BaseInput<
  OpeningHoursSpecialRawProps,
  OpeningHoursSpecialState,
  never
> {
  public static defaultProps = Object.assign({}, BaseInput.defaultProps, {
    type: 'openingHoursSpecial',
    placeholder: DAY_FORMAT
  });

  constructor(props: OpeningHoursSpecialRawProps) {
    super(props);
    this.state = { ...this.state, ...{ touched: true } };
  }

  public componentDidMount() {
    if (this.props.days) {
      const allDaysHaveDates = this.props.days.every(d => Boolean(d.date));
      if (allDaysHaveDates) {
        this.setValid();
      } else {
        this.setInvalid(['Please choose date']);
      }
    }
  }

  public componentWillReceiveProps(nextProps: OpeningHoursSpecialRawProps) {
    if (this.props.days !== nextProps.days) {
      const allDaysHaveDates =
        !nextProps.days || nextProps.days.every(d => Boolean(d.date));
      if (allDaysHaveDates) {
        this.setValid();
      } else {
        this.setInvalid(['Please choose date']);
      }
    }
  }

  public render() {
    if (!DatePicker) {
      throw new Error(
        'You need to install react-datepicker in order to use special day picker'
      );
    }
    return (
      <div
        {...this.props.id && {
          id: this.props.id
        }}
        className={
          'input__base openingHoursSpecial-input ' +
          this.getValidationClass() +
          ' ' +
          (this.props.className ? this.props.className : '')
        }
        ref={this.containerRef}
      >
        {this.props.days.map((day, index) => (
          <OpeningHoursDay
            {...this.props.id && {
              id: this.props.id + '-opening-hours-day-' + index.toString()
            }}
            key={index}
            label={
              <span>
                {OpeningHoursUtil.getLabelSuffix(day)}
                <span className="float-right">
                  <Button
                    {...this.props.id && {
                      id: this.props.id + '-remove-button-' + index.toString()
                    }}
                    blank={true}
                    className="openingHoursSpecial-input__button openingHoursSpecial-input__button--remove"
                    onClick={this.removeDayClick(index)}
                  >
                    <PlusIcon />
                  </Button>
                </span>
              </span>
            }
            openingHours={{
              times: day.times
            }}
            onOpeningHoursChange={this.openingHoursChanged(index, day)}
            title={
              <DatePicker
                {...this.props.id && {
                  id: this.props.id + '-date-picker-' + index.toString()
                }}
                customInput={
                  <DateInput>{!day.date && 'Choose date'}</DateInput>}
                placeholder={this.props.placeholder}
                selected={day.date}
                dateFormat={DAY_FORMAT}
                onChange={this.dateChanged(index, day)}
                excludeDates={this.props.days.filter(d => d.date)}
                withPortal={true}
                minDate={new Date()}
              />
            }
          />
        ))}
        <span className="bar" />
        {this.renderDefaultValidation()}
      </div>
    );
  }

  private removeDayClick = (index: number) => () =>
    this.props.onDaysChange(
      this.props.days.filter((d, indexInner) => indexInner !== index)
    )

  private dateChanged = (index: number, day: OpeningHoursDayObj) => (
    date: Date
  ) => {
    let days = this.props.days.slice(0);
    days[index] = { ...day, date };
    this.props.onDaysChange(days);
  }

  private openingHoursChanged = (
    index: number,
    day: OpeningHoursDayObj
  ) => openingHours => {
    let days = this.props.days.slice(0);
    days[index] = { ...day, ...openingHours };
    this.props.onDaysChange(days);
  }
}

export const OpeningHoursSpecial = withFormContext<
  OpeningHoursSpecialRawProps,
  OpeningHoursSpecialProps
>(OpeningHoursSpecialRaw);

export default OpeningHoursSpecial;
