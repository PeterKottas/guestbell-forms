import './dynamicSubmit.scss';
import * as React from 'react';
import { ButtonProps } from '../button/Button';
import { BaseInputProps, BaseInputState, BaseInput } from '../base/input/BaseInput';
export declare enum DynamicSubmitMode {
    Normal = 0,
    Submitting = 1,
    Error = 2,
    Success = 3
}
export interface DynamicSubmitProps extends ButtonProps, BaseInputProps<never> {
    onClick?: (e: React.MouseEvent<HTMLButtonElement>, submitting?: () => void, error?: () => void, success?: () => void, reset?: () => void) => void;
    validateForm?: boolean;
    submittingChildren?: JSX.Element | string;
    errorChildren?: JSX.Element | string;
    successChildren?: JSX.Element | string;
    submittingClassName?: string;
    errorClassName?: string;
    successClassName?: string;
    normalClassName?: string;
    submitDisablesInputs?: boolean;
    resetEnablesInputs?: boolean;
}
export interface DynamicSubmitState extends BaseInputState {
    buttonState: DynamicSubmitMode;
}
export declare class DynamicSubmit extends BaseInput<DynamicSubmitProps, DynamicSubmitState, never> {
    static defaultProps: BaseInputProps<never> & {
        validateForm: boolean;
        submitDisablesInputs: boolean;
        resetEnablesInputs: boolean;
    };
    constructor(props: DynamicSubmitProps);
    render(): JSX.Element;
    private handleClick;
    private submitting;
    private error;
    private success;
    private reset;
    private renderChildren;
    private renderClassName;
}
export default DynamicSubmit;
