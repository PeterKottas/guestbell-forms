// Libs
import * as React from 'react';

// Misc
import OpeningHoursUtil, {
  defaultTranslations as defaultLabelTranslations,
} from '../utils/OpeningHoursUtil';
import {
  OpeningHoursDayObj,
  OpeningHoursDay,
  defaultDayTranslations,
} from '../openingHoursDay/OpeningHoursDay';
import {
  BaseInputProps,
  BaseInputState,
  BaseInput,
  defaultBaseTranslations,
} from '../../base/input/BaseInput';
import { Checkbox } from '../../checkbox/Checkbox';
import { withFormContext } from '../../form/withFormContext';
import { withThemeContext } from '../../themeProvider/withThemeContext';

export enum Weekday {
  Monday = 1,
  Tuesday = 2,
  Wednesday = 3,
  Thursday = 4,
  Friday = 5,
  Saturday = 6,
  Sunday = 0,
}

export interface OpeningHoursWeekDayObj extends OpeningHoursDayObj {
  isStandardDay?: boolean;
  day: Weekday;
}

export interface OpeningHoursWeekProps
  extends BaseInputProps<never, OpeningHoursWeekTranslations> {
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  days: OpeningHoursWeekDayObj[];
  onDaysChange: (days: OpeningHoursWeekDayObj[]) => void;
  standardDay?: OpeningHoursDayObj;
  onStandardDayChange?: (day: OpeningHoursDayObj) => void;
  useCapacity?: boolean;
}

export interface OpeningHoursWeekState extends BaseInputState {}

export const defaultWeekTranslations = {
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
  ...defaultBaseTranslations,
  ...defaultDayTranslations,
  ...defaultLabelTranslations,
};

export type OpeningHoursWeekTranslations = Partial<
  typeof defaultWeekTranslations
>;

export class OpeningHoursWeekRaw extends BaseInput<
  OpeningHoursWeekProps,
  OpeningHoursWeekState,
  never,
  OpeningHoursWeekTranslations
> {
  public static defaultProps = Object.assign({}, BaseInput.defaultProps, {
    onChange: undefined,
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

  private getInitialState() {
    return [
      { day: Weekday.Monday, times: [] },
      { day: Weekday.Tuesday, times: [] },
      { day: Weekday.Wednesday, times: [] },
      { day: Weekday.Thursday, times: [] },
      { day: Weekday.Friday, times: [] },
      { day: Weekday.Saturday, times: [] },
      { day: Weekday.Sunday, times: [] },
    ];
  }

  private renderContent() {
    const allDaysStandard = this.props.days.every(d => d.isStandardDay);
    const weekTranslations = this.getTranslations(defaultWeekTranslations);
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
                  this.props.translations
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
            translations={this.props.translations}
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
                    this.props.translations
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
                this.getDayLabel(day.day, weekTranslations)
              )
            }
            openingHours={{
              times:
                this.props.standardDay && day.isStandardDay
                  ? this.props.standardDay.times
                  : day.times,
            }}
            onOpeningHoursChange={this.onOpeningHoursChange(index, day)}
            title={this.getDayLabel(day.day, weekTranslations)}
            translations={this.props.translations}
          />
        ))}
        <span className="bar" />
        {this.renderDefaultValidation()}
      </div>
    );
  }

  private getDayLabel(
    day: Weekday,
    translations: OpeningHoursWeekTranslations
  ) {
    switch (day) {
      case Weekday.Monday:
        return translations.monday;
      case Weekday.Tuesday:
        return translations.tuesday;
      case Weekday.Wednesday:
        return translations.wednesday;
      case Weekday.Thursday:
        return translations.thursday;
      case Weekday.Friday:
        return translations.friday;
      case Weekday.Saturday:
        return translations.saturday;
      case Weekday.Sunday:
        return translations.sunday;
      default:
        return '';
    }
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

export const OpeningHoursWeek = withThemeContext<
  OpeningHoursWeekProps,
  typeof OpeningHoursWeekRaw
>(
  withFormContext<OpeningHoursWeekProps>(OpeningHoursWeekRaw),
  'openingHoursWeek'
);

export default OpeningHoursWeek;
