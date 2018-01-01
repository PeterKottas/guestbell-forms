// Styles
import './dropdown.scss';

// Libs
import * as React from 'react';
import { Button } from './../buttons/Button';
import { ButtonProps } from './../buttons/Button.d';
try {
    var SmoothCollapse = require('react-smooth-collapse');
} catch {
    SmoothCollapse = undefined;
}

export interface DropdownItemProps {
    header?: JSX.Element;
    className?: string;
    submenuClassName?: string;
    headerClassName?: string;
    notificationCount?: number;
    wrapperTag?: string;
    shouldHandleClick?: boolean;
    showArrow?: boolean;
    onClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
    headerProps?: ButtonProps;
}

export interface DropdownItemState {
    isDropdownVisible: boolean;
}

export class Dropdown extends React.Component<DropdownItemProps, DropdownItemState> {
    public static defaultProps = {
        shouldHandleClick: true,
        wrapperTag: 'div',
        notificationCount: 0,
        showArrow: true
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

    public render() {
        //const Wrapper = this.props.wrapperTag;
        return (
            <div
                className={'guestbell__dropdown ' + (!this.state.isDropdownVisible ? 'closed ' : 'open ') + (this.props.className ? this.props.className : ' ')}
                onClick={e => this.props.onClick && this.props.onClick(e)}
            >
                <Button
                    {...this.props.headerProps}
                    className={`guestbell__dropdown-toggle ${(this.props.headerClassName ? this.props.headerClassName : '')} ${(this.props.showArrow ? '' : 'guestbell__dropdown-toggle__arrow--hidden')}`}
                    onClick={(event) => {
                        if (this.props.shouldHandleClick) {
                            event.preventDefault();
                            event.stopPropagation();
                            if (!this.state.isDropdownVisible) {
                                this.showNavigation();
                            }
                        }
                    }}
                >
                    {this.props.header}
                    {this.props.notificationCount > 0 && <span className="guestbell__label-count">{this.props.notificationCount}</span>}
                </Button>
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