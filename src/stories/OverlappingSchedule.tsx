import moment, { duration, Moment } from 'moment';
import * as React from 'react';
import {
  BookingCalendar,
  BookingCalendarItemT,
  BookingCalendarRenderItem,
  BookingCalendarRenderItemProps,
} from '../lib';
import classNames from 'classnames';
import './overlappingSchedule.scss';

type TItem = BookingCalendarItemT & { overlapping?: boolean };

const generateBookingItemsBetweenDates = (
  from: Moment,
  till: Moment
): TItem[] => {
  const width = till.valueOf() - from.valueOf();
  const startMs = from.valueOf();
  const nonOverlappingCount = 10;
  const laneCount = 6;
  let i = 0;
  return new Array(laneCount)
    .fill(0)
    .map((_, laneIndex) => [
      ...new Array(nonOverlappingCount).fill(0).map((_, index) => {
        const _from = startMs + index * (width / nonOverlappingCount);
        const _width = width / (nonOverlappingCount + 1);
        return {
          id: i++,
          from: moment(_from),
          till: moment(_from).add(_width, 'ms'),
          laneKey: laneIndex,
        };
      }),
      ...(laneIndex === 0
        ? [
            {
              id: i++,
              from: moment(from),
              till: moment(till),
              laneKey: laneIndex,
              overlapping: true,
            },
          ]
        : laneIndex === 1
        ? [
            {
              id: i++,
              from: moment(from).subtract(width / 2, 'ms'),
              till: moment(till).add(width / 2, 'ms'),
              laneKey: laneIndex,
              overlapping: true,
            },
            {
              id: i++,
              from: moment(from).subtract(width / 2, 'ms'),
              till: moment(till).add(width / 2, 'ms'),
              laneKey: laneIndex,
              overlapping: true,
            },
          ]
        : laneIndex === 2
        ? [
            {
              id: i++,
              from: moment(till).subtract(width / 2, 'ms'),
              till: moment(till),
              laneKey: laneIndex,
              overlapping: true,
            },
          ]
        : laneIndex === 3
        ? [
            {
              id: i++,
              from: moment(from).add(width / (nonOverlappingCount * 2), 'ms'),
              till: moment(till).subtract(
                width / (nonOverlappingCount * 2),
                'ms'
              ),
              laneKey: laneIndex,
              overlapping: true,
            },
          ]
        : laneIndex === 4
        ? [
            {
              id: i++,
              from: moment(from).add(width / (nonOverlappingCount * 2), 'ms'),
              till: moment(till).subtract(
                width / (nonOverlappingCount * 2),
                'ms'
              ),
              laneKey: laneIndex,
              overlapping: true,
            },
            {
              id: i++,
              from: moment(from).add(width / (nonOverlappingCount * 2), 'ms'),
              till: moment(till).subtract(
                width / (nonOverlappingCount * 2),
                'ms'
              ),
              laneKey: laneIndex,
              overlapping: true,
            },
          ]
        : []),
    ])
    .reduce((acc, val) => acc.concat(val), [])
    .filter((a) => a /* && a?.laneKey === 0*/);
};

export const Schedule = () => {
  const [{ from, till }, setRange] = React.useState({
    from: moment().startOf('day').subtract(0, 'day'),
    till: moment().startOf('day').add(7, 'days'),
  });

  const bookings = React.useMemo(
    () =>
      generateBookingItemsBetweenDates(
        from.clone().subtract(0, 'day'),
        till.clone().add(0, 'day')
      ),
    []
  );

  const onSelection = React.useCallback((items: TItem[], _from, _till, e) => {
    console.log(items);
    if (e.ctrlKey) {
      setRange({ from: _from, till: _till });
    }
  }, []);
  const RenderItem: React.FC<BookingCalendarRenderItemProps<TItem>> =
    React.useCallback((props) => {
      return (
        <BookingCalendarRenderItem
          className={classNames({ overlapping__item: props.item.overlapping })}
          {...props}
          alwaysShowContent={true}
        >
          <div />
        </BookingCalendarRenderItem>
      );
    }, []);
  return (
    <div className="container">
      <BookingCalendar
        bookings={bookings}
        from={from}
        till={till}
        step={duration(1, 'day')}
        onRangeChange={setRange}
        onSelection={onSelection}
        selectionContent={'Hold CTRL to zoom'}
        // showHeader={false}
        lanesSource={new Array(6).fill(0).map((_, index) => ({
          laneKey: index,
          data: { data: 'test' },
          rowClassName: 'test',
        }))}
        zoomLevels={[
          { step: duration(1, 'day'), label: 'Day' },
          { step: duration(1, 'week'), label: 'Week' },
        ]}
        BookingCalendarRenderItem={RenderItem}
        headersClickEnabled={false}
      />
    </div>
  );
};

export default Schedule;
