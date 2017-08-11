import './checkbox.scss';
import * as React from 'react';
import * as BaseInput from '../base/BaseInput';
export interface CheckboxProps extends BaseInput.BaseInputProps {
    onChecked?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onChange?: never;
    value?: never;
    type?: string;
    checked?: boolean;
}
export interface CheckboxState extends BaseInput.BaseInputState {
    checked: boolean;
}
export declare class Checkbox extends BaseInput.BaseInput<CheckboxProps, CheckboxState> {
    static defaultProps: BaseInput.BaseInputProps & {
        checked: boolean;
    };
    constructor(props: CheckboxProps);
    private handleChecked(e);
    componentDidMount(): void;
    private renderInput();
    render(): JSX.Element;
}
export default Checkbox;
