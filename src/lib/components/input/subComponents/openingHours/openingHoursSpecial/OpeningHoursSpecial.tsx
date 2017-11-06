//Styles
import './openingHoursSpecial.scss';
import * as arrowIconSrc from '../../assets/images/ic_add_circle_outline_black_24dp_1x.png';
import * as plusIconSrc from '../../assets/images/ic_add_circle_outline_black_24dp_1x.png';

//Libs
import * as React from 'react';
import * as moment from 'moment';
import * as DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';

//Misc
import * as BaseInput from '../../base/BaseInput';
import { OpeningHoursDayObj, OpeningHoursDay } from '../../../Inputs';
import OpeningHoursUtil from '../utils/OpeningHoursUtil';

export interface OpeningHoursSpecialDayObj extends OpeningHoursDayObj {
    date: Date;
}

export interface OpeningHoursSpecialProps extends BaseInput.BaseInputProps {
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    days: OpeningHoursSpecialDayObj[];
    onDaysChange: (days: OpeningHoursSpecialDayObj[]) => void;
}

export interface OpeningHoursSpecialState extends BaseInput.BaseInputState {
}

const DAY_FORMAT = 'D/M/YYYY';

export class OpeningHoursSpecial extends BaseInput.BaseInput<OpeningHoursSpecialProps, OpeningHoursSpecialState>  {
    public static defaultProps = Object.assign(BaseInput.BaseInput.defaultProps, { type: "openingHoursSpecial", placeholder: '' });

    constructor(props) {
        super(props);
    }

    public render() {
        return <div className={`input__group openingHoursSpecial-input ${this.getValidationClass()} ${this.props.className ? this.props.className : ''}`}>
            {this.props.days.map((day, index) => (
                <OpeningHoursDay
                    key={index}
                    label={(
                        <span>
                            <DayPickerInput
                                placeholder={DAY_FORMAT}
                                value={moment(day.date).format(DAY_FORMAT)}
                                format={DAY_FORMAT}
                                onDayChange={(date) => {
                                    let days = this.props.days.slice(0);
                                    days[index] = { ...day, date: date.toDate() };
                                    this.props.onDaysChange(days);
                                }}
                                dayPickerProps={{
                                    selectedDays: day.date,
                                    disabledDays:
                                    [
                                        {
                                            before: new Date()
                                        }
                                    ]
                                }}
                            />
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
                />
            ))}
            <div
                role="button"
                className="openingHoursSpecial-input__button"
                onClick={() => this.props.onDaysChange(this.props.days.concat([{ date: new Date(), times: [] }]))}>
                <img src={arrowIconSrc} />
            </div>
            <span className="bar"></span>
            {this.renderDefaultValidation()}
        </div>;
    }
}
export default OpeningHoursSpecial;

if (!true) {
    moment();
}
