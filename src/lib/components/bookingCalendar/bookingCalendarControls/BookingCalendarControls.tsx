import classNames from 'classnames';
import * as React from 'react';
import {
  BookingCalendarDateRange,
  BookingCalendarItemT,
  ZoomLevel,
} from '../common';
import moment, { Duration, Moment } from 'moment';
import { BookingCalendarControlsClasses } from './classes';
import { bookingCalendarControlsDefaultClasses } from './classes';
import { Button } from '../../button/Button';
import * as LeftArrowLongIcon from 'material-design-icons/navigation/svg/production/ic_arrow_back_24px.svg';
import * as LeftArrowIcon from 'material-design-icons/hardware/svg/production/ic_keyboard_arrow_left_24px.svg';
import * as RightArrowLongIcon from 'material-design-icons/navigation/svg/production/ic_arrow_forward_24px.svg';
import * as RightArrowIcon from 'material-design-icons/hardware/svg/production/ic_keyboard_arrow_right_24px.svg';
import * as UnfoldLessIcon from 'material-design-icons/navigation/svg/production/ic_unfold_less_24px.svg';
import * as DateRangeIcon from 'material-design-icons/action/svg/production/ic_date_range_24px.svg';
import * as TodayIcon from 'material-design-icons/action/svg/production/ic_today_24px.svg';

import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

export interface BookingCalendarControlsProps<T extends BookingCalendarItemT>
  extends BookingCalendarControlsClasses {
  getMoment: () => Moment;
  items: T[];
  step: Duration;
  from: Moment;
  till: Moment;
  zoomLevels?: ZoomLevel[];
  onRangeChange?: (range: BookingCalendarDateRange) => void;
  filterBookingsToZoom?: (booking: T) => boolean;
  bookingCalendarDatePicker?: React.ReactNode;
  filteringButton?: React.ReactNode;
  showZoomAllButton?: boolean;
}

export function BookingCalendarControls<T extends BookingCalendarItemT>(
  props: BookingCalendarControlsProps<T>
) {
  const {
    getMoment,
    className,
    monthLabelClassName,
    buttonsContainerClassName,
    zoomBookingsButtonClassName,
    zoomLevelsButtonClassName,
    zoomLevelsButtonLabelClassName,
    zoomLevels,
    step,
    from,
    till,
    onRangeChange,
    items,
    filterBookingsToZoom = () => true,
    bookingCalendarDatePicker,
    filteringButton,
    showZoomAllButton,
  } = props;
  if (!step || !from || !till) {
    return null;
  }
  const selectedLevel = React.useMemo(
    () =>
      zoomLevels?.find(
        (level) =>
          till.valueOf() - from.valueOf() === level.step.asMilliseconds()
      ),
    [zoomLevels, till, from]
  );
  const onStepFactory = React.useCallback(
    (_step: Duration) => () =>
      onRangeChange({
        from: from.clone().add(_step),
        till: till.clone().add(_step),
      }),
    [from, till, onRangeChange]
  );
  const onBigStepLeftClick = React.useCallback(
    onStepFactory(moment.duration(-7, 'days')),
    [onStepFactory, till, from]
  );
  const onSmallStepLeftClick = React.useCallback(
    onStepFactory(moment.duration(-1, 'day')),
    [onStepFactory, step]
  );
  const onBigStepRightClick = React.useCallback(
    onStepFactory(moment.duration(7, 'days')),
    [onStepFactory, till, from]
  );
  const onSmallStepRightClick = React.useCallback(
    onStepFactory(moment.duration(1, 'day')),
    [onStepFactory, step]
  );
  const onTodayClick = React.useCallback(
    () =>
      onRangeChange({
        from: getMoment().startOf('day'),
        till: getMoment()
          .startOf('day')
          .add(selectedLevel?.step ?? step),
      }),
    [onRangeChange, step, getMoment]
  );
  const isTodayVisible = React.useMemo(
    () =>
      from.isBefore(moment()) && moment(from).add(1, 'day').isAfter(moment()),
    [from, till]
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
          .map((a) => a.from.valueOf())
      ) ?? from?.valueOf();
    const minFrom = from.clone().subtract(from.valueOf() - minFromMs, 'ms');
    const maxTillMs =
      Math.max(
        ...filteredItems
          ?.filter(filterBookingsToZoom)
          .map((a) => a.till.valueOf())
      ) ?? till?.valueOf();
    const maxTill = till.clone().subtract(till.valueOf() - maxTillMs, 'ms');
    onRangeChange({
      from: minFrom,
      till: maxTill,
    });
  }, [from, till, filteredItems]);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div
      className={classNames(
        bookingCalendarControlsDefaultClasses.className,
        className
      )}
    >
      {bookingCalendarDatePicker && (
        <div
          className={classNames(
            bookingCalendarControlsDefaultClasses.monthLabelClassName,
            monthLabelClassName
          )}
        >
          {bookingCalendarDatePicker}
        </div>
      )}
      <div
        className={classNames(
          bookingCalendarControlsDefaultClasses.buttonsContainerClassName,
          buttonsContainerClassName
        )}
      >
        {zoomLevels?.length > 0 && (
          <>
            <Button
              className={classNames(
                bookingCalendarControlsDefaultClasses.zoomLevelsButtonClassName,
                zoomLevelsButtonClassName
              )}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
              onClick={handleClick}
              noShadow={true}
            >
              <DateRangeIcon />
              {selectedLevel ? (
                <span
                  className={classNames(
                    bookingCalendarControlsDefaultClasses.zoomLevelsButtonLabelClassName,
                    zoomLevelsButtonLabelClassName
                  )}
                >{` ${selectedLevel.label}`}</span>
              ) : (
                ''
              )}
            </Button>
            <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
              {zoomLevels.map((level, index) => (
                <MenuItem
                  data-level={index}
                  key={index}
                  onClick={() => {
                    onRangeChange({
                      from: from.clone().startOf('day'),
                      till: from.clone().startOf('day').add(level.step),
                    });
                    setAnchorEl(null);
                  }}
                  selected={
                    till.valueOf() - from.valueOf() ===
                    level.step.asMilliseconds()
                  }
                >
                  {level.label}
                </MenuItem>
              ))}
            </Menu>
            {/*zoomLevels.map((level, index) => (
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
                  till: from.clone().startOf('day').add(level.step),
                })
              }
            >
              {level.label}
            </Button>
            ))*/}
          </>
        )}
        <Button noShadow={true} onClick={onBigStepLeftClick}>
          <LeftArrowLongIcon />
        </Button>
        <Button noShadow={true} onClick={onSmallStepLeftClick}>
          <LeftArrowIcon />
        </Button>
        <Button
          disabled={isTodayVisible}
          noShadow={true}
          onClick={onTodayClick}
        >
          <TodayIcon />
        </Button>
        <Button noShadow={true} onClick={onSmallStepRightClick}>
          <RightArrowIcon />
        </Button>
        <Button noShadow={true} onClick={onBigStepRightClick}>
          <RightArrowLongIcon />
        </Button>
        {showZoomAllButton && (
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
        )}
        {filteringButton}
      </div>
    </div>
  );
}
