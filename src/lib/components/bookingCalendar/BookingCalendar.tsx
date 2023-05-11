import * as React from 'react';
import {
  BookingCalendarClasses,
  bookingCalendarDefaultClasses,
} from './classes';
import classNames from 'classnames';
import {
  BookingCalendarDateRange,
  BookingCalendarItemT,
  defaultGetMomentFormatFunction,
  GetNewMomentFunctionType,
} from './common';
import {
  BookingCalendarControls as DefaultBookingCalendarControls,
  BookingCalendarControlsProps,
} from './bookingCalendarControls/BookingCalendarControls';
import {
  generateGridItems,
  LaneSourceData,
  splitBookingsToLanes,
} from './utils';
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
import {
  defaultGetNewMomentFunction,
  defaultGridAvailableSteps,
  GetMomentFormatFunctionType,
  ZoomLevel,
} from '.';
import { BookingCalendarTimeAxis } from './bookingCalendarTimeAxis/BookingCalendarTimeAxis';
import useDimensions from 'react-cool-dimensions';
import BookingCalendarSelection, {
  BookingCalendarSelectionData,
} from './bookingCalendarSelection/BookingCalendarSelection';

export interface BookingCalendarProps<T extends BookingCalendarItemT, TLaneData>
  extends BookingCalendarClasses {
  bookings: T[];
  from: Moment;
  till: Moment;
  getMomentFormatFunction?: GetMomentFormatFunctionType;
  getNewMomentFunction?: GetNewMomentFunctionType;
  onRangeChange?: (range: BookingCalendarDateRange) => void;
  step?: Duration;
  showGrid?: boolean;
  showSelection?: boolean;
  minSelectionSize?: number;
  gridAvailableSteps?: Duration[];
  goalGridWidthPx?: number;
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

export function BookingCalendar<T extends BookingCalendarItemT, TLaneData>(
  props: BookingCalendarProps<T, TLaneData>
) {
  const {
    bookings,
    className,
    laneContainerClassName,
    laneHeaderContainerClassName,
    lanesHeaderContainerClassName,
    lanesHeaderHeaderContainerClassName,
    controlsClasses,
    tableClassName,
    from,
    till,
    onRangeChange,
    step = defaultStep,
    showGrid = true,
    showSelection = true,
    gridAvailableSteps = defaultGridAvailableSteps,
    getMomentFormatFunction = defaultGetMomentFormatFunction,
    getNewMomentFunction = defaultGetNewMomentFunction,
    goalGridWidthPx = 60,
    minSelectionSize = 10,
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
  const { observe, entry } = useDimensions<HTMLDivElement>();
  const width = entry?.target?.scrollWidth ?? 0;
  const { items: gridItems, bestStep } = React.useMemo(
    () =>
      generateGridItems(
        from,
        till,
        step,
        width,
        gridAvailableSteps,
        goalGridWidthPx,
        from?.clone()?.startOf('day')
      ),
    [from, till, step, width, gridAvailableSteps, goalGridWidthPx]
  );
  const onSelected = React.useCallback(
    (data: BookingCalendarSelectionData) => {
      if (!from || !till || !width || !onRangeChange) {
        return;
      }
      const screenSpaceStartX = Math.min(data.origin[0], data.target[0]);
      const screenSpaceEndX = Math.max(data.origin[0], data.target[0]);
      const durationMs = till.valueOf() - from.valueOf();
      const toTimeSpace = (num: number) => (num / (width || 1)) * durationMs;
      const timeSpaceStart = from
        .clone()
        .add(toTimeSpace(screenSpaceStartX), 'ms');
      const timeSpaceEnd = from.clone().add(toTimeSpace(screenSpaceEndX), 'ms');
      onRangeChange({ from: timeSpaceStart, till: timeSpaceEnd });
    },
    [from, till, width, onRangeChange]
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
            items={gridItems}
            dataRowsCount={lanes.length}
            width={width}
          />
        )}
        {showSelection && (
          <BookingCalendarSelection
            dataRowsCount={lanes.length}
            onSelected={onSelected}
            minSelectionSize={minSelectionSize}
          />
        )}
        <div
          className={classNames(
            bookingCalendarDefaultClasses.lanesHeaderHeaderContainerClassName,
            lanesHeaderHeaderContainerClassName
          )}
        >
          {typeof BookingCalendarDatePicker === 'function' ? (
            <BookingCalendarDatePicker
              from={from}
              till={till}
              onRangeChange={onRangeChange}
              getNewMomentFunction={getNewMomentFunction}
            />
          ) : (
            BookingCalendarDatePicker
          )}
        </div>
        <div
          className={classNames(
            bookingCalendarDefaultClasses.lanesHeaderContainerClassName,
            lanesHeaderContainerClassName
          )}
          ref={observe}
        >
          <BookingCalendarLanesHeader<T>
            {...controlsClasses}
            from={from}
            till={till}
            onRangeChange={onRangeChange}
            step={step}
          />
        </div>

        {lanes.map((lane, laneIndex) => {
          const LaneBookingCalendarLaneHeader =
            lane.BookingCalendarLaneHeader ?? BookingCalendarLaneHeader;
          const LaneBookingCalendarLane =
            lane.BookingCalendarLane ?? BookingCalendarLane;
          return (
            <React.Fragment key={laneIndex}>
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
            </React.Fragment>
          );
        })}
        <div />
        <div>
          <BookingCalendarTimeAxis
            items={gridItems}
            bestStep={bestStep}
            getMomentFormatFunction={getMomentFormatFunction}
          />
        </div>
      </div>
    </div>
  );
}
