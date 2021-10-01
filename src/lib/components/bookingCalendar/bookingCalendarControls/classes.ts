export interface BookingCalendarControlsClasses {
  className?: string;
  monthLabelClassName?: string;
  buttonsContainerClassName?: string;
  zoomBookingsButtonClassName?: string;
}

export const bookingCalendarControlsDefaultClasses: BookingCalendarControlsClasses = {
  className: 'bookingCalendar__controls',
  monthLabelClassName: 'bookingCalendar__controls__monthLabel',
  buttonsContainerClassName: 'bookingCalendar__controls__buttonsContainer',
  zoomBookingsButtonClassName: 'bookingCalendar__controls__zoomBookingsButton',
};
