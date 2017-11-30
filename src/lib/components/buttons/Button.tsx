//Styles
import './buttons.scss';

//Libs
import * as React from 'react';
var Ink = require('react-ink');

//Misc

export interface ButtonProps {
    onClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
    className?: string;
    disabled?: boolean;
    type?: 'hero' | 'blank' | 'dropdown';
    circular?: boolean;
}

export interface ButtonState {
}

export class Button extends React.Component<ButtonProps, ButtonState>  {
    public static defaultProps: ButtonProps = {
        type: 'blank',
        disabled: false,
        className: '',
        onClick: () => null,
        circular: false
    }

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    private handleClick(e: React.MouseEvent<HTMLDivElement>) {
        e.preventDefault();
        this.props.onClick && this.props.onClick(e);
    }

    public render() {
        return <div
            role={"button"}
            className={`guestbell-btn ${this.getButtonClassName()} ${(this.props.className ? this.props.className : '')} ${(this.props.disabled ? 'disabled' : '')} ${(this.props.circular ? 'guestbell-btn-circular' : '')}`}
            onClick={this.handleClick}
        >
            <Ink />
            {this.props.children}
        </div>;
    }

    private getButtonClassName() {
        switch (this.props.type) {
            case 'hero':
                return 'guestbell-btn-hero';
            case 'blank':
                return 'guestbell-btn-blank';
            case 'dropdown':
                return 'guestbell-btn-dropdown';
            default:
                return '';
        }
    }
}
export default Button;
