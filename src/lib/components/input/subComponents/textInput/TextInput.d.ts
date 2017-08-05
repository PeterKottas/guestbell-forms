import './textInput.scss';
import * as React from 'react';
import * as BaseInput from '../base/BaseInput';
export interface TextInputProps extends BaseInput.BaseInputProps {
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    type?: string;
}
export interface TextInputState extends BaseInput.BaseInputState {
}
export declare class TextInput extends BaseInput.BaseInput<TextInputProps, TextInputState> {
    static defaultProps: {
        className: any;
        required: boolean;
        label: any;
        errors: any[];
    } & {
        type: string;
    };
    constructor(props: any);
    render(): JSX.Element;
}
export default TextInput;
