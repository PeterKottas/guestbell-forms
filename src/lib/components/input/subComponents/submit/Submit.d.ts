import './submit.scss';
import * as React from 'react';
import * as BaseInput from '../base/BaseInput';
import * as Button from '../../../buttons/Button';
export declare type SubmitProps = BaseInput.BaseInputProps<never> & Button.ButtonProps & {
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
    validateForm?: boolean;
    disabledTitle?: string;
};
export interface SubmitState extends BaseInput.BaseInputState {
}
export declare class Submit extends BaseInput.BaseInput<SubmitProps, SubmitState, never> {
    static defaultProps: BaseInput.BaseInputProps<any> & {
        validateForm: boolean;
    };
    constructor(props: any);
    private handleClick;
    private isDisabled;
    render(): JSX.Element;
}
export default Submit;
