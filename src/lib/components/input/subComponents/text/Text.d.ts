import './text.scss';
import * as React from 'react';
import * as BaseInput from '../base/BaseInput';
export interface TextProps extends BaseInput.BaseInputProps {
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
export interface TextState extends BaseInput.BaseInputState {
}
export declare class Text extends BaseInput.BaseInput<TextProps, TextState> {
    static defaultProps: BaseInput.BaseInputProps & {
        type: string;
    };
    constructor(props: any);
    render(): JSX.Element;
}
export default Text;
