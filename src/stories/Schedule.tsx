import moment, { duration, Moment } from 'moment';
import * as React from 'react';
import { BookingCalendar, BookingCalendarItemT } from '../lib';
import { itemsOverlap } from '../lib/components/bookingCalendar/utils';

function randomIntFromInterval(min: number, max: number) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const generateBookingItemsBetweenDates = (
  from: Moment,
  till: Moment,
  count = 50
): BookingCalendarItemT[] => {
  const width = till.valueOf() - from.valueOf();
  const startMs = from.valueOf();
  return new Array(count).fill(0).map((_, index) => {
    const _from = randomIntFromInterval(0, till.valueOf() - startMs) + startMs;
    const _width = randomIntFromInterval(width / 100, width / 50);
    return {
      id: index,
      from: moment(_from),
      till: moment(_from).add(_width, 'ms'),
      laneKey:
        randomIntFromInterval(1, 3) === 1
          ? undefined
          : randomIntFromInterval(1, 3),
    };
  });
};

export const Schedule = () => {
  const [{ from, till }, setRange] = React.useState({
    from: moment().startOf('day').subtract(1, 'day'),
    till: moment().startOf('day').add(7, 'days'),
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
    () => bookings.filter((b) => itemsOverlap(b, { from, till })),
    [from, till, bookings]
  );
  const onSelection = React.useCallback(
    (items: BookingCalendarItemT[], _from, _till, e) => {
      console.log(items);
      if (e.ctrlKey) {
        setRange({ from: _from, till: _till });
      }
    },
    []
  );
  return (
    <div className="container">
      <BookingCalendar
        bookings={items}
        from={from}
        till={till}
        step={duration(1, 'day')}
        onRangeChange={setRange}
        onSelection={onSelection}
        selectionContent={'Hold CTRL to zoom'}
        // lanesCount={3}
        lanesSource={new Array(3).fill(0).map((_, index) => ({
          laneKey: index,
          data: { data: 'test' },
          rowClassName: 'test',
        }))}
        zoomLevels={[
          { step: duration(1, 'day'), label: 'Day' },
          { step: duration(1, 'week'), label: 'Week' },
        ]}
      />
    </div>
  );
};

export default Schedule;
