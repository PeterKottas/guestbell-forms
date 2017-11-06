//Styles
import './openingHoursDay.scss';
import * as plusIconSrc from '../../assets/images/ic_add_circle_outline_black_24dp_1x.png';

//Libs
import * as React from 'react';

//Misc
import * as BaseInput from '../../base/BaseInput';
import { Time } from '../../time/Time';
import OpeningHoursUtil from '../utils/OpeningHoursUtil';

export interface OpeningHoursDayObj {
    times: Date[];
}

export interface OpeningHoursDayProps extends BaseInput.BaseInputProps {
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onOpeningHoursChange: (openingHours: OpeningHoursDayObj) => void;
    openingHours: OpeningHoursDayObj;
    label?: JSX.Element | string;
}

export interface OpeningHoursState extends BaseInput.BaseInputState {
}

export class OpeningHoursDay extends BaseInput.BaseInput<OpeningHoursDayProps, OpeningHoursState>  {
    public static defaultProps = Object.assign(BaseInput.BaseInput.defaultProps, { type: "openingHours", allowMultiple: false });
    private fullDayMiliseconds: number = 24 * 60 * 60 * 1000;

    constructor(props: OpeningHoursDayProps) {
        super(props);
    }

    public render() {
        let newTime = new Date((this.props.openingHours && this.props.openingHours.times && this.props.openingHours.times.length ? this.props.openingHours.times[this.props.openingHours.times.length - 1] : this.getTime(8, 0)));
        if (newTime.getHours() < 23) {
            newTime.setHours(newTime.getHours() + 1);
        }
        return <div className={'input__group openingHoursDay-input ' + this.getValidationClass() + (this.props.className ? ' ' + this.props.className : '')}>
            {this.props.openingHours && this.props.openingHours.times && this.props.openingHours.times.map((item, index) => {
                const previousTime = index > 0 ? new Date(this.props.openingHours.times[index - 1]) : this.getTime(0, 0);
                const nextTime = this.props.openingHours.times.length - 1 > index ? new Date(this.props.openingHours.times[index + 1]) : this.getTime(23, 59);
                return <div className="openingHoursDay-input__time__container" key={index}>
                    <span>{index % 2 === 0 ? 'Opens' : 'Closes'}</span>
                    <Time
                        className={'openingHoursDay-input__time m-0'}
                        timeChange={(time) => {
                            let newOpeningHours: OpeningHoursDayObj = { ...this.props.openingHours, times: this.props.openingHours.times.slice(0) };
                            newOpeningHours.times[index] = time;
                            this.props.onOpeningHoursChange(newOpeningHours);
                        }}
                        time={item}
                        min={previousTime}
                        max={nextTime}
                    />
                    <div
                        role="button"
                        className="openingHoursDay-input__button openingHoursDay-input__button--remove mr-5"
                        onClick={() => this.props.onOpeningHoursChange({ ...this.props.openingHours, times: this.props.openingHours.times.filter((item, itemIndex) => itemIndex !== index) })}>
                        <img src={plusIconSrc} />
                    </div>
                </div>;
            })}
            <div
                role="button"
                className="openingHoursDay-input__button openingHoursDay-input__button-open-close"
                onClick={() => this.props.onOpeningHoursChange({ ...this.props.openingHours, times: this.props.openingHours.times.concat([newTime]) })}>
                {this.props.openingHours && this.props.openingHours.times && this.props.openingHours.times.length % 2 === 0 ? 'Open' : 'Close'}
            </div>
            <span className="highlight"></span>
            <span className="bar"></span>
            {this.getBottomBorder()}
            {this.renderDefaultValidation()}
            {this.props.openingHours && this.props.label && <span className={'label-classname ' + (this.props.openingHours && this.props.openingHours.times
                && this.props.openingHours.times.length ? 'label--focused' : 'label--focused label--closed')}>{this.props.label}</span>}
        </div>;
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
        return <div className="bottom-border__container">
            {parts.map((part, index) => (
                <div
                    key={index}
                    className={'bottom-border ' + (index % 2 === 0 ? 'bottom-border--closed' : 'bottom-border--open')}
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
