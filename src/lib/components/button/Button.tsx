// Styles
require('./buttons.scss');

// Libs
import * as React from 'react';
var Ink = require('react-ink');

// Misc

export type ButtonTypes = 'hero' | 'blank' | 'blank--light' | 'dropdown' | 'success' | 'error' | 'warning' | 'info' | 'gray';

export type ButtonProps = {
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

export class Button extends React.PureComponent<ButtonProps, ButtonState>  {
    public static defaultProps: ButtonProps = {
        type: 'blank',
        disabled: false,
        className: '',
        onClick: () => null,
        circular: false,
        noRipples: false,
        small: false,
        buttonType: 'button',
        disableAfterClickMs: 500
    };

    private preventMultipleClick = false;

    constructor(props: ButtonProps) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    public render() {
        return (
            <button
                {...(this.props.buttonProps ? this.props.buttonProps : {})}
                type={this.props.buttonType}
                role="button"
                className={`guestbell-btn ${this.getButtonClassName()} 
                    ${(this.props.className ? this.props.className : '')} 
                    ${(this.props.disabled ? 'disabled' : '')} 
                    ${(this.props.circular ? 'guestbell-btn-circular' : '')} 
                    ${(this.props.small ? 'guestbell-btn-small' : '')}`}
                onClick={this.handleClick}
            >
                {!this.props.noRipples && !this.props.disabled && Ink && <Ink />}
                {this.props.children}
            </button >
        );
    }

    private handleClick(e: React.MouseEvent<HTMLButtonElement>) {
        e.preventDefault();
        if (!this.preventMultipleClick) {
            !this.props.disabled && this.props.onClick && this.props.onClick(e);
            if (this.props.disableAfterClickMs !== 0) {
                this.preventMultipleClick = true;
                setTimeout(() => {
                    this.preventMultipleClick = false;
                }, this.props.disableAfterClickMs);
            }
        }
    }

    private getButtonClassName() {
        return 'guestbell-btn-' + this.props.type;
    }
}
export default Button;
