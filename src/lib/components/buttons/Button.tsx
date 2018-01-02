//Styles
import './buttons.scss';

//Libs
import * as React from 'react';
var Ink = require('react-ink');

//Misc

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

export class Button extends React.Component<ButtonProps, ButtonState>  {
    public static defaultProps: ButtonProps = {
        type: 'blank',
        disabled: false,
        className: '',
        onClick: () => null,
        circular: false,
        noRipples: false,
        small: false,
        buttonType: 'button'
    }

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    private handleClick(e: React.MouseEvent<HTMLButtonElement>) {
        e.preventDefault();
        !this.props.disabled && this.props.onClick && this.props.onClick(e);
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
            default:
                return '';
        }
    }
}
export default Button;
