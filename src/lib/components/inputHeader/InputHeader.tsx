// Libs
import * as React from 'react';
const classNames = require('classnames');

// Misc
import * as MoreIcon from 'material-design-icons/navigation/svg/production/ic_more_vert_24px.svg';
import * as PlusIcon from 'material-design-icons/hardware/svg/production/ic_keyboard_arrow_down_24px.svg';
import { ButtonProps, Button, ButtonComponentProps } from '../button/Button';
import guid from '../utils/Guid';
import { Dropdown } from '../dropdown/Dropdown';
import { SmoothCollapse } from '../smoothCollapse/SmoothCollapse';
import {
  OmitInputHeaderContext,
  InputHeaderContextProps,
  InputHeaderContextState,
  InputHeaderComponentContextState
} from '../InputHeader/InputHeaderContext';
import { withInputHeaderContext } from './withInputHeaderContext';
import { InnerRefProps } from './../../types/InnerRefProps';

export type InputHeaderRawProps = {
  className?: string;
  title?: string | JSX.Element;
  icon?: string | JSX.Element;
  subTitle?: string | JSX.Element;
  mainButton?: JSX.Element;
  extraButtons?: JSX.Element[];
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
  collapseButtonsButtonProps?: ButtonProps;
  shouldToggleCollapseOnHeaderClick?: boolean;
} & InputHeaderContextProps;

export type InputHeaderProps = OmitInputHeaderContext<InputHeaderRawProps> &
  InnerRefProps<InputHeaderRawProps>;

export interface InputHeaderApi {
  expand: () => void;
  collapse: () => void;
  toggle: () => void;
}

export interface InputHeaderState {
  collapsed: boolean;
  inputHeaderContext: InputHeaderContextState;
  smoothCollapseDone: boolean;
}

const CollapseExpandButtonComponent: React.SFC<
  ButtonComponentProps
> = props => (
  <a className={props.className} onClick={props.onClick} href="#">
    {props.children}
  </a>
);

export class InputHeaderRaw
  extends React.PureComponent<InputHeaderRawProps, InputHeaderState>
  implements InputHeaderApi {
  public static defaultProps: InputHeaderProps = {
    ignoreContext: false,
    showExpandAll: false,
    collapsedDefault: true,
    type: 'standard',
    noBg: false,
    shouldToggleCollapseOnHeaderClick: false
  };

  public componentId = guid();

  constructor(props: InputHeaderRawProps) {
    super(props);
    this.state = {
      collapsed: props.collapsedDefault,
      inputHeaderContext: {
        registerInputHeader: this.registerInputHeader,
        unregisterInputHeader: this.unregisterInputHeader,
        stateChanged: () => this.forceUpdate(),
        components: {}
      },
      smoothCollapseDone: true
    };
    this.registerInputHeader = this.registerInputHeader.bind(this);
    this.unregisterInputHeader = this.unregisterInputHeader.bind(this);
    this.expand = this.expand.bind(this);
    this.collapse = this.collapse.bind(this);
    this.toggle = this.toggle.bind(this);
  }

  public componentWillUnmount() {
    if (!this.props.ignoreContext && this.props.inputHeaderContext) {
      this.props.inputHeaderContext.unregisterInputHeader(this.componentId);
    }
  }

  public componentDidMount() {
    if (!this.props.ignoreContext && this.props.inputHeaderContext) {
      this.props.inputHeaderContext.registerInputHeader(this.componentId, {
        componentId: this.componentId,
        componentApi: {
          expand: this.expand,
          collapse: this.collapse,
          toggle: this.toggle
        },
        props: { ...{}, ...(this.props as InputHeaderProps) },
        state: { ...{}, ...this.state }
      });
    }
  }

  public expand() {
    this.props.collapsable &&
      this.setState(
        { collapsed: false, smoothCollapseDone: false },
        () =>
          this.props.inputHeaderContext &&
          this.props.inputHeaderContext.stateChanged()
      );
  }

  public collapse() {
    this.props.collapsable &&
      this.setState(
        { collapsed: true, smoothCollapseDone: false },
        () =>
          this.props.inputHeaderContext &&
          this.props.inputHeaderContext.stateChanged()
      );
  }

  public toggle() {
    this.props.collapsable &&
      this.setState(
        { collapsed: !this.state.collapsed, smoothCollapseDone: false },
        () =>
          this.props.inputHeaderContext &&
          this.props.inputHeaderContext.stateChanged()
      );
  }

  public render() {
    return (
      <div
        className={
          `input__header ` +
          (this.props.className ? this.props.className : '') +
          ' ' +
          this.getTypeClass()
        }
      >
        <div
          className={classNames(
            'input__header__top',
            { 'input__header__top--tall': this.props.showExpandAll },
            { 'input__header__top--no-bg': this.props.noBg },
            {
              'input__header__top--clickable':
                this.props.collapsable &&
                this.props.shouldToggleCollapseOnHeaderClick
            },
            this.props.headerClassName
          )}
          role={
            this.props.collapsable &&
            this.props.shouldToggleCollapseOnHeaderClick
              ? 'button'
              : undefined
          }
          onClick={
            this.props.collapsable &&
            this.props.shouldToggleCollapseOnHeaderClick
              ? this.toggleClick
              : undefined
          }
        >
          <div className={'input__header__top__header-container '}>
            {this.props.icon && (
              <div className="input__header__icon line-height--0">
                {this.props.icon}
              </div>
            )}
            {this.props.title && (
              <div className="input__header__title">{this.props.title}</div>
            )}
            {this.props.subTitle && (
              <div className="input__header__sub-title">
                {this.props.subTitle}
              </div>
            )}
          </div>
          <div className="input__header__top__button-container">
            {this.renderMainButton()}
            {this.props.extraButtons ? (
              <Dropdown
                header={
                  <Button
                    blank={true}
                    circular={true}
                    {...this.props.extraButtonsButtonProps}
                  >
                    <MoreIcon />
                  </Button>
                }
                showArrow={false}
                headerClassName={'line-height--0'}
                className={''}
              >
                {this.renderExtraButtons()}
              </Dropdown>
            ) : null}
            {this.props.collapsable && (
              <Button
                circular={true}
                blank={true}
                className={`input__header__collapse-button line-height--0 ${
                  this.state.collapsed ? 'collapsed' : ''
                }`}
                {...this.props.collapseButtonsButtonProps}
                onClick={this.toggleClick}
              >
                <PlusIcon />
              </Button>
            )}
          </div>
          {this.props.showExpandAll &&
            Object.keys(this.state.inputHeaderContext.components).length > 0 &&
            this.renderCollapseExpandAll()}
        </div>
        <div
          className={
            'input__header__bottom ' +
            (this.props.contentClassName ? this.props.contentClassName : '')
          }
        >
          {this.props.collapsable ? (
            <div
              className={
                !this.state.collapsed && this.state.smoothCollapseDone
                  ? 'smooth-collapse__container'
                  : ''
              }
            >
              <SmoothCollapse
                collapsedHeight={'0.0001px'}
                expanded={
                  this.props.collapsed !== undefined
                    ? !this.props.collapsed
                    : !this.state.collapsed
                }
                onChangeEnd={this.smoothCollapseDone}
              >
                {this.props.children}
              </SmoothCollapse>
            </div>
          ) : (
            this.props.children
          )}
        </div>
      </div>
    );
  }

  private smoothCollapseDone = () =>
    this.setState(previousState => ({ smoothCollapseDone: true }))

  private toggleClick = () => this.toggle();

  private registerInputHeader(
    componentId: string,
    component: InputHeaderComponentContextState
  ) {
    this.setState(previousState => {
      let components = Object.assign(
        {},
        previousState.inputHeaderContext.components
      );
      components[componentId] = component;
      return {
        inputHeaderContext: { ...previousState.inputHeaderContext, components }
      };
    });
  }

  private unregisterInputHeader(componentId: string) {
    this.setState(previousState => {
      let components = Object.assign(
        {},
        previousState.inputHeaderContext.components
      );
      delete components[componentId];
      return {
        inputHeaderContext: { ...previousState.inputHeaderContext, components }
      };
    });
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

  private mainButtonClick = (e: React.MouseEvent<HTMLDivElement>) =>
    e.stopPropagation()

  private renderMainButton() {
    let child = this.props.mainButton;
    return child && <div onClick={this.mainButtonClick}>{child}</div>;
  }

  private renderExtraButtons() {
    let arr = [];
    if (typeof this.props.extraButtons === 'function') {
      arr = this.props.extraButtons;
    } else {
      arr = this.props.extraButtons;
    }

    return arr.map((extraButton, index) => <li key={index}>{extraButton}</li>);
  }

  private renderCollapseExpandAll() {
    let allCollapsed = true;
    let allExpanded = true;
    Object.keys(this.state.inputHeaderContext.components).forEach(key => {
      const component = this.state.inputHeaderContext.components[key];
      if (component && component.props.collapsable) {
        if (component.state.collapsed) {
          allExpanded = false;
        } else {
          allCollapsed = false;
        }
      }
    });
    return (
      <div
        className="input__header__expand-collapse--all"
        onClick={this.containerClick}
      >
        {(allCollapsed || !allExpanded) && (
          <Button
            noRipples={true}
            small={true}
            className={allExpanded || !allCollapsed ? 'mr-2' : ''}
            onClick={this.expandAllClick}
            blank={true}
            Component={CollapseExpandButtonComponent}
          >
            Expand all
          </Button>
        )}
        {(allExpanded || !allCollapsed) && (
          <Button
            noRipples={true}
            small={true}
            onClick={this.collapseAllClick}
            blank={true}
            Component={CollapseExpandButtonComponent}
          >
            Collapse all
          </Button>
        )}
      </div>
    );
  }

  private containerClick = (e: React.MouseEvent<HTMLDivElement>) =>
    e.stopPropagation()

  private expandAllClick = () => {
    Object.keys(this.state.inputHeaderContext.components).forEach(key => {
      const component = this.state.inputHeaderContext.components[key];
      component.componentApi.expand();
    });
  }

  private collapseAllClick = () => {
    Object.keys(this.state.inputHeaderContext.components).forEach(key => {
      const component = this.state.inputHeaderContext.components[key];
      component.componentApi.collapse();
    });
  }
}

export const InputHeader = withInputHeaderContext<
  InputHeaderRawProps,
  InputHeaderProps
>(InputHeaderRaw);

export default InputHeader;
