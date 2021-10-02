import classNames from 'classnames';
import { Duration, Moment } from 'moment';
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
  step: Duration;
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
    step,
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
      {calculatedItems?.map((item, itemIndex) =>
        item.width > 0 ? (
          <BookingCalendarItem
            BookingCalendarRenderItem={BookingCalendarRenderItem}
            key={itemIndex}
            itemIndex={itemIndex}
            laneIndex={laneIndex}
            from={from}
            till={till}
            step={step}
            {...item}
          />
        ) : null
      )}
    </div>
  );
}
