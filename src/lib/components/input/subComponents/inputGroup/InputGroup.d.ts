import './inputGroup.scss';
import * as React from 'react';
import * as BaseInput from '../base/BaseInput';
export declare type InputGroupProps = Pick<BaseInput.BaseInputProps<never>, 'title' | 'className'>;
export interface InputGroupState extends BaseInput.BaseInputState {
}
export declare class InputGroup extends BaseInput.BaseInput<InputGroupProps, InputGroupState, never> {
    constructor(props: InputGroupProps);
    render(): React.ReactNode;
}
export default InputGroup;
