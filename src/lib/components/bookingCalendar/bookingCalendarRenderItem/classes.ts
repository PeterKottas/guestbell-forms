export interface BookingCalendarRenderItemClasses {
  className?: string;
  cutStartClassname?: string;
  cutEndClassname?: string;
}

export const bookingCalendarRenderItemDefaultClasses: BookingCalendarRenderItemClasses = {
  className: 'bookingCalendar__renderItem',
  cutStartClassname: 'bookingCalendar__renderItem--cutStart',
  cutEndClassname: 'bookingCalendar__renderItem--cutEnd',
};
