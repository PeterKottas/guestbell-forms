import moment, { duration, Moment } from 'moment';
import * as React from 'react';
import { BookingCalendar } from '../../../../lib/index';

function randomIntFromInterval(min: number, max: number) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const generateBookingItemsBetweenDates = (
  from: Moment,
  till: Moment,
  count = 50
) => {
  const width = till.valueOf() - from.valueOf();
  const startMs = from.valueOf();
  return new Array(count).fill(0).map(() => {
    const _from = randomIntFromInterval(0, till.valueOf() - startMs) + startMs;
    const _width = randomIntFromInterval(width / 10, width / 5);
    return {
      from: moment(_from),
      till: moment(_from).add(_width, 'ms'),
    };
  });
};

export const Schedule = () => {
  const [from] = React.useState(moment().startOf('day'));
  const [till] = React.useState(
    moment()
      .startOf('day')
      .add(7, 'days')
  );
  const items = React.useMemo(
    () => generateBookingItemsBetweenDates(from, till),
    [from, till]
  );
  return (
    <>
      <BookingCalendar
        bookings={items}
        from={from}
        till={till}
        step={duration(1, 'day')}
        gridSubdivisions={4}
      />
    </>
  );
};
