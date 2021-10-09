import { BookingCalendarControlsClasses } from './bookingCalendarControls/classes';

export interface BookingCalendarClasses {
  className?: string;
  laneContainerClassName?: string;
  laneHeaderContainerClassName?: string;
  tableClassName?: string;
  controlsClasses?: BookingCalendarControlsClasses;
}

export const bookingCalendarDefaultClasses: BookingCalendarClasses = {
  className: 'bookingCalendar',
  laneContainerClassName: 'bookingCalendar__laneContainer',
  laneHeaderContainerClassName: 'bookingCalendar__laneHeaderContainer',
  tableClassName: 'bookingCalendar__table',
};
