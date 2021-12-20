import classNames from 'classnames';
import * as React from 'react';
import {
  BookingCalendarDateRange,
  BookingCalendarItemT,
  ZoomLevel,
} from '../common';
import { duration, Duration, Moment } from 'moment';
import { BookingCalendarControlsClasses } from './classes';
import { bookingCalendarControlsDefaultClasses } from '.';
import { Button } from '../../button/Button';
import * as LeftArrowLongIcon from 'material-design-icons/navigation/svg/production/ic_arrow_back_24px.svg';
import * as LeftArrowIcon from 'material-design-icons/hardware/svg/production/ic_keyboard_arrow_left_24px.svg';
import * as RightArrowLongIcon from 'material-design-icons/navigation/svg/production/ic_arrow_forward_24px.svg';
import * as RightArrowIcon from 'material-design-icons/hardware/svg/production/ic_keyboard_arrow_right_24px.svg';
import * as UnfoldLessIcon from 'material-design-icons/navigation/svg/production/ic_unfold_less_24px.svg';

export interface BookingCalendarControlsProps<T extends BookingCalendarItemT>
  extends BookingCalendarControlsClasses {
  items: T[];
  step: Duration;
  from: Moment;
  till: Moment;
  zoomLevels?: ZoomLevel[];
  onRangeChange?: (range: BookingCalendarDateRange) => void;
  filterBookingsToZoom?: (booking: T) => boolean;
}

export function BookingCalendarControls<T extends BookingCalendarItemT>(
  props: BookingCalendarControlsProps<T>
) {
  const {
    className,
    monthLabelClassName,
    buttonsContainerClassName,
    zoomBookingsButtonClassName,
    zoomLevelsContainerClassName,
    zoomLevels,
    step,
    from,
    till,
    onRangeChange,
    items,
    filterBookingsToZoom = () => true,
  } = props;
  if (!step || !from || !till) {
    return null;
  }
  const onStepFactory = React.useCallback(
    (_step: Duration) => () =>
      onRangeChange({
        from: from.clone().add(_step),
        till: till.clone().add(_step),
      }),
    [from, till, onRangeChange]
  );
  const onBigStepLeftClick = React.useCallback(
    onStepFactory(duration(-7, 'days')),
    [onStepFactory, till, from]
  );
  const onSmallStepLeftClick = React.useCallback(
    onStepFactory(duration(-1, 'day')),
    [onStepFactory, step]
  );
  const onBigStepRightClick = React.useCallback(
    onStepFactory(duration(7, 'days')),
    [onStepFactory, till, from]
  );
  const onSmallStepRightClick = React.useCallback(
    onStepFactory(duration(1, 'day')),
    [onStepFactory, step]
  );
  const filteredItems = React.useMemo(
    () => items?.filter(filterBookingsToZoom),
    [filterBookingsToZoom, items]
  );
  const onZoomBookingsClick = React.useCallback(() => {
    const minFromMs =
      Math.min(
        ...filteredItems
          ?.filter(filterBookingsToZoom)
          .map(a => a.from.valueOf())
      ) ?? from?.valueOf();
    const minFrom = from.clone().add(from.valueOf() - minFromMs, 'ms');
    const maxTillMs =
      Math.max(
        ...filteredItems
          ?.filter(filterBookingsToZoom)
          .map(a => a.till.valueOf())
      ) ?? till?.valueOf();
    const maxTill = till.clone().add(till.valueOf() - maxTillMs, 'ms');
    onRangeChange({
      from: minFrom,
      till: maxTill,
    });
  }, [from, till, filteredItems]);
  return (
    <div
      className={classNames(
        bookingCalendarControlsDefaultClasses.className,
        className
      )}
    >
      <div
        className={classNames(
          bookingCalendarControlsDefaultClasses.monthLabelClassName,
          monthLabelClassName
        )}
      >
        {from.format('MMMM')}, {from.format('YYYY')}
      </div>
      {zoomLevels?.length > 0 && (
        <div
          className={classNames(
            bookingCalendarControlsDefaultClasses.zoomLevelsContainerClassName,
            zoomLevelsContainerClassName
          )}
        >
          {zoomLevels.map((level, index) => (
            <Button
              type={
                till.valueOf() - from.valueOf() === level.step.asMilliseconds()
                  ? 'primary'
                  : undefined
              }
              // blank={true}
              noShadow={true}
              key={index}
              onClick={() =>
                onRangeChange({
                  from: from.clone().startOf('day'),
                  till: from.clone()
                    .startOf('day')
                    .add(level.step),
                })
              }
            >
              {level.label}
            </Button>
          ))}
        </div>
      )}
      <div
        className={classNames(
          bookingCalendarControlsDefaultClasses.buttonsContainerClassName,
          buttonsContainerClassName
        )}
      >
        <Button noShadow={true} onClick={onBigStepLeftClick}>
          <LeftArrowLongIcon />
        </Button>
        <Button noShadow={true} onClick={onSmallStepLeftClick}>
          <LeftArrowIcon />
        </Button>
        <Button noShadow={true} onClick={onSmallStepRightClick}>
          <RightArrowIcon />
        </Button>
        <Button noShadow={true} onClick={onBigStepRightClick}>
          <RightArrowLongIcon />
        </Button>
        <Button
          className={classNames(
            bookingCalendarControlsDefaultClasses.zoomBookingsButtonClassName,
            zoomBookingsButtonClassName
          )}
          noShadow={true}
          disabled={!filteredItems?.length}
          onClick={onZoomBookingsClick}
        >
          <UnfoldLessIcon />
        </Button>
      </div>
    </div>
  );
}
