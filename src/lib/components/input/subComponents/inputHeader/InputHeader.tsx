//Styles
import './inputHeader.scss';

//Libs
import * as React from 'react';
//import * as SmoothCollapse from 'react-smooth-collapse';
try {
    var SmoothCollapse = require('react-smooth-collapse');
} catch {
    SmoothCollapse = undefined;
}
import * as PropTypes from 'prop-types';

//Misc
import { Dropdown } from '../../../dropdown/Dropdown';
import * as MoreIcon from 'material-design-icons/navigation/svg/production/ic_more_vert_24px.svg';
import * as PlusIcon from 'material-design-icons/hardware/svg/production/ic_keyboard_arrow_down_24px.svg';
import Button, { ButtonProps } from '../../../buttons/Button';
import guid from '../../../utils/Guid';

export type ActionParam = {
    expand: () => void;
    collapse: () => void;
    toggle: () => void;
};

export type InputHeaderProps = {
    className?: string;
    title?: string | JSX.Element;
    icon?: string | JSX.Element;
    subTitle?: string | JSX.Element;
    mainButton?: JSX.Element | ((param: ActionParam) => JSX.Element);
    extraButtons?: JSX.Element[] | ((param: ActionParam) => JSX.Element[]);
    collapsable?: boolean;
    collapsed?: boolean;
    collapsedDefault?: boolean;
    ignoreContext?: boolean;
    showExpandAll?: boolean;
    type?: 'hero' | 'standard' | 'small';
    noBg?: boolean;
    headerClassName?: string;
    contentClassName?: string;
    extraButtonsButtonProps?: ButtonProps;
}

export interface InputHeaderState {
    collapsed: boolean;
    inputHeaders: { [name: string]: InputHeader };
    smoothCollapseDone: boolean;
}

export const InputHeaderContextType = {
    registerInputHeader: PropTypes.func,
    unregisterInputHeader: PropTypes.func,
    stateChanged: PropTypes.func
};


export interface InputHeaderContext {
    registerInputHeader: (component: InputHeader) => void;
    unregisterInputHeader: (component: InputHeader) => void;
    stateChanged: () => void;
}

export class InputHeader extends React.Component<InputHeaderProps, InputHeaderState>  {
    public static defaultProps: InputHeaderProps = {
        ignoreContext: false,
        showExpandAll: false,
        collapsedDefault: true,
        type: 'standard',
        noBg: false
    };

    public id = guid();
    context: InputHeaderContext;
    public static contextTypes = InputHeaderContextType;
    public static childContextTypes = InputHeaderContextType;

    constructor(props: InputHeaderProps) {
        super(props);
        this.state = {
            collapsed: props.collapsedDefault,
            inputHeaders: {},
            smoothCollapseDone: true
        }
        this.registerInputHeader = this.registerInputHeader.bind(this);
        this.unregisterInputHeader = this.unregisterInputHeader.bind(this);
        this.expand = this.expand.bind(this);
        this.collapse = this.collapse.bind(this);
        this.toggle = this.toggle.bind(this);
    }

    private registerInputHeader(component: InputHeader) {
        this.setState(previousState => {
            let newInputHeaders = Object.assign({}, previousState.inputHeaders);
            newInputHeaders[component.id] = component;
            return {
                inputHeaders: newInputHeaders
            };
        });
    };

    private unregisterInputHeader(component: InputHeader) {
        this.setState(previousState => {
            let newInputHeaders = Object.assign({}, previousState.inputHeaders);
            delete newInputHeaders[component.id];
            return {
                inputHeaders: newInputHeaders
            };
        });
    };

    public getChildContext(): InputHeaderContext {
        return {
            registerInputHeader: this.registerInputHeader,
            unregisterInputHeader: this.unregisterInputHeader,
            stateChanged: () => this.forceUpdate()
        };
    }

    public componentWillUnmount() {
        if (!this.props.ignoreContext) {
            this.context.unregisterInputHeader && this.context.unregisterInputHeader(this);
        }
    }

    public componentDidMount() {
        if (!this.props.ignoreContext) {
            this.context.registerInputHeader && this.context.registerInputHeader(this);
        }
    }

    public expand() {
        this.props.collapsable && this.setState({ collapsed: false, smoothCollapseDone: false }, () => this.context.stateChanged && this.context.stateChanged());
    }

    public collapse() {
        this.props.collapsable && this.setState({ collapsed: true, smoothCollapseDone: false }, () => this.context.stateChanged && this.context.stateChanged());
    }

    public toggle() {
        this.props.collapsable && this.setState({ collapsed: !this.state.collapsed, smoothCollapseDone: false }, () => this.context.stateChanged && this.context.stateChanged());
    }

    public render() {
        return <div className={`input__header ` + (this.props.className ? this.props.className : '') + ' ' + (this.getTypeClass())}>
            <div
                className={'input__header__top ' +
                    (this.props.showExpandAll ? 'input__header__top--tall ' : '') +
                    (this.props.noBg ? 'input__header__top--no-bg ' : '') +
                    (this.props.headerClassName ? this.props.headerClassName : '')}
                onClick={() => this.toggle()}
                role={this.props.collapsable ? 'button' : ''}
            >
                <div className={'input__header__top__header-container '}>
                    {this.props.icon && <div className="input__header__icon line-height--0">
                        {this.props.icon}
                    </div>}
                    {this.props.title && <div className="input__header__title">
                        {this.props.title}
                    </div>}
                    {this.props.subTitle &&
                        <div className="input__header__sub-title">
                            {this.props.subTitle}
                        </div>
                    }
                </div>
                <div className="input__header__top__button-container">
                    {this.renderMainButton()}
                    {this.props.extraButtons ?
                        <Dropdown
                            header={<Button type={'blank--light'} circular={true} {...this.props.extraButtonsButtonProps}><MoreIcon /></Button>}
                            showArrow={false}
                            headerClassName={'line-height--0'}
                            className={''}
                        >
                            {this.renderExtraButtons()}
                        </Dropdown>
                        :
                        null
                    }
                    {this.props.collapsable &&
                        <Button
                            circular={true}
                            className={`input__header__collapse-button line-height--0 ${(this.state.collapsed ? 'collapsed' : '')}`}
                            type={'blank--light'}
                        >
                            <PlusIcon />
                        </Button>}
                </div>
                {this.props.showExpandAll && Object.keys(this.state.inputHeaders).length > 0 &&
                    this.renderCollapseExpandAll()}
            </div>
            <div className={'input__header__bottom ' + (this.props.contentClassName ? this.props.contentClassName : '')}>
                {
                    this.props.collapsable ?
                        <div className={(!this.state.collapsed && this.state.smoothCollapseDone ? 'smooth-collapse__container' : '')}>
                            {SmoothCollapse ? <SmoothCollapse
                                collapsedHeight={'0.0001px'}
                                expanded={this.props.collapsed !== undefined ? !this.props.collapsed : !this.state.collapsed}
                                onChangeEnd={() => this.setState(previousState => ({ smoothCollapseDone: true }))}
                            >
                                {this.props.children}
                            </SmoothCollapse> : this.props.children}
                        </div>
                        :
                        this.props.children
                }
            </div>
        </div >;
    }

    private getTypeClass() {
        switch (this.props.type) {
            case 'hero':
                return 'input__header--hero';
            case 'small':
                return 'input__header--small';
            default:
                return '';
        }
    }

    private renderMainButton() {
        let child = undefined;
        if (typeof this.props.mainButton === 'function') {
            child = this.props.mainButton({
                expand: this.expand,
                collapse: this.collapse,
                toggle: this.toggle
            });
        } else {
            child = this.props.mainButton;
        }
        return <div onClick={e => e.stopPropagation()}>{child}</div>;
    }

    private renderExtraButtons() {
        let arr = [];
        if (typeof this.props.extraButtons === 'function') {
            arr = this.props.extraButtons({
                expand: this.expand,
                collapse: this.collapse,
                toggle: this.toggle
            });
        } else {
            arr = this.props.extraButtons;
        }

        return arr.map((extraButton, index) =>
            <li
                key={index}
            >
                {extraButton}
            </li>
        );
    }

    private renderCollapseExpandAll() {
        let allCollapsed = true;
        let allExpanded = true;
        Object.keys(this.state.inputHeaders).forEach(key => {
            const inputHeader = this.state.inputHeaders[key];
            if (inputHeader) {
                if (inputHeader.state.collapsed) {
                    allExpanded = false;
                }
                else {
                    allCollapsed = false;
                }
            }
        });
        return <div
            className="input__header__expand-collapse--all"
            onClick={e => e.stopPropagation()}
        >
            {(allCollapsed || !allExpanded) && <Button
                noRipples={true}
                small={true}
                className={((allExpanded || !allCollapsed) ? 'mr-2' : '')}
                onClick={() => {
                    Object.keys(this.state.inputHeaders).forEach(key => {
                        const inputHeader = this.state.inputHeaders[key];
                        inputHeader.expand();
                    });
                }}
            >
                Expand all
            </Button>}
            {(allExpanded || !allCollapsed) && <Button
                noRipples={true}
                small={true}
                onClick={() => {
                    Object.keys(this.state.inputHeaders).forEach(key => {
                        const inputHeader = this.state.inputHeaders[key];
                        inputHeader.collapse();
                    });
                }}
            >
                Collapse all
            </Button>}
        </div>;
    }
}
export default InputHeader;
