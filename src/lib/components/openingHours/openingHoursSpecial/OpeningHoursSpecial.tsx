// Styles
import './openingHoursSpecial.scss';
import * as PlusIcon from 'material-design-icons/content/svg/production/ic_add_circle_outline_24px.svg';
import * as DateIcon from 'material-design-icons/action/svg/production/ic_event_24px.svg';

// Libs
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

// Misc
import OpeningHoursUtil from '../utils/OpeningHoursUtil';
import { OpeningHoursDayObj, OpeningHoursDay } from '../openingHoursDay/OpeningHoursDay';
import { BaseInputProps, BaseInputState, BaseInput } from '../../base/input/BaseInput';
import { Button } from '../../button/Button';

export interface OpeningHoursSpecialDayObj extends OpeningHoursDayObj {
    date?: Date;
}

export interface OpeningHoursSpecialProps extends BaseInputProps<never> {
    days: OpeningHoursSpecialDayObj[];
    onDaysChange: (days: OpeningHoursSpecialDayObj[]) => void;
    placeholder?: string;
}

export interface OpeningHoursSpecialState extends BaseInputState {
}

const DAY_FORMAT = 'D/M/YYYY';

class DateInput extends React.Component<{ value?: string, onClick?: () => void }> {
    public render() {
        return (
            <Button
                onClick={this.props.onClick}
            >
                <div style={{ display: 'flex' }}>
                    <DateIcon style={{ marginRight: 4 }} />
                    {this.props.children ? this.props.children : this.props.value}
                </div>
            </Button>
        );
    }
}

export class OpeningHoursSpecial extends BaseInput<OpeningHoursSpecialProps, OpeningHoursSpecialState, never> {
    public static defaultProps = Object.assign(BaseInput.defaultProps, { type: 'openingHoursSpecial', placeholder: DAY_FORMAT });

    constructor(props: OpeningHoursSpecialProps) {
        super(props);
    }

    public render() {
        if (!DatePicker) {
            throw new Error('You need to install react-datepicker in order to use special day picker');
        }
        if (!Moment) {
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
                                    onClick={() => this.props.onDaysChange(this.props.days.filter((d, indexInner) => indexInner !== index))}>
                                    <PlusIcon />
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
                        customInput={<DateInput>{!day.date && 'Choose date'}</DateInput>}
                        placeholder={this.props.placeholder}
                        selected={day.date && Moment(day.date)}
                        dateFormat={DAY_FORMAT}
                        onChange={(date) => {
                            let days = this.props.days.slice(0);
                            days[index] = { ...day, date: date.toDate() };
                            this.props.onDaysChange(days);
                        }}
                        excludeDates={this.props.days.filter(d => d.date).map(d => Moment(d.date))}
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