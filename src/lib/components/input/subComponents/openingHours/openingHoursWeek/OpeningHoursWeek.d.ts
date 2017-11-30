import './openingHoursWeek.scss';
import * as React from 'react';
import * as BaseInput from '../../base/BaseInput';
import { OpeningHoursDayObj } from '../../../Inputs';
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
export declare class OpeningHoursWeek extends BaseInput.BaseInput<OpeningHoursWeekProps, OpeningHoursWeekState> {
    static defaultProps: BaseInput.BaseInputProps & {
        type: string;
        placeholder: string;
        collapsable: boolean;
    };
    constructor(props: OpeningHoursWeekProps);
    componentWillMount(): void;
    render(): JSX.Element;
    private renderContent();
}
export default OpeningHoursWeek;
