import * as React from 'react';
import {
  BookingCalendarRenderItem as DefaultBookingCalendarRenderItem,
  BookingCalendarRenderItemProps,
} from '../bookingCalendarRenderItem/BookingCalendarRenderItem';
import { BookingCalendarItemT } from '../common';
import classNames from 'classnames';
import { getItemPositionStyle } from './../utils';
import {
  BookingCalendarItemClasses,
  bookingCalendarItemDefaultClasses,
} from './classes';

export interface BookingCalendarItemProps<T extends BookingCalendarItemT>
  extends BookingCalendarItemClasses {
  item: T;
  itemIndex: number;
  laneIndex: number;
  /**
   * Number between [0,1] that tells how far from previous item (or start) this item starts
   */
  marginStart: number;
  /**
   * Number between [0,1] that tells what part of the lane the item starts at
   */
  start: number;
  /**
   * Number between [0,1] that tells what part of the lane the item takes
   */
  width: number;
  /**
   * Number between [0,1] that tells what part of the lane the item ends at
   */
  end: number;

  BookingCalendarRenderItem?: React.ComponentType<
    BookingCalendarRenderItemProps<T>
  >;
}

export function BookingCalendarItem<T extends BookingCalendarItemT>(
  props: BookingCalendarItemProps<T>
) {
  const {
    className,
    item,
    laneIndex,
    itemIndex,
    marginStart,
    width,
    BookingCalendarRenderItem = DefaultBookingCalendarRenderItem,
  } = props;
  const style = React.useMemo(() => getItemPositionStyle(marginStart, width), [
    marginStart,
    width,
  ]);
  return (
    <div
      className={classNames(
        bookingCalendarItemDefaultClasses.className,
        className
      )}
      style={style}
    >
      <BookingCalendarRenderItem
        item={item}
        itemIndex={itemIndex}
        laneIndex={laneIndex}
      />
    </div>
  );
}
