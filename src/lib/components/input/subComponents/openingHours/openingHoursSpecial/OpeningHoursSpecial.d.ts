import './openingHoursSpecial.scss';
import * as React from 'react';
import * as BaseInput from '../../base/BaseInput';
import { OpeningHoursDayObj } from '../../../Inputs';
export interface OpeningHoursSpecialDayObj extends OpeningHoursDayObj {
    date: Date;
}
export interface OpeningHoursSpecialProps extends BaseInput.BaseInputProps<never> {
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    days: OpeningHoursSpecialDayObj[];
    onDaysChange: (days: OpeningHoursSpecialDayObj[]) => void;
}
export interface OpeningHoursSpecialState extends BaseInput.BaseInputState {
}
export declare class OpeningHoursSpecial extends BaseInput.BaseInput<OpeningHoursSpecialProps, OpeningHoursSpecialState, never> {
    static defaultProps: BaseInput.BaseInputProps<any> & {
        type: string;
        placeholder: string;
    };
    constructor(props: any);
    render(): JSX.Element;
}
export default OpeningHoursSpecial;
