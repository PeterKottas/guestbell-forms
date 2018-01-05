// Styles
import './dropdown.scss';

// Libs
import * as React from 'react';
try {
    var SmoothCollapse = require('react-smooth-collapse');
} catch {
    SmoothCollapse = undefined;
}

export type HeaderFunction = (onClick: (e: React.SyntheticEvent<{}>) => void) => JSX.Element;
export type HeaderPlain = JSX.Element | string;

export interface DropdownItemProps {
    header?:  HeaderPlain | HeaderFunction;
    className?: string;
    submenuClassName?: string;
    headerClassName?: string;
    notificationCount?: number;
    wrapperTag?: string;
    shouldHandleClick?: boolean;
    showArrow?: boolean;
    onClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
    disabled?: boolean;
    inline?: boolean;
}

export interface DropdownItemState {
    isDropdownVisible: boolean;
}

export class Dropdown extends React.Component<DropdownItemProps, DropdownItemState> {
    public static defaultProps = {
        shouldHandleClick: true,
        wrapperTag: 'div',
        notificationCount: 0,
        showArrow: true,
        inline: true
    };

    constructor(props: DropdownItemProps) {
        super(props);
        this.state = {
            isDropdownVisible: false
        };
    }

    handleClickOutside() {
        this.setState(Object.assign(this.state, { isDropdownVisible: false }));
    }

    public hideNavigation() {
        this.setState(Object.assign(this.state, { isDropdownVisible: false }));
        document.removeEventListener('click', this.hideNavigation);
    }

    public showNavigation() {
        this.setState(Object.assign(this.state, { isDropdownVisible: true }));
        document.addEventListener('click', this.hideNavigation);
    }

    public componentDidMount() {
        this.hideNavigation = this.hideNavigation.bind(this);
    }

    public componentWillUnmount() {
        document.removeEventListener('click', this.hideNavigation);
    }

    private isFunction(functionToCheck) {
        var getType = {};
        return functionToCheck && getType.toString.call(functionToCheck) === '[object Function]';
    }

    private handleClick(e: React.SyntheticEvent<{}>) {
        if (this.props.shouldHandleClick && !this.props.disabled) {
            e.preventDefault();
            e.stopPropagation();
            if (!this.state.isDropdownVisible) {
                this.showNavigation();
            }
        }
    }

    public render() {
        //const Wrapper = this.props.wrapperTag;
        return (
            <div
                className={'guestbell__dropdown ' + 
                    (!this.state.isDropdownVisible ? 'closed ' : 'open ') + 
                    (!this.props.disabled ? 'disabled ' : '') + 
                    (this.props.inline ? 'guestbell__dropdown--inline ' : '') + 
                    (this.props.className ? this.props.className : ' ')}
                onClick={e => this.props.onClick && this.props.onClick(e)}
            >
                <div
                    role="button"
                    className={`guestbell__dropdown-toggle 
                    ${(this.props.headerClassName ? this.props.headerClassName : '')} 
                    ${(this.props.showArrow ? '' : 'guestbell__dropdown-toggle__arrow--hidden')} 
                    ${(this.props.disabled && this.props.disabled ? 'disabled' : '')}`}
                    onClick={(e) => {
                        this.handleClick(e);
                    }}
                >
                    {this.isFunction(this.props.header) ? (this.props.header as HeaderFunction)((e) => this.handleClick(e)) : this.props.header as HeaderPlain}
                    {this.props.notificationCount > 0 && <span className="guestbell__label-count">{this.props.notificationCount}</span>}
                </div>
                <div
                    className={'guestbell__dropdown-menu__container'}
                >
                    {
                        SmoothCollapse ?
                            <SmoothCollapse
                                expanded={this.state.isDropdownVisible}
                            >
                                {this.renderChildren()}
                            </SmoothCollapse>
                            :
                            <div className={this.state.isDropdownVisible ? 'open' : 'close'}>
                                {this.renderChildren()}
                            </div>
                    }
                </div>
            </div>
        );
    }

    private renderChildren() {
        return <ul
            className={'guestbell__dropdown-menu ' + (this.props.submenuClassName ? this.props.submenuClassName : '')}
        >
            {this.props.children}
        </ul>;
    }
}

export default Dropdown;