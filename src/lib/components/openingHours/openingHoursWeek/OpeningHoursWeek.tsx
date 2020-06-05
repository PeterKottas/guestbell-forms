// Libs
import * as React from 'react';

// Misc
import OpeningHoursUtil, {
  OpeningHoursLabelTranslations,
} from '../utils/OpeningHoursUtil';
import {
  OpeningHoursDayObj,
  OpeningHoursDay,
  OpeningHoursDayTranslations,
} from '../openingHoursDay/OpeningHoursDay';
import {
  BaseInputProps,
  BaseInputState,
  BaseInput,
} from '../../base/input/BaseInput';
import { Checkbox } from '../../checkbox/Checkbox';
import { withFormContext } from '../../form/withFormContext';

export interface OpeningHoursWeekDayObj extends OpeningHoursDayObj {
  isStandardDay?: boolean;
  dayLabel?: string;
}

export interface OpeningHoursWeekProps extends BaseInputProps<never> {
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  days: OpeningHoursWeekDayObj[];
  onDaysChange: (days: OpeningHoursWeekDayObj[]) => void;
  standardDay?: OpeningHoursWeekDayObj;
  onStandardDayChange?: (day: OpeningHoursWeekDayObj) => void;
  useCapacity?: boolean;
  weekTranslations?: OpeningHoursWeekTranslations;
  dayTranslations?: OpeningHoursDayTranslations;
  labelTranslations?: OpeningHoursLabelTranslations;
}

export interface OpeningHoursWeekState extends BaseInputState {}

const defaultOpeningHoursWeekTranslations = {
  standardDay: 'Standard day',
  standardDayTooltip: (
    <>
      We recommend to use <b>Standard day</b> if multiple days share the same
      opening hours. Check "Standard day?" checkbox for each of these days to
      make them share standard opening hours.
    </>
  ),
  standardDayAll: 'Apply to all days?',
  standardDayCheckBox: 'Standard day?',
  monday: 'Monday',
  tuesday: 'Tuesday',
  wednesday: 'Wednesday',
  thursday: 'Thursday',
  friday: 'Friday',
  saturday: 'Saturday',
  sunday: 'Sunday',
};

export type OpeningHoursWeekTranslations = typeof defaultOpeningHoursWeekTranslations;

export class OpeningHoursWeekRaw extends BaseInput<
  OpeningHoursWeekProps,
  OpeningHoursWeekState,
  never
> {
  public static defaultProps = Object.assign({}, BaseInput.defaultProps, {
    type: 'openingHoursWeek',
    placeholder: '',
    collapsible: false,
  });

  constructor(props: OpeningHoursWeekProps) {
    super(props);
    this.state = { ...this.state };
    this.toggleStandardForAll = this.toggleStandardForAll.bind(this);
  }

  public componentDidMount() {
    if (!this.props.days || !this.props.days.length) {
      this.props.onDaysChange(this.getInitialState());
    }
  }

  public componentDidUpdate() {
    if (!this.props.days || !this.props.days.length) {
      this.props.onDaysChange(this.getInitialState());
    }
  }

  public render() {
    return (
      <div
        className={
          'openingHoursWeek-input ' +
          this.getValidationClass() +
          ' ' +
          (this.props.className ? this.props.className : '')
        }
        ref={this.containerRef}
      >
        {this.renderContent()}
      </div>
    );
  }

  private toggleStandardForAll() {
    const allDaysStandard = this.props.days.every(d => d.isStandardDay);
    let days = this.props.days.map(d => ({
      ...d,
      isStandardDay: !allDaysStandard,
    }));
    this.props.onDaysChange(days);
  }

  private getTranslations() {
    let { weekTranslations = defaultOpeningHoursWeekTranslations } = this.props;
    return {
      ...defaultOpeningHoursWeekTranslations,
      ...weekTranslations,
    };
  }

  private getInitialState() {
    const weekTranslations = this.getTranslations();
    return [
      { dayLabel: weekTranslations.monday, times: [] },
      { dayLabel: weekTranslations.tuesday, times: [] },
      { dayLabel: weekTranslations.wednesday, times: [] },
      { dayLabel: weekTranslations.thursday, times: [] },
      { dayLabel: weekTranslations.friday, times: [] },
      { dayLabel: weekTranslations.saturday, times: [] },
      { dayLabel: weekTranslations.sunday, times: [] },
    ];
  }

  private renderContent() {
    const allDaysStandard = this.props.days.every(d => d.isStandardDay);
    const weekTranslations = this.getTranslations();
    return (
      <div className={``}>
        {this.props.standardDay && (
          <OpeningHoursDay
            useCapacity={this.props.useCapacity}
            {...(this.props.id && {
              id: this.props.id + '-standard-day',
            })}
            className="openingHoursWeek__standard-day"
            label={
              <span>
                {OpeningHoursUtil.getLabelSuffix(
                  this.props.standardDay,
                  this.props.labelTranslations
                )}
                <span className="float-right openingHoursWeek__is-standard-day">
                  {weekTranslations.standardDayAll}
                  <Checkbox
                    className="label__checkbox"
                    checked={allDaysStandard}
                    onChecked={this.toggleStandardForAll}
                  />
                </span>
              </span>
            }
            openingHours={{
              times: this.props.standardDay.times,
            }}
            onOpeningHoursChange={this.standardDayChanged}
            title={weekTranslations.standardDay}
            tooltip={weekTranslations.standardDayTooltip}
            translations={this.props.dayTranslations}
          />
        )}
        {this.props.days.map((day, index) => (
          <OpeningHoursDay
            useCapacity={this.props.useCapacity}
            {...(this.props.id && {
              id: this.props.id + '-opening-hours-day-' + index.toString(),
            })}
            className={''}
            key={index}
            label={
              this.props.standardDay ? (
                <span>
                  {OpeningHoursUtil.getLabelSuffix(
                    this.props.standardDay && day.isStandardDay
                      ? this.props.standardDay
                      : day,
                    this.props.labelTranslations
                  )}
                  <span className="float-right openingHoursWeek__is-standard-day">
                    {weekTranslations.standardDayCheckBox}
                    <Checkbox
                      className="label__checkbox"
                      checked={day.isStandardDay}
                      onChecked={this.isStandardDayChecked(index, day)}
                    />
                  </span>
                </span>
              ) : (
                day.dayLabel
              )
            }
            openingHours={{
              times:
                this.props.standardDay && day.isStandardDay
                  ? this.props.standardDay.times
                  : day.times,
            }}
            onOpeningHoursChange={this.onOpeningHoursChange(index, day)}
            title={day.dayLabel}
            translations={this.props.dayTranslations}
          />
        ))}
        <span className="bar" />
        {this.renderDefaultValidation()}
      </div>
    );
  }

  private onOpeningHoursChange = (index: number, day: OpeningHoursDayObj) => (
    openingHours: OpeningHoursWeekDayObj
  ) => {
    let days = this.props.days.slice(0);
    days[index] = { ...day, ...openingHours, isStandardDay: false };
    this.props.onDaysChange(days);
  };

  private isStandardDayChecked = (
    index: number,
    day: OpeningHoursWeekDayObj
  ) => checked => {
    let days = this.props.days.slice(0);
    days[index] = { ...day, isStandardDay: checked.target.checked };
    this.props.onDaysChange(days);
  };

  private standardDayChanged = (openingHours: OpeningHoursDayObj) => {
    this.props.onStandardDayChange(openingHours);
  };
}

export const OpeningHoursWeek = withFormContext<OpeningHoursWeekProps>(
  OpeningHoursWeekRaw
);

export default OpeningHoursWeek;
