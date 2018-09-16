import './money.scss';
import * as React from 'react';
import { SelectValue } from '../select/Select';
import { BaseInputProps, BaseInputState, BaseInput } from '../base/input/BaseInput';
export interface MoneyWithCurrency {
    value: number;
    currency: SelectValue;
}
export interface MoneyProps extends BaseInputProps<never> {
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onPricesChange: (prices: MoneyWithCurrency[]) => void;
    allowMultiple?: boolean;
    currencies: SelectValue[];
    prices: MoneyWithCurrency[];
}
export interface MoneyState extends BaseInputState {
}
export declare class Money extends BaseInput<MoneyProps, MoneyState, never> {
    static defaultProps: BaseInputProps<never> & {
        type: string;
        allowMultiple: boolean;
    };
    constructor(props: MoneyProps);
    render(): JSX.Element;
}
export default Money;
