import classNames from 'classnames';
import * as React from 'react';
import { BookingCalendarItemT } from '../common';
import { Duration, Moment } from 'moment';
import { BookingCalendarControlsClasses } from './classes';
import { generateControlItems } from '../utils';
import { BookingCalendarLane } from '../bookingCalendarLane';
import { BookingCalendarControlsRenderItem } from './BookingCalendarControlsRenderItem';

export interface BookingCalendarDateRange {
  from: Moment;
  till: Moment;
}

export interface BookingCalendarControlsProps<T extends BookingCalendarItemT>
  extends BookingCalendarControlsClasses {
  step: Duration;
  from: Moment;
  till: Moment;
  onRangeChange?: (range: BookingCalendarDateRange) => void;
}

export function BookingCalendarControls<T extends BookingCalendarItemT>(
  props: BookingCalendarControlsProps<T>
) {
  const { className, step, from, till } = props;
  if (!step || !from || !till) {
    return null;
  }
  const items = React.useMemo(() => generateControlItems(from, till, step), [
    from,
    till,
    step,
  ]);
  return (
    <div className={classNames(className)}>
      <BookingCalendarLane
        items={items}
        from={from}
        till={till}
        laneIndex={-1}
        BookingCalendarRenderItem={BookingCalendarControlsRenderItem}
      />
    </div>
  );
}
