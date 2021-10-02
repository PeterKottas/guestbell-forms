import * as React from 'react';
import { Moment, Duration } from 'moment';
import {
  BookingCalendarGridClasses,
  bookingCalendarGridDefaultClasses,
} from './classes';
import classNames from 'classnames';
import { generateGridItems } from '../utils';

export interface BookingCalendarGridProps extends BookingCalendarGridClasses {
  from: Moment;
  till: Moment;
  step: Duration;
  subdivisions: number;
}

export function BookingCalendarGrid(props: BookingCalendarGridProps) {
  const {
    className,
    gridItemClassName,
    from,
    till,
    step,
    subdivisions,
  } = props;
  const items = React.useMemo(
    () => generateGridItems(from, till, step, subdivisions),
    [from, till, step, subdivisions]
  );
  return (
    <div
      className={classNames(
        bookingCalendarGridDefaultClasses.className,
        className
      )}
    >
      {items.map((item, key) => (
        <div
          className={classNames(
            bookingCalendarGridDefaultClasses.gridItemClassName,
            gridItemClassName
          )}
          key={key}
          style={{
            left: `${item * 100}%`,
            opacity: key % subdivisions === 0 ? 0.4 : 0.2,
          }}
        />
      ))}
    </div>
  );
}
