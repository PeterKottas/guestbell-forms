import './buttons.scss';
import * as React from 'react';
export interface ButtonProps {
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
    className?: string;
    disabled?: boolean;
    type?: 'hero' | 'blank' | 'blank--light' | 'dropdown';
    buttonType?: 'button' | 'submit';
    circular?: boolean;
    noRipples?: boolean;
    small?: boolean;
}
export interface ButtonState {
}
export declare class Button extends React.Component<ButtonProps, ButtonState> {
    static defaultProps: ButtonProps;
    constructor(props: any);
    private handleClick(e);
    render(): JSX.Element;
    private getButtonClassName();
}
export default Button;
