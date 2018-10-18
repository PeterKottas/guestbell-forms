import * as React from 'react';
import {
    Dropdown,
    Form,
    Time,
    Text,
    Select,
    Submit,
    DynamicSubmit,
    Checkbox,
    Radio,
    RadioContainer,
    Money,
    OpeningHoursDay,
    MoneyWithCurrency,
    OpeningHoursDayObj,
    OpeningHoursWeek,
    OpeningHoursSpecialDayObj,
    OpeningHoursSpecial,
    InputHeader,
    Button,
    ButtonTypes,
    Tags,
    Tag,
    NumberValidator,
    TextArea,
    OpeningHoursWeekDayObj,
    SelectValue,
    TextProps,
    ValidatorTypes,
    IBaseValidator,
    ButtonProps,
    FormValidationSummary,
    InputHeaderRaw
} from '../../../../lib/index';

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
    selectedValues: SelectValue[];
    multipleValues: SelectValue[];
    multipleReadonly: boolean;
    textAreaText: string;
}

export class AgeValidator {
    public static instance = new AgeValidator();
    public Validate(value: string, isRequired: boolean, addError: (error: string) => void): boolean {
        let num = Number(value);
        if (!isNaN(num)) {
            if (num <= 0) {
                addError('Not born yet?');
                return false;
            }
            if (num > 122) {
                addError('Older than Jeanne Calment? Really?');
                return false;
            }
            return true;
        } else {
            addError('Invalid age');
        }
        return false;
    }
}

const existingTags: Tag[] = [{
    id: 1,
    name: 'Food'
}, {
    id: 2,
    name: 'Drink'
}, {
    id: 3,
    name: 'Beer'
}, {
    id: 4,
    name: 'Wine'
}, {
    id: 5,
    name: 'Gluten free'
}, {
    id: 6,
    name: 'Fruit'
}
];

const currencies1 = [{ label: 'GBP', value: 'GBP' }, { label: 'EUR', value: 'EUR' }];

const currencies2 = [{ label: 'GBP', value: 'GBP' }, { label: 'EUR', value: 'EUR' }, { label: 'USD', value: 'USD' }];

const genderValues = [{ value: 'M', label: 'Male' }, { value: 'F', label: 'Female' }];

const tagsEmailTextProps: TextProps = {
    validators: ['email']
};

const emailValidators: ValidatorTypes[] = ['email'];

const urlValidators: ValidatorTypes[] = ['url'];

const customAgeValidator: IBaseValidator[] = [AgeValidator.instance];

const customNumberValidator: IBaseValidator[] = [new NumberValidator({ min: 0 })];

const types: ButtonTypes[] = ['primary', 'warning', 'error', 'info', 'success', 'gray', 'white', 'none'];
const ButtonsShowcase: React.SFC<ButtonProps> = props => {
    return (
        <div
            className="px-2"
            style={{
                backgroundColor: 'rgb(248, 247, 247)',
                display: 'flex',
                flexWrap: 'wrap'
            }}
        >{types.map((item, index) => (
            <Button
                key={index}
                type={item}
                {...props}
            >
                {item}
            </Button>
        ))}
        </div>
    );
};

ButtonsShowcase.defaultProps = {
    className: 'my-2 mr-2'
};

export class Basic extends React.PureComponent<BasicProps, BasicState> {
    private form: Form;

    private specialDaysInputHeader: InputHeaderRaw;

    private dropdownFunctionHeader: Dropdown;

    private initialState: BasicState = {
        gender: '',
        name: '',
        email: '',
        age: '',
        min1: '',
        checkbox1: true,
        checkbox2: false,
        validateFormSubmit: true,
        food: 'breakfast',
        drink: 'breakfast',
        touchOn: 'focus',
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
        website: '',
        tags: [],
        selectedValues: [],
        multipleValues: [
            { value: 'One option' },
            { value: 'Second option' },
            { value: 'Third option' },
            { value: 'one more option' },
            { value: 'rly long last option' }
        ],
        multipleReadonly: false,
        textAreaText: ''
    };

    constructor(props: BasicProps) {
        super(props);
        this.state = this.initialState;
        this.handleGenderChange = this.handleGenderChange.bind(this);
        this.submitForm = this.submitForm.bind(this);
        this.dynamicSubmitSuccessForm = this.dynamicSubmitSuccessForm.bind(this);
        this.dynamicSubmitErrorForm = this.dynamicSubmitErrorForm.bind(this);
    }

    public render() {
        let time2Max = new Date();
        time2Max.setHours(time2Max.getHours() + 1);
        time2Max.setMinutes(time2Max.getMinutes() + 5);

        let time2Min = new Date();
        time2Min.setHours(time2Min.getHours() - 1);
        time2Min.setMinutes(time2Min.getMinutes() - 5);

        return (
            <div className="container">
                <div className="row  mt-5">
                    <div className="col-lg-12">
                        <div className="card">
                            <div className="card-block p-0">
                                <Form
                                    noValidate={true}
                                    className="input__form"
                                >
                                    <Checkbox
                                        label="Turn form validation on or off"
                                        onChecked={this.formValidationToggle}
                                        checked={this.state.validateFormSubmit}
                                        title="Validate form submit"
                                    />
                                    <RadioContainer title="Touch on">
                                        <Radio
                                            name="touch"
                                            value="blur"
                                            label="Blur"
                                            result={this.state.touchOn}
                                            onChecked={this.touchOnChecked}
                                        />
                                        <Radio
                                            name="touch"
                                            value="focus"
                                            label="Focus"
                                            result={this.state.touchOn}
                                            onChecked={this.touchOnChecked}
                                        />
                                    </RadioContainer>
                                    <Checkbox
                                        label="Disables inputs"
                                        onChecked={this.disablesInputsChecked}
                                        checked={this.state.submitDisablesInputs}
                                        title="Submit"
                                    />
                                    <Checkbox
                                        label="Unmount"
                                        onChecked={this.simulateUnmountChecked}
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
                        <div className={'card '}>
                            <div className="card-block p-0">
                                {!this.state.simulateUnmount &&
                                    <Form
                                        noValidate={true}
                                        ref={this.formRef}
                                        onSubmit={this.submitForm}
                                    >
                                        <InputHeader
                                            icon={<i className="material-icons md-48">edit</i>}
                                            title={'Example form'}
                                            subTitle={'And this is subtitle. There\'s also icon on the left'}
                                            showExpandAll={true}
                                            type="hero"
                                            collapsable={true}
                                            collapsedDefault={false}
                                            mainButton={
                                                <Submit
                                                    type={'primary'}
                                                    onClick={this.submitForm}
                                                    validateForm={this.state.validateFormSubmit}
                                                >Submit
                                                </Submit>}
                                            extraButtons={[
                                                <Button
                                                    key={1}
                                                    dropdown={true}
                                                    onClick={this.touchAll}
                                                >Touch all
                                                </Button>,
                                                <Button
                                                    key={2}
                                                    dropdown={true}
                                                    onClick={this.unTouchAll}
                                                >Un-touch all
                                                </Button>]}
                                        >
                                            <RadioContainer title="Drinks">
                                                <Radio
                                                    name="drink"
                                                    value="wine"
                                                    label="Wine"
                                                    result={this.state.drink}
                                                    onChecked={this.drinksChecked}
                                                />
                                                <Radio
                                                    name="drink"
                                                    value="whiskey"
                                                    label="Whiskey"
                                                    result={this.state.drink}
                                                    onChecked={this.drinksChecked}
                                                />
                                                <Radio
                                                    name="drink"
                                                    value="water"
                                                    label="Water"
                                                    result={this.state.drink}
                                                    onChecked={this.drinksChecked}
                                                />
                                            </RadioContainer>
                                            <RadioContainer title="Drinks (horizontal)" horizontal={true}>
                                                <Radio
                                                    name="drink2"
                                                    value="wine"
                                                    label="Wine"
                                                    result={this.state.drink}
                                                    onChecked={this.drinksChecked}
                                                />
                                                <Radio
                                                    name="drink2"
                                                    value="whiskey"
                                                    label="Whiskey"
                                                    result={this.state.drink}
                                                    onChecked={this.drinksChecked}
                                                />
                                                <Radio
                                                    name="drink2"
                                                    value="water"
                                                    label="Water"
                                                    result={this.state.drink}
                                                    onChecked={this.drinksChecked}
                                                />
                                            </RadioContainer>
                                            <Checkbox
                                                required={true}
                                                label="Smart"
                                                onChecked={this.checkbox1Checked}
                                                checked={this.state.checkbox1}
                                                title="Dress code"
                                            />
                                            <Checkbox
                                                label="(optional)"
                                                onChecked={this.checkbox2Checked}
                                                checked={this.state.checkbox2}
                                                title="Wallet parking"
                                            />
                                            <Text
                                                touchOn={this.state.touchOn}
                                                required={true}
                                                label="Your name"
                                                onChange={this.nameChanged}
                                                value={this.state.name}
                                                title="Name"
                                            />
                                            <div className="px-3">
                                                <Text
                                                    touchOn={this.state.touchOn}
                                                    required={true}
                                                    label="Your name (no title)"
                                                    onChange={this.nameChanged}
                                                    value={this.state.name}
                                                    tooltip={<p className="m-0">This is some help text. It can also do <b>bold</b> and other stuff.</p>}
                                                />
                                            </div>
                                            <Text
                                                touchOn={this.state.touchOn}
                                                label="Your name"
                                                onChange={this.nameChanged}
                                                value={this.state.name}
                                                title="Name readonly"
                                                readOnly={true}
                                            />
                                            <Select
                                                touchOn={this.state.touchOn}
                                                label={'Your gender'}
                                                values={genderValues}
                                                onChange={this.handleGenderChange}
                                                value={this.state.gender}
                                                title="Gender"
                                            />
                                            <TextArea
                                                touchOn={this.state.touchOn}
                                                required={true}
                                                label="Textarea"
                                                onChange={this.textAreaChanged}
                                                value={this.state.textAreaText}
                                                title="Textarea"
                                            />
                                            <TextArea
                                                touchOn={this.state.touchOn}
                                                label="Textarea"
                                                onChange={this.textAreaChanged}
                                                value={this.state.textAreaText}
                                                title="Readonly"
                                                readOnly={true}
                                            />
                                            <InputHeader
                                                title={'Some collapsed stuff'}
                                                collapsable={true}
                                                shouldToggleCollapseOnHeaderClick={true}
                                                subTitle={'Helpful text that describes what\'s collapsed here'}
                                            >
                                                <Text
                                                    touchOn={this.state.touchOn}
                                                    validators={emailValidators}
                                                    required={false}
                                                    label="Email"
                                                    value={this.state.email}
                                                    onChange={this.emailChanged}
                                                    title="Your email"
                                                />
                                                <Text
                                                    touchOn={this.state.touchOn}
                                                    readOnly={true}
                                                    value={'You can select me but I am readonly'}
                                                    title="Readonly"
                                                />
                                                <Text
                                                    touchOn={this.state.touchOn}
                                                    validators={urlValidators}
                                                    required={false}
                                                    label="Website"
                                                    value={this.state.website}
                                                    onChange={this.websiteChanged}
                                                    title="Your website"
                                                />
                                                <Text
                                                    touchOn={this.state.touchOn}
                                                    customValidators={customAgeValidator}
                                                    label="Your age (optional)"
                                                    value={this.state.age}
                                                    onChange={this.ageChanged}
                                                    title="Age"
                                                />
                                                <Text
                                                    touchOn={this.state.touchOn}
                                                    customValidators={customNumberValidator}
                                                    label="Min 1"
                                                    value={this.state.min1}
                                                    onChange={this.min1Changed}
                                                    title="Number"
                                                />
                                            </InputHeader>
                                            <Money
                                                currencies={currencies1}
                                                prices={this.state.prices1}
                                                touchOn={this.state.touchOn}
                                                required={true}
                                                onPricesChange={this.prices1Changed}
                                                title="Price"
                                            />
                                            <Money
                                                currencies={currencies2}
                                                prices={this.state.prices2}
                                                allowMultiple={true}
                                                touchOn={this.state.touchOn}
                                                required={false}
                                                onPricesChange={this.prices2Changed}
                                                title="Price multiple"
                                            />
                                            <Time
                                                touchOn={this.state.touchOn}
                                                time={this.state.time1}
                                                timeChange={this.time1Changed}
                                                title="Time"
                                            />
                                            <Time
                                                max={time2Max}
                                                min={time2Min}
                                                touchOn={this.state.touchOn}
                                                time={this.state.time2}
                                                timeChange={this.time2Changed}
                                                title="With Min/Max"
                                            />
                                            <OpeningHoursDay
                                                label={'Opening hours sample day'}
                                                touchOn={this.state.touchOn}
                                                required={false}
                                                onOpeningHoursChange={this.openingHoursChanged}
                                                openingHours={this.state.openingHours}
                                                title="Opening hours"
                                            />
                                            <InputHeader
                                                title={'Opening hours'}
                                                collapsable={true}
                                                mainButton={
                                                    <Button
                                                        type={'primary'}
                                                    >
                                                        Hero button
                                                    </Button>
                                                }
                                                extraButtons={[
                                                    <Button
                                                        key={1}
                                                        dropdown={true}
                                                    >
                                                        Extra button 1
                                                    </Button>,
                                                    <Button
                                                        key={2}
                                                        dropdown={true}
                                                    >
                                                        Extra button 2
                                                    </Button>
                                                ]}
                                            >
                                                <OpeningHoursWeek
                                                    touchOn={this.state.touchOn}
                                                    required={false}
                                                    onDaysChange={this.openingHoursWeekChanged}
                                                    days={this.state.openingHoursWeek}
                                                    standardDay={this.state.openingHoursWeekDay}
                                                    onStandardDayChange={this.openingHoursWeekStandardDayChanged}
                                                />
                                            </InputHeader>
                                            <InputHeader
                                                className={''}
                                                title={'Special days opening hours'}
                                                collapsable={true}
                                                innerRef={this.specialDaysInputHeaderRef}
                                                mainButton={(
                                                    < Button
                                                        type={'primary'}
                                                        onClick={this.specialDaysAddClick}
                                                    >
                                                        Add
                                                    </Button>
                                                )}
                                            >
                                                <OpeningHoursSpecial
                                                    touchOn={this.state.touchOn}
                                                    required={false}
                                                    onDaysChange={this.openingHoursSpecialChanged}
                                                    days={this.state.openingHoursSpecial}
                                                    placeholder="Choose date"
                                                />
                                            </InputHeader>
                                            <InputHeader
                                                className={''}
                                                title={'Buttons'}
                                                mainButton={
                                                    <Button
                                                        type={'primary'}
                                                    >
                                                        Hero button
                                                    </Button>
                                                }
                                            >
                                                <div className="p-3 buttons-row">
                                                    <h3 className="text-center">Standard</h3>
                                                    <ButtonsShowcase />
                                                </div>
                                                <div className="p-3 buttons-row">
                                                    <h3 className="text-center">No shadow</h3>
                                                    <ButtonsShowcase noShadow={true} />
                                                </div>
                                                <div className="p-3 buttons-row">
                                                    <h3 className="text-center">Hero</h3>
                                                    <ButtonsShowcase hero={true} />
                                                </div>
                                                <div className="p-3 buttons-row">
                                                    <h3 className="text-center">Outlined</h3>
                                                    <ButtonsShowcase outlined={true} />
                                                </div>
                                                <div className="p-3 buttons-row">
                                                    <h3 className="text-center">Blank</h3>
                                                    <ButtonsShowcase blank={true} />
                                                </div>
                                                <div className="p-3 buttons-row">
                                                    <h3 className="text-center">Disabled</h3>
                                                    <ButtonsShowcase disabled={true} />
                                                </div>
                                                <div className="p-3 buttons-row">
                                                    <h3 className="text-center">Small</h3>
                                                    <ButtonsShowcase small={true} />
                                                </div>
                                                <div className="p-3 buttons-row">
                                                    <h3 className="text-center">Circular</h3>
                                                    <ButtonsShowcase circular={true} />
                                                </div>
                                                <div className="p-3 buttons-row">
                                                    <h3 className="text-center">Dropdown</h3>
                                                    <ButtonsShowcase dropdown={true} className="" />
                                                </div>
                                            </InputHeader>
                                            <InputHeader
                                                className={''}
                                                title={'Multiple'}
                                                collapsable={true}
                                                collapsedDefault={false}
                                            >
                                                <Checkbox
                                                    // label="Multiple readonly"
                                                    onChecked={this.multipleReadonlyChecked}
                                                    checked={this.state.multipleReadonly}
                                                    title="Multiple readonly"
                                                />
                                                <Tags
                                                    title="Tags example"
                                                    readOnly={this.state.multipleReadonly}
                                                    allowNew={true}
                                                    tags={this.state.tags}
                                                    onTagsChanged={this.tagsChanged}
                                                />
                                                <Tags
                                                    title="Tags suggestions"
                                                    label="Choose or create tags"
                                                    readOnly={this.state.multipleReadonly}
                                                    allowNew={true}
                                                    existingTags={existingTags}
                                                    tags={this.state.tags}
                                                    onTagsChanged={this.tagsChanged}
                                                />
                                                <Tags
                                                    title="Tags max 3"
                                                    maxTags={2}
                                                    readOnly={this.state.multipleReadonly}
                                                    allowNew={true}
                                                    tags={this.state.tags}
                                                    onTagsChanged={this.tagsChanged}
                                                />
                                                <Tags
                                                    title="Tags only email"
                                                    label="With label"
                                                    maxTags={2}
                                                    allowNew={true}
                                                    readOnly={this.state.multipleReadonly}
                                                    tags={this.state.tags}
                                                    onTagsChanged={this.tagsChanged}
                                                    suggestionsEmptyComponent={null}
                                                    textProps={tagsEmailTextProps}
                                                />
                                                <Select
                                                    required={true}
                                                    label="One or more"
                                                    title="Multiselect"
                                                    multiple={true}
                                                    defaultEmpty={true}
                                                    readOnly={this.state.multipleReadonly}
                                                    selectedValues={this.state.selectedValues}
                                                    values={this.state.multipleValues}
                                                    onSelectedValuesChange={this.selectedValuesChanged}
                                                />
                                            </InputHeader>
                                            <InputHeader
                                                className={''}
                                                title={'Dropdown'}
                                                collapsable={true}
                                                collapsedDefault={false}
                                            >
                                                <div className="p-3 buttons-row d-flex">
                                                    <Dropdown
                                                        className="position-relative mr-3"
                                                        header={<i className="material-icons">notifications</i>}
                                                        notificationCount={5}
                                                        submenuClassName="p-2"
                                                        showArrow={false}
                                                    >
                                                        <li>
                                                            Item
                                                        </li>
                                                    </Dropdown>
                                                    <Dropdown
                                                        className="position-relative mr-3"
                                                        header={'String header'}
                                                        notificationCount={5}
                                                        submenuClassName="p-2"
                                                    >
                                                        <li>
                                                            Item
                                                        </li>
                                                    </Dropdown>
                                                    <Dropdown
                                                        className="position-relative"
                                                        ref={this.dropdownFunctionHeaderRef}
                                                        header={<Button onClick={this.functionHeaderClick} type="primary">Function header</Button>}
                                                        showArrow={false}
                                                        submenuClassName="p-2"
                                                    >
                                                        <li>
                                                            Item
                                                        </li>
                                                    </Dropdown>
                                                </div>
                                            </InputHeader>
                                            <FormValidationSummary />
                                            <div className="row justify-content-center align-items-center my-2">
                                                <DynamicSubmit
                                                    submitDisablesInputs={this.state.submitDisablesInputs}
                                                    className="ml-2"
                                                    type={'primary'}
                                                    normalClassName=""
                                                    errorClassName="btn-danger"
                                                    submittingClassName="btn-secondary"
                                                    errorChildren={'Error'}
                                                    submittingChildren={'Working on it'}
                                                    onClick={this.dynamicSubmitSuccessForm}
                                                    validateForm={this.state.validateFormSubmit}
                                                >Ajax Error
                                                </DynamicSubmit>
                                                <DynamicSubmit
                                                    submitDisablesInputs={this.state.submitDisablesInputs}
                                                    className="ml-2"
                                                    normalClassName=""
                                                    type={'primary'}
                                                    submittingClassName="btn-secondary"
                                                    successClassName="btn-success"
                                                    submittingChildren={'Working on it'}
                                                    successChildren={'That worked'}
                                                    onClick={this.dynamicSubmitErrorForm}
                                                    validateForm={this.state.validateFormSubmit}
                                                >Ajax Success
                                                </DynamicSubmit>
                                            </div>
                                        </InputHeader>
                                    </Form>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        );
    }

    private specialDaysInputHeaderRef = (el: InputHeaderRaw) => this.specialDaysInputHeader = el;

    private formRef = (el: Form) => this.form = el;

    private dropdownFunctionHeaderRef = (el: Dropdown) => this.dropdownFunctionHeader = el;

    private functionHeaderClick = () => this.dropdownFunctionHeader.showNavigation();

    private selectedValuesChanged = (selectedValues: SelectValue[]) => this.setState({ selectedValues });

    private tagsChanged = (tags: Tag[]) => this.setState({ tags });

    private multipleReadonlyChecked = () => this.setState({ multipleReadonly: !this.state.multipleReadonly });

    private openingHoursSpecialChanged = (days: OpeningHoursSpecialDayObj[]) => this.setState({ openingHoursSpecial: days });

    private specialDaysAddClick = () => {
        this.setState({
            openingHoursSpecial: this.state.openingHoursSpecial.concat([{ date: undefined, times: [] }])
        }, () => this.specialDaysInputHeader.expand());
    }

    private openingHoursWeekStandardDayChanged = (day: OpeningHoursWeekDayObj) => this.setState({ openingHoursWeekDay: day });

    private openingHoursWeekChanged = (days: OpeningHoursWeekDayObj[]) => this.setState({ openingHoursWeek: days });

    private openingHoursChanged = (openingHours: OpeningHoursDayObj) => this.setState({ openingHours: openingHours });

    private time2Changed = (time: Date) => this.setState({ time2: time });

    private time1Changed = (time: Date) => this.setState({ time1: time });

    private prices2Changed = (prices: MoneyWithCurrency[]) => this.setState({ prices2: prices });

    private prices1Changed = (prices: MoneyWithCurrency[]) => this.setState({ prices1: prices });

    private min1Changed = (e: React.ChangeEvent<HTMLInputElement>) => this.setState({ min1: e.target.value });

    private ageChanged = (e: React.ChangeEvent<HTMLInputElement>) => this.setState({ age: e.target.value });

    private websiteChanged = (e: React.ChangeEvent<HTMLInputElement>) => this.setState({ website: e.target.value });

    private emailChanged = (e: React.ChangeEvent<HTMLInputElement>) => this.setState({ email: e.target.value });

    private textAreaChanged = (e: React.ChangeEvent<HTMLTextAreaElement>) => this.setState({ textAreaText: e.target.value });

    private nameChanged = (e: React.ChangeEvent<HTMLInputElement>) => this.setState({ name: e.target.value });

    private checkbox2Checked = () => this.setState({ checkbox2: !this.state.checkbox2 });

    private checkbox1Checked = () => this.setState({ checkbox1: !this.state.checkbox1 });

    private drinksChecked = (value: string) => this.setState({ drink: value });

    private unTouchAll = (e: React.MouseEvent<HTMLButtonElement>) => { e.preventDefault(); this.form.unTouchAll(); };

    private simulateUnmountChecked = () => this.setState({ simulateUnmount: !this.state.simulateUnmount });

    private disablesInputsChecked = () => this.setState({ submitDisablesInputs: !this.state.submitDisablesInputs });

    private touchOnChecked = (value: 'blur' | 'focus') => this.setState({ touchOn: value });

    private formValidationToggle = () => this.setState({ validateFormSubmit: !this.state.validateFormSubmit });

    private touchAll = (e: React.MouseEvent<HTMLButtonElement>) => { e.preventDefault(); this.form.touchAll(); };

    private handleGenderChange(e: React.ChangeEvent<HTMLSelectElement>) {
        const val = e.target.value;
        if (val === 'M' || val === 'F') {
            this.setState({ gender: val });
        }
    }

    private submitForm(e?: React.MouseEvent<HTMLButtonElement>) {
        e && e.preventDefault();
        this.setState(this.initialState);
    }

    private dynamicSubmitSuccessForm(e: React.MouseEvent<HTMLButtonElement>, submitting: () => void,
        error: () => void, success: () => void, reset: () => void) {
        e.preventDefault();
        submitting();
        setTimeout(() => {
            error();
            setTimeout(() => reset(), 3000);
        }, 1000);
    }

    private dynamicSubmitErrorForm(e: React.MouseEvent<HTMLButtonElement>, submitting: () => void, error: () => void, success: () => void, reset: () => void) {
        e.preventDefault();
        submitting();
        setTimeout(() => {
            success();
            setTimeout(() => reset(), 3000);
        }, 1000);
    }
}

export default Basic;