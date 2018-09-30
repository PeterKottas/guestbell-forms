// Libs
import * as React from 'react';
import SmoothCollapse from '../smoothCollapse/SmoothCollapse';
import * as classNames from 'classnames';

export type DropdownHeaderFunctionConfig = {
    onClick: (e: React.SyntheticEvent<{}>) => void
};
export type DropdownHeaderFunction = (config: DropdownHeaderFunctionConfig) => JSX.Element;
export type DropdownHeaderPlain = JSX.Element | string;

export interface DropdownItemProps {
    header?: DropdownHeaderPlain | DropdownHeaderFunction;
    className?: string;
    submenuClassName?: string;
    headerClassName?: string;
    notificationCount?: number;
    wrapperTag?: string;
    shouldHandleClick?: boolean;
    showArrow?: boolean;
    onClick?: () => void;
    disabled?: boolean;
    inline?: boolean;
}

export interface DropdownItemState {
    isDropdownVisible: boolean;
}

export class Dropdown extends React.PureComponent<DropdownItemProps, DropdownItemState> {
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
        this.showNavigation = this.showNavigation.bind(this);
        this.hideNavigation = this.hideNavigation.bind(this);
    }

    handleClickOutside() {
        this.setState(Object.assign(this.state, { isDropdownVisible: false }));
    }

    public hideNavigation() {
        this.setState({ isDropdownVisible: false });
        document.removeEventListener('click', this.hideNavigation);
    }

    public showNavigation() {
        this.setState({ isDropdownVisible: true });
        document.addEventListener('click', this.hideNavigation);
    }

    public componentDidMount() {
        this.hideNavigation = this.hideNavigation.bind(this);
    }

    public componentWillUnmount() {
        document.removeEventListener('click', this.hideNavigation);
    }

    public render() {
        const containerClassName = classNames([
            'guestbell__dropdown',
            (!this.state.isDropdownVisible ? 'guestbell__dropdown--closed' : 'guestbell__dropdown--opened'),
            { ['guestbell__dropdown--disabled']: this.props.disabled },
            { ['guestbell__dropdown--inline']: this.props.inline },
            this.props.className,
        ]);
        const headerClassName = classNames([
            'guestbell__dropdown-toggle',
            { ['guestbell__dropdown-toggle__arrow--hidden']: !this.props.showArrow },
            { ['guestbell__dropdown-toggle--disabled']: this.props.disabled },
        ]);
        return (
            <div className={containerClassName}>
                <div
                    role="button"
                    className={headerClassName}
                    onClick={this.containerClick}
                >
                    {this.isFunction(this.props.header) ? (this.props.header as DropdownHeaderFunction)({
                        onClick: this.handleClick
                    }) : this.props.header as DropdownHeaderPlain}
                    {this.props.notificationCount > 0 && <span className="guestbell__label-count">{this.props.notificationCount}</span>}
                </div>
                <div
                    className={'guestbell__dropdown-menu__container'}
                >
                    <SmoothCollapse
                        expanded={this.state.isDropdownVisible}
                    >
                        {this.renderChildren()}
                    </SmoothCollapse>
                </div>
            </div>
        );
    }

    private containerClick = (e: React.MouseEvent<HTMLDivElement>) => {
        this.handleClick(e);
    }

    private isFunction(functionToCheck: DropdownHeaderPlain | DropdownHeaderFunction) {
        var getType = {};
        return functionToCheck && getType.toString.call(functionToCheck) === '[object Function]';
    }

    private handleClick = (e: React.SyntheticEvent<{}>) => {
        if (this.props.shouldHandleClick && !this.props.disabled) {
            this.props.onClick && this.props.onClick();
            e.preventDefault();
            e.stopPropagation();
            if (!this.state.isDropdownVisible) {
                this.showNavigation();
            }
        }
    }

    private renderChildren() {
        return (
            <ul
                className={'guestbell__dropdown-menu ' + (this.props.submenuClassName ? this.props.submenuClassName : '')}
            >
                {this.props.children}
            </ul>
        );
    }
}

export default Dropdown;