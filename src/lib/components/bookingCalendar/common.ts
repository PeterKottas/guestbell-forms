import { Moment } from 'moment';

export interface BookingCalendarItemT {
  from: Moment;
  till: Moment;
}

export interface BookingCalendarItemWithOriginalIndexT {
  originalIndex: number;
}
