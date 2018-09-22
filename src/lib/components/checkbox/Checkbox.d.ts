import * as React from 'react';
import { BaseInputProps, BaseInput, BaseInputState } from '../base/input/BaseInput';
export interface CheckboxProps extends BaseInputProps<HTMLInputElement> {
    onChecked?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onChange?: never;
    value?: never;
    type?: string;
    checked?: boolean;
}
export interface CheckboxState extends BaseInputState {
    checked: boolean;
}
export declare class Checkbox extends BaseInput<CheckboxProps, CheckboxState, HTMLInputElement> {
    static defaultProps: BaseInputProps<never> & {
        checked: boolean;
    };
    constructor(props: CheckboxProps);
    componentDidMount(): void;
    componentWillReceiveProps(newProps: CheckboxProps): void;
    render(): JSX.Element;
    private handleChecked;
    private renderInput;
}
export default Checkbox;
