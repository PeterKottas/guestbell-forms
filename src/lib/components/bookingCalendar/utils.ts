import moment, { Moment, Duration } from 'moment';
import { BookingCalendarItemProps } from './bookingCalendarItem';
import { BookingCalendarLaneProps } from './bookingCalendarLane';
import { BookingCalendarLaneHeaderProps } from './bookingCalendarLaneHeader';
import { BookingCalendarRenderItemProps } from './bookingCalendarRenderItem';
import {
  BookingCalendarItemT,
  BookingCalendarItemWithOriginalIndexT,
} from './common';

export function groupBy<T>(
  items: T[],
  iterator: (item: T) => number | string
): { [key: string | number]: T[] } {
  return items.reduce((obj, item) => {
    const key = iterator(item);
    if (!obj.hasOwnProperty(key)) {
      obj[key] = [];
    }
    obj[key].push(item);
    return obj;
  }, {});
}

export interface LaneSourceData<T extends BookingCalendarItemT, TLaneData> {
  laneKey: number;
  data?: TLaneData;
  rowClassName?: string;
  BookingCalendarItem?: React.ComponentType<BookingCalendarItemProps<T>>;
  BookingCalendarRenderItem?: React.ComponentType<
    BookingCalendarRenderItemProps<T>
  >;
  BookingCalendarLaneHeader?: React.ComponentType<
    BookingCalendarLaneHeaderProps<TLaneData>
  >;
  BookingCalendarLane?: React.ComponentType<BookingCalendarLaneProps<T>>;
}

export interface LaneData<T extends BookingCalendarItemT, TLaneData>
  extends LaneSourceData<T, TLaneData> {
  items: T[];
}

export function splitBookingsToLanes<T extends BookingCalendarItemT, TLaneData>(
  bookings: T[],
  from: Moment,
  minLanesCount: number,
  lanesSource: LaneSourceData<T, TLaneData>[] = [],
  unmatchedToFront = true
) {
  if (!bookings) {
    return [];
  }
  let lanes: LaneData<T, TLaneData>[] = [];
  if (lanesSource?.length) {
    lanes = lanesSource.map((source) => ({
      ...source,
      items: [],
    }));
  }
  const bookingsWithoutLaneKey = bookings.filter(
    (a) => a.laneKey === undefined
  );
  const bookingsWithLaneKey = bookings.filter((a) => a.laneKey !== undefined);
  if (bookingsWithLaneKey.length) {
    const grouped = groupBy(
      bookingsWithLaneKey.map((booking, originalIndex) => ({
        ...booking,
        originalIndex,
      })),
      (a) => a.laneKey
    );
    lanes = Object.keys(grouped).map((key) => ({
      laneKey: Number(key),
      items: grouped[key],
      ...lanesSource?.find((a) => a.laneKey === Number(key)),
    }));
    const missingLanes = lanesSource?.filter(
      (a) => !lanes.some((l) => l.laneKey === a.laneKey)
    );
    lanes = lanes.concat(missingLanes.map((a) => ({ ...a, items: [] })));
  }
  if (bookingsWithoutLaneKey.length) {
    let remainingBookings: (T & BookingCalendarItemWithOriginalIndexT)[] =
      bookingsWithoutLaneKey
        .map((booking, originalIndex) => ({ ...booking, originalIndex }))
        .sort((a, b) => a.from.valueOf() - b.from.valueOf());
    while (remainingBookings.length > 0) {
      let min = 99999999999999;
      let bookingIndex = -1;
      let laneIndex = -1;
      lanes.forEach((lane, index) => {
        if (lanesSource?.some((l) => l.laneKey === lane.laneKey)) {
          return;
        }
        const lastTill = lane.items[lane.items.length - 1]?.till ?? from;
        const distances = remainingBookings.map((booking) => {
          const dist = booking.from.diff(lastTill);
          if (lane.items.length === 0) {
            return Math.abs(dist);
          }
          return dist;
        });
        const _min = Math.min(...distances.filter((a) => a >= 0));
        if (_min < min) {
          bookingIndex = distances.indexOf(_min);
          laneIndex = index;
        }
      });
      if (bookingIndex >= 0 && laneIndex >= 0) {
        lanes[laneIndex].items = lanes[laneIndex].items.concat({
          ...remainingBookings[bookingIndex],
        });
        remainingBookings.splice(bookingIndex, 1);
      } else {
        lanes = lanes.concat({
          items: [{ ...remainingBookings[0] }],
          laneKey: lanes.length,
          data: undefined,
        });
        remainingBookings.shift();
      }
    }
    // Naive solution that is much less computationally intensive but yields more lanes than necessary
    /*bookings.forEach((booking, originalIndex) => {
    let found = false;
    lanes.forEach((lane, index) => {
      if (!lane.some(i => itemsOverlap(booking, i))) {
        lanes[index] = lanes[index].concat({ ...booking, originalIndex });
        found = true;
      }
    });
    if (!found) {
      lanes = lanes.concat([[{ ...booking, originalIndex }]]);
    }
  });*/
  }
  for (let index = 0; index < lanes.length; index++) {
    const lane = lanes[index];
    lanes[index].items = lane.items.sort(
      (a, b) => a.from.valueOf() - b.from.valueOf()
    );
  }
  if (lanes.length < minLanesCount) {
    lanes = lanes.concat(
      new Array<LaneData<T, TLaneData>>(minLanesCount - lanes.length)
        .fill(null)
        .map((_, index) => ({
          items: [],
          laneKey: index + lanes.length,
          data: null,
        }))
    );
  }
  const findIndex = (
    arr: (LaneData<T, TLaneData> | LaneSourceData<T, TLaneData>)[],
    laneKey: string | undefined | number
  ): number => {
    const unmatchedVal = unmatchedToFront
      ? Number.MIN_SAFE_INTEGER
      : Number.MAX_SAFE_INTEGER;
    if (laneKey === undefined || laneKey === null) {
      return unmatchedVal;
    }
    const index = arr.findIndex((item) => item.laneKey === laneKey);
    return index === -1 ? unmatchedVal : index;
  };

  const sortArrayByLaneKeys = (
    referenceArray: LaneSourceData<T, TLaneData>[],
    arrayToSort: LaneData<T, TLaneData>[]
  ): LaneData<T, TLaneData>[] => {
    return [...arrayToSort].sort((a, b) => {
      const indexA = findIndex(referenceArray, a.laneKey);
      const indexB = findIndex(referenceArray, b.laneKey);
      return indexA - indexB;
    });
  };
  lanes = sortArrayByLaneKeys(lanesSource, lanes);
  return lanes;
}

type Picked = Pick<BookingCalendarItemT, 'from' | 'till'>;
export function itemsOverlap(a: Picked, b: Picked) {
  if (!a?.from || !a?.till || !b?.from || !b?.till) {
    return false;
  }
  if (b.till.isBefore(a.from)) {
    return false;
  }
  if (b.from.isAfter(a.till)) {
    return false;
  }
  return true;
}

export const getItemPositionStyle = (marginStart: number, width: number) =>
  ({
    marginLeft: `${marginStart * 100}%`,
    width: `${width * 100}%`,
  } as React.CSSProperties);

export function calculateItemsDimensions<T extends BookingCalendarItemT>(
  items: T[],
  from: Moment,
  till: Moment
) {
  let lastEnd = 0;
  const widthMs = till.valueOf() - from.valueOf();
  const startMs = from.valueOf();
  const endMs = till.valueOf();
  return widthMs > 0
    ? items?.map((item) => {
        const startIsCut = item.from.valueOf() < startMs;
        const realStart = (item.from.valueOf() - startMs) / widthMs;
        const realFrom = startIsCut ? moment(startMs) : moment(item.from);
        const start = startIsCut ? 0 : realStart;
        const endIsCut = item.till.valueOf() > endMs;
        const realEnd = (item.till.valueOf() - startMs) / widthMs;
        const end = endIsCut ? (endMs - startMs) / widthMs : realEnd;
        const realTill = endIsCut ? moment(endMs) : moment(item.till);
        const marginStart = start - lastEnd;
        lastEnd = (item.till.valueOf() - startMs) / widthMs;
        return {
          item,
          start,
          realStart,
          realFrom,
          startIsCut,
          width: end - start,
          end,
          realEnd,
          realTill,
          endIsCut,
          marginStart,
        };
      })
    : [];
}

export const generateControlItems = (
  from: Moment,
  till: Moment,
  step: Duration,
  startOfStep: Moment
) => {
  if (!from || !till || !step) {
    return [];
  }
  let steps = Math.max(
    Math.ceil((till.valueOf() - from.valueOf()) / step.asMilliseconds()),
    2
  );
  let subtract =
    (startOfStep.valueOf() - from.valueOf()) % step.asMilliseconds();
  if (subtract > 0) {
    subtract -= step.asMilliseconds();
  }
  if (till.valueOf() - from.valueOf() > step.asMilliseconds()) {
    steps += 1;
  }
  return new Array(steps).fill(0).map((_, index) => ({
    from: from
      .clone()
      .add(subtract)
      .add(step.asMilliseconds() * index),
    till: from
      .clone()
      .add(subtract)
      .add(step.asMilliseconds() * (index + 1)),
    id: index
  }));
};

export interface GridItem {
  left: number;
  date: Moment;
  stepProportion: number;
  opacity: number;
}

export const generateGridItems = (
  from: Moment,
  till: Moment,
  step: Duration,
  containerWidthPx: number,
  availableSteps: Duration[],
  goalGridWidthPx: number,
  startOfStep: Moment
): { items: GridItem[]; bestStep: Duration } => {
  if (
    !from ||
    !till ||
    !containerWidthPx ||
    !availableSteps?.length ||
    !goalGridWidthPx ||
    !step ||
    !startOfStep
  ) {
    return { bestStep: availableSteps?.[0], items: [] };
  }
  const stepMs = step.asMilliseconds();
  const fromMs = from.valueOf();
  const tillMs = till.valueOf();
  const timeLengthMs = tillMs - fromMs;
  const approximateStepsCount = containerWidthPx / goalGridWidthPx;
  const approximateStepMs = timeLengthMs / approximateStepsCount;
  const availableStepsDistancesMs = availableSteps.map((a) =>
    Math.abs(a.asMilliseconds() - approximateStepMs)
  );
  const smallestDistance = Math.min(...availableStepsDistancesMs);
  const bestStepIndex = availableStepsDistancesMs.findIndex(
    (a) => a === smallestDistance
  );
  const bestStep = availableSteps[bestStepIndex];
  const subtract =
    (fromMs + from.utcOffset() * 60 * 1000) % bestStep.asMilliseconds();
  let startMs = fromMs - subtract;
  let steps: Moment[] = [];
  while (startMs <= tillMs) {
    steps = steps.concat(from.clone().add(startMs - fromMs, 'ms'));
    startMs += bestStep.asMilliseconds();
  }
  return {
    items: steps
      .filter((a) => a.valueOf() > fromMs && a.valueOf() < tillMs)
      .map((date) => {
        const stepProportion =
          ((date.valueOf() + from.utcOffset() * 60 * 1000) % stepMs) / stepMs;
        let numberOfRoots = 0;
        let current = stepProportion;
        let currentTop = 1;
        let tolerance = 0.001;
        while (current > tolerance && current < currentTop - tolerance) {
          numberOfRoots += 1;
          currentTop = 1 / Math.pow(2, numberOfRoots);
          if (current > currentTop) {
            current -= currentTop;
          }
        }
        return {
          left: (date.valueOf() - fromMs) / timeLengthMs,
          date,
          stepProportion,
          opacity: 1 / (numberOfRoots || 1),
        };
      }),
    bestStep,
  };
};
