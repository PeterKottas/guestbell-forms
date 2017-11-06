import './openingHoursSpecial.scss';
import * as React from 'react';
import 'react-day-picker/lib/style.css';
import * as BaseInput from '../../base/BaseInput';
import { OpeningHoursDayObj } from '../../../Inputs';
export interface OpeningHoursSpecialDayObj extends OpeningHoursDayObj {
    date: Date;
}
export interface OpeningHoursSpecialProps extends BaseInput.BaseInputProps {
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    days: OpeningHoursSpecialDayObj[];
    onDaysChange: (days: OpeningHoursSpecialDayObj[]) => void;
}
export interface OpeningHoursSpecialState extends BaseInput.BaseInputState {
}
export declare class OpeningHoursSpecial extends BaseInput.BaseInput<OpeningHoursSpecialProps, OpeningHoursSpecialState> {
    static defaultProps: BaseInput.BaseInputProps & {
        type: string;
        placeholder: string;
    };
    constructor(props: any);
    render(): JSX.Element;
}
export default OpeningHoursSpecial;
