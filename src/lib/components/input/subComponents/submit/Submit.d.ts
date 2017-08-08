import './submit.scss';
import * as React from 'react';
import * as BaseInput from '../base/BaseInput';
export interface SubmitProps extends BaseInput.BaseInputProps {
    onClick?: (e: React.MouseEvent<HTMLInputElement>) => void;
    validateForm?: boolean;
}
export interface SubmitState extends BaseInput.BaseInputState {
}
export declare class Submit extends BaseInput.BaseInput<SubmitProps, SubmitState> {
    static defaultProps: BaseInput.BaseInputProps & {
        validateForm: boolean;
    };
    constructor(props: any);
    private handleClick(e);
    render(): JSX.Element;
}
export default Submit;
