//Styles
import './buttons.scss';

//Libs
import * as React from 'react';
var Ink = require('react-ink');

//Misc

export type ButtonTypes = 'hero' | 'blank' | 'blank--light' | 'dropdown' | 'success' | 'error' | 'warning' | 'info';

export interface ButtonProps {
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
    className?: string;
    disabled?: boolean;
    type?: ButtonTypes;
    buttonType?: 'button' | 'submit';
    circular?: boolean;
    noRipples?: boolean;
    small?: boolean;
    disableAfterClickMs?: number;
}

export interface ButtonState {
}

export class Button extends React.Component<ButtonProps, ButtonState>  {
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
    }
    private preventMultipleClick = false;

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    private handleClick(e: React.MouseEvent<HTMLButtonElement>) {
        e.preventDefault();
        if (!this.preventMultipleClick) {
            this.preventMultipleClick = true;
            !this.props.disabled && this.props.onClick && this.props.onClick(e);
            if (this.props.disableAfterClickMs !== 0) {
                setTimeout(() => {
                    this.preventMultipleClick = false;
                }, this.props.disableAfterClickMs);
            }
        }
    }

    public render() {
        return <button
            type={this.props.buttonType}
            role={"button"}
            className={`guestbell-btn ${this.getButtonClassName()} ${(this.props.className ? this.props.className : '')} ${(this.props.disabled ? 'disabled' : '')} ${(this.props.circular ? 'guestbell-btn-circular' : '')} ${(this.props.small ? 'guestbell-btn-small' : '')}`}
            onClick={this.handleClick}
        >
            {!this.props.noRipples && !this.props.disabled && Ink && <Ink />}
            {this.props.children}
        </button>;
    }

    private getButtonClassName() {
        switch (this.props.type) {
            case 'hero':
                return 'guestbell-btn-hero';
            case 'blank':
                return 'guestbell-btn-blank';
            case 'blank--light':
                return 'guestbell-btn-blank--light';
            case 'dropdown':
                return 'guestbell-btn-dropdown';
            case 'success':
                return 'guestbell-btn-success';
            case 'info':
                return 'guestbell-btn-info';
            case 'error':
                return 'guestbell-btn-error';
            case 'warning':
                return 'guestbell-btn-warning';
            default:
                return '';
        }
    }
}
export default Button;
