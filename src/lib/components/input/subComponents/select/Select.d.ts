import './select.scss';
import * as BaseInput from '../base/BaseInput';
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
export declare class Select extends BaseInput.BaseInput<SelectProps, SelectState> {
    static defaultProps: BaseInput.BaseInputProps & {
        defaultEmpty: boolean;
        multiple: boolean;
    };
    constructor(props: SelectProps);
    render(): JSX.Element;
    private handleChangeCustom(event);
    private renderSelectedValues();
}
