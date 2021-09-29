import classNames from 'classnames';
import * as React from 'react';
import { BookingCalendarRenderItemProps } from '../bookingCalendarRenderItem';
import { bookingCalendarRenderItemDefaultClasses } from '../bookingCalendarRenderItem/classes';
import { BookingCalendarItemT } from './../common';

export function BookingCalendarControlsRenderItem<
  T extends BookingCalendarItemT
>(props: BookingCalendarRenderItemProps<T>) {
  const { item, className } = props;
  return item ? (
    <div
      className={classNames(
        bookingCalendarRenderItemDefaultClasses.className,
        className
      )}
    >
      {item.from.calendar(null, {
        lastDay: '[Yesterday]',
        sameDay: '[Today]',
        nextDay: '[Tomorrow]',
        lastWeek: '[last] dddd',
        nextWeek: 'dddd',
        sameElse: 'L',
      })}
    </div>
  ) : null;
}
