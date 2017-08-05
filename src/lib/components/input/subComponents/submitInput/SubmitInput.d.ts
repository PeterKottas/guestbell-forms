import './submitInput.scss';
import * as React from 'react';
import * as BaseInput from '../base/BaseInput';
export interface SubmitInputProps extends BaseInput.BaseInputProps {
    onClick?: (e: React.MouseEvent<HTMLInputElement>) => void;
    validateForm?: boolean;
}
export interface SubmitInputState extends BaseInput.BaseInputState {
}
export declare class SubmitInput extends BaseInput.BaseInput<SubmitInputProps, SubmitInputState> {
    static defaultProps: {
        className: any;
        required: boolean;
        label: any;
        errors: any[];
    } & {
        validateForm: boolean;
    };
    constructor(props: any);
    private handleClick(e);
    render(): JSX.Element;
}
export default SubmitInput;
