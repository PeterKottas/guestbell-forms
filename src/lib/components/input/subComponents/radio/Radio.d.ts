import './radio.scss';
import * as BaseInput from '../base/BaseInput';
export interface RadioProps extends BaseInput.BaseInputProps {
    onChange?: never;
    onChecked: (value: string) => void;
    result: string;
    value: string;
    name: string;
}
export interface RadioState extends BaseInput.BaseInputState {
}
export declare class Radio extends BaseInput.BaseInput<RadioProps, RadioState> {
    static defaultProps: BaseInput.BaseInputProps;
    constructor(props: RadioProps);
    private renderInput();
    private onChecked(e);
    render(): JSX.Element;
}
export default Radio;
