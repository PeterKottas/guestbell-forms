import * as React from 'react';
import classNames from 'classnames';
import { BookingCalendarRenderItemProps } from '../bookingCalendarRenderItem';
import { bookingCalendarRenderItemDefaultClasses } from '../bookingCalendarRenderItem/classes';
import { BookingCalendarItemT, BookingCalendarDateRange } from '../common';
import { Button } from '../../button/Button';
import moment from 'moment';

export const BookingCalendarLanesHeaderRenderItemFactory = (
  onRangeChange: (range: BookingCalendarDateRange) => void
) =>
  function BookingCalendarLanesHeaderRenderItem<T extends BookingCalendarItemT>(
    props: BookingCalendarRenderItemProps<T>
  ) {
    const { item, className, startIsCut, endIsCut, realFrom, realTill } = props;
    const onClick = React.useCallback(
      () => onRangeChange?.({ from: item.from, till: item.till }),
      [item, onRangeChange]
    );
    const isToday =
      item.from.isSame(moment(), 'day') &&
      item.till.diff(item.from, 'hours') === 24;
    return item ? (
      <div
        className={classNames(
          bookingCalendarRenderItemDefaultClasses.className,
          className
        )}
      >
        <Button
          className={classNames(
            'bookingCalendar__lanesHeader__renderItem__button',
            {
              'bookingCalendar__lanesHeader__renderItem__button--today':
                isToday,
            }
          )}
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
