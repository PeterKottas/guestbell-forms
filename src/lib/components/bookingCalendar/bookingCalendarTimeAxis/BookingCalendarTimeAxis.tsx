import * as React from 'react';
import {
  BookingCalendarTimeAxisClasses,
  bookingCalendarTimeAxisDefaultClasses,
} from './classes';
import classNames from 'classnames';
import { GridItem } from '../utils';
import { Duration } from 'moment';
import { GetMomentFormatFunctionType } from '..';

export interface BookingCalendarTimeAxisProps
  extends BookingCalendarTimeAxisClasses {
  items: GridItem[];
  bestStep: Duration;
  getMomentFormatFunction: GetMomentFormatFunctionType;
}

export function BookingCalendarTimeAxis(props: BookingCalendarTimeAxisProps) {
  const {
    className,
    timeAxisItemClassName,
    items,
    getMomentFormatFunction,
    bestStep,
  } = props;
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
          <svg key={key} x={`${item.left * 100}%`}>
            <text
              transform="translate(-7) rotate(90)"
              className={classNames(
                bookingCalendarTimeAxisDefaultClasses.timeAxisItemClassName,
                timeAxisItemClassName
              )}
            >
              {item.date.format(getMomentFormatFunction?.(item.date, bestStep))}
            </text>
          </svg>
        ))}
      </g>
    </svg>
  );
}
