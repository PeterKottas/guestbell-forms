import classNames from 'classnames';
import * as React from 'react';
import { BookingCalendarDateRange, BookingCalendarItemT } from '../common';
import { Duration, Moment } from 'moment';
import {
  BookingCalendarLanesHeaderClasses,
  bookingCalendarLanesHeaderDefaultClasses,
} from './classes';
import { generateControlItems } from '../utils';
import { BookingCalendarLane } from '../bookingCalendarLane';
import { BookingCalendarLanesHeaderRenderItemFactory } from './BookingCalendarLanesHeaderRenderItem';

export interface BookingCalendarLanesHeaderProps<T extends BookingCalendarItemT>
  extends BookingCalendarLanesHeaderClasses {
  step: Duration;
  from: Moment;
  till: Moment;
  onRangeChange?: (range: BookingCalendarDateRange) => void;
}

export function BookingCalendarLanesHeader<T extends BookingCalendarItemT>(
  props: BookingCalendarLanesHeaderProps<T>
) {
  const { className, laneClassName, step, from, till, onRangeChange } = props;
  if (!step || !from || !till) {
    return null;
  }
  const items = React.useMemo(
    () => generateControlItems(from, till, step, from?.clone().startOf('day')),
    [from, till, step]
  );
  const BookingCalendarLanesHeaderRenderItem = React.useMemo(
    () => BookingCalendarLanesHeaderRenderItemFactory(onRangeChange),
    [onRangeChange]
  );
  return (
    <div
      className={classNames(
        bookingCalendarLanesHeaderDefaultClasses.className,
        className
      )}
    >
      <BookingCalendarLane
        className={classNames(
          bookingCalendarLanesHeaderDefaultClasses.laneClassName,
          laneClassName
        )}
        items={items}
        from={from}
        till={till}
        laneIndex={-1}
        BookingCalendarRenderItem={BookingCalendarLanesHeaderRenderItem}
        step={step}
      />
    </div>
  );
}
