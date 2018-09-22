import * as React from 'react';
export declare type HeaderFunction = (onClick: (e: React.SyntheticEvent<{}>) => void) => JSX.Element;
export declare type HeaderPlain = JSX.Element | string;
export interface DropdownItemProps {
    header?: HeaderPlain | HeaderFunction;
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
export declare class Dropdown extends React.Component<DropdownItemProps, DropdownItemState> {
    static defaultProps: {
        shouldHandleClick: boolean;
        wrapperTag: string;
        notificationCount: number;
        showArrow: boolean;
        inline: boolean;
    };
    constructor(props: DropdownItemProps);
    handleClickOutside(): void;
    hideNavigation(): void;
    showNavigation(): void;
    componentDidMount(): void;
    componentWillUnmount(): void;
    render(): JSX.Element;
    private isFunction;
    private handleClick;
    private renderChildren;
}
export default Dropdown;
