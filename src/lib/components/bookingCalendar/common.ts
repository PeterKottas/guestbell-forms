import moment, { Moment, Duration, duration } from 'moment';

export interface BookingCalendarItemT {
  from: Moment;
  till: Moment;
  /*
  Optional index that identifies the lane
  */
  laneKey?: string | number;
}

export interface BookingCalendarItemWithOriginalIndexT {
  originalIndex: number;
}

export interface BookingCalendarDateRange {
  from: Moment;
  till: Moment;
}

export interface ZoomLevel {
  step: Duration;
  label: React.ReactNode;
}

export const defaultGetMomentFormatFunction = (
  date: Moment,
  bestStep: Duration
) => {
  if (!date || !bestStep) {
    return undefined;
  }
  if (
    date.valueOf() ===
    date
      .clone()
      .startOf('day')
      .valueOf()
  ) {
    return 'MMM Do';
  }
  return 'h:mm a';
};

export type GetMomentFormatFunctionType = typeof defaultGetMomentFormatFunction;

export const defaultGetNewMomentFunction = (date: Date) => {
  return moment(date);
};

export type GetNewMomentFunctionType = typeof defaultGetNewMomentFunction;

export const defaultGridAvailableSteps: Duration[] = [
  duration(1, 'minute'),
  duration(5, 'minute'),
  duration(10, 'minute'),
  duration(15, 'minute'),
  duration(20, 'minute'),
  duration(30, 'minute'),
  duration(1, 'hour'),
  duration(2, 'hour'),
  duration(4, 'hour'),
  duration(6, 'hour'),
  duration(8, 'hour'),
  duration(12, 'hour'),
  duration(1, 'day'),
];
