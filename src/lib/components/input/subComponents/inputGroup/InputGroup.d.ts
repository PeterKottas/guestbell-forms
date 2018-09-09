import './inputGroup.scss';
import * as BaseInput from '../base/BaseInput';
export declare type InputGroupProps = Pick<BaseInput.BaseInputProps<never>, 'title' | 'className' | 'helpText'>;
export interface InputGroupState extends BaseInput.BaseInputState {
}
export declare class InputGroup extends BaseInput.BaseInput<InputGroupProps, InputGroupState, never> {
    constructor(props: InputGroupProps);
    render(): {};
}
export default InputGroup;
