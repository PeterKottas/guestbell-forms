import * as React from 'react';
import {
  BookingCalendarNowSectionClasses,
  bookingCalendarNowSectionDefaultClasses,
} from './classes';
import classNames from 'classnames';
import moment, { Moment } from 'moment';

export interface BookingCalendarNowSectionProps
  extends BookingCalendarNowSectionClasses {
  dataRowsCount: number;
  width: number;
  from: Moment;
  till: Moment;
  alwaysShowSections?: boolean;
}

export function BookingCalendarNowSection(
  props: BookingCalendarNowSectionProps
) {
  const {
    className,
    areaAfter,
    areaBefore,
    now,
    dataRowsCount,
    width,
    from,
    till,
    alwaysShowSections,
  } = props;
  const style = React.useMemo(
    () => ({
      gridRowEnd: `span ${dataRowsCount}`,
      ...(width ? { width: `${width}px` } : {}),
    }),
    [dataRowsCount, width]
  );
  const widthMs = till.valueOf() - from.valueOf();
  const startMs = from.valueOf();
  const endMs = till.valueOf();
  const onePxMs = Math.max(widthMs / (width || 1), 5000);
  const [nowMs, setNowMs] = React.useState(moment().valueOf());
  const renderBefore = nowMs > startMs;
  const renderAfter = nowMs < endMs;
  React.useEffect(() => {
    if (renderBefore && renderAfter) {
      const interval = setInterval(() => {
        setNowMs(moment().valueOf());
      }, onePxMs);
      return () => clearInterval(interval);
    }
  }, [onePxMs, renderBefore, renderAfter]);

  return (
    <div
      className={classNames(
        className,
        bookingCalendarNowSectionDefaultClasses.className
      )}
      style={style}
    >
      {renderBefore && (alwaysShowSections || renderAfter) && (
        <div
          className={classNames(
            areaBefore,
            bookingCalendarNowSectionDefaultClasses.areaBefore
          )}
          style={{
            width: `${((nowMs - startMs) / widthMs) * 100}%`,
          }}
        />
      )}
      {renderBefore && renderAfter && (
        <div
          className={classNames(
            now,
            bookingCalendarNowSectionDefaultClasses.now
          )}
        />
      )}
      {renderAfter && (alwaysShowSections || renderBefore) && (
        <div
          className={classNames(
            areaAfter,
            bookingCalendarNowSectionDefaultClasses.areaAfter
          )}
          style={{
            width: `${((endMs - nowMs) / widthMs) * 100}%`,
          }}
        />
      )}
    </div>
  );
}
