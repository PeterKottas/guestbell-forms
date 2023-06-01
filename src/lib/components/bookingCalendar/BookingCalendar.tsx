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
  defaultGetNewMomentFunction,
  defaultGridAvailableSteps,
  GetMomentFormatFunctionType,
  ZoomLevel,
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
import moment, { Moment, Duration } from 'moment';
import {
  BookingCalendarItemProps,
  bookingCalendarItemDefaultClasses,
} from './bookingCalendarItem';
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
  bookingCalendarLanesHeaderDefaultClasses,
} from './bookingCalendarLanesHeader';
import {
  BookingCalendarDatePicker as DefaultBookingCalendarDatePicker,
  BookingCalendarDatePickerProps,
} from './bookingCalendarDatePicker';
import { BookingCalendarTimeAxis } from './bookingCalendarTimeAxis/BookingCalendarTimeAxis';
import useDimensions from 'react-cool-dimensions';
import BookingCalendarSelection, {
  BookingCalendarSelectionData,
} from './bookingCalendarSelection/BookingCalendarSelection';
import { bookingCalendarLaneDefaultClasses } from './bookingCalendarLane';
import { bookingCalendarSelectionDefaultClasses } from './bookingCalendarSelection/classes';

export interface BookingCalendarProps<T extends BookingCalendarItemT, TLaneData>
  extends BookingCalendarClasses {
  bookings: T[];
  from: Moment;
  till: Moment;
  getMomentFormatFunction?: GetMomentFormatFunctionType;
  getNewMomentFunction?: GetNewMomentFunctionType;
  onRangeChange?: (range: BookingCalendarDateRange) => void;
  step?: Duration;
  showZoomAllButton?: boolean;
  showGrid?: boolean;
  gridAvailableSteps?: Duration[];
  goalGridWidthPx?: number;
  minLanesCount?: number;
  lanesSource?: LaneSourceData<T, TLaneData>[];
  unmatchedLanesToFront?: boolean;
  children?: React.ReactNode;
  bookingCalendarTopLeftHeader?: React.ReactNode;
  filteringButton?: React.ReactNode;

  zoomLevels?: ZoomLevel[];
  filterBookingsToZoom?: (booking: T) => boolean;

  showSelection?: boolean;
  minSelectionSize?: number;
  onSelection?: (
    items: T[],
    from: Moment,
    till: Moment,
    e: React.MouseEvent<HTMLElement>
  ) => void;
  selectionContent?: React.ReactNode;

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

const defaultStep = moment.duration(1, 'day');

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
    onSelection,
    minSelectionSize = 10,
    selectionContent,
    showZoomAllButton = true,
    gridAvailableSteps = defaultGridAvailableSteps,
    getMomentFormatFunction = defaultGetMomentFormatFunction,
    getNewMomentFunction = defaultGetNewMomentFunction,
    goalGridWidthPx = 60,
    minLanesCount,
    lanesSource,
    unmatchedLanesToFront = true,
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
    bookingCalendarTopLeftHeader,
    filteringButton,
    children,
  } = props;
  const lanes = React.useMemo(
    () =>
      splitBookingsToLanes<T, TLaneData>(
        bookings,
        from,
        minLanesCount,
        lanesSource,
        unmatchedLanesToFront
      ),
    [bookings, from, minLanesCount, lanesSource, unmatchedLanesToFront]
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
  const containerRef = React.useRef<HTMLDivElement>();
  const onSelected = React.useCallback(
    (data: BookingCalendarSelectionData, e: React.MouseEvent<HTMLElement>) => {
      if (!from || !till || !width || !onRangeChange) {
        return;
      }
      const screenSpaceStartX = Math.min(data.origin[0], data.target[0]);
      const screenSpaceEndX = Math.max(data.origin[0], data.target[0]);
      const screenSpaceStartY = Math.min(data.origin[1], data.target[1]);
      const screenSpaceEndY = Math.max(data.origin[1], data.target[1]);
      const durationMs = till.valueOf() - from.valueOf();
      const toTimeSpace = (num: number) => (num / (width || 1)) * durationMs;
      const timeSpaceStart = from
        .clone()
        .add(toTimeSpace(screenSpaceStartX), 'ms');
      const timeSpaceEnd = from.clone().add(toTimeSpace(screenSpaceEndX), 'ms');
      if (onSelection) {
        const itemSelector = `.${bookingCalendarLaneDefaultClasses.className}:not(.${bookingCalendarLanesHeaderDefaultClasses.laneClassName}) > .${bookingCalendarItemDefaultClasses.className}`;
        const allItems = Array.from(
          containerRef?.current?.querySelectorAll(itemSelector)
        );
        const selectionAreaBB = containerRef?.current
          ?.querySelector(`.${bookingCalendarSelectionDefaultClasses.root}`)
          .getBoundingClientRect();
        const selectedItems = allItems.filter((item) => {
          const itemBB = item.getBoundingClientRect();
          const itemLeft = itemBB.left - selectionAreaBB.left;
          const itemTop = itemBB.top - selectionAreaBB.top;
          const itemRight = itemBB.right - selectionAreaBB.left;
          const itemBottom = itemBB.bottom - selectionAreaBB.top;
          // check if at least one corner of the item is inside the screenSpace
          return (
            (screenSpaceStartX <= itemLeft &&
              itemLeft <= screenSpaceEndX &&
              screenSpaceStartY <= itemTop &&
              itemTop <= screenSpaceEndY) ||
            (screenSpaceStartX <= itemRight &&
              itemRight <= screenSpaceEndX &&
              screenSpaceStartY <= itemTop &&
              itemTop <= screenSpaceEndY) ||
            (screenSpaceStartX <= itemLeft &&
              itemLeft <= screenSpaceEndX &&
              screenSpaceStartY <= itemBottom &&
              itemBottom <= screenSpaceEndY) ||
            (screenSpaceStartX <= itemRight &&
              itemRight <= screenSpaceEndX &&
              screenSpaceStartY <= itemBottom &&
              itemBottom <= screenSpaceEndY)
          );
        });
        const selectedIds = selectedItems.map((item) =>
          item.getAttribute('data-id')
        );
        onSelection(
          bookings?.filter((b) => selectedIds.includes(b.id?.toString())),
          timeSpaceStart,
          timeSpaceEnd,
          e
        );
      }
    },
    [
      from,
      till,
      width,
      onRangeChange,
      onSelection,
      onSelection ? bookings : null,
    ]
  );
  return (
    <div
      className={classNames(bookingCalendarDefaultClasses.className, className)}
      ref={containerRef}
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
        filteringButton={filteringButton}
        showZoomAllButton={showZoomAllButton}
        bookingCalendarDatePicker={
          <>
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
          </>
        }
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
          >
            {selectionContent}
          </BookingCalendarSelection>
        )}
        <div
          className={classNames(
            bookingCalendarDefaultClasses.lanesHeaderHeaderContainerClassName,
            lanesHeaderHeaderContainerClassName
          )}
        >
          {bookingCalendarTopLeftHeader}
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
      {children}
    </div>
  );
}
