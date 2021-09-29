import classNames from 'classnames';
import * as React from 'react';
import { BookingCalendarItemT } from './../common';
import {
  BookingCalendarRenderItemClasses,
  bookingCalendarRenderItemDefaultClasses,
} from './classes';

export interface BookingCalendarRenderItemProps<T extends BookingCalendarItemT>
  extends BookingCalendarRenderItemClasses {
  item: T;
  itemIndex: number;
  laneIndex: number;
}

export function BookingCalendarRenderItem<T extends BookingCalendarItemT>(
  props: BookingCalendarRenderItemProps<T>
) {
  const { item, className, laneIndex, itemIndex } = props;
  return item ? (
    <div
      className={classNames(
        bookingCalendarRenderItemDefaultClasses.className,
        className
      )}
    >
      {laneIndex}-{itemIndex}
      <br />
      {item.from?.format?.('M/D H:mm')}
      <br />
      {item.till?.format?.('M/D H:mm')}
    </div>
  ) : null;
}
