//Styles
import './openingHoursWeek.scss';

//Libs
import * as React from 'react';

//Misc
import * as BaseInput from '../../base/BaseInput';
import { OpeningHoursDayObj, OpeningHoursDay, Checkbox } from '../../../Inputs';
import OpeningHoursUtil from '../utils/OpeningHoursUtil';

export interface OpeningHoursWeekDayObj extends OpeningHoursDayObj {
    isStandardDay?: boolean;
    dayLabel?: string;
}

export interface OpeningHoursWeekProps extends BaseInput.BaseInputProps {
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    days: OpeningHoursWeekDayObj[];
    onDaysChange: (days: OpeningHoursWeekDayObj[]) => void;
    standardDay?: OpeningHoursWeekDayObj;
    onStandardDayChange?: (day: OpeningHoursWeekDayObj) => void;
}

export interface OpeningHoursWeekState extends BaseInput.BaseInputState {
}

export class OpeningHoursWeek extends BaseInput.BaseInput<OpeningHoursWeekProps, OpeningHoursWeekState>  {
    public static defaultProps = Object.assign(BaseInput.BaseInput.defaultProps, { type: "openingHoursWeek", placeholder: '', collapsable: false });

    constructor(props: OpeningHoursWeekProps) {
        super(props);
        this.state = { ...this.state };
    }

    public componentWillMount() {
        if (!this.props.days || !this.props.days.length) {
            this.props.onDaysChange([
                { dayLabel: 'Monday', times: [] },
                { dayLabel: 'Tuesday', times: [] },
                { dayLabel: 'Wednesday', times: [] },
                { dayLabel: 'Thursday', times: [] },
                { dayLabel: 'Friday', times: [] },
                { dayLabel: 'Saturday', times: [] },
                { dayLabel: 'Sunday', times: [] },
            ]);
        }
    }

    public componentWillReceiveProps(newProps: OpeningHoursWeekProps) {
        if (!newProps.days || !newProps.days.length) {
            newProps.onDaysChange([
                { dayLabel: 'Monday', times: [] },
                { dayLabel: 'Tuesday', times: [] },
                { dayLabel: 'Wednesday', times: [] },
                { dayLabel: 'Thursday', times: [] },
                { dayLabel: 'Friday', times: [] },
                { dayLabel: 'Saturday', times: [] },
                { dayLabel: 'Sunday', times: [] },
            ]);
        }
    }

    public render() {

        return <div className={`openingHoursWeek-input ${this.getValidationClass()} ${this.props.className ? this.props.className : ''}`}>
            {this.renderContent()}
        </div>;
    }

    private renderContent() {
        return <div className={``}>
            {this.props.standardDay && <OpeningHoursDay
                label={<span>
                    {OpeningHoursUtil.getLabelSuffix(this.props.standardDay)}
                </span>}
                openingHours={{
                    times: this.props.standardDay.times
                }}
                onOpeningHoursChange={(openingHours) => {
                    this.props.onStandardDayChange(openingHours);
                }}
                rowHeader={'Standard day'}
            />}
            {this.props.days.map((day, index) => (
                <OpeningHoursDay
                    className={''}
                    key={index}
                    label={this.props.standardDay ? <span>
                        {OpeningHoursUtil.getLabelSuffix(this.props.standardDay && day.isStandardDay ? this.props.standardDay : day)}
                        <span className="float-right">
                            Standard day?&nbsp;
                            <Checkbox
                                className="label__checkbox m-0"
                                checked={day.isStandardDay}
                                onChecked={(checked) => {
                                    let days = this.props.days.slice(0);
                                    days[index] = { ...day, isStandardDay: checked.target.checked };
                                    this.props.onDaysChange(days);
                                }}
                            />
                        </span>
                    </span> : day.dayLabel}
                    openingHours={{
                        times: this.props.standardDay && day.isStandardDay ? this.props.standardDay.times : day.times
                    }}
                    onOpeningHoursChange={(openingHours) => {
                        if (day.isStandardDay) {
                            this.props.onStandardDayChange(openingHours);
                        } else {
                            let days = this.props.days.slice(0);
                            days[index] = { ...day, ...openingHours };
                            this.props.onDaysChange(days);
                        }
                    }}
                    rowHeader={day.dayLabel}
                />
            ))}
            <span className="bar"></span>
            {this.renderDefaultValidation()}
        </div>;
    }
}
export default OpeningHoursWeek;
