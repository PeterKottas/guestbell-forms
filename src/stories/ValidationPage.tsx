import * as React from 'react';
import {
  Form,
  Select,
  Submit,
  Checkbox,
  Radio,
  RadioContainer,
  MoneyWithCurrency,
  OpeningHoursDayObj,
  OpeningHoursSpecialDayObj,
  InputHeader,
  Button,
  ButtonTypes,
  Tags,
  Tag,
  SelectValue,
  ButtonProps,
  FormValidationSummary,
  ValidatorTypes,
} from '../lib';

export interface TestProps {}

export interface TestState {
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
  public Validate(
    value: string,
    isRequired: boolean,
    addError: (error: string) => void
  ): boolean {
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

const tagsValidators: ValidatorTypes[] = ['email'];

const types: ButtonTypes[] = [
  'primary',
  'warning',
  'error',
  'info',
  'success',
  'gray',
  'white',
  'none',
];
const ButtonsShowcase: React.FC<ButtonProps> = (props) => {
  return (
    <div
      className="px-2"
      style={{
        backgroundColor: 'rgb(248, 247, 247)',
        display: 'flex',
        flexWrap: 'wrap',
      }}
    >
      {types.map((item, index) => (
        <Button key={index} type={item} {...props}>
          {item}
        </Button>
      ))}
    </div>
  );
};

ButtonsShowcase.defaultProps = {
  className: 'my-2 mr-2',
};

export class Test extends React.PureComponent<TestProps, TestState> {
  private form: Form;

  private initialState: TestState = {
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
      times: [],
    },
    openingHoursWeek: [],
    openingHoursWeekDay: {
      times: [],
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
      { value: 'rly long last option' },
    ],
    multipleReadonly: false,
    textAreaText: '',
  };

  constructor(props: TestProps) {
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
              <div className="card-block p-0 input__form">
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
              </div>
            </div>
          </div>
        </div>
        <div className="row my-5">
          <div className="col-lg-12">
            <div className={'card '}>
              <div className="card-block p-0">
                {!this.state.simulateUnmount && (
                  <Form
                    noValidate={true}
                    ref={this.formRef}
                    onSubmit={this.submitForm}
                    extraComponents={{
                      'extra-check': {
                        validation: {
                          isValid: this.state.checkbox2,
                          errors: this.state.checkbox2
                            ? []
                            : ['Please check custom context'],
                          name: 'Extra context',
                        },
                        componentApi: undefined,
                      },
                    }}
                  >
                    <InputHeader
                      icon={<i className="material-icons md-48">edit</i>}
                      title={'Example form'}
                      subTitle={
                        "And this is subtitle. There's also icon on the left"
                      }
                      showExpandAll={true}
                      type="hero"
                      collapsible={true}
                      collapsedDefault={false}
                      mainButton={
                        <Submit
                          type="primary"
                          onClick={this.submitForm}
                          validateForm={this.state.validateFormSubmit}
                        >
                          Submit
                        </Submit>
                      }
                      extraButtons={[
                        <Button key={1} dropdown={true} onClick={this.touchAll}>
                          Touch all
                        </Button>,
                        <Button
                          key={2}
                          dropdown={true}
                          onClick={this.unTouchAll}
                        >
                          Un-touch all
                        </Button>,
                      ]}
                    >
                      <InputHeader
                        className={''}
                        title={'Multiple'}
                        collapsible={true}
                        collapsedDefault={false}
                      >
                        {true && (
                          <Tags
                            title="Tags only email"
                            required={true}
                            validationName="Tags only email"
                            label="With label"
                            maxTags={1}
                            allowNew={true}
                            readOnly={this.state.multipleReadonly}
                            tags={this.state.tags}
                            onTagsChanged={this.tagsChanged}
                            suggestionsEmptyComponent={null}
                            validators={tagsValidators}
                            existingTags={[
                              { id: 1, name: 'petokottas@gmail.com' },
                            ]}
                            valueNotAddedError={'Email not added'}
                          />
                        )}
                        {false && (
                          <Select
                            required={true}
                            label="One or more"
                            title="Multiselect"
                            validationName="Multiselect"
                            multiple={true}
                            defaultEmpty={true}
                            readOnly={this.state.multipleReadonly}
                            selectedValues={this.state.selectedValues}
                            values={this.state.multipleValues}
                            onSelectedValuesChange={this.selectedValuesChanged}
                          />
                        )}
                        <Checkbox
                          required={true}
                          label="Smart"
                          onChecked={this.checkbox1Checked}
                          checked={this.state.checkbox1}
                          title="Dress code"
                        />
                        <Checkbox
                          label="Foreign context check"
                          onChecked={this.checkbox2Checked}
                          checked={this.state.checkbox2}
                          title="Custom context"
                        />
                      </InputHeader>
                      <FormValidationSummary />
                    </InputHeader>
                  </Form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  private checkbox1Checked = () =>
    this.setState({ checkbox1: !this.state.checkbox1 });

  private checkbox2Checked = () =>
    this.setState({ checkbox2: !this.state.checkbox2 });

  private formRef = (el: Form) => (this.form = el);

  private selectedValuesChanged = (selectedValues: SelectValue[]) =>
    this.setState({ selectedValues });

  private tagsChanged = (tags: Tag[]) => this.setState({ tags });

  private unTouchAll = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    this.form.unTouchAll();
  };

  private simulateUnmountChecked = () =>
    this.setState({ simulateUnmount: !this.state.simulateUnmount });

  private disablesInputsChecked = () =>
    this.setState({ submitDisablesInputs: !this.state.submitDisablesInputs });

  private touchOnChecked = (value: 'blur' | 'focus') =>
    this.setState({ touchOn: value });

  private formValidationToggle = () =>
    this.setState({ validateFormSubmit: !this.state.validateFormSubmit });

  private touchAll = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    this.form.touchAll();
  };

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

  private dynamicSubmitSuccessForm(
    e: React.MouseEvent<HTMLButtonElement>,
    submitting: () => void,
    error: () => void,
    success: () => void,
    reset: () => void
  ) {
    e.preventDefault();
    submitting();
    setTimeout(() => {
      error();
      setTimeout(() => reset(), 3000);
    }, 1000);
  }

  private dynamicSubmitErrorForm(
    e: React.MouseEvent<HTMLButtonElement>,
    submitting: () => void,
    error: () => void,
    success: () => void,
    reset: () => void
  ) {
    e.preventDefault();
    submitting();
    setTimeout(() => {
      success();
      setTimeout(() => reset(), 3000);
    }, 1000);
  }
}

export default Test;
