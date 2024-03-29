import classNames from 'classnames';
import * as React from 'react';
import { BookingCalendarItemProps } from '../bookingCalendarItem';
import { BookingCalendarItemT } from './../common';
import {
  bookingCalendarRenderItemDefaultClasses,
  BookingCalendarRenderItemClasses,
} from './classes';

export interface BookingCalendarRenderItemProps<T extends BookingCalendarItemT>
  extends BookingCalendarItemProps<T>,
    BookingCalendarRenderItemClasses {
  alwaysShowContent?: boolean;
  children?: React.ReactNode;
}

export function BookingCalendarRenderItem<T extends BookingCalendarItemT>(
  props: BookingCalendarRenderItemProps<T>
) {
  const {
    item,
    className,
    laneIndex,
    itemIndex,
    width,
    endIsCut,
    startIsCut,
    alwaysShowContent,
    children = (
      <>
        {laneIndex}-{itemIndex}
        <br />
        {item.from?.format?.('M/D H:mm')}
        <br />
        {item.till?.format?.('M/D H:mm')}
      </>
    ),
  } = props;
  /*const stepWidth = React.useMemo(
    () => step.asMilliseconds() / till.diff(from),
    [step, from, till]
  );*/
  return item ? (
    <div
      className={classNames(
        bookingCalendarRenderItemDefaultClasses.className,
        className,
        {
          [bookingCalendarRenderItemDefaultClasses.cutStartClassname]: startIsCut,
          [bookingCalendarRenderItemDefaultClasses.cutEndClassname]: endIsCut,
        }
      )}
    >
      {(alwaysShowContent || width > 0.1) && children}
    </div>
  ) : null;
}
