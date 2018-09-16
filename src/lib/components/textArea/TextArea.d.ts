import './textArea.scss';
import { BaseInputProps, BaseInputState, BaseInput } from '../base/input/BaseInput';
export interface TextAreaProps extends BaseInputProps<HTMLTextAreaElement> {
    mask?: string;
    reverse?: boolean;
    placeholder?: string;
    stopClickPropagation?: boolean;
    inputRef?: (input: HTMLTextAreaElement) => void;
    readOnly?: boolean;
    type?: 'number' | 'text';
    minRows?: number;
    maxRows?: number;
}
export interface TextAreaState extends BaseInputState {
}
export declare class TextArea extends BaseInput<TextAreaProps, TextAreaState, HTMLTextAreaElement> {
    static defaultProps: BaseInputProps<never> & {
        type: string;
        placeholder: string;
        stopClickPropagation: boolean;
        readOnly: boolean;
    };
    constructor(props: TextAreaProps);
    render(): JSX.Element;
}
export default TextArea;
