import * as React from 'react';
import {
  BookingCalendarClasses,
  bookingCalendarDefaultClasses,
} from './classes';
import classNames from 'classnames';
import { BookingCalendarItemT } from './common';
import {
  BookingCalendarControls as DefaultBookingCalendarControls,
  BookingCalendarControlsProps,
  BookingCalendarDateRange,
} from './bookingCalendarControls/BookingCalendarControls';
import { splitBookingsToLanes } from './utils';
import {
  BookingCalendarLane as DefaultBookingCalendarLane,
  BookingCalendarLaneProps,
} from './bookingCalendarLane/BookingCalendarLane';
import { Moment, Duration } from 'moment';
import { BookingCalendarItemProps } from './bookingCalendarItem';
import { BookingCalendarRenderItemProps } from './bookingCalendarRenderItem';
import {
  BookingCalendarGrid as DefaultBookingCalendarGrid,
  BookingCalendarGridProps,
} from './bookingCalendarGrid/BookingCalendarGrid';

export interface BookingCalendarProps<T extends BookingCalendarItemT>
  extends BookingCalendarClasses {
  bookings: T[];
  from: Moment;
  till: Moment;
  onRangeChange?: (range: BookingCalendarDateRange) => void;
  step?: Duration;
  showGrid?: boolean;
  gridSubdivisions?: number;

  BookingCalendarItem?: React.ComponentType<BookingCalendarItemProps<T>>;
  BookingCalendarRenderItem?: React.ComponentType<
    BookingCalendarRenderItemProps<T>
  >;
  BookingCalendarLane?: React.ComponentType<BookingCalendarLaneProps<T>>;
  BookingCalendarControls?: React.ComponentType<
    BookingCalendarControlsProps<T>
  >;
  BookingCalendarGrid?: React.ComponentType<BookingCalendarGridProps>;
}

export function BookingCalendar<T extends BookingCalendarItemT>(
  props: BookingCalendarProps<T>
) {
  const {
    bookings,
    className,
    laneContainerClassName,
    controlsClasses,
    from,
    till,
    onRangeChange,
    step,
    showGrid = true,
    gridSubdivisions = 1,
    BookingCalendarControls = DefaultBookingCalendarControls,
    BookingCalendarItem,
    BookingCalendarLane = DefaultBookingCalendarLane,
    BookingCalendarRenderItem,
    BookingCalendarGrid = DefaultBookingCalendarGrid,
  } = props;
  const splitBookings = React.useMemo(() => splitBookingsToLanes(bookings), [
    bookings,
  ]);
  return (
    <div
      className={classNames(bookingCalendarDefaultClasses.className, className)}
    >
      <BookingCalendarControls<T>
        {...controlsClasses}
        from={from}
        till={till}
        onRangeChange={onRangeChange}
        step={step}
      />
      <div
        className={classNames(
          bookingCalendarDefaultClasses.laneContainerClassName,
          laneContainerClassName
        )}
      >
        {showGrid && (
          <BookingCalendarGrid
            from={from}
            till={till}
            step={step}
            subdivisions={gridSubdivisions}
          />
        )}
        {splitBookings.map((lane, laneIndex) => (
          <BookingCalendarLane
            key={laneIndex}
            laneIndex={laneIndex}
            items={lane}
            from={from}
            till={till}
            BookingCalendarItem={BookingCalendarItem}
            BookingCalendarRenderItem={BookingCalendarRenderItem}
          />
        ))}
      </div>
    </div>
  );
}
