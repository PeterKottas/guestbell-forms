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
import { Duration, Moment } from 'moment';

export interface BookingCalendarItemBaseProps<T extends BookingCalendarItemT> {
  item: T;
  itemIndex: number;
  laneIndex: number;
  from: Moment;
  till: Moment;
  step: Duration;
  /**
   * Number between [0,1] that tells how far from previous item (or start) this item starts
   */
  marginStart: number;

  /**
   * Number between [0,1] that tells what part of the lane the item starts at
   */
  start: number;
  /**
   * Like start but can be negative (go offscreen)
   */
  realStart: number;
  /**
   * Some part of the item was cut from the beginning
   */
  startIsCut: boolean;
  /**
   * Number between [0,1] that tells what part of the lane the item takes
   */
  width: number;
  /**
   * Number between [0,1] that tells what part of the lane the item ends at
   */
  end: number;
  /**
   * Like end but can be more than 1 (go offscreen)
   */
  realEnd: number;
  /**
   * Some part of the item was cut from the end
   */
  endIsCut: boolean;

  BookingCalendarRenderItem?: React.ComponentType<
    BookingCalendarRenderItemProps<T>
  >;
}

export interface BookingCalendarItemProps<T extends BookingCalendarItemT>
  extends BookingCalendarItemClasses,
    BookingCalendarItemBaseProps<T> {}

export function BookingCalendarItem<T extends BookingCalendarItemT>(
  props: BookingCalendarItemProps<T>
) {
  const {
    className,
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
      <BookingCalendarRenderItem {...props} />
    </div>
  );
}
