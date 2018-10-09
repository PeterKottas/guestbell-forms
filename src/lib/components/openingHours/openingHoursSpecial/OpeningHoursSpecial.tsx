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
} catch {
    DatePicker = undefined;
}

// Misc
import OpeningHoursUtil from '../utils/OpeningHoursUtil';
import { OpeningHoursDayObj, OpeningHoursDay } from '../openingHoursDay/OpeningHoursDay';
import { BaseInputProps, BaseInputState, BaseInput } from '../../base/input/BaseInput';
import { Button } from '../../button/Button';
import { OmitFormContext } from '../../form/FormContext';
import { withFormContext } from '../../form/withFormContext';

export interface OpeningHoursSpecialDayObj extends OpeningHoursDayObj {
    date?: Date;
}

interface OpeningHoursSpecialRawProps extends BaseInputProps<never> {
    days: OpeningHoursSpecialDayObj[];
    onDaysChange: (days: OpeningHoursSpecialDayObj[]) => void;
    placeholder?: string;
}

export type OpeningHoursSpecialProps = OmitFormContext<OpeningHoursSpecialRawProps>;

export interface OpeningHoursSpecialState extends BaseInputState {
}

const DAY_FORMAT = 'D/M/YYYY';

class DateInput extends React.PureComponent<{ value?: string, onClick?: () => void }> {
    public render() {
        return (
            <Button
                blank={true}
                type="primary"
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

class OpeningHoursSpecialRaw extends BaseInput<OpeningHoursSpecialRawProps, OpeningHoursSpecialState, never> {
    public static defaultProps = Object.assign({}, BaseInput.defaultProps, { type: 'openingHoursSpecial', placeholder: DAY_FORMAT });

    constructor(props: OpeningHoursSpecialRawProps) {
        super(props);
    }

    public render() {
        if (!DatePicker) {
            throw new Error('You need to install react-datepicker in order to use special day picker');
        }
        if (!Moment) {
            throw new Error('You need to install moment in order to use special day picker');
        }
        return (
            <div 
                className={'input__base openingHoursSpecial-input ' + this.getValidationClass() + ' ' + (this.props.className ? this.props.className : '')} 
                ref={this.containerRef}
            >
                {this.props.days.map((day, index) => (
                    <OpeningHoursDay
                        key={index}
                        label={(
                            <span>
                                {OpeningHoursUtil.getLabelSuffix(day)}
                                <span className="float-right">
                                    <Button
                                        blank={true}
                                        className="openingHoursSpecial-input__button openingHoursSpecial-input__button--remove"
                                        onClick={this.removeDayClick(index)}
                                    >
                                        <PlusIcon />
                                    </Button>
                                </span>
                            </span>
                        )}
                        openingHours={{
                            times: day.times
                        }}
                        onOpeningHoursChange={this.openingHoursChanged(index, day)}
                        title={<DatePicker
                            customInput={<DateInput>{!day.date && 'Choose date'}</DateInput>}
                            placeholder={this.props.placeholder}
                            selected={day.date && Moment(day.date)}
                            dateFormat={DAY_FORMAT}
                            onChange={this.dateChanged(index, day)}
                            excludeDates={this.props.days.filter(d => d.date).map(d => Moment(d.date))}
                            withPortal={true}
                            minDate={Moment()}
                        />}
                    />
                ))}
                <span className="bar" />
                {this.renderDefaultValidation()}
            </div>
        );
    }

    private removeDayClick = (index: number) => () => this.props.onDaysChange(this.props.days.filter((d, indexInner) => indexInner !== index));

    private dateChanged = (index: number, day: OpeningHoursDayObj) => (date) => {
        let days = this.props.days.slice(0);
        days[index] = { ...day, date: date.toDate() };
        this.props.onDaysChange(days);
    }

    private openingHoursChanged = (index: number, day: OpeningHoursDayObj) => (openingHours) => {
        let days = this.props.days.slice(0);
        days[index] = { ...day, ...openingHours };
        this.props.onDaysChange(days);
    }
}

export const OpeningHoursSpecial = withFormContext(OpeningHoursSpecialRaw);

export default OpeningHoursSpecial;
