import classNames from 'classnames';
import { Moment } from 'moment';
import * as React from 'react';
import {
  BookingCalendarItem as DefaultBookingCalendarItem,
  BookingCalendarItemProps,
} from '../bookingCalendarItem/BookingCalendarItem';
import { BookingCalendarRenderItemProps } from '../bookingCalendarRenderItem';
import { calculateItemsDimensions } from '../utils';
import { BookingCalendarItemT } from './../common';
import {
  bookingCalendarLaneDefaultClasses,
  BookingCalendarLaneClasses,
} from './classes';

export interface BookingCalendarLaneProps<T extends BookingCalendarItemT>
  extends BookingCalendarLaneClasses {
  items: T[];
  laneIndex: number;
  from: Moment;
  till: Moment;
  BookingCalendarItem?: React.ComponentType<BookingCalendarItemProps<T>>;
  BookingCalendarRenderItem?: React.ComponentType<
    BookingCalendarRenderItemProps<T>
  >;
}

export function BookingCalendarLane<T extends BookingCalendarItemT>(
  props: BookingCalendarLaneProps<T>
) {
  const {
    className,
    items,
    laneIndex,
    from,
    till,
    BookingCalendarItem = DefaultBookingCalendarItem,
    BookingCalendarRenderItem,
  } = props;
  const calculatedItems = React.useMemo(
    () => calculateItemsDimensions(items, from, till),
    [items, from, till]
  );
  return (
    <div
      className={classNames(
        bookingCalendarLaneDefaultClasses.className,
        className
      )}
    >
      {calculatedItems?.map((item, itemIndex) => (
        <BookingCalendarItem
          BookingCalendarRenderItem={BookingCalendarRenderItem}
          key={itemIndex}
          itemIndex={itemIndex}
          laneIndex={laneIndex}
          {...item}
        />
      ))}
    </div>
  );
}
