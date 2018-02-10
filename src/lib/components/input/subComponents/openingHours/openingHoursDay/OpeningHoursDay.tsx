//Styles
import './openingHoursDay.scss';
import * as PlusIcon from 'material-design-icons/content/svg/production/ic_add_circle_outline_24px.svg';

//Libs
import * as React from 'react';

//Misc
import * as BaseInput from '../../base/BaseInput';
import { Time } from '../../time/Time';
import OpeningHoursUtil from '../utils/OpeningHoursUtil';
import InputGroup from '../../inputGroup/InputGroup';
import Button from '../../../../buttons/Button';

export interface OpeningHoursDayObj {
    times: Date[];
}

export interface OpeningHoursDayProps extends BaseInput.BaseInputProps {
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onOpeningHoursChange: (openingHours: OpeningHoursDayObj) => void;
    openingHours: OpeningHoursDayObj;
    label?: JSX.Element | string;
    maxOpenCloseTimes?: number;
}

export interface OpeningHoursState extends BaseInput.BaseInputState {
}

export class OpeningHoursDay extends BaseInput.BaseInput<OpeningHoursDayProps, OpeningHoursState>  {
    public static defaultProps = Object.assign(BaseInput.BaseInput.defaultProps, { type: "openingHours", allowMultiple: false, maxOpenCloseTimes: 10 });
    private fullDayMiliseconds: number = 24 * 60 * 60 * 1000;

    constructor(props: OpeningHoursDayProps) {
        super(props);
    }

    public render() {
        let newTime = new Date((this.props.openingHours && this.props.openingHours.times && this.props.openingHours.times.length ? this.props.openingHours.times[this.props.openingHours.times.length - 1] : this.getTime(8, 0)));
        if (newTime.getHours() < 23) {
            newTime.setHours(newTime.getHours() + 1);
        }
        return <InputGroup title={this.props.title} className="input__group__openingHoursDay">
            <div className={'input__base openingHoursDay-input ' + this.getValidationClass() + (this.props.className ? ' ' + this.props.className : '')}>
                <div className="openingHoursDay-input__container">
                    {this.props.openingHours && this.props.openingHours.times && this.props.openingHours.times.map((item, index) => {
                        const previousTime = index > 0 ? new Date(this.props.openingHours.times[index - 1]) : this.getTime(0, 0);
                        const nextTime = this.props.openingHours.times.length - 1 > index ? new Date(this.props.openingHours.times[index + 1]) : this.getTime(23, 59);
                        return <div className="openingHoursDay-input__time__container" key={index}>
                            <span className="openingHoursDay-input__label">{index % 2 === 0 ? 'Opens' : 'Closes'}</span>
                            <Time
                                className={'openingHoursDay-input__time'}
                                timeChange={(time) => {
                                    let newOpeningHours: OpeningHoursDayObj = { ...this.props.openingHours, times: this.props.openingHours.times.slice(0) };
                                    newOpeningHours.times[index] = time;
                                    this.props.onOpeningHoursChange(newOpeningHours);
                                }}
                                time={item}
                                min={previousTime}
                                max={nextTime}
                            />
                            <Button
                                type={'blank--light'}
                                onClick={() => this.props.onOpeningHoursChange({ ...this.props.openingHours, times: this.props.openingHours.times.filter((item, itemIndex) => itemIndex !== index) })}
                                className="openingHoursDay-input__button--remove mr-5 line-height--0"
                            >
                                <PlusIcon />
                            </Button>
                        </div>;
                    })}
                    {this.props.maxOpenCloseTimes > this.props.openingHours.times.length &&
                        <Button
                            className="openingHoursDay-input__button-open-close"
                            onClick={() => this.props.onOpeningHoursChange({ ...this.props.openingHours, times: this.props.openingHours.times.concat([newTime]) })}
                            type={'hero'}
                        >
                            {this.props.openingHours && this.props.openingHours.times && this.props.openingHours.times.length % 2 === 0 ? 'Open' : 'Close'}
                        </Button>
                    }
                </div>
                {this.renderDefaultValidation()}
                {this.props.openingHours && this.props.label && <span className={'label-classname ' + (this.props.openingHours && this.props.openingHours.times
                    && this.props.openingHours.times.length ? 'label--focused' : 'label--focused label--closed')}>{this.props.label}</span>}
            </div>
            {this.getBottomBorder()}
        </InputGroup>;
    }

    private getBottomBorder() {
        let parts = []
        if (this.props.openingHours && this.props.openingHours.times && !this.props.openingHours.times.length) {
            parts = parts.concat([1]);
        }
        else {
            parts = parts.concat([OpeningHoursUtil.getTimeFromMidnight(this.props.openingHours.times[0]) / this.fullDayMiliseconds]);
            for (var index = 0; index < this.props.openingHours.times.length - 1; index++) {
                let start = OpeningHoursUtil.getTimeFromMidnight(this.props.openingHours.times[index]);
                let end = OpeningHoursUtil.getTimeFromMidnight(this.props.openingHours.times[index + 1]);
                let diff = (end - start) / this.fullDayMiliseconds;
                parts = parts.concat([diff]);
            }
            parts = parts.concat([(this.fullDayMiliseconds - OpeningHoursUtil.getTimeFromMidnight(this.props.openingHours.times[this.props.openingHours.times.length - 1])) / this.fullDayMiliseconds]);
        }
        return <div className="openingHoursDay-input__bottom-border__container">
            {parts.map((part, index) => (
                <div
                    key={index}
                    className={'openingHoursDay-input__bottom-border ' + (index % 2 === 0 ? 'openingHoursDay-input__bottom-border--closed' : 'openingHoursDay-input__bottom-border--open')}
                    style={{ width: (part ? ((part * 100).toFixed(2) + '%') : '0') }}
                />
            ))}
        </div>;
    }

    private getTime(hours: number, minutes: number) {
        let time = new Date();
        time.setHours(hours);
        time.setMinutes(minutes);
        time.setSeconds(0);
        return time;
    }
}
export default OpeningHoursDay;
