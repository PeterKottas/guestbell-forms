import * as React from 'react';
import { IBaseValidator, MoneyWithCurrency, OpeningHoursDayObj, OpeningHoursSpecialDayObj } from '../../../../lib/index';
import { Tag } from 'src/lib/components/input/subComponents/tags/Tags';
export interface BasicProps {
}
export interface BasicState {
    name: string;
    gender: 'M' | 'F' | '';
    email: string;
    age: string;
    min1: string;
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
    tags: Tag[];
    selectedValues: string[];
    multipleValues: string[];
    multipleReadonly: boolean;
    textAreaText: string;
}
export declare class AgeValidator implements IBaseValidator {
    static instance: AgeValidator;
    Validate(value: string, isRequired: boolean, addError: (error: string) => void): boolean;
}
export declare class Basic extends React.Component<BasicProps, BasicState> {
    private form;
    private initialState;
    constructor(props: BasicProps);
    private handleGenderChange;
    private submitForm;
    private dynamicSubmitSuccessForm;
    private dynamicSubmitErrorForm;
    render(): JSX.Element;
    private renderButtons;
}
export default Basic;
