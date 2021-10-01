import moment, { Moment, Duration } from 'moment';
import {
  BookingCalendarItemT,
  BookingCalendarItemWithOriginalIndexT,
} from './common';

export function groupBy<T>(items: T[], iterator: (item: T) => number | string) {
  return items.reduce((obj, item) => {
    const key = iterator(item);
    if (!obj.hasOwnProperty(key)) {
      obj[key] = [];
    }
    obj[key].push(item);
    return obj;
  }, {});
}

export interface LaneSourceData<T> {
  laneKey: number;
  data?: T;
}

export interface LaneData<T extends BookingCalendarItemT, B>
  extends LaneSourceData<B> {
  items: T[];
}

export function splitBookingsToLanes<T extends BookingCalendarItemT, B>(
  bookings: T[],
  from: Moment,
  lanesCount: number,
  lanesSource: LaneSourceData<B>[] = []
) {
  if (!bookings) {
    return { lanes: [], extraBookings: [] };
  }
  let lanes: LaneData<T, B>[] = [];
  let extraBookings: (T & BookingCalendarItemWithOriginalIndexT)[] = [];
  if (lanesCount) {
    lanes = new Array<LaneData<T, B>>(lanesCount)
      .fill(null)
      .map((_, index) => ({ items: [], laneKey: index, data: null }));
  }
  if (lanesSource?.length) {
    lanes = lanesSource.map(source => ({
      items: [],
      laneKey: source.laneKey,
      data: source.data,
    }));
  }
  if (bookings.every(b => b.laneKey !== undefined)) {
    const grouped = groupBy(
      bookings.map((booking, originalIndex) => ({ ...booking, originalIndex })),
      a => a.laneKey
    );
    lanes = Object.keys(grouped).map(key => ({
      laneKey: Number(key),
      items: grouped[key],
      data: lanesSource?.find(a => a.laneKey === Number(key))?.data,
    }));
    const missingLanes = lanesSource?.filter(
      a => !lanes.some(l => l.laneKey === a.laneKey)
    );
    lanes = lanes.concat(missingLanes.map(a => ({ ...a, items: [] })));
  } else {
    let remainingBookings: (T &
      BookingCalendarItemWithOriginalIndexT)[] = bookings
      .map((booking, originalIndex) => ({ ...booking, originalIndex }))
      .sort((a, b) => a.from.valueOf() - b.from.valueOf());
    while (remainingBookings.length > 0) {
      let min = 99999999999999;
      let bookingIndex = -1;
      let laneIndex = -1;
      lanes.forEach((lane, index) => {
        const lastTill = lane.items[lane.items.length - 1]?.till ?? from;
        const distances = remainingBookings.map(booking => {
          const dist = booking.from.diff(lastTill);
          if (lane.items.length === 0) {
            return Math.abs(dist);
          }
          return dist;
        });
        const _min = Math.min(...distances.filter(a => a > 0));
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
      } else if (!lanesCount) {
        lanes = lanes.concat({
          items: [{ ...remainingBookings[0] }],
          laneKey: lanes.length,
          data: null,
        });
        remainingBookings.shift();
      } else {
        // lanes = lanes.concat([[{ ...remainingBookings[0] }]]);
        extraBookings = extraBookings.concat(remainingBookings.shift());
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
  lanes = lanes.sort((a, b) => a.laneKey - b.laneKey);
  return { lanes, extraBookings };
}

export function itemsOverlap<T extends BookingCalendarItemT>(a: T, b: T) {
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
    ? items?.map(item => {
        const startIsCut = item.from.valueOf() < startMs;
        const realStart = (item.from.valueOf() - startMs) / widthMs;
        const start = startIsCut ? 0 : realStart;
        const endIsCut = item.till.valueOf() > endMs;
        const realEnd = (item.till.valueOf() - startMs) / widthMs;
        const end = endIsCut ? (endMs - startMs) / widthMs : realEnd;
        const marginStart = start - lastEnd;
        lastEnd = (item.till.valueOf() - startMs) / widthMs;
        return {
          item,
          start,
          realStart,
          startIsCut,
          width: end - start,
          end,
          realEnd,
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
  const steps = Math.ceil(
    (till.valueOf() - from.valueOf()) / step.asMilliseconds()
  );
  let subtract =
    (startOfStep.valueOf() - from.valueOf()) % step.asMilliseconds();
  if (subtract > 0) {
    subtract -= step.asMilliseconds();
  }
  return new Array(steps).fill(0).map((_, index) => ({
    from: moment(from)
      .add(subtract)
      .add(step.asMilliseconds() * index),
    till: moment(from)
      .add(subtract)
      .add(step.asMilliseconds() * (index + 1)),
  }));
};

export const generateGridItems = (
  from: Moment,
  till: Moment,
  step: Duration,
  subdivisions: number = 1
) => {
  if (!from || !till || !step || subdivisions < 1) {
    return [];
  }
  const steps =
    Math.floor(
      ((till.valueOf() - from.valueOf()) / step.asMilliseconds()) * subdivisions
    ) + 1;
  const width = till.valueOf() - from.valueOf();
  return new Array(steps)
    .fill(0)
    .map(
      (_, index) => ((step.asMilliseconds() / subdivisions) * index) / width
    );
};
