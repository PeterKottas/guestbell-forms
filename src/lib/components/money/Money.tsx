import * as PlusIcon from 'material-design-icons/content/svg/production/ic_add_24px.svg';

// Libs
import * as React from 'react';

// Misc
import { Select, SelectValue } from '../select/Select';
import { Text } from '../text/Text';
import InputGroup from '../inputGroup/InputGroup';
import { BaseInputProps, BaseInputState, BaseInput } from '../base/input/BaseInput';
import { Button } from '../button/Button';
import { withFormContext } from '../form/withFormContext';
import { OmitFormContext } from '../form/FormContext';

export interface MoneyWithCurrency {
    value: number;
    currency: SelectValue;
}

interface MoneyRawProps extends BaseInputProps<never> {
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onPricesChange: (prices: MoneyWithCurrency[]) => void;
    allowMultiple?: boolean;
    currencies: SelectValue[];
    prices: MoneyWithCurrency[];
}

export type MoneyProps = OmitFormContext<MoneyRawProps>;

export interface MoneyState extends BaseInputState {
}

class MoneyRaw extends BaseInput<MoneyRawProps, MoneyState, never>  {
    public static defaultProps = Object.assign({}, BaseInput.defaultProps, { type: 'money', allowMultiple: false });

    constructor(props: MoneyRawProps) {
        super(props, false);
        if (!props.currencies || !props.currencies.length) {
            throw Error('No currencies supplied to money input');
        }
        this.state = Object.assign(this.state, {
            isValid: props.required ? props.prices.length > 0 : true,
            errors: props.required && props.prices.length === 0 ? ['Required'] : [],
            handleValueChangeEnabled: false
        });
        this.subscribeSelf(props);
    }

    public render() {
        let unusedCurrencies = this.props.currencies;
        return (
            <InputGroup title={this.props.title}>
                <div
                    className={'input__base money-input ' + this.getValidationClass() + (this.props.className ? ' ' + this.props.className : '')}
                    ref={this.containerRef}
                >
                    {this.props.prices && this.props.prices.map((item, index) => {
                        let currentCurrencies = this.props.currencies.
                            filter(currency => this.props.prices.
                                filter((priceCurrency, priceIndex) => priceIndex !== index && priceCurrency.currency.value === currency.value).length === 0);
                        let retComponents = currentCurrencies.length ? <div key={index}>
                            <Select
                                onFocus={this.onFocus}
                                onBlur={this.onBlur}
                                className={'money-input__select m-0'}
                                values={currentCurrencies}
                                onChange={this.onCurrencyChanged(index, currentCurrencies)}
                                value={item.currency.value.toString()}
                            />
                            <Text
                                onFocus={this.onFocus}
                                onBlur={this.onBlur}
                                onTheFlightValidate={this.onTheFlightValidate}
                                placeholder={'0.00'}
                                className={'money-input__text m-0'}
                                validators={['number']}
                                value={item.value ? item.value.toString() : ''}
                                onChange={this.onPriceChanged(index)}
                                type="number"
                            />
                            {this.props.prices.length > 0 && (
                                <Button
                                    blank={true}
                                    type="error"
                                    onClick={this.removePriceClick(index)}
                                    className="transform-rotate--45 line-height--0"
                                    buttonProps={{ title: 'Remove price' }}
                                    circular={true}
                                >
                                    <PlusIcon />
                                </Button>
                            )}
                        </div> : null;
                        unusedCurrencies = unusedCurrencies.filter(currency => currency.value !== item.currency.value);
                        return retComponents;
                    })}
                    {(this.props.allowMultiple || this.props.prices && !this.props.prices.length) && unusedCurrencies.length ?
                        (
                            <Button
                                blank={true}
                                type="primary"
                                className="line-height--0"
                                onClick={this.addPriceClick(unusedCurrencies)}
                                circular={true}
                                buttonProps={{ title: (this.props.prices && this.props.prices.length === 0 ? 'Add price' : 'Add new currency') }}
                            >
                                <PlusIcon />
                            </Button>
                        )
                        :
                        null
                    }
                    <span className="highlight" />
                    <span className={'bar ' + (this.state.focused ? 'focused' : '')} />
                    {this.renderDefaultValidation()}
                    {this.props.label && <label className={this.props.prices && this.props.prices ? 'label--focused' : ''}>{this.renderLabel()}</label>}
                </div>
            </InputGroup>
        );
    }

    private onCurrencyChanged = (index: number, currentCurrencies: SelectValue[]) => (e) => {
        let newPrices: MoneyWithCurrency[] = [].concat(this.props.prices);
        newPrices[index].currency = currentCurrencies.filter(cc => cc.value.toString() === e.target.value)[0];
        this.props.onPricesChange(newPrices);
    }

    private onTheFlightValidate = value => {
        let num = Number(value);
        const parts = value.split('.');
        if (parts && parts.length > 1 && parts[parts.length - 1].length > 2) {
            return false;
        }
        if (!isNaN(num)) {
            return true;
        }
        if (num) {
            return false;
        }
    }

    private onPriceChanged = (index: number) => (e: React.ChangeEvent<HTMLInputElement>) => {
        let newPrices: MoneyWithCurrency[] = [].concat(this.props.prices);
        let str = e.target.value;
        let num = Number(str);
        if (!isNaN(num)) {
            newPrices[index].value = num;
        }
        this.props.onPricesChange(newPrices);
        if (!this.state.touched) {
            this.touch();
        }
    }

    private removePriceClick = (index: number) => () => {
        const newPrices = this.props.prices.filter((price, itemIndex) => itemIndex !== index);
        this.props.onPricesChange(newPrices);
        if (newPrices.length === 0 && this.props.required) {
            this.setInvalid(['Required']);
        }
        if (!this.state.touched) {
            this.touch();
        }
    }

    private addPriceClick = (unusedCurrencies: SelectValue[]) => () => {
        this.props.onPricesChange(this.props.prices.concat([{ value: 0, currency: unusedCurrencies[0] }]));
        this.setValid();
        if (!this.state.touched) {
            this.touch();
        }
    }

    private onFocus = () => this.setState({ focused: true });

    private onBlur = () => this.setState({ focused: false });
}

export const Money = withFormContext(MoneyRaw);

export default Money;
