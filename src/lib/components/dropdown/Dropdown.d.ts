import './dropdown.scss';
import * as React from 'react';
import { ButtonProps } from './../buttons/Button.d';
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
export declare class Dropdown extends React.Component<DropdownItemProps, DropdownItemState> {
    static defaultProps: {
        shouldHandleClick: boolean;
        wrapperTag: string;
        notificationCount: number;
        showArrow: boolean;
    };
    constructor(props: DropdownItemProps);
    handleClickOutside(): void;
    hideNavigation(): void;
    showNavigation(): void;
    componentDidMount(): void;
    componentWillUnmount(): void;
    render(): JSX.Element;
    private renderChildren();
}
export default Dropdown;
