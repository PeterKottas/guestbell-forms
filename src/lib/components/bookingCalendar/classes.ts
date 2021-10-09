import { BookingCalendarControlsClasses } from './bookingCalendarControls/classes';

export interface BookingCalendarClasses {
  className?: string;
  laneContainerClassName?: string;
  laneHeaderContainerClassName?: string;
  lanesHeaderHeaderContainerClassName?: string;
  lanesHeaderContainerClassName?: string;
  tableClassName?: string;
  controlsClasses?: BookingCalendarControlsClasses;
}

export const bookingCalendarDefaultClasses: BookingCalendarClasses = {
  className: 'bookingCalendar',
  laneContainerClassName: 'bookingCalendar__laneContainer',
  laneHeaderContainerClassName: 'bookingCalendar__laneHeaderContainer',
  lanesHeaderContainerClassName: 'bookingCalendar__lanesHeaderContainer',
  lanesHeaderHeaderContainerClassName:
    'bookingCalendar__lanesHeaderHeaderContainer',
  tableClassName: 'bookingCalendar__table',
};
