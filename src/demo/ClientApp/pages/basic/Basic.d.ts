import * as React from 'react';
import { IBaseValidator, MoneyWithCurrency, OpeningHoursDayObj, OpeningHoursSpecialDayObj } from '../../../../lib/index';
export interface BasicProps {
}
export interface BasicState {
    name: string;
    gender: 'M' | 'F' | '';
    email: string;
    age: string;
    checkbox1: boolean;
    checkbox2: boolean;
    validateFormSubmit: boolean;
    food: string;
    drink: string;
    touchOn: 'blur' | 'focus';
    theme: string;
    submitDisablesInputs: boolean;
    simulateUnmount: boolean;
    prices1: MoneyWithCurrency[];
    prices2: MoneyWithCurrency[];
    time1: Date;
    time2: Date;
    openingHours: OpeningHoursDayObj;
    openingHoursWeek: OpeningHoursDayObj[];
    openingHoursWeekDay: OpeningHoursDayObj;
    openingHoursSpecial: OpeningHoursSpecialDayObj[];
    website: string;
}
export declare class AgeValidator implements IBaseValidator {
    static instance: AgeValidator;
    Validate(value: string, isRequired: boolean, addError: (error: string) => void): boolean;
}
export declare class Basic extends React.Component<BasicProps, BasicState> {
    private form;
    private initialState;
    constructor(props: BasicProps);
    private handleGenderChange(e);
    private submitForm(e);
    private dynamicSubmitSuccessForm(e, submiting, error, success, reset);
    private dynamicSubmitErrorForm(e, submiting, error, success, reset);
    render(): JSX.Element;
}
export default Basic;
