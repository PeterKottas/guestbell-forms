import * as moment from 'moment';
import { Moment, Duration } from 'moment';
import {
  BookingCalendarItemT,
  BookingCalendarItemWithOriginalIndexT,
} from './common';
export function splitBookingsToLanes<T extends BookingCalendarItemT>(
  bookings: T[]
) {
  if (!bookings) {
    return [];
  }
  let lanes: (T & BookingCalendarItemWithOriginalIndexT)[][] = [];
  bookings.forEach((booking, originalIndex) => {
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
  });
  for (let index = 0; index < lanes.length; index++) {
    const lane = lanes[index];
    lanes[index] = lane.sort((a, b) => a.from.valueOf() - b.from.valueOf());
  }
  return lanes;
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
  return widthMs > 0
    ? items?.map(item => {
        const start = (item.from.valueOf() - startMs) / widthMs;
        const marginStart = start - lastEnd;
        lastEnd = (item.till.valueOf() - startMs) / widthMs;
        return {
          item,
          start,
          width: (item.till.valueOf() - item.from.valueOf()) / widthMs,
          end: (item.till.valueOf() - startMs) / widthMs,
          marginStart,
        };
      })
    : [];
}

export const generateControlItems = (
  from: Moment,
  till: Moment,
  step: Duration
) => {
  if (!from || !till || !step) {
    return [];
  }
  const steps = Math.floor(
    (till.valueOf() - from.valueOf()) / step.asMilliseconds()
  );
  return new Array(steps).fill(0).map((_, index) => ({
    from: moment(from).add(step.asMilliseconds() * index),
    till: moment(from).add(step.asMilliseconds() * (index + 1)),
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
    Math.floor((till.valueOf() - from.valueOf()) / step.asMilliseconds()) *
      subdivisions -
    1;
  const width = till.valueOf() - from.valueOf();
  return new Array(steps)
    .fill(0)
    .map(
      (_, index) =>
        ((step.asMilliseconds() / subdivisions) * (index + 1)) / width
    );
};
