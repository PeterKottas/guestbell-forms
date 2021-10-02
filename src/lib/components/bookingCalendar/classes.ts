import { BookingCalendarControlsClasses } from './bookingCalendarControls/classes';

export interface BookingCalendarClasses {
  className?: string;
  dataLaneTrClassName?: string;
  laneTdClassName?: string;
  tableClassName?: string;
  controlsClasses?: BookingCalendarControlsClasses;
}

export const bookingCalendarDefaultClasses: BookingCalendarClasses = {
  className: 'bookingCalendar',
  dataLaneTrClassName: 'bookingCalendar__dataLaneTr',
  laneTdClassName: 'bookingCalendar__laneTd',
  tableClassName: 'bookingCalendar__table',
};
