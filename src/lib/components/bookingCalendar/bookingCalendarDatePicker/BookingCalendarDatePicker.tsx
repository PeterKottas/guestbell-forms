import * as React from 'react';
import classNames from 'classnames';
import {
  BookingCalendarDatePickerClasses,
  bookingCalendarDatePickerDefaultClasses,
} from './classes';
import { Moment } from 'moment';
import {
  BookingCalendarDateRange,
  BookingCalendarItemT,
  GetNewMomentFunctionType,
  defaultGetNewMomentFunction,
} from '../common';
import { Button } from '../../button/Button';
import * as EventIcon from 'material-design-icons/action/svg/production/ic_event_24px.svg';
try {
  var DatePicker = require('react-datepicker').default;
} catch {
  DatePicker = undefined;
}
// import DatePicker from 'react-datepicker';

export interface BookingCalendarDatePickerBaseProps<
  T extends BookingCalendarItemT
> {
  from: Moment;
  till: Moment;
  onRangeChange?: (range: BookingCalendarDateRange) => void;
  getNewMomentFunction?: GetNewMomentFunctionType;
}

export interface BookingCalendarDatePickerProps<T extends BookingCalendarItemT>
  extends BookingCalendarDatePickerClasses,
    BookingCalendarDatePickerBaseProps<T> {}

export function BookingCalendarDatePicker<T extends BookingCalendarItemT>(
  props: BookingCalendarDatePickerProps<T>
) {
  const {
    className,
    buttonClassName,
    from,
    till,
    onRangeChange,
    getNewMomentFunction = defaultGetNewMomentFunction,
  } = props;
  const [shownModal, setShownModal] = React.useState<null | 'start' | 'end'>();
  const calendarRef = React.useRef<typeof DatePicker>();
  const onButtonClick = React.useCallback(() => {
    setShownModal('start');
    calendarRef.current.setOpen(true);
  }, []);
  return (
    <div
      className={classNames(
        bookingCalendarDatePickerDefaultClasses.className,
        className
      )}
    >
      <Button
        className={classNames(
          bookingCalendarDatePickerDefaultClasses.buttonClassName,
          buttonClassName
        )}
        noShadow={true}
        onClick={onButtonClick}
      >
        <EventIcon /> {from?.format('MMMM, YYYY')}
      </Button>
      <DatePicker
        ref={calendarRef}
        customInput={<span />}
        selected={from?.toDate()}
        // selectsRange={true}
        selectsStart={shownModal !== 'end'}
        selectsEnd={shownModal === 'end'}
        startDate={from?.toDate()}
        endDate={till?.toDate()}
        shouldCloseOnSelect={shownModal === 'end'}
        //dateFormat={DAY_FORMAT}
        onChange={(dt: Date) => {
          if (shownModal !== 'end') {
            const dtm = getNewMomentFunction(dt);
            let validTill = till.clone();
            if (dtm.isAfter(till)) {
              validTill = dtm.clone().add(1, 'day');
            }
            onRangeChange({ from: dtm, till: validTill });
            setShownModal('end');
          } else {
            let dtm = getNewMomentFunction(dt).startOf('day').add(1, 'day');
            let validFrom = from.clone();
            if (dtm.isBefore(from)) {
              validFrom = dtm.clone().add(-1, 'day');
            }
            onRangeChange({ from: validFrom, till: dtm });
            setShownModal(null);
          }
        }}
        withPortal={true}
      />
    </div>
  );
}
