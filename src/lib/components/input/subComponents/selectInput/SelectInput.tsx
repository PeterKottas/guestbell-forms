//Styles
import './selectInput.scss';

//Libs
import * as React from 'react';

//Misc
import * as BaseInput from '../base/BaseInput';

export interface SelectInputValue {
    value: number | string;
    label?: string;
}

export interface SelectInputProps extends BaseInput.BaseInputProps {
    values?: SelectInputValue[];
    defaultEmpty?: boolean;
}

interface SelectInputState extends BaseInput.BaseInputState {
}

export class SelectInput extends BaseInput.BaseInput<SelectInputProps, SelectInputState> {
    public static defaultProps = Object.assign(BaseInput.BaseInput.defaultProps, { defaultEmpty: true });

    constructor(props: SelectInputProps) {
        super(props);
        const val = props.defaultEmpty ?
            '' :
            props.values && props.values.length > 0 ?
                props.values[0]
                :
                '';
        this.state = Object.assign(this.state, { value: val });
    }

    public render() {
        return <div className="input__group select-input">
            <select required={this.props.required} onChange={this.handleChange} value={this.getValue()} className={`select-input__select ${(this.getValue() != '' ? 'filled' : '')}`} >
                {this.props.defaultEmpty && <option key={0} disabled value="" style={{ display: 'none' }}></option>}
                {this.props.values && this.props.values.map((value, index) => <option key={index} value={value.value}>{value.label ? value.label : value.value}</option>)}
            </select>
            <span className="highlight"></span>
            <span className="bar"></span>
            <span className="validation"></span>
            {this.props.label && <label>{this.props.label}</label>}
        </div>;
    }
}

