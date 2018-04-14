import './openingHoursSpecial.scss';
import * as BaseInput from '../../base/BaseInput';
import { OpeningHoursDayObj } from '../../../Inputs';
export interface OpeningHoursSpecialDayObj extends OpeningHoursDayObj {
    date?: Date;
}
export interface OpeningHoursSpecialProps extends BaseInput.BaseInputProps<never> {
    days: OpeningHoursSpecialDayObj[];
    onDaysChange: (days: OpeningHoursSpecialDayObj[]) => void;
    placeholder?: string;
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
