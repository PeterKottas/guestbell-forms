import * as React from 'react';
import {
    Form, Time, Text, Select, Submit, DynamicSubmit, IBaseValidator, Checkbox, Radio,
    RadioContainer, Money, OpeningHoursDay, MoneyWithCurrency, OpeningHoursDayObj, OpeningHoursWeek, OpeningHoursSpecialDayObj, OpeningHoursSpecial,
    InputHeader,
    Button
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
    website: string;
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
        website: ''
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

    private submitForm(e: React.MouseEvent<HTMLDivElement>) {
        e.preventDefault();
        this.setState(this.initialState);
    }

    private dynamicSubmitSuccessForm(e: React.MouseEvent<HTMLDivElement>, submiting: () => void, error: () => void, success: () => void, reset: () => void) {
        e.preventDefault();
        submiting();
        setTimeout(() => {
            error();
            setTimeout(() => reset(), 3000);
        }, 1000);
    }

    private dynamicSubmitErrorForm(e: React.MouseEvent<HTMLDivElement>, submiting: () => void, error: () => void, success: () => void, reset: () => void) {
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
                        <div className="card-block p-0">
                            <Form
                                noValidate
                                className="input__form"
                                ref={form => this.form = form}
                            >
                                <Checkbox
                                    label="Turn form validation on or off"
                                    onChecked={(e) => this.setState({ validateFormSubmit: !this.state.validateFormSubmit })}
                                    checked={this.state.validateFormSubmit}
                                    title="Validate form submit"
                                />
                                <RadioContainer title="Touch on">
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
                                <RadioContainer title="Theme">
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
                                <Checkbox
                                    label="Disables inputs"
                                    onChecked={(e) => this.setState({ submitDisablesInputs: !this.state.submitDisablesInputs })}
                                    checked={this.state.submitDisablesInputs}
                                    title="Submit"
                                />
                                <Checkbox
                                    label="Unmount"
                                    onChecked={(e) => this.setState({ simulateUnmount: !this.state.simulateUnmount })}
                                    checked={this.state.simulateUnmount}
                                    title="Simulate"
                                />
                            </Form>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row my-5">
                <div className="col-lg-12">
                    <div className={'card ' + this.state.theme}>
                        <div className="card-block p-0">
                            {!this.state.simulateUnmount &&
                                <Form
                                    noValidate
                                    ref={form => this.form = form}
                                >
                                    <InputHeader
                                        icon={<i className="material-icons md-48">edit</i>}
                                        title={'Example form'}
                                        subTitle={'And this is subtitle. There\'s also icon on the left'}
                                        showExpandAll={true}
                                        heroHeader={true}
                                        collapsable={true}
                                        collapsedDefault={false}
                                        mainButton={
                                            <Submit
                                                type={'hero'}
                                                onClick={this.submitForm}
                                                validateForm={this.state.validateFormSubmit}
                                            >Submit</Submit>}
                                        extraButtons={[
                                            <Button
                                                className="mx-2"
                                                onClick={(e) => { e.preventDefault(); this.form.touchAll(); }}
                                            >Touch all</Button>,
                                            <Button
                                                className="mr-2"
                                                onClick={(e) => { e.preventDefault(); this.form.unTouchAll(); }}
                                            >Un-touch all</Button>]}
                                    >
                                        <RadioContainer title="Drinks">
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
                                        <Checkbox
                                            required={true}
                                            label="Smart"
                                            onChecked={(e) => this.setState({ checkbox1: !this.state.checkbox1 })}
                                            checked={this.state.checkbox1}
                                            title="Dress code"
                                        />
                                        <Checkbox
                                            label="(optional)"
                                            onChecked={(e) => this.setState({ checkbox2: !this.state.checkbox2 })}
                                            checked={this.state.checkbox2}
                                            title="Wallet parking"
                                        />
                                        <Text
                                            touchOn={this.state.touchOn}
                                            required={true} label="Your name"
                                            onChange={(e) => this.setState({ name: e.target.value })}
                                            value={this.state.name}
                                            title="Name"
                                        />
                                        <Select
                                            touchOn={this.state.touchOn}
                                            required={false} label={'Your gender'}
                                            values={[{ value: 'M', label: 'Male' }, { value: 'F', label: 'Female' }]}
                                            onChange={this.handleGenderChange}
                                            value={this.state.gender}
                                            title="Gender"
                                        />
                                        <InputHeader
                                            title={'Some collapsed stuff'}
                                            collapsable={true}
                                            subTitle={'Helpful text that describes what\'s collapsed here'}
                                        >
                                            <Text
                                                touchOn={this.state.touchOn}
                                                validators={["email"]}
                                                required={false}
                                                label="Email"
                                                value={this.state.email}
                                                onChange={(e) => this.setState({ email: e.target.value })}
                                                title="Your email"
                                            />
                                            <Text
                                                touchOn={this.state.touchOn}
                                                validators={["url"]}
                                                required={false}
                                                label="Website"
                                                value={this.state.website}
                                                onChange={(e) => this.setState({ website: e.target.value })}
                                                title="Your website"
                                            />
                                            <Text
                                                touchOn={this.state.touchOn}
                                                customValidators={[AgeValidator.instance]}
                                                label="Your age (optional)"
                                                value={this.state.age}
                                                onChange={(e) => this.setState({ age: e.target.value })}
                                                title="Age"
                                            />
                                        </InputHeader>
                                        <Money
                                            currencies={[{ label: 'GBP', value: 'GBP' }, { label: 'EUR', value: 'EUR' }]}
                                            prices={this.state.prices1}
                                            touchOn={this.state.touchOn}
                                            required={false}
                                            onPricesChange={(prices) => this.setState({ prices1: prices })}
                                            title="Price"
                                        />
                                        <Money
                                            currencies={[{ label: 'GBP', value: 'GBP' }, { label: 'EUR', value: 'EUR' }, { label: 'USD', value: 'USD' }]}
                                            prices={this.state.prices2}
                                            allowMultiple={true}
                                            touchOn={this.state.touchOn}
                                            required={false}
                                            onPricesChange={(prices) => this.setState({ prices2: prices })}
                                            title="Price multiple"
                                        />
                                        <Time
                                            touchOn={this.state.touchOn}
                                            time={this.state.time1}
                                            timeChange={(time) => this.setState({ time1: time })}
                                            title="Time"
                                        />
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
                                            time={this.state.time2}
                                            timeChange={(time) => this.setState({ time2: time })}
                                            title="With Min/Max"
                                        />
                                        <OpeningHoursDay
                                            label={'Opening hours sample day'}
                                            touchOn={this.state.touchOn}
                                            required={false}
                                            onOpeningHoursChange={(openingHours => this.setState({ openingHours: openingHours }))}
                                            openingHours={this.state.openingHours}
                                            title="Opening hours"
                                        />
                                        <InputHeader
                                            title={'Opening hours'}
                                            collapsable={true}
                                            mainButton={
                                                <Button
                                                    onClick={() => console.log('click')}
                                                    type={'hero'}
                                                >
                                                    Hero button
                                                </Button>
                                            }
                                            extraButtons={[<Button
                                                onClick={() => null}
                                                type={'dropdown'}
                                            >
                                                Extra button 1
                                            </Button>,
                                            <Button
                                                onClick={() => null}
                                                type={'dropdown'}
                                            >
                                                Extra button 2
                                            </Button>]}
                                        >
                                            <OpeningHoursWeek
                                                touchOn={this.state.touchOn}
                                                required={false}
                                                onDaysChange={(days => this.setState({ openingHoursWeek: days }))}
                                                days={this.state.openingHoursWeek}
                                                standardDay={this.state.openingHoursWeekDay}
                                                onStandardDayChange={(day => this.setState({ openingHoursWeekDay: day }))}
                                            />
                                        </InputHeader>
                                        <InputHeader
                                            className={''}
                                            title={'Special days opening hours'}
                                            collapsable={true}
                                            mainButton={
                                                (param) =>
                                                    <Button
                                                        type={'hero'}
                                                        onClick={() => this.setState({
                                                            openingHoursSpecial: this.state.openingHoursSpecial.concat([{ date: new Date(), times: [] }])
                                                        }, () => param.expand())}
                                                    >
                                                        Add
                                                    </Button>
                                            }
                                        >
                                            <OpeningHoursSpecial
                                                touchOn={this.state.touchOn}
                                                required={false}
                                                onDaysChange={(days => this.setState({ openingHoursSpecial: days }))}
                                                days={this.state.openingHoursSpecial}
                                            />
                                        </InputHeader>
                                        <div className="row justify-content-center align-items-center my-2">
                                            <DynamicSubmit
                                                submitDisablesInputs={this.state.submitDisablesInputs}
                                                className="ml-2"
                                                type={'hero'}
                                                normalClassName=""
                                                errorClassName="btn-danger"
                                                submittingClassName="btn-secondary"
                                                errorChildren={'Error'}
                                                submittingChildren={'Working on it'}
                                                onClick={this.dynamicSubmitSuccessForm}
                                                validateForm={this.state.validateFormSubmit}
                                            >Ajax Error</DynamicSubmit>
                                            <DynamicSubmit
                                                submitDisablesInputs={this.state.submitDisablesInputs}
                                                className="ml-2"
                                                normalClassName=""
                                                type={'hero'}
                                                submittingClassName="btn-secondary"
                                                successClassName="btn-success"
                                                submittingChildren={'Working on it'}
                                                successChildren={'That worked'}
                                                onClick={this.dynamicSubmitErrorForm}
                                                validateForm={this.state.validateFormSubmit}
                                            >Ajax Success</DynamicSubmit>
                                        </div>
                                    </InputHeader>
                                </Form>}
                        </div>
                    </div>
                </div>
            </div>
        </div >;
    }
}

export default Basic;