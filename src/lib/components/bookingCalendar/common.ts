import moment, { Moment, Duration } from 'moment';

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
  if (date.valueOf() === date.clone().startOf('day').valueOf()) {
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
  moment.duration(1, 'minute'),
  moment.duration(5, 'minute'),
  moment.duration(10, 'minute'),
  moment.duration(15, 'minute'),
  moment.duration(20, 'minute'),
  moment.duration(30, 'minute'),
  moment.duration(1, 'hour'),
  moment.duration(2, 'hour'),
  moment.duration(4, 'hour'),
  moment.duration(6, 'hour'),
  moment.duration(8, 'hour'),
  moment.duration(12, 'hour'),
  moment.duration(1, 'day'),
];
