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

export interface OpeningHoursDayObj {
  times: Duration[];
}

export interface OpeningHoursDayProps extends BaseInputProps<never> {
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onOpeningHoursChange: (openingHours: OpeningHoursDayObj) => void;
  openingHours: OpeningHoursDayObj;
  label?: JSX.Element | string;
  maxOpenCloseTimes?: number;
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
                const previousTime =
                  index > 0
                    ? this.props.openingHours.times[index - 1].clone()
                    : this.getTime(0, 0);
                let nextTime =
                  this.props.openingHours.times.length - 1 > index
                    ? this.props.openingHours.times[index + 1].clone()
                    : this.getTime(23, 59, true);
                if (index % 2 === 0) {
                  nextTime = duration(
                    Math.min.apply(null, [
                      this.getTime(23, 59, false).asMilliseconds(),
                      nextTime.asMilliseconds(),
                    ]),
                    'millisecond'
                  );
                }
                return (
                  <div
                    className="openingHoursDay-input__time__container"
                    key={index}
                  >
                    <Time
                      {...(this.props.id && {
                        id: this.props.id + '-time-' + index.toString(),
                      })}
                      className={'openingHoursDay-input__time'}
                      timeChange={this.timeChanged(index)}
                      time={item}
                      min={previousTime}
                      max={nextTime}
                      showDateDiff={true}
                      label={index % 2 === 0 ? 'Opens' : 'Closes'}
                    />
                    {index % 2 === 1 && (
                      <Button
                        {...(this.props.id && {
                          id:
                            this.props.id +
                            '-remove-button-' +
                            ((index - 1) / 2).toString(),
                        })}
                        onClick={this.removeTimeClick(index - 1)}
                        className="openingHoursDay-input__button--remove mr-5 line-height--0"
                        circular={true}
                        blank={true}
                        type="error"
                      >
                        <PlusIcon />
                      </Button>
                    )}
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
                Add
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
        {this.getBottomBorder()}
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
        this.props.openingHours.times[0],
        this.props.openingHours.times[this.props.openingHours.times.length - 1]
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
          ].clone()
        : this.getTime(8, 0);
    if (newTime.hours() < 23) {
      newTime = newTime.add(1, 'hour');
    }
    let closeTime = newTime.clone().add(1, 'hour');
    this.props.onOpeningHoursChange({
      ...this.props.openingHours,
      times: this.props.openingHours.times.concat([newTime, closeTime]),
    });
  };

  private removeTimeClick = (index: number) => () =>
    this.props.onOpeningHoursChange({
      ...this.props.openingHours,
      times: this.props.openingHours.times.filter(
        (time, itemIndex) => itemIndex < index || itemIndex > index + 1
      ),
    });

  private timeChanged = (index: number) => (time: Duration) => {
    let newOpeningHours: OpeningHoursDayObj = {
      ...this.props.openingHours,
      times: this.props.openingHours.times.slice(0),
    };
    newOpeningHours.times[index] = time;
    this.props.onOpeningHoursChange(newOpeningHours);
  };

  private getBottomBorder() {
    let parts = [];
    let totalTime = this.fullDayMilliseconds;
    if (
      this.props.openingHours &&
      this.props.openingHours.times &&
      !this.props.openingHours.times.length
    ) {
      parts = parts.concat([1]);
    } else {
      totalTime = Math.max(
        this.fullDayMilliseconds,
        OpeningHoursUtil.getTimeFromMidnight(
          this.props.openingHours.times[
            this.props.openingHours.times.length - 1
          ],
          this.props.openingHours.times[0]
        )
      );
      parts = parts.concat([
        OpeningHoursUtil.getTimeFromMidnight(this.props.openingHours.times[0]) /
          totalTime,
      ]);
      for (
        var index = 0;
        index < this.props.openingHours.times.length - 1;
        index++
      ) {
        let start = OpeningHoursUtil.getTimeFromMidnight(
          this.props.openingHours.times[index],
          this.props.openingHours.times[0]
        );
        let end = OpeningHoursUtil.getTimeFromMidnight(
          this.props.openingHours.times[index + 1],
          this.props.openingHours.times[0]
        );
        let diff = (end - start) / totalTime;
        parts = parts.concat([diff]);
      }
      parts = parts.concat([
        (totalTime -
          OpeningHoursUtil.getTimeFromMidnight(
            this.props.openingHours.times[
              this.props.openingHours.times.length - 1
            ],
            this.props.openingHours.times[0]
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
            title="Midnight"
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
