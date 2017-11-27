//Styles
import './select.scss';

//Libs
import * as React from 'react';

//Misc
import * as BaseInput from '../base/BaseInput';

export interface SelectValue {
    value: number | string;
    label?: string;
}

export interface SelectProps extends BaseInput.BaseInputProps {
    values?: SelectValue[];
    defaultEmpty?: boolean;
}

export interface SelectState extends BaseInput.BaseInputState {
}

export class Select extends BaseInput.BaseInput<SelectProps, SelectState> {
    public static defaultProps = Object.assign(BaseInput.BaseInput.defaultProps, { defaultEmpty: true });

    constructor(props: SelectProps) {
        super(props);
        const val = !props.value ?
            props.defaultEmpty ?
                '' :
                props.values && props.values.length > 0 ?
                    props.values[0]
                    :
                    ''
            :
            props.value;
        this.state = Object.assign(this.state, { value: val });
    }

    public render() {
        return <div className={`input__group select-input ${this.getValidationClass()} ${this.props.className?this.props.className:''}`}>
            <select
                disabled={this.getDisabled()}
                required={this.props.required}
                onChange={this.handleChange}
                value={this.state.value}
                className={`select-input__select ${(this.state.value != '' ? 'filled' : '')}`}
                onBlur={this.handleBlur}
                onFocus={this.handleFocus}
            >
                {this.props.defaultEmpty && <option key={-1} disabled value="" style={{ display: 'none' }}></option>}
                {this.props.values && this.props.values.map((value, index) => <option key={index} value={value.value}>{value.label ? value.label : value.value}</option>)}
            </select>
            <span className="highlight"></span>
            <span className="bar"></span>
            {this.renderDefaultValidation()}
            {this.props.label && <label>{this.props.label}</label>}
        </div>;
    }
}

