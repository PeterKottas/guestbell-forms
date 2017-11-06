import './openingHoursDay.scss';
import * as React from 'react';
import * as BaseInput from '../../base/BaseInput';
export interface OpeningHoursDayObj {
    times: Date[];
}
export interface OpeningHoursDayProps extends BaseInput.BaseInputProps {
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onOpeningHoursChange: (openingHours: OpeningHoursDayObj) => void;
    openingHours: OpeningHoursDayObj;
    label?: JSX.Element | string;
}
export interface OpeningHoursState extends BaseInput.BaseInputState {
}
export declare class OpeningHoursDay extends BaseInput.BaseInput<OpeningHoursDayProps, OpeningHoursState> {
    static defaultProps: BaseInput.BaseInputProps & {
        type: string;
        allowMultiple: boolean;
    };
    private fullDayMiliseconds;
    constructor(props: OpeningHoursDayProps);
    render(): JSX.Element;
    private getBottomBorder();
    private getTime(hours, minutes);
}
export default OpeningHoursDay;
