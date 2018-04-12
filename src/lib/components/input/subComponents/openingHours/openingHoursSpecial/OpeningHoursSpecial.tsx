//Styles
import './openingHoursSpecial.scss';
import * as plusIconSrc from '../../assets/images/ic_add_circle_outline_black_24dp_1x.png';

//Libs
import * as React from 'react';
try {
    var Moment = require('moment');
} catch {
    Moment = undefined;
}
try {
    var DatePicker = require('react-datepicker').default;
    require('react-datepicker/dist/react-datepicker.css');
} catch {
    DatePicker = undefined;
}

//Misc
import * as BaseInput from '../../base/BaseInput';
import { OpeningHoursDayObj, OpeningHoursDay } from '../../../Inputs';
import OpeningHoursUtil from '../utils/OpeningHoursUtil';

export interface OpeningHoursSpecialDayObj extends OpeningHoursDayObj {
    date: Date;
}

export interface OpeningHoursSpecialProps extends BaseInput.BaseInputProps<never> {
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    days: OpeningHoursSpecialDayObj[];
    onDaysChange: (days: OpeningHoursSpecialDayObj[]) => void;
}

export interface OpeningHoursSpecialState extends BaseInput.BaseInputState {
}

const DAY_FORMAT = 'D/M/YYYY';

export class OpeningHoursSpecial extends BaseInput.BaseInput<OpeningHoursSpecialProps, OpeningHoursSpecialState, never>  {
    public static defaultProps = Object.assign(BaseInput.BaseInput.defaultProps, { type: "openingHoursSpecial", placeholder: '' });

    constructor(props) {
        super(props);
    }

    public render() {
        if(!DatePicker){
            throw new Error('You need to install react-datepicker in order to use special day picker');
        }
        if(!Moment){
            throw new Error('You need to install moment in order to use special day picker');
        }
        return <div className={'input__base openingHoursSpecial-input ' + this.getValidationClass() + ' ' + (this.props.className ? this.props.className : '')}>
            {this.props.days.map((day, index) => (
                <OpeningHoursDay
                    key={index}
                    label={(
                        <span>
                            {OpeningHoursUtil.getLabelSuffix(day)}
                            <span className="float-right">
                                <div
                                    role="button"
                                    className="openingHoursSpecial-input__button openingHoursSpecial-input__button--remove p-0"
                                    onClick={() => this.props.onDaysChange(this.props.days.filter((day, indexInner) => indexInner !== index))}>
                                    <img src={plusIconSrc} />
                                </div>
                            </span>
                        </span>
                    )}
                    openingHours={{
                        times: day.times
                    }}
                    onOpeningHoursChange={(openingHours) => {
                        let days = this.props.days.slice(0);
                        days[index] = { ...day, ...openingHours };
                        this.props.onDaysChange(days);
                    }}
                    title={<DatePicker
                        placeholder={DAY_FORMAT}
                        selected={Moment(day.date)}
                        dateFormat={DAY_FORMAT}
                        onChange={(date) => {
                            let days = this.props.days.slice(0);
                            days[index] = { ...day, date: date.toDate() };
                            this.props.onDaysChange(days);
                        }}
                        excludeDates = {this.props.days.map(day=>Moment(day.date))}
                        withPortal={true}
                        minDate={Moment()}
                    />}
                />
            ))}
            <span className="bar"></span>
            {this.renderDefaultValidation()}
        </div>;
    }
}
export default OpeningHoursSpecial;
