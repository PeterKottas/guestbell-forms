import './money.scss';
import * as React from 'react';
import * as BaseInput from '../base/BaseInput';
import { SelectValue } from '../select/Select';
export interface MoneyWithCurrency {
    value: number;
    currency: SelectValue;
}
export interface MoneyProps extends BaseInput.BaseInputProps {
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onPricesChange: (prices: MoneyWithCurrency[]) => void;
    allowMultiple?: boolean;
    currencies: SelectValue[];
    prices: MoneyWithCurrency[];
}
export interface MoneyState extends BaseInput.BaseInputState {
}
export declare class Money extends BaseInput.BaseInput<MoneyProps, MoneyState> {
    static defaultProps: BaseInput.BaseInputProps & {
        type: string;
        allowMultiple: boolean;
    };
    constructor(props: MoneyProps);
    componentWillMount(): void;
    render(): JSX.Element;
}
export default Money;
