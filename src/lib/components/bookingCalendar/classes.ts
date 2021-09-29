import { BookingCalendarControlsClasses } from './bookingCalendarControls/classes';

export interface BookingCalendarClasses {
  className?: string;
  laneContainerClassName?: string;
  controlsClasses?: BookingCalendarControlsClasses;
}

export const bookingCalendarDefaultClasses: BookingCalendarClasses = {
  className: 'bookingCalendar',
  laneContainerClassName: 'bookingCalendar__laneContainer',
};
