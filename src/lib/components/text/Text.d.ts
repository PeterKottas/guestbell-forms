import './text.scss';
import { BaseInputProps, BaseInputState, BaseInput } from '../base/input/BaseInput';
export interface TextProps extends BaseInputProps<HTMLInputElement> {
    mask?: string;
    reverse?: boolean;
    placeholder?: string;
    stopClickPropagation?: boolean;
    inputRef?: (input: HTMLInputElement) => void;
    readOnly?: boolean;
    type?: 'number' | 'text';
}
export interface TextState extends BaseInputState {
}
export declare class Text extends BaseInput<TextProps, TextState, HTMLInputElement> {
    static defaultProps: BaseInputProps<any> & {
        type: string;
        placeholder: string;
        stopClickPropagation: boolean;
        readOnly: boolean;
    };
    constructor(props: any);
    render(): JSX.Element;
}
export default Text;
