import './submit.scss';
import * as React from 'react';
import * as BaseInput from '../base/BaseInput';
import * as Button from '../../../buttons/Button';
export interface SubmitProps extends BaseInput.BaseInputProps, Button.ButtonProps {
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
    validateForm?: boolean;
    disableAfterClickMs?: number;
}
export interface SubmitState extends BaseInput.BaseInputState {
}
export declare class Submit extends BaseInput.BaseInput<SubmitProps, SubmitState> {
    static defaultProps: BaseInput.BaseInputProps & {
        validateForm: boolean;
        disableAfterClickMs: number;
    };
    private preventMultipleClick;
    constructor(props: any);
    private handleClick(e);
    render(): JSX.Element;
}
export default Submit;
