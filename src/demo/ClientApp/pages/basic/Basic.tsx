import * as React from 'react';
import {
    Form, Time, Text, Select, Submit, DynamicSubmit, IBaseValidator, Checkbox, Radio,
    RadioContainer, Money, OpeningHoursDay, MoneyWithCurrency, OpeningHoursDayObj, OpeningHoursWeek, OpeningHoursSpecialDayObj, OpeningHoursSpecial
} from '../../../../lib/index';

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
}

export class AgeValidator implements IBaseValidator {
    public static instance = new AgeValidator();
    public Validate(value: string, isRequired: boolean, addError: (error: string) => void): boolean {
        let number = Number(value);
        if (!isNaN(number)) {
            if (number <= 0) {
                addError('Not born yet?');
                return false;
            }
            if (number > 122) {
                addError('Older than Jeanne Calment? C\'mon');
                return false;
            }
            return true;
        }
        else {
            addError('Invalid age');
        }
        return false;
    }
}


export class Basic extends React.Component<BasicProps, BasicState>{
    private form: Form;

    private initialState: BasicState = {
        gender: '',
        name: '',
        email: '',
        age: '',
        checkbox1: true,
        checkbox2: false,
        validateFormSubmit: true,
        food: 'breakfast',
        drink: 'breakfast',
        touchOn: 'focus',
        theme: '',
        submitDisablesInputs: true,
        simulateUnmount: false,
        prices1: [],
        prices2: [],
        time1: new Date(),
        time2: new Date(),
        openingHours: {
            times: []
        },
        openingHoursWeek: [],
        openingHoursWeekDay: {
            times: []
        },
        openingHoursSpecial: [],
    };

    constructor(props: BasicProps) {
        super(props);
        this.state = this.initialState;
        this.handleGenderChange = this.handleGenderChange.bind(this);
        this.submitForm = this.submitForm.bind(this);
        this.dynamicSubmitSuccessForm = this.dynamicSubmitSuccessForm.bind(this);
        this.dynamicSubmitErrorForm = this.dynamicSubmitErrorForm.bind(this);
    }

    private handleGenderChange(e: React.ChangeEvent<HTMLInputElement>) {
        const val = e.target.value;
        if (val == 'M' || val == 'F') {
            this.setState({ gender: val });
        }
    }

    private submitForm(e: React.MouseEvent<HTMLButtonElement>) {
        e.preventDefault();
        this.setState(this.initialState);
    }

    private dynamicSubmitSuccessForm(e: React.MouseEvent<HTMLButtonElement>, submiting: () => void, error: () => void, success: () => void, reset: () => void) {
        e.preventDefault();
        submiting();
        setTimeout(() => {
            error();
            setTimeout(() => reset(), 3000);
        }, 1000);
    }

    private dynamicSubmitErrorForm(e: React.MouseEvent<HTMLButtonElement>, submiting: () => void, error: () => void, success: () => void, reset: () => void) {
        e.preventDefault();
        submiting();
        setTimeout(() => {
            success();
            setTimeout(() => reset(), 3000);
        }, 1000);
    }

    public render() {
        return <div className="container">
            <div className="row  mt-5">
                <div className="col-lg-12">
                    <div className="card">
                        <div className="card-header">
                            <h2 className="text-center">Lib options</h2>
                        </div>
                        <div className="card-block">
                            <Form noValidate ref={form => this.form = form}>
                                <div className="row">
                                    <div className={'col-lg-6'}>
                                        <Checkbox
                                            label="Validate form submit"
                                            onChecked={(e) => this.setState({ validateFormSubmit: !this.state.validateFormSubmit })}
                                            checked={this.state.validateFormSubmit}
                                        />
                                    </div>
                                    <div className={'col-lg-6'}>
                                        <RadioContainer label="Touch on">
                                            <Radio
                                                name="touch"
                                                value="blur" label="Blur"
                                                result={this.state.touchOn}
                                                onChecked={(value) => this.setState({ touchOn: value as "blur" | "focus" })}
                                            />
                                            <Radio
                                                name="touch"
                                                value="focus"
                                                label="Focus"
                                                result={this.state.touchOn}
                                                onChecked={(value) => this.setState({ touchOn: value as "blur" | "focus" })}
                                            />
                                        </RadioContainer>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className={'col-lg-12'}>
                                        <RadioContainer label="Theme">
                                            <Radio
                                                name="theme"
                                                value="guestbell-forms--dark bg-dark"
                                                label="Dark"
                                                result={this.state.theme}
                                                onChecked={(value) => this.setState({ theme: value })}
                                            />
                                            <Radio
                                                name="theme"
                                                value=""
                                                label="Light"
                                                result={this.state.theme}
                                                onChecked={(value) => this.setState({ theme: value })}
                                            />
                                        </RadioContainer>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className={'col-lg-6'}>
                                        <Checkbox
                                            label="Submit disables inputs"
                                            onChecked={(e) => this.setState({ submitDisablesInputs: !this.state.submitDisablesInputs })}
                                            checked={this.state.submitDisablesInputs}
                                        />
                                    </div>
                                    <div className={'col-lg-6'}>
                                        <Checkbox
                                            label="Simulate unmount"
                                            onChecked={(e) => this.setState({ simulateUnmount: !this.state.simulateUnmount })}
                                            checked={this.state.simulateUnmount}
                                        />
                                    </div>
                                </div>
                            </Form>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row my-5">
                <div className="col-lg-12">
                    <div className={'card ' + this.state.theme}>
                        <div className="card-header">
                            <h2 className="text-center">Example restaurant form</h2>
                        </div>
                        <div className="card-block">
                            {!this.state.simulateUnmount && < Form noValidate ref={form => this.form = form}>
                                <div className="row">
                                    <div className={'col-lg-6'}>
                                        <Radio
                                            name="food"
                                            value="breakfast"
                                            label="Breakfast"
                                            result={this.state.food}
                                            onChecked={(value) => this.setState({ food: value })}
                                        />
                                        <Radio
                                            name="food"
                                            value="lunch"
                                            label="Lunch"
                                            result={this.state.food}
                                            onChecked={(value) => this.setState({ food: value })}
                                        />
                                        <Radio
                                            name="food"
                                            value="dinner"
                                            label="Dinner"
                                            result={this.state.food}
                                            onChecked={(value) => this.setState({ food: value })}
                                        />
                                    </div>
                                    <div className={'col-lg-6'}>
                                        <RadioContainer label="Drinks">
                                            <Radio
                                                name="drink"
                                                value="wine"
                                                label="Wine"
                                                result={this.state.drink}
                                                onChecked={(value) => this.setState({ drink: value })}
                                            />
                                            <Radio
                                                name="drink"
                                                value="whiskey"
                                                label="Whiskey"
                                                result={this.state.drink}
                                                onChecked={(value) => this.setState({ drink: value })}
                                            />
                                            <Radio
                                                name="drink"
                                                value="water"
                                                label="Water"
                                                result={this.state.drink}
                                                onChecked={(value) => this.setState({ drink: value })}
                                            />
                                        </RadioContainer>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className={'col-lg-6'}>
                                        <Checkbox
                                            required={true}
                                            label="Smart dress code"
                                            onChecked={(e) => this.setState({ checkbox1: !this.state.checkbox1 })}
                                            checked={this.state.checkbox1}
                                        />
                                    </div>
                                    <div className={'col-lg-6'}>
                                        <Checkbox
                                            label="Wallet parking (optional)"
                                            onChecked={(e) => this.setState({ checkbox2: !this.state.checkbox2 })}
                                            checked={this.state.checkbox2}
                                        />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className={'col-lg-6'}>
                                        <Text
                                            touchOn={this.state.touchOn}
                                            required={true} label="Name"
                                            onChange={(e) => this.setState({ name: e.target.value })}
                                            value={this.state.name}
                                        />
                                    </div>
                                    <div className={'col-lg-6'}>
                                        <Select
                                            touchOn={this.state.touchOn}
                                            required={false} label={'Gender'}
                                            values={[{ value: 'M', label: 'Male' }, { value: 'F', label: 'Female' }]}
                                            onChange={this.handleGenderChange}
                                            value={this.state.gender}
                                        />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className={'col-lg-6'}>
                                        <Text
                                            touchOn={this.state.touchOn}
                                            validators={["email"]}
                                            required={false}
                                            label="Email"
                                            value={this.state.email}
                                            onChange={(e) => this.setState({ email: e.target.value })}
                                        />
                                    </div>
                                    <div className={'col-lg-6'}>
                                        <Text
                                            touchOn={this.state.touchOn}
                                            customValidators={[AgeValidator.instance]}
                                            label="Age (optional)"
                                            value={this.state.age}
                                            onChange={(e) => this.setState({ age: e.target.value })}
                                        />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className={'col-lg-12'}>
                                        <Money
                                            currencies={[{ label: 'GBP', value: 'GBP' }, { label: 'EUR', value: 'EUR' }]}
                                            prices={this.state.prices1}
                                            touchOn={this.state.touchOn}
                                            required={false}
                                            label="Price"
                                            onPricesChange={(prices) => this.setState({ prices1: prices })}
                                        />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className={'col-lg-12'}>
                                        <Money
                                            currencies={[{ label: 'GBP', value: 'GBP' }, { label: 'EUR', value: 'EUR' }, { label: 'USD', value: 'USD' }]}
                                            prices={this.state.prices2}
                                            allowMultiple={true}
                                            touchOn={this.state.touchOn}
                                            required={false}
                                            label="Price multiple"
                                            onPricesChange={(prices) => this.setState({ prices2: prices })}
                                        />
                                    </div>
                                </div>

                                <div className="row">
                                    <div className={'col-lg-6'}>
                                        <Time
                                            touchOn={this.state.touchOn}
                                            label="Time"
                                            time={this.state.time1}
                                            timeChange={(time) => this.setState({ time1: time })}
                                        />
                                    </div>
                                    <div className={'col-lg-6'}>
                                        <Time
                                            max={(() => {
                                                let time = new Date();
                                                time.setHours(time.getHours() + 1);
                                                time.setMinutes(time.getMinutes() + 5);
                                                return time;
                                            })()}
                                            min={(() => {
                                                let time = new Date();
                                                time.setHours(time.getHours() - 1);
                                                time.setMinutes(time.getMinutes() - 5);
                                                return time;
                                            })()}
                                            touchOn={this.state.touchOn}
                                            label="Time limits"
                                            time={this.state.time2}
                                            timeChange={(time) => this.setState({ time2: time })}
                                        />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className={'col-lg-12'}>
                                        <OpeningHoursDay
                                            label={'Opening hours sample day'}
                                            touchOn={this.state.touchOn}
                                            required={false}
                                            onOpeningHoursChange={(openingHours => this.setState({ openingHours: openingHours }))}
                                            openingHours={this.state.openingHours}
                                        />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className={'col-lg-12'}>
                                        <h4 className="text-center">Opening hours</h4>
                                        <OpeningHoursWeek
                                            touchOn={this.state.touchOn}
                                            required={false}
                                            onDaysChange={(days => this.setState({ openingHoursWeek: days }))}
                                            days={this.state.openingHoursWeek}
                                            standardDay={this.state.openingHoursWeekDay}
                                            onStandardDayChange={(day => this.setState({ openingHoursWeekDay: day }))}
                                            collapsable={true}
                                        />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className={'col-lg-12'}>
                                        <h4 className="text-center">Special days opening hours</h4>
                                        <OpeningHoursSpecial
                                            touchOn={this.state.touchOn}
                                            required={false}
                                            onDaysChange={(days => this.setState({ openingHoursSpecial: days }))}
                                            days={this.state.openingHoursSpecial}
                                        />
                                    </div>
                                </div>
                                <div className="row justify-content-center align-items-center">
                                    <Submit
                                        className="btn btn-primary btn-lg ml-2"
                                        onClick={this.submitForm}
                                        validateForm={this.state.validateFormSubmit}
                                    >Submit</Submit>
                                    <DynamicSubmit
                                        submitDisablesInputs={this.state.submitDisablesInputs}
                                        className="btn btn-lg ml-2"
                                        normalClassName="btn-primary"
                                        errorClassName="btn-danger"
                                        submittingClassName="btn-secondary"
                                        errorChildren={'Error'}
                                        submittingChildren={'Working on it'}
                                        onClick={this.dynamicSubmitSuccessForm}
                                        validateForm={this.state.validateFormSubmit}
                                    >Ajax Error</DynamicSubmit>
                                    <DynamicSubmit
                                        submitDisablesInputs={this.state.submitDisablesInputs}
                                        className="btn btn-lg ml-2"
                                        normalClassName="btn-primary"
                                        submittingClassName="btn-secondary"
                                        successClassName="btn-success"
                                        submittingChildren={'Working on it'}
                                        successChildren={'That worked'}
                                        onClick={this.dynamicSubmitErrorForm}
                                        validateForm={this.state.validateFormSubmit}
                                    >Ajax Success</DynamicSubmit>
                                    <button
                                        className="btn btn-secondary btn-lg mx-2"
                                        onClick={(e) => { e.preventDefault(); this.form.touchAll(); }}
                                    >Touch all</button>
                                    <button
                                        className="btn btn-secondary btn-lg mr-2"
                                        onClick={(e) => { e.preventDefault(); this.form.unTouchAll(); }}
                                    >Un-touch all</button>
                                </div>
                            </Form>}
                        </div>
                    </div>
                </div>
            </div>
        </div>;
    }
}

export default Basic;