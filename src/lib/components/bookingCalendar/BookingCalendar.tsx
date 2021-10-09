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
import moment from 'moment';
import { ZoomLevel } from '.';
import { BookingCalendarTimeAxis } from './bookingCalendarTimeAxis/BookingCalendarTimeAxis';

export interface BookingCalendarProps<
  T extends BookingCalendarItemT,
  TLaneData
> extends BookingCalendarClasses {
  bookings: T[];
  from: Moment;
  till: Moment;
  onRangeChange?: (range: BookingCalendarDateRange) => void;
  startOfStep?: Moment;
  step?: Duration;
  showGrid?: boolean;
  gridSubdivisions?: number;
  minLanesCount?: number;
  lanesSource?: LaneSourceData<T, TLaneData>[];

  zoomLevels?: ZoomLevel[];
  filterBookingsToZoom?: (booking: T) => boolean;

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
  BookingCalendarDatePicker?:
    | React.ComponentType<BookingCalendarDatePickerProps<T>>
    | React.ReactNode;
}

const defaultStep = duration(1, 'day');
const defaultStartOfStep = moment().startOf('day');

export function BookingCalendar<T extends BookingCalendarItemT, TLaneData>(
  props: BookingCalendarProps<T, TLaneData>
) {
  const {
    bookings,
    className,
    laneContainerClassName,
    laneHeaderContainerClassName,
    controlsClasses,
    tableClassName,
    from,
    till,
    onRangeChange,
    step = defaultStep,
    startOfStep = defaultStartOfStep,
    showGrid = true,
    gridSubdivisions = 1,
    minLanesCount,
    lanesSource,
    filterBookingsToZoom,
    zoomLevels,
    BookingCalendarControls = DefaultBookingCalendarControls,
    BookingCalendarItem,
    BookingCalendarLane = DefaultBookingCalendarLane,
    BookingCalendarRenderItem,
    BookingCalendarGrid = DefaultBookingCalendarGrid,
    BookingCalendarLaneHeader = DefaultBookingCalendarLaneHeader,
    BookingCalendarLanesHeader = DefaultBookingCalendarLanesHeader,
    BookingCalendarDatePicker = DefaultBookingCalendarDatePicker,
  } = props;
  const lanes = React.useMemo(
    () =>
      splitBookingsToLanes<T, TLaneData>(
        bookings,
        from,
        minLanesCount,
        lanesSource
      ),
    [bookings, from, minLanesCount, lanesSource]
  );
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
        filterBookingsToZoom={filterBookingsToZoom}
        zoomLevels={zoomLevels}
      />
      <div
        className={classNames(
          bookingCalendarDefaultClasses.tableClassName,
          tableClassName
        )}
      >
        {showGrid && (
          <BookingCalendarGrid
            from={from}
            till={till}
            step={step}
            subdivisions={gridSubdivisions}
            dataRowsCount={lanes.length}
          />
        )}
        <div>
          {typeof BookingCalendarDatePicker === 'function' ? (
            <BookingCalendarDatePicker
              from={from}
              till={till}
              onRangeChange={onRangeChange}
            />
          ) : (
            BookingCalendarDatePicker
          )}
        </div>
        <div>
          <BookingCalendarLanesHeader<T>
            {...controlsClasses}
            from={from}
            till={till}
            onRangeChange={onRangeChange}
            step={step}
            startOfStep={startOfStep}
          />
        </div>

        {lanes.map((lane, laneIndex) => {
          const LaneBookingCalendarLaneHeader =
            lane.BookingCalendarLaneHeader ?? BookingCalendarLaneHeader;
          const LaneBookingCalendarLane =
            lane.BookingCalendarLane ?? BookingCalendarLane;
          return (
            <>
              <div
                className={classNames(
                  bookingCalendarDefaultClasses.laneHeaderContainerClassName,
                  laneHeaderContainerClassName,
                  lane.rowClassName,
                  {
                    [`${bookingCalendarDefaultClasses.laneHeaderContainerClassName}--last`]:
                      laneIndex === lanes.length - 1,
                    [`${bookingCalendarDefaultClasses.laneHeaderContainerClassName}--first`]:
                      laneIndex === 0,
                  }
                )}
              >
                <LaneBookingCalendarLaneHeader<TLaneData>
                  laneKey={lane.laneKey ?? laneIndex}
                  data={lane.data}
                />
              </div>
              <div
                className={classNames(
                  bookingCalendarDefaultClasses.laneContainerClassName,
                  laneContainerClassName,
                  lane.rowClassName,
                  {
                    [`${bookingCalendarDefaultClasses.laneContainerClassName}--last`]:
                      laneIndex === lanes.length - 1,
                    [`${bookingCalendarDefaultClasses.laneContainerClassName}--first`]:
                      laneIndex === 0,
                  }
                )}
              >
                <LaneBookingCalendarLane
                  laneIndex={laneIndex}
                  items={lane.items}
                  from={from}
                  till={till}
                  BookingCalendarItem={
                    lane.BookingCalendarItem ?? BookingCalendarItem
                  }
                  BookingCalendarRenderItem={
                    lane.BookingCalendarRenderItem ?? BookingCalendarRenderItem
                  }
                  step={step}
                />
              </div>
            </>
          );
        })}
        <div />
        <div>
          <BookingCalendarTimeAxis
            from={from}
            till={till}
            step={step}
            subdivisions={gridSubdivisions}
          />
        </div>
      </div>
    </div>
  );
}
