import { BookingCalendarControlsClasses } from './bookingCalendarControls/classes';

export interface BookingCalendarClasses {
  className?: string;
  laneTdClassName?: string;
  tableClassName?: string;
  controlsClasses?: BookingCalendarControlsClasses;
}

export const bookingCalendarDefaultClasses: BookingCalendarClasses = {
  className: 'bookingCalendar',
  laneTdClassName: 'bookingCalendar__laneTd',
  tableClassName: 'bookingCalendar__table',
};
