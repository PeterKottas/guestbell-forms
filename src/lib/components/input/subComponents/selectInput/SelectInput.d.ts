import './selectInput.scss';
import * as BaseInput from '../base/BaseInput';
export interface SelectInputValue {
    value: number | string;
    label?: string;
}
export interface SelectInputProps extends BaseInput.BaseInputProps {
    values?: SelectInputValue[];
    defaultEmpty?: boolean;
}
export interface SelectInputState extends BaseInput.BaseInputState {
}
export declare class SelectInput extends BaseInput.BaseInput<SelectInputProps, SelectInputState> {
    static defaultProps: {
        className: any;
        required: boolean;
        label: any;
        errors: any[];
    } & {
        defaultEmpty: boolean;
    };
    constructor(props: SelectInputProps);
    render(): JSX.Element;
}
