import * as React from 'react';
import {
  BookingCalendarClasses,
  bookingCalendarDefaultClasses,
} from './classes';
import classNames from 'classnames';
import { BookingCalendarDateRange, BookingCalendarItemT } from './common';
import {
  BookingCalendarControls as DefaultBookingCalendarControls,
  BookingCalendarControlsProps,
} from './bookingCalendarControls/BookingCalendarControls';
import { LaneSourceData, splitBookingsToLanes } from './utils';
import {
  BookingCalendarLane as DefaultBookingCalendarLane,
  BookingCalendarLaneProps,
} from './bookingCalendarLane/BookingCalendarLane';
import { Moment, Duration, duration } from 'moment';
import { BookingCalendarItemProps } from './bookingCalendarItem';
import { BookingCalendarRenderItemProps } from './bookingCalendarRenderItem';
import {
  BookingCalendarGrid as DefaultBookingCalendarGrid,
  BookingCalendarGridProps,
} from './bookingCalendarGrid/BookingCalendarGrid';
import {
  BookingCalendarLaneHeader as DefaultBookingCalendarLaneHeader,
  BookingCalendarLaneHeaderProps,
} from './bookingCalendarLaneHeader';
import {
  BookingCalendarLanesHeader as DefaultBookingCalendarLanesHeader,
  BookingCalendarLanesHeaderProps,
} from './bookingCalendarLanesHeader';
import {
  BookingCalendarDatePicker as DefaultBookingCalendarDatePicker,
  BookingCalendarDatePickerProps,
} from './bookingCalendarDatePicker';

export interface BookingCalendarProps<
  T extends BookingCalendarItemT,
  TLaneData
> extends BookingCalendarClasses {
  bookings: T[];
  from: Moment;
  till: Moment;
  onRangeChange?: (range: BookingCalendarDateRange) => void;
  onExtraBookingsChange?: (extraBookings: T[]) => void;
  step?: Duration;
  showGrid?: boolean;
  gridSubdivisions?: number;
  lanesCount?: number;
  lanesSource?: LaneSourceData<TLaneData>[];

  BookingCalendarItem?: React.ComponentType<BookingCalendarItemProps<T>>;
  BookingCalendarRenderItem?: React.ComponentType<
    BookingCalendarRenderItemProps<T>
  >;
  BookingCalendarLane?: React.ComponentType<BookingCalendarLaneProps<T>>;
  BookingCalendarControls?: React.ComponentType<
    BookingCalendarControlsProps<T>
  >;
  BookingCalendarGrid?: React.ComponentType<BookingCalendarGridProps>;
  BookingCalendarLaneHeader?: React.ComponentType<
    BookingCalendarLaneHeaderProps<TLaneData>
  >;
  BookingCalendarLanesHeader?: React.ComponentType<
    BookingCalendarLanesHeaderProps<T>
  >;
  BookingCalendarDatePicker?: React.ComponentType<
    BookingCalendarDatePickerProps<T>
  >;
}

const defaultStep = duration(1, 'day');

export function BookingCalendar<T extends BookingCalendarItemT, TLaneData>(
  props: BookingCalendarProps<T, TLaneData>
) {
  const {
    bookings,
    className,
    laneTdClassName,
    controlsClasses,
    tableClassName,
    from,
    till,
    onRangeChange,
    onExtraBookingsChange,
    step = defaultStep,
    showGrid = true,
    gridSubdivisions = 1,
    lanesCount,
    lanesSource,
    BookingCalendarControls = DefaultBookingCalendarControls,
    BookingCalendarItem,
    BookingCalendarLane = DefaultBookingCalendarLane,
    BookingCalendarRenderItem,
    BookingCalendarGrid = DefaultBookingCalendarGrid,
    BookingCalendarLaneHeader = DefaultBookingCalendarLaneHeader,
    BookingCalendarLanesHeader = DefaultBookingCalendarLanesHeader,
    BookingCalendarDatePicker = DefaultBookingCalendarDatePicker,
  } = props;
  const { lanes, extraBookings } = React.useMemo(
    () =>
      splitBookingsToLanes<T, TLaneData>(
        bookings,
        from,
        lanesCount,
        lanesSource
      ),
    [bookings, from, lanesCount, lanesSource]
  );
  React.useEffect(() => {
    onExtraBookingsChange?.(extraBookings);
  }, [extraBookings]);
  return (
    <div
      className={classNames(bookingCalendarDefaultClasses.className, className)}
    >
      <BookingCalendarControls<T>
        {...controlsClasses}
        items={bookings}
        from={from}
        till={till}
        onRangeChange={onRangeChange}
        step={step}
      />
      <table
        className={classNames(
          bookingCalendarDefaultClasses.tableClassName,
          tableClassName
        )}
      >
        <thead>
          <tr>
            <td>
              <BookingCalendarDatePicker
                from={from}
                till={till}
                onRangeChange={onRangeChange}
              />
            </td>
            <td>
              <BookingCalendarLanesHeader<T>
                {...controlsClasses}
                from={from}
                till={till}
                onRangeChange={onRangeChange}
                step={step}
              />
            </td>
          </tr>
        </thead>
        <tbody>
          {lanes.map((lane, laneIndex) => (
            <tr key={laneIndex}>
              <td>
                <BookingCalendarLaneHeader<TLaneData>
                  laneKey={lane.laneKey ?? laneIndex}
                  data={lane.data}
                />
              </td>
              <td
                className={classNames(
                  bookingCalendarDefaultClasses.laneTdClassName,
                  laneTdClassName
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
                <BookingCalendarLane
                  laneIndex={laneIndex}
                  items={lane.items}
                  from={from}
                  till={till}
                  BookingCalendarItem={BookingCalendarItem}
                  BookingCalendarRenderItem={BookingCalendarRenderItem}
                  step={step}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
