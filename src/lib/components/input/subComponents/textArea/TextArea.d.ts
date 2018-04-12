import './textArea.scss';
import * as BaseInput from '../base/BaseInput';
export interface TextAreaProps extends BaseInput.BaseInputProps<HTMLTextAreaElement> {
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
export interface TextAreaState extends BaseInput.BaseInputState {
}
export declare class TextArea extends BaseInput.BaseInput<TextAreaProps, TextAreaState, HTMLTextAreaElement> {
    static defaultProps: BaseInput.BaseInputProps<any> & {
        type: string;
        placeholder: string;
        stopClickPropagation: boolean;
        readOnly: boolean;
    };
    constructor(props: any);
    render(): JSX.Element;
}
export default TextArea;
