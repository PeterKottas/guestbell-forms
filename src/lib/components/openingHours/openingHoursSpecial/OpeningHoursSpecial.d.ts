import './openingHoursSpecial.scss';
import { OpeningHoursDayObj } from '../openingHoursDay/OpeningHoursDay';
import { BaseInputProps, BaseInputState, BaseInput } from '../../base/input/BaseInput';
export interface OpeningHoursSpecialDayObj extends OpeningHoursDayObj {
    date?: Date;
}
export interface OpeningHoursSpecialProps extends BaseInputProps<never> {
    days: OpeningHoursSpecialDayObj[];
    onDaysChange: (days: OpeningHoursSpecialDayObj[]) => void;
    placeholder?: string;
}
export interface OpeningHoursSpecialState extends BaseInputState {
}
export declare class OpeningHoursSpecial extends BaseInput<OpeningHoursSpecialProps, OpeningHoursSpecialState, never> {
    static defaultProps: BaseInputProps<never> & {
        type: string;
        placeholder: string;
    };
    constructor(props: OpeningHoursSpecialProps);
    render(): JSX.Element;
}
export default OpeningHoursSpecial;
