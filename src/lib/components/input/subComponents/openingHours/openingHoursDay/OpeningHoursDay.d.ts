import './openingHoursDay.scss';
import * as React from 'react';
import * as BaseInput from '../../base/BaseInput';
export interface OpeningHoursDayObj {
    times: Date[];
}
export interface OpeningHoursDayProps extends BaseInput.BaseInputProps<never> {
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onOpeningHoursChange: (openingHours: OpeningHoursDayObj) => void;
    openingHours: OpeningHoursDayObj;
    label?: JSX.Element | string;
    maxOpenCloseTimes?: number;
}
export interface OpeningHoursState extends BaseInput.BaseInputState {
}
export declare class OpeningHoursDay extends BaseInput.BaseInput<OpeningHoursDayProps, OpeningHoursState, never> {
    static defaultProps: BaseInput.BaseInputProps<any> & {
        type: string;
        allowMultiple: boolean;
        maxOpenCloseTimes: number;
    };
    private fullDayMilliseconds;
    constructor(props: OpeningHoursDayProps);
    render(): JSX.Element;
    private getBottomBorder();
    private getTime(hours, minutes);
}
export default OpeningHoursDay;
