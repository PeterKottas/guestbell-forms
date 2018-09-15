import './openingHoursWeek.scss';
import * as React from 'react';
import { OpeningHoursDayObj } from '../openingHoursDay/OpeningHoursDay';
import { BaseInputProps, BaseInputState, BaseInput } from '../../base/input/BaseInput';
export interface OpeningHoursWeekDayObj extends OpeningHoursDayObj {
    isStandardDay?: boolean;
    dayLabel?: string;
}
export interface OpeningHoursWeekProps extends BaseInputProps<never> {
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    days: OpeningHoursWeekDayObj[];
    onDaysChange: (days: OpeningHoursWeekDayObj[]) => void;
    standardDay?: OpeningHoursWeekDayObj;
    onStandardDayChange?: (day: OpeningHoursWeekDayObj) => void;
}
export interface OpeningHoursWeekState extends BaseInputState {
}
export declare class OpeningHoursWeek extends BaseInput<OpeningHoursWeekProps, OpeningHoursWeekState, never> {
    static defaultProps: BaseInputProps<any> & {
        type: string;
        placeholder: string;
        collapsable: boolean;
    };
    constructor(props: OpeningHoursWeekProps);
    componentWillMount(): void;
    componentWillReceiveProps(newProps: OpeningHoursWeekProps): void;
    render(): JSX.Element;
    private renderContent;
}
export default OpeningHoursWeek;
