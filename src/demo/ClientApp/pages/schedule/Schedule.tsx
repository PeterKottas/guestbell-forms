import moment, { duration, Moment } from 'moment';
import * as React from 'react';
import { itemsOverlap } from '../../../../lib/components/bookingCalendar/utils';
import { BookingCalendar, BookingCalendarItemT } from '../../../../lib/index';

function randomIntFromInterval(min: number, max: number) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const generateBookingItemsBetweenDates = (
  from: Moment,
  till: Moment,
  count = 1
) => {
  const width = till.valueOf() - from.valueOf();
  const startMs = from.valueOf();
  return new Array(count).fill(0).map(() => {
    const _from = randomIntFromInterval(0, till.valueOf() - startMs) + startMs;
    const _width = randomIntFromInterval(width / 100, width / 50);
    return {
      from: moment(_from),
      till: moment(_from).add(_width, 'ms'),
      // laneKey: randomIntFromInterval(1, 30),
    } as BookingCalendarItemT;
  });
};

export const Schedule = () => {
  const [{ from, till }, setRange] = React.useState({
    from: moment()
      .startOf('day')
      .subtract(0, 'day'),
    till: moment()
      .startOf('day')
      .add(7, 'days'),
  });

  const bookings = React.useMemo(
    () =>
      generateBookingItemsBetweenDates(
        from.clone().subtract(10, 'day'),
        till.clone().add(10, 'day')
      ),
    []
  );
  const items = React.useMemo(
    () => bookings.filter(b => itemsOverlap(b, { from, till })),
    [from, till, bookings]
  );
  return (
    <div className="">
      <BookingCalendar
        bookings={items}
        from={from}
        till={till}
        step={duration(1, 'day')}
        gridSubdivisions={4}
        onRangeChange={setRange}
        // lanesCount={3}
        /*lanesSource={new Array(30)
          .fill(0)
          .map((_, index) => ({ laneKey: index, data: { data: 'test' } }))}*/
      />
    </div>
  );
};
