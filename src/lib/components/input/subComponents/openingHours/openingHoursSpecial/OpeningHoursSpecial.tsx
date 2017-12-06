//Styles
import './openingHoursSpecial.scss';
import * as plusIconSrc from '../../assets/images/ic_add_circle_outline_black_24dp_1x.png';

//Libs
import * as React from 'react';
try {
    var DayPickerInput = require('react-day-picker/DayPickerInput').default;
    require('react-day-picker/lib/style.css');
} catch {
    throw new Error('You need to install react-day-picker in order to use special day picker');
}

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
                    title={<DayPickerInput
                        placeholder={DAY_FORMAT}
                        value={day.date}
                        format={DAY_FORMAT}
                        onDayChange={(date) => {
                            let days = this.props.days.slice(0);
                            days[index] = { ...day, date: date };
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
                    />}
                />
            ))}
            <span className="bar"></span>
            {this.renderDefaultValidation()}
        </div>;
    }
}
export default OpeningHoursSpecial;
