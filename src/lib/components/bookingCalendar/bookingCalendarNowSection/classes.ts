export interface BookingCalendarNowSectionClasses {
  className?: string;
  areaBefore?: string;
  areaAfter?: string;
  now?: string;
}

export const bookingCalendarNowSectionDefaultClasses: BookingCalendarNowSectionClasses =
  {
    className: 'bookingCalendar__nowSection',
    areaBefore: 'bookingCalendar__nowSection__before',
    areaAfter: 'bookingCalendar__nowSection__after',
    now: 'bookingCalendar__nowSection__now',
  };
