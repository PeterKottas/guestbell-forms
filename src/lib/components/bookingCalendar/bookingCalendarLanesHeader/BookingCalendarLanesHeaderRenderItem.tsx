import classNames from 'classnames';
import * as React from 'react';
import { BookingCalendarRenderItemProps } from '../bookingCalendarRenderItem';
import { bookingCalendarRenderItemDefaultClasses } from '../bookingCalendarRenderItem/classes';
import { BookingCalendarItemT } from '../common';
import { Button } from '../../button/Button';
import { BookingCalendarDateRange } from '..';

export const BookingCalendarLanesHeaderRenderItemFactory = (
  onRangeChange: (range: BookingCalendarDateRange) => void
) =>
  function BookingCalendarLanesHeaderRenderItem<T extends BookingCalendarItemT>(
    props: BookingCalendarRenderItemProps<T>
  ) {
    const { item, className, startIsCut, endIsCut, realFrom, realTill } = props;
    const onClick = React.useCallback(
      () => onRangeChange({ from: item.from, till: item.till }),
      [item]
    );
    return item ? (
      <div
        className={classNames(
          bookingCalendarRenderItemDefaultClasses.className,
          className
        )}
      >
        <Button
          className="bookingCalendar__lanesHeader__renderItem__button"
          noShadow={true}
          onClick={onClick}
          type="primary"
        >
          {startIsCut || endIsCut ? (
            <>
              {item.from.format('ddd, Do')}
              <br />
              <span className="bookingCalendar__lanesHeader__renderItem__button__mutedText bookingCalendar__lanesHeader__renderItem__button__mutedText--split">
                <span>{startIsCut && realFrom.format('M/D H:mm')}</span>
                <span>{endIsCut && realTill.format('M/D H:mm')}</span>
              </span>
            </>
          ) : (
            <>
              {item.from.format('ddd')}
              <br />
              <span className="bookingCalendar__lanesHeader__renderItem__button__mutedText">
                {item.from.format('Do')}
              </span>
            </>
          )}
        </Button>
      </div>
    ) : null;
  };
