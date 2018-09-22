import { BaseInputProps, BaseInputState, BaseInput } from '../base/input/BaseInput';
export declare type InputGroupProps = Pick<BaseInputProps<never>, 'title' | 'className' | 'helpText'>;
export interface InputGroupState extends BaseInputState {
}
export declare class InputGroup extends BaseInput<InputGroupProps, InputGroupState, never> {
    constructor(props: InputGroupProps);
    render(): {};
}
export default InputGroup;
