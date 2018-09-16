import './radio.scss';
import { BaseInputProps, BaseInputState, BaseInput } from '../base/input/BaseInput';
export interface RadioProps extends BaseInputProps<HTMLInputElement> {
    onChange?: never;
    onChecked: (value: string) => void;
    result: string;
    value: string;
    name: string;
}
export interface RadioState extends BaseInputState {
}
export declare class Radio extends BaseInput<RadioProps, RadioState, HTMLInputElement> {
    static defaultProps: BaseInputProps<never>;
    constructor(props: RadioProps);
    render(): JSX.Element;
    private renderInput;
    private onChecked;
}
export default Radio;
