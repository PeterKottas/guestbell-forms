import * as React from 'react';
import {
  BookingCalendarGridClasses,
  bookingCalendarGridDefaultClasses,
} from './classes';
import classNames from 'classnames';
import { GridItem } from '../utils';

export interface BookingCalendarGridProps extends BookingCalendarGridClasses {
  items: GridItem[];
  containerRef?: (elem: HTMLElement) => void;
  firstDataRowIndex: number;
  dataRowsCount: number;
  width: number;
}

export function BookingCalendarGrid(props: BookingCalendarGridProps) {
  const {
    className,
    gridItemClassName,
    containerRef,
    dataRowsCount,
    firstDataRowIndex,
    items,
    width,
  } = props;
  const style = React.useMemo(
    () => ({
      gridRowStart: firstDataRowIndex,
      gridRowEnd: `span ${dataRowsCount}`,
      ...(width ? { width: `${width}px` } : {}),
    }),
    [firstDataRowIndex, dataRowsCount, width]
  );
  return (
    <div
      className={classNames(
        bookingCalendarGridDefaultClasses.className,
        className
      )}
      style={style}
      ref={containerRef}
    >
      {items.map((item, key) => (
        <div
          className={classNames(
            bookingCalendarGridDefaultClasses.gridItemClassName,
            gridItemClassName
          )}
          key={key}
          style={{
            left: `${item.left * 100}%`,
            opacity: 0.7 * item.opacity + 0.1,
          }}
        />
      ))}
    </div>
  );
}
