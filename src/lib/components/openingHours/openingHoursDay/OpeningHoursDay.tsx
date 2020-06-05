import * as PlusIcon from 'material-design-icons/content/svg/production/ic_add_circle_outline_24px.svg';

// Libs
import * as React from 'react';

// Misc
import { Time } from '../../time/Time';
import OpeningHoursUtil from '../utils/OpeningHoursUtil';
import TimeUtil from '../../utils/TimeUtil';
import InputGroup from '../../inputGroup/InputGroup';
import {
  BaseInputProps,
  BaseInputState,
  BaseInput,
} from '../../base/input/BaseInput';
import { Button } from '../../button/Button';
import { withFormContext } from '../../form/withFormContext';
import classNames from 'classnames';
import { Duration, duration } from 'moment';
import NumberInput from '../../numberInput/NumberInput';

export interface OpeningHoursPeriodObj {
  opens: Duration;
  closes: Duration;
  capacity?: number;
}

export interface OpeningHoursDayObj {
  times: OpeningHoursPeriodObj[];
}

export const defaultOpeningHoursDayTranslations = {
  opens: 'Opens',
  closes: 'Closes',
  capacity: 'Capacity',
  add: 'Add new time range',
  midnight: 'Midnight',
};

export type OpeningHoursDayTranslations = typeof defaultOpeningHoursDayTranslations;

export interface OpeningHoursDayProps extends BaseInputProps<never> {
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onOpeningHoursChange: (openingHours: OpeningHoursDayObj) => void;
  openingHours: OpeningHoursDayObj;
  label?: JSX.Element | string;
  maxOpenCloseTimes?: number;
  useCapacity?: boolean;
  translations?: OpeningHoursDayTranslations;
}

export interface OpeningHoursState extends BaseInputState {}

export class OpeningHoursDayRaw extends BaseInput<
  OpeningHoursDayProps,
  OpeningHoursState,
  never
> {
  public static defaultProps = Object.assign({}, BaseInput.defaultProps, {
    type: 'openingHours',
    allowMultiple: false,
    maxOpenCloseTimes: 10,
  });
  private fullDayMilliseconds: number = 24 * 60 * 60 * 1000;

  constructor(props: OpeningHoursDayProps) {
    super(props);
  }

  public render() {
    let { translations = defaultOpeningHoursDayTranslations } = this.props;
    translations = { ...defaultOpeningHoursDayTranslations, ...translations };
    return (
      <InputGroup
        title={this.props.title}
        className={classNames(
          'input__group__openingHoursDay',
          this.props.className,
          {
            'input__group__openingHoursDay--closed':
              this.props.openingHours &&
              this.props.openingHours.times &&
              this.props.openingHours.times.length === 0,
          }
        )}
        tooltip={this.props.tooltip}
      >
        <div
          {...(this.props.id && {
            id: this.props.id,
          })}
          className={classNames(
            'input__base openingHoursDay-input',
            {
              'openingHoursDay-input--closed':
                this.props.openingHours &&
                this.props.openingHours.times &&
                this.props.openingHours.times.length === 0,
            },
            this.getValidationClass()
          )}
          ref={this.containerRef}
        >
          <div className="openingHoursDay-input__container">
            {this.props.openingHours &&
              this.props.openingHours.times &&
              this.props.openingHours.times.map((item, index) => {
                const times = [item.opens, item.closes];
                return (
                  <div
                    className="openingHoursDay-input__time__container"
                    key={index}
                  >
                    {times.map((time, indexJ) => {
                      const localIndex = index * 2 + indexJ;
                      const previousTime =
                        indexJ > 0
                          ? times[indexJ - 1].clone()
                          : index === 0
                          ? this.getTime(0, 0)
                          : this.props.openingHours.times[
                              index - 1
                            ].closes.clone();
                      let nextTime =
                        indexJ === 0
                          ? times[1]
                          : this.props.openingHours.times.length - 1 > index
                          ? this.props.openingHours.times[
                              index + 1
                            ].opens.clone()
                          : this.getTime(23, 59, true);
                      if (localIndex % 2 === 0) {
                        nextTime = duration(
                          Math.min.apply(null, [
                            this.getTime(23, 59, false).asMilliseconds(),
                            nextTime.asMilliseconds(),
                          ]),
                          'millisecond'
                        );
                      }
                      return (
                        <Time
                          key={`${index}-${indexJ}`}
                          {...(this.props.id && {
                            id: `${
                              this.props.id
                            }-time-${index.toString()}-${indexJ.toString()}`,
                          })}
                          className={'openingHoursDay-input__time'}
                          timeChange={this.timeChanged(index, indexJ)}
                          time={time}
                          min={previousTime}
                          max={nextTime}
                          showDateDiff={true}
                          label={
                            indexJ % 2 === 0
                              ? translations.opens
                              : translations.closes
                          }
                        />
                      );
                    })}
                    {this.props.useCapacity && (
                      <NumberInput
                        label={translations.capacity}
                        min={0}
                        number={item.capacity}
                        onNumberChange={num =>
                          this.props.onOpeningHoursChange({
                            ...this.props.openingHours,
                            times: this.props.openingHours.times.map((t, i) =>
                              i === index ? { ...t, capacity: num } : t
                            ),
                          })
                        }
                      />
                    )}
                    <Button
                      {...(this.props.id && {
                        id:
                          this.props.id +
                          '-remove-button-' +
                          ((index - 1) / 2).toString(),
                      })}
                      onClick={this.removeTimeClick(index)}
                      className="openingHoursDay-input__button--remove mr-5 line-height--0"
                      circular={true}
                      blank={true}
                      type="error"
                    >
                      <PlusIcon />
                    </Button>
                  </div>
                );
              })}
            {this.props.maxOpenCloseTimes >
              this.props.openingHours.times.length && (
              <Button
                {...(this.props.id && {
                  id: this.props.id + '-add-button',
                })}
                className="openingHoursDay-input__button-open-close"
                onClick={this.addTimeClick}
                disabled={this.isAddTimeClickDisabled()}
                type={'primary'}
                hero={true}
              >
                {translations.add}
              </Button>
            )}
          </div>
          {this.renderDefaultValidation()}
          {this.props.openingHours && this.props.label && (
            <span
              className={
                'label-classname ' +
                (this.props.openingHours &&
                this.props.openingHours.times &&
                this.props.openingHours.times.length
                  ? 'label--focused'
                  : 'label--focused label--closed')
              }
            >
              {this.renderLabel(true)}
            </span>
          )}
        </div>
        {this.getBottomBorder(translations)}
      </InputGroup>
    );
  }

  private isAddTimeClickDisabled() {
    if (
      this.props.openingHours &&
      this.props.openingHours.times &&
      this.props.openingHours.times.length
    ) {
      const dayDiff = TimeUtil.dayDiff(
        this.props.openingHours.times[0].opens,
        this.props.openingHours.times[this.props.openingHours.times.length - 1]
          .closes
      );
      if (dayDiff > 0) {
        return true;
      }
    }
    return false;
  }

  private addTimeClick = () => {
    let newTime =
      this.props.openingHours &&
      this.props.openingHours.times &&
      this.props.openingHours.times.length
        ? this.props.openingHours.times[
            this.props.openingHours.times.length - 1
          ].closes.clone()
        : this.getTime(8, 0);
    if (newTime.hours() < 23) {
      newTime = newTime.add(1, 'hour');
    }
    let closeTime = newTime.clone().add(1, 'hour');
    this.props.onOpeningHoursChange({
      ...this.props.openingHours,
      times: this.props.openingHours.times.concat({
        opens: newTime,
        closes: closeTime,
        capacity: this.props.useCapacity ? 1 : undefined,
      }),
    });
  };

  private removeTimeClick = (index: number) => () =>
    this.props.onOpeningHoursChange({
      ...this.props.openingHours,
      times: this.props.openingHours.times.filter(
        (time, itemIndex) => itemIndex < index || itemIndex > index + 1
      ),
    });

  private timeChanged = (index: number, indexJ: number) => (time: Duration) => {
    let newOpeningHours: OpeningHoursDayObj = {
      ...this.props.openingHours,
      times: this.props.openingHours.times.slice(0),
    };
    if (indexJ === 0) {
      newOpeningHours.times[index] = {
        ...newOpeningHours.times[index],
        opens: time,
      };
    } else {
      newOpeningHours.times[index] = {
        ...newOpeningHours.times[index],
        closes: time,
      };
    }
    this.props.onOpeningHoursChange(newOpeningHours);
  };

  private getBottomBorder(translations: OpeningHoursDayTranslations) {
    const times = (
      (this.props.openingHours && this.props.openingHours.times) ||
      []
    ).reduce<Duration[]>((a, b) => a.concat([b.opens, b.closes]), []);
    let parts = [];
    let totalTime = this.fullDayMilliseconds;
    if (!times.length) {
      parts = parts.concat([1]);
    } else {
      totalTime = Math.max(
        this.fullDayMilliseconds,
        OpeningHoursUtil.getTimeFromMidnight(times[times.length - 1], times[0])
      );
      parts = parts.concat([
        OpeningHoursUtil.getTimeFromMidnight(times[0]) / totalTime,
      ]);
      for (var index = 0; index < times.length - 1; index++) {
        let start = OpeningHoursUtil.getTimeFromMidnight(
          times[index],
          times[0]
        );
        let end = OpeningHoursUtil.getTimeFromMidnight(
          times[index + 1],
          times[0]
        );
        let diff = (end - start) / totalTime;
        parts = parts.concat([diff]);
      }
      parts = parts.concat([
        (totalTime -
          OpeningHoursUtil.getTimeFromMidnight(
            times[times.length - 1],
            times[0]
          )) /
          totalTime,
      ]);
    }
    return (
      <div className="openingHoursDay-input__bottom-border__container">
        {parts.map((part, i) => (
          <div
            key={i}
            className={
              'openingHoursDay-input__bottom-border ' +
              (i % 2 === 0
                ? 'openingHoursDay-input__bottom-border--closed'
                : 'openingHoursDay-input__bottom-border--open')
            }
            style={{ width: part ? (part * 100).toFixed(2) + '%' : '0' }}
          />
        ))}
        {totalTime > this.fullDayMilliseconds && (
          <div
            className="openingHoursDay-input__bottom-border--midnight"
            style={{
              left:
                ((this.fullDayMilliseconds * 100) / totalTime).toString() + '%',
            }}
            title={translations.midnight}
          />
        )}
      </div>
    );
  }

  private getTime(
    hours: number,
    minutes: number,
    nextDay: boolean = false
  ): Duration {
    let time = duration(0, 'millisecond')
      .add(hours, 'hours')
      .add(minutes, 'minutes');
    if (nextDay) {
      time = time.add(1, 'day');
    }
    return time;
  }
}

export const OpeningHoursDay = withFormContext<OpeningHoursDayProps>(
  OpeningHoursDayRaw
);

export default OpeningHoursDay;
