import './buttons.scss';
import * as React from 'react';
export declare type ButtonTypes = 'hero' | 'blank' | 'blank--light' | 'dropdown' | 'success' | 'error' | 'warning' | 'info' | 'gray';
export declare type ButtonProps = {
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
    className?: string;
    disabled?: boolean;
    type?: ButtonTypes;
    buttonType?: 'button' | 'submit';
    circular?: boolean;
    noRipples?: boolean;
    small?: boolean;
    disableAfterClickMs?: number;
    buttonProps?: React.ButtonHTMLAttributes<HTMLButtonElement>;
};
export interface ButtonState {
}
export declare class Button extends React.Component<ButtonProps, ButtonState> {
    static defaultProps: ButtonProps;
    private preventMultipleClick;
    constructor(props: any);
    private handleClick(e);
    render(): JSX.Element;
    private getButtonClassName();
}
export default Button;
