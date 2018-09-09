import './checkbox.scss';
import * as React from 'react';
import * as BaseInput from '../base/BaseInput';
export interface CheckboxProps extends BaseInput.BaseInputProps<HTMLInputElement> {
    onChecked?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onChange?: never;
    value?: never;
    type?: string;
    checked?: boolean;
}
export interface CheckboxState extends BaseInput.BaseInputState {
    checked: boolean;
}
export declare class Checkbox extends BaseInput.BaseInput<CheckboxProps, CheckboxState, HTMLInputElement> {
    static defaultProps: BaseInput.BaseInputProps<any> & {
        checked: boolean;
    };
    constructor(props: CheckboxProps);
    private handleChecked;
    componentDidMount(): void;
    private renderInput;
    componentWillReceiveProps(newProps: CheckboxProps): void;
    render(): JSX.Element;
}
export default Checkbox;
