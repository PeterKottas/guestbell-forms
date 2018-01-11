//Styles
import './select.scss';

//Libs
import * as React from 'react';

//Misc
import * as BaseInput from '../base/BaseInput';
import InputGroup from '../inputGroup/InputGroup';
import { Button } from '../../../buttons/Button';
import * as PlusIcon from 'material-design-icons/content/svg/production/ic_add_circle_outline_24px.svg';

export interface SelectValue {
    value: number | string;
    label?: string;
}

export interface SelectProps extends BaseInput.BaseInputProps {
    values?: SelectValue[];
    defaultEmpty?: boolean;
    multiple?: boolean;
    selectedValues?: SelectValue[];
    onSelectedValuesChange?: (newValues: SelectValue[]) => void;
}

export interface SelectState extends BaseInput.BaseInputState {
}

export class Select extends BaseInput.BaseInput<SelectProps, SelectState> {
    public static defaultProps = Object.assign(BaseInput.BaseInput.defaultProps, { defaultEmpty: true, multiple: false });

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
        this.handleChangeCustom = this.handleChangeCustom.bind(this);
    }

    public render() {
        const finalValues = this.props.multiple ? this.props.values.filter(item => this.props.selectedValues.findIndex((t) => t.value === item.value) < 0) : this.props.values;
        return <InputGroup title={this.props.title}>
            <div className={'input__base select-input ' + this.getValidationClass() + ' ' + (this.props.className ? this.props.className : '')}>
                {this.renderSelectedValues()}
                {finalValues.length > 0 && <div className="select-input__select__wrapper">
                    <select
                        disabled={this.getDisabled()}
                        required={this.props.required}
                        onChange={this.handleChangeCustom}
                        value={this.state.value}
                        className={'select-input__select ' + (this.state.value !== '' || (this.props.selectedValues && this.props.selectedValues.length > 0) ? 'filled' : '')}
                        onBlur={this.handleBlur}
                        onFocus={this.handleFocus}
                    >
                        {this.props.defaultEmpty && <option key={-1} disabled value="" style={{ display: 'none' }}></option>}
                        {finalValues.map((value, index) => <option key={index} value={value.value}>{value.label ? value.label : value.value}</option>)}
                    </select>
                    <span className="highlight"></span>
                    <span className="bar"></span>
                    {this.renderDefaultValidation()}
                    {this.props.label && finalValues.length > 0 && <label>{this.props.label}</label>}
                </div>
                }
            </div>
        </InputGroup>;
    }

    private handleChangeCustom(event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) {
        if (this.props.multiple) {
            let value = event.target.value;
            let val = this.props.values.filter(item => item.value === value)[0];
            if (val) {
                this.props.onSelectedValuesChange && this.props.onSelectedValuesChange(this.props.selectedValues.concat(val));
                this.setState({ value: '' });
            }
        } else {
            this.handleChange(event);
        }
    }

    private renderSelectedValues() {
        return this.props.multiple && this.props.selectedValues.length > 0 && <div className="select-input__selectedValue__wrapper">{this.props.selectedValues.map(item => (
            <div
                className="select-input__selectedValue"
            >
                {item.label ? item.label : item.value}
                <Button
                    circular={true}
                    type={'blank--light'}
                    onClick={() => this.props.onSelectedValuesChange && this.props.onSelectedValuesChange(this.props.selectedValues.filter(sv => sv.value !== item.value))}
                    className="transform-rotate--45 mr-2 line-height--0"
                >
                    <PlusIcon />
                </Button>
            </div>
        ))}
        </div>
    }
}

