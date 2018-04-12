import './select.scss';
import * as BaseInput from '../base/BaseInput';
export interface SelectValue {
    value: number | string;
    label?: string;
    forceSelected?: boolean;
}
export interface SelectProps extends BaseInput.BaseInputProps<HTMLSelectElement> {
    values?: SelectValue[];
    defaultEmpty?: boolean;
    multiple?: boolean;
    selectedValues?: SelectValue[];
    onSelectedValuesChange?: (newValues: SelectValue[]) => void;
    inputRef?: (input: HTMLSelectElement) => void;
    readOnly?: boolean;
    readonlyEmptyPlaceholder?: string;
}
export interface SelectState extends BaseInput.BaseInputState {
}
export declare class Select extends BaseInput.BaseInput<SelectProps, SelectState, HTMLSelectElement> {
    static defaultProps: BaseInput.BaseInputProps<any> & {
        defaultEmpty: boolean;
        multiple: boolean;
        readOnly: boolean;
        readonlyEmptyPlaceholder: string;
    };
    constructor(props: SelectProps);
    render(): JSX.Element;
    private handleChangeCustom(event);
    private renderReadonly();
    private renderSelectedValues();
}
