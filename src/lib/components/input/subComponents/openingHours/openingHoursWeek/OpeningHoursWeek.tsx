//Styles
import './openingHoursWeek.scss';
import * as plusIconSrc from '../../assets/images/ic_keyboard_arrow_down_black_24dp_2x.png';

//Libs
import * as React from 'react';
import * as SmoothCollapse from 'react-smooth-collapse';

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
    collapsable?: boolean;
}

export interface OpeningHoursWeekState extends BaseInput.BaseInputState {
    collapsed: boolean;
}

export class OpeningHoursWeek extends BaseInput.BaseInput<OpeningHoursWeekProps, OpeningHoursWeekState>  {
    public static defaultProps = Object.assign(BaseInput.BaseInput.defaultProps, { type: "openingHoursWeek", placeholder: '', collapsable: false });

    constructor(props: OpeningHoursWeekProps) {
        super(props);
        this.state = { ...this.state, collapsed: props.collapsable };
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

    public render() {

        return <div className={`input__group openingHoursWeek-input ${this.getValidationClass()} ${this.props.className ? this.props.className : ''}`}>
            {this.props.collapsable ?
                <div className="smooth-collapse__container">
                    <SmoothCollapse expanded={!this.state.collapsed} collapsedHeight={'150px'}>
                        {this.renderContent()}
                    </SmoothCollapse>
                </div>
                :
                this.renderContent()
            }
            {this.props.collapsable && <div
                role="button"
                className={`openingHoursWeek-input__collapse-button ${(this.state.collapsed ? 'collapsed' : '')}`}
                onClick={() => this.setState({ collapsed: !this.state.collapsed })}>
                <img src={plusIconSrc} />
            </div>}
        </div>;
    }

    private renderContent() {
        return <div className={`pt-2`}>
            {this.props.standardDay && <OpeningHoursDay
                label={<span>
                    Standard day {OpeningHoursUtil.getLabelSuffix(this.props.standardDay)}
                </span>}
                openingHours={{
                    times: this.props.standardDay.times
                }}
                onOpeningHoursChange={(openingHours) => {
                    this.props.onStandardDayChange(openingHours);
                }}
            />}
            {this.props.days.map((day, index) => (
                <OpeningHoursDay
                    className={'mb-5'}
                    key={index}
                    label={this.props.standardDay ? <span>
                        {day.dayLabel} {OpeningHoursUtil.getLabelSuffix(this.props.standardDay && day.isStandardDay ? this.props.standardDay : day)}
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
                />
            ))}
            <span className="bar"></span>
            {this.renderDefaultValidation()}
            <div className={'openingHoursWeek-input__fade ' + (this.props.collapsable && this.state.collapsed ? 'collapsed' : '')} />
        </div>;
    }
}
export default OpeningHoursWeek;
