import * as React from 'react';
import * as PropTypes from 'prop-types';
export declare type SmoothCollapseProps = {
    expanded: boolean;
    onChangeEnd?: () => void;
    collapsedHeight?: string;
    heightTransition?: string;
    className?: string;
    allowOverflowWhenOpen?: boolean;
};
declare type State = {
    hasBeenVisibleBefore: boolean;
    fullyClosed: boolean;
    height: string;
};
export declare class SmoothCollapse extends React.Component<SmoothCollapseProps, State> {
    static propTypes: {
        expanded: PropTypes.Validator<boolean>;
        onChangeEnd: PropTypes.Requireable<(...args: any[]) => any>;
        collapsedHeight: PropTypes.Requireable<string>;
        heightTransition: PropTypes.Requireable<string>;
        className: PropTypes.Requireable<string>;
        allowOverflowWhenOpen: PropTypes.Requireable<boolean>;
    };
    static defaultProps: {
        collapsedHeight: string;
        heightTransition: string;
        className: string;
        allowOverflowWhenOpen: boolean;
    };
    _resetter: any;
    _mainEl: HTMLElement;
    _innerEl: HTMLElement;
    _mainElSetter: (el?: HTMLElement) => void;
    _innerElSetter: (el?: HTMLElement) => void;
    constructor(props: SmoothCollapseProps);
    _visibleWhenClosed(props?: SmoothCollapseProps): boolean;
    componentWillUnmount(): void;
    componentWillReceiveProps(nextProps: SmoothCollapseProps): void;
    render(): JSX.Element;
}
export default SmoothCollapse;
