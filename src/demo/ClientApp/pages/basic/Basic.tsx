import * as React from 'react';
import { Form, TextInput, SelectInput, SubmitInput, IBaseValidator } from '../../../../lib/index';

export interface BasicProps {

}

export interface BasicState {
    name: string;
    gender: 'M' | 'F' | '';
    email: string;
    age: string;
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
    private initialState = {
        gender: '',
        name: '',
        email: '',
        age: ''
    } as BasicState;
    constructor() {
        super();
        this.state = this.initialState;
        this.handleGenderChange = this.handleGenderChange.bind(this);
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handleAgeChange = this.handleAgeChange.bind(this);
        this.submitForm = this.submitForm.bind(this);
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

    public render() {
        return <Form className="container mt-4">
            <div className="row">
                <div className={'col-lg-6'}>
                    <TextInput required={true} label="Username" value={this.state.name} onChange={this.handleNameChange} />
                </div>
                <div className={'col-lg-6'}>
                    <SelectInput required={true} label={'Gender'} values={[{ value: 'M', label: 'Male' }, { value: 'F', label: 'Female' }]} onChange={this.handleGenderChange} value={this.state.gender} />
                </div>
            </div>
            <div className="row">
                <div className={'col-lg-6'}>
                    <TextInput validators={["email"]} required={true} label="Email" value={this.state.email} onChange={this.handleEmailChange} />
                </div>
                <div className={'col-lg-6'}>
                    <TextInput customValidators={[AgeValidator.instance]} label="Age (optional)" value={this.state.age} onChange={this.handleAgeChange} />
                </div>
            </div>
            <div className="row justify-content-center align-items-center">
                <SubmitInput className="btn btn-primary btn-lg" onClick={this.submitForm}>Submit</SubmitInput>
            </div>
        </Form>;
    }
}

export default Basic;