import * as React from 'react';
import { Form, TextInput, SelectInput, SubmitInput } from '../../../../lib/index';

export interface BasicProps {

}

export interface BasicState {
    name: string;
    gender: "M" | "F" | undefined;

}

export class Basic extends React.Component<BasicProps, BasicState>{
    constructor() {
        super();
        this.state = {
            name: '',
            gender: undefined
        }
        this.handleGenderChange = this.handleGenderChange.bind(this);
        this.handleNameChange = this.handleNameChange.bind(this);
        this.submitForm = this.submitForm.bind(this);
    }

    private handleNameChange(e: React.ChangeEvent<HTMLInputElement>) {
        this.setState({ name: e.target.value });
    }

    private handleGenderChange(e: React.ChangeEvent<HTMLInputElement>) {
        const val = e.target.value;
        if (val == "M" || val == "F") {
            this.setState({ gender: val });
        }
    }

    private submitForm(e: React.MouseEvent<HTMLButtonElement>) {
        e.preventDefault();
    }

    public render() {
        return <Form className="property__detail">
            <div className="row">
                <div className={'col-lg-6'}>
                    <TextInput required={true} label="Username" value={this.state.name} onChange={this.handleNameChange} />
                </div>
                <div className={'col-lg-6'}>
                    <SelectInput required={true} label={'Gender'} values={[{ value: 'M', label: 'Male' }, { value: 'F', label: 'Female' }]} onChange={this.handleGenderChange} value={this.state.gender} />
                </div>
            </div>
            <div className="row justify-content-center align-items-center">
                <SubmitInput className="btn btn-important btn-lg" onClick={this.submitForm}>Submit</SubmitInput>
            </div>
        </Form>;
    }
}

export default Basic;