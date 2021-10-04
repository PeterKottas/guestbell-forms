import * as React from 'react';
import moment, { Moment, Duration } from 'moment';
import {
  BookingCalendarTimeAxisClasses,
  bookingCalendarTimeAxisDefaultClasses,
} from './classes';
import classNames from 'classnames';
import { generateGridItems } from '../utils';

export interface BookingCalendarTimeAxisProps
  extends BookingCalendarTimeAxisClasses {
  from: Moment;
  till: Moment;
  step: Duration;
  subdivisions: number;
}

export function BookingCalendarTimeAxis(props: BookingCalendarTimeAxisProps) {
  const {
    className,
    timeAxisItemClassName,
    from,
    till,
    step,
    subdivisions,
  } = props;
  const items = React.useMemo(
    () => generateGridItems(from, till, step, subdivisions),
    [from, till, step, subdivisions]
  );
  const diff = till.diff(from);
  const svgRef = React.useRef<SVGSVGElement>();
  return (
    <svg
      className={classNames(
        bookingCalendarTimeAxisDefaultClasses.className,
        className
      )}
      ref={svgRef}
    >
      <g>
        {items.map((item, key) => (
          <svg key={key} x={`${item * 100}%`}>
            <text
              transform="translate(-7) rotate(90)"
              className={classNames(
                bookingCalendarTimeAxisDefaultClasses.timeAxisItemClassName,
                timeAxisItemClassName
              )}
              style={{
                opacity: key % subdivisions === subdivisions - 1 ? 0.4 : 0.2,
              }}
            >
              {moment(from)
                .add(diff * item)
                .format(
                  key % subdivisions === subdivisions - 1
                    ? 'MMM Do hh:mm a'
                    : 'h:mm a'
                )}
            </text>
          </svg>
        ))}
      </g>
    </svg>
  );
}
