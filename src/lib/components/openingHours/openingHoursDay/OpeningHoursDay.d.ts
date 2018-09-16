import './openingHoursDay.scss';
import * as React from 'react';
import { BaseInputProps, BaseInputState, BaseInput } from '../../base/input/BaseInput';
export interface OpeningHoursDayObj {
    times: Date[];
}
export interface OpeningHoursDayProps extends BaseInputProps<never> {
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onOpeningHoursChange: (openingHours: OpeningHoursDayObj) => void;
    openingHours: OpeningHoursDayObj;
    label?: JSX.Element | string;
    maxOpenCloseTimes?: number;
}
export interface OpeningHoursState extends BaseInputState {
}
export declare class OpeningHoursDay extends BaseInput<OpeningHoursDayProps, OpeningHoursState, never> {
    static defaultProps: BaseInputProps<never> & {
        type: string;
        allowMultiple: boolean;
        maxOpenCloseTimes: number;
    };
    private fullDayMilliseconds;
    constructor(props: OpeningHoursDayProps);
    render(): JSX.Element;
    private getBottomBorder;
    private getTime;
}
export default OpeningHoursDay;
