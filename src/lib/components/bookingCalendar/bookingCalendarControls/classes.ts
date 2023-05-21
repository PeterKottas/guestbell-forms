export interface BookingCalendarControlsClasses {
  className?: string;
  monthLabelClassName?: string;
  zoomLevelsContainerClassName?: string;
  buttonsContainerClassName?: string;
  zoomBookingsButtonClassName?: string;
  zoomLevelsButtonClassName?: string;
}

export const bookingCalendarControlsDefaultClasses: BookingCalendarControlsClasses =
  {
    className: 'bookingCalendar__controls',
    monthLabelClassName: 'bookingCalendar__controls__monthLabel',
    buttonsContainerClassName: 'bookingCalendar__controls__buttonsContainer',
    zoomLevelsContainerClassName:
      'bookingCalendar__controls__zoomLevelsContainer',
    zoomBookingsButtonClassName:
      'bookingCalendar__controls__zoomBookingsButton',
    zoomLevelsButtonClassName: 'bookingCalendar__controls__zoomLevelsButton',
  };
