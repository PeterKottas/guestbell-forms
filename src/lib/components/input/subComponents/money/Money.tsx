﻿//Styles
import './money.scss';
import * as PlusIcon from 'material-design-icons/content/svg/production/ic_add_circle_outline_24px.svg';

//Libs
import * as React from 'react';

//Misc
import * as BaseInput from '../base/BaseInput';
import { Select, SelectValue } from '../select/Select';
import { Text } from '../text/Text';

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

export class Money extends BaseInput.BaseInput<MoneyProps, MoneyState>  {
    public static defaultProps = Object.assign(BaseInput.BaseInput.defaultProps, { type: "money", allowMultiple: false });

    constructor(props: MoneyProps) {
        super(props);
        if (!props.currencies || !props.currencies.length) {
            throw Error('No currencies suplied to money input');
        }

    }

    public render() {
        let unusedCurrencies = this.props.currencies;
        return <div className={'input__group money-input ' + this.getValidationClass() + (this.props.className ? ' ' + this.props.className : '')}>
            {this.props.prices && this.props.prices.map((item, index) => {
                let currentCurrencies = this.props.currencies.filter(currency => this.props.prices.filter((priceCurrency, priceIndex) => priceIndex !== index && priceCurrency.currency.value === currency.value).length === 0);
                let retComponents = currentCurrencies.length ? [
                    <Select
                        onFocus={() => this.setState({ focused: true })}
                        onBlur={() => this.setState({ focused: false })}
                        className={'money-input__select m-0'}
                        key={index * 3}
                        values={currentCurrencies}
                        onChange={(e) => {
                            let newPrices: MoneyWithCurrency[] = [].concat(this.props.prices);
                            newPrices[index].currency = currentCurrencies.filter(item => item.value === e.target.value)[0];
                            this.props.onPricesChange(newPrices);
                        }}
                        value={item.currency.value.toString()}
                    />,
                    <Text
                        onFocus={() => this.setState({ focused: true })}
                        onBlur={() => this.setState({ focused: false })}
                        onTheFlightValidate={value => {
                            let number = Number(value);
                            const parts = value.split('.');
                            if (parts && parts.length > 1 && parts[parts.length - 1].length > 2) {
                                return false;
                            }
                            if (!isNaN(number)) {
                                return true;
                            }
                            if (number)
                                return false;
                        }}
                        placeholder={'0.00'}
                        className={'money-input__text m-0'}
                        key={index * 3 + 1}
                        validators={["number"]}
                        value={item.value ? item.value.toString() : ''}
                        onChange={(e) => {
                            let newPrices: MoneyWithCurrency[] = [].concat(this.props.prices);
                            let number = Number(e.target.value);
                            if (!isNaN(number)) {
                                newPrices[index].value = number;
                            }
                            this.props.onPricesChange(newPrices);
                        }}
                    />,
                    this.props.prices.length > 0 && (
                        <div
                            key={index * 3 + 2}
                            role="button"
                            className="input__button money-input__button--remove"
                            onClick={() => this.props.onPricesChange(this.props.prices.filter((item, itemIndex) => itemIndex !== index))}>
                            <PlusIcon />
                        </div>
                    )
                ] : null;
                unusedCurrencies = unusedCurrencies.filter(currency => currency.value != item.currency.value);
                return retComponents;
            })}
            {(this.props.allowMultiple || this.props.prices && !this.props.prices.length) && unusedCurrencies.length ?
                (
                    <div
                        role="button"
                        className="input__button"
                        onClick={() => this.props.onPricesChange(this.props.prices.concat([{ value: 0, currency: unusedCurrencies[0] }]))}>
                        <PlusIcon />
                    </div>
                )
                :
                null
            }
            <span className="highlight"></span>
            <span className={'bar ' + (this.state.focused ? 'focused' : '')}></span>
            {this.renderDefaultValidation()}
            {this.props.label && <label className={this.props.prices && this.props.prices ? 'label--focused' : ''}>{this.props.label}</label>}
        </div>;
    }
}
export default Money;
