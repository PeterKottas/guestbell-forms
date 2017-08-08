import * as React from 'react';
import { Form, Text, Select, Submit, DynamicSubmit, IBaseValidator, Checkbox, Radio, RadioContainer } from '../../../../lib/index';

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
    food2: string;
    touchOn: "blur" | "focus";
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

    private initialState = {
        gender: '',
        name: '',
        email: '',
        age: '',
        checkbox1: true,
        checkbox2: false,
        validateFormSubmit: true,
        food: 'breakfast',
        food2: 'breakfast',
        touchOn: 'focus'
    } as BasicState;

    constructor() {
        super();
        this.state = this.initialState;
        this.handleGenderChange = this.handleGenderChange.bind(this);
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handleAgeChange = this.handleAgeChange.bind(this);
        this.submitForm = this.submitForm.bind(this);
        this.handleCheckbox1Check = this.handleCheckbox1Check.bind(this);
        this.handleCheckbox2Check = this.handleCheckbox2Check.bind(this);
        this.dynamicSubmitSuccessForm = this.dynamicSubmitSuccessForm.bind(this);
        this.dynamicSubmitErrorForm = this.dynamicSubmitErrorForm.bind(this);
        this.handleValidateFormSubmitChecked = this.handleValidateFormSubmitChecked.bind(this);
    }

    private handleNameChange(e: React.ChangeEvent<HTMLInputElement>) {
        this.setState({ name: e.target.value });
    }

    private handleEmailChange(e: React.ChangeEvent<HTMLInputElement>) {
        this.setState({ email: e.target.value });
    }

    private handleAgeChange(e: React.ChangeEvent<HTMLInputElement>) {
        this.setState({ age: e.target.value });
    }

    private handleCheckbox1Check(e: React.ChangeEvent<HTMLInputElement>) {
        this.setState({ checkbox1: !this.state.checkbox1 });
    }

    private handleCheckbox2Check(e: React.ChangeEvent<HTMLInputElement>) {
        this.setState({ checkbox2: !this.state.checkbox2 });
    }

    private handleGenderChange(e: React.ChangeEvent<HTMLInputElement>) {
        const val = e.target.value;
        if (val == 'M' || val == 'F') {
            this.setState({ gender: val });
        }
    }

    private handleValidateFormSubmitChecked(e: React.ChangeEvent<HTMLInputElement>) {
        this.setState({ validateFormSubmit: !this.state.validateFormSubmit });
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
                                        <Checkbox label="Validate form submit" onChecked={this.handleValidateFormSubmitChecked} checked={this.state.validateFormSubmit} />
                                    </div>
                                    <div className={'col-lg-6'}>
                                        <RadioContainer label="Touch on">
                                            <Radio name="touch" value="blur" label="Blur" result={this.state.touchOn} onChecked={(value) => this.setState({ touchOn: value as "blur"|"focus" })} />
                                            <Radio name="touch" value="focus" label="Focus" result={this.state.touchOn} onChecked={(value) => this.setState({ touchOn: value as "blur" | "focus"})} />
                                        </RadioContainer>
                                    </div>
                                </div>
                            </Form>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row my-5">
                <div className="col-lg-12">
                    <div className="card">
                        <div className="card-header">
                            <h2 className="text-center">Example form</h2>
                        </div>
                        <div className="card-block">
                            <Form noValidate ref={form => this.form = form}>
                                <div className="row">
                                    <div className={'col-lg-6'}>
                                        <Radio name="food" value="breakfast" label="Breakfast" result={this.state.food} onChecked={(value) => this.setState({ food: value })} />
                                        <Radio name="food" value="lunch" label="Lunch" result={this.state.food} onChecked={(value) => this.setState({ food: value })} />
                                        <Radio name="food" value="dinner" label="Dinner" result={this.state.food} onChecked={(value) => this.setState({ food: value })} />
                                    </div>
                                    <div className={'col-lg-6'}>
                                        <RadioContainer label="With container">
                                            <Radio name="food2" value="breakfast" label="Breakfast" result={this.state.food2} onChecked={(value) => this.setState({ food2: value })} />
                                            <Radio name="food2" value="lunch" label="Lunch" result={this.state.food2} onChecked={(value) => this.setState({ food2: value })} />
                                            <Radio name="food2" value="dinner" label="Dinner" result={this.state.food2} onChecked={(value) => this.setState({ food2: value })} />
                                        </RadioContainer>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className={'col-lg-6'}>
                                        <Checkbox required={true} label="Checkbox" onChecked={this.handleCheckbox1Check} checked={this.state.checkbox1} />
                                    </div>
                                    <div className={'col-lg-6'}>
                                        <Checkbox label="Checkbox (optional)" onChecked={this.handleCheckbox2Check} checked={this.state.checkbox2} />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className={'col-lg-6'}>
                                        <Text touchOn={this.state.touchOn} required={true} label="Username" onChange={this.handleNameChange} value={this.state.name} />
                                    </div>
                                    <div className={'col-lg-6'}>
                                        <Select touchOn={this.state.touchOn} required={false} label={'Gender'} values={[{ value: 'M', label: 'Male' }, { value: 'F', label: 'Female' }]} onChange={this.handleGenderChange} value={this.state.gender} />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className={'col-lg-6'}>
                                        <Text touchOn={this.state.touchOn} validators={["email"]} required={false} label="Email" value={this.state.email} onChange={this.handleEmailChange} />
                                    </div>
                                    <div className={'col-lg-6'}>
                                        <Text touchOn={this.state.touchOn} customValidators={[AgeValidator.instance]} label="Age (optional)" value={this.state.age} onChange={this.handleAgeChange} />
                                    </div>
                                </div>
                                <div className="row justify-content-center align-items-center">
                                    <Submit
                                        className="btn btn-primary btn-lg ml-2"
                                        onClick={this.submitForm}
                                        validateForm={this.state.validateFormSubmit}
                                    >Submit</Submit>
                                    <DynamicSubmit
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
                                        className="btn btn-lg ml-2"
                                        normalClassName="btn-primary"
                                        submittingClassName="btn-secondary"
                                        successClassName="btn-success"
                                        submittingChildren={'Working on it'}
                                        successChildren={'That worked'}
                                        onClick={this.dynamicSubmitErrorForm}
                                        validateForm={this.state.validateFormSubmit}
                                    >Ajax Success</DynamicSubmit>
                                    <button className="btn btn-secondary btn-lg mx-2" onClick={(e) => { e.preventDefault(); this.form.touchAll(); }}>Touch all</button>
                                    <button className="btn btn-secondary btn-lg mr-2" onClick={(e) => { e.preventDefault(); this.form.unTouchAll(); }}>Un-touch all</button>
                                </div>
                            </Form>
                        </div>
                    </div>
                </div>
            </div>
        </div>;
    }
}

export default Basic;