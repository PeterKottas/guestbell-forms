import './submit.scss';
import * as React from 'react';
import { BaseInputProps, BaseInputState, BaseInput } from '../base/input/BaseInput';
import { ButtonProps } from '../button/Button';
export declare type SubmitProps = BaseInputProps<never> & ButtonProps & {
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
    validateForm?: boolean;
    disabledTitle?: string;
};
export interface SubmitState extends BaseInputState {
}
export declare class Submit extends BaseInput<SubmitProps, SubmitState, never> {
    static defaultProps: BaseInputProps<any> & {
        validateForm: boolean;
    };
    constructor(props: any);
    private handleClick;
    private isDisabled;
    render(): JSX.Element;
}
export default Submit;
