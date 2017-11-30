import './inputHeader.scss';
import * as React from 'react';
export declare type InputHeaderAction = {
    action: () => void;
    name: string | JSX.Element;
};
export declare type InputHeaderProps = {
    className?: string;
    title?: string | JSX.Element;
    mainAction?: InputHeaderAction;
    extraActions?: InputHeaderAction[];
    collapsable?: boolean;
};
export interface InputHeaderState {
    collapsed: boolean;
}
export declare class InputHeader extends React.Component<InputHeaderProps, InputHeaderState> {
    constructor(props: InputHeaderProps);
    render(): JSX.Element;
}
export default InputHeader;
