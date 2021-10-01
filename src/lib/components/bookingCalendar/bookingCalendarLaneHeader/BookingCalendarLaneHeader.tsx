import classNames from 'classnames';
import * as React from 'react';
import {
  bookingCalendarLaneHeaderDefaultClasses,
  BookingCalendarLaneHeaderClasses,
} from './classes';

export interface BookingCalendarLaneHeaderProps<TLaneData>
  extends BookingCalendarLaneHeaderClasses {
  laneKey: string | number;
  data: TLaneData;
}

export function BookingCalendarLaneHeader<TLaneData>(
  props: BookingCalendarLaneHeaderProps<TLaneData>
) {
  const { className, laneKey, data } = props;
  return (
    <div
      className={classNames(
        bookingCalendarLaneHeaderDefaultClasses.className,
        className
      )}
    >
      {laneKey}:{JSON.stringify(data)}
    </div>
  );
}
