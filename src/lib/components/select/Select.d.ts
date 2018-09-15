import './select.scss';
import { BaseInputProps, BaseInputState, BaseInput } from '../base/input/BaseInput';
export interface SelectValue {
    value: number | string;
    label?: string;
    forceSelected?: boolean;
}
export interface SelectProps extends BaseInputProps<HTMLSelectElement> {
    values?: SelectValue[];
    defaultEmpty?: boolean;
    multiple?: boolean;
    selectedValues?: SelectValue[];
    onSelectedValuesChange?: (newValues: SelectValue[]) => void;
    inputRef?: (input: HTMLSelectElement) => void;
    readOnly?: boolean;
    readonlyEmptyPlaceholder?: string;
}
export interface SelectState extends BaseInputState {
}
export declare class Select extends BaseInput<SelectProps, SelectState, HTMLSelectElement> {
    static defaultProps: BaseInputProps<any> & {
        defaultEmpty: boolean;
        multiple: boolean;
        readOnly: boolean;
        readonlyEmptyPlaceholder: string;
    };
    constructor(props: SelectProps);
    render(): JSX.Element;
    private handleChangeCustom;
    private handleValid;
    private renderReadonly;
    private renderSelectedValues;
}
