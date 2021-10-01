import { Moment } from 'moment';

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
