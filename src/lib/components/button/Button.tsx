// Libs
import * as React from 'react';
import Tippy, { TippyProps } from '@tippy.js/react';
import { withThemeContext } from '../themeProvider/withThemeContext';
import { ThemeContextProps } from '../themeProvider/ThemeContext';
var Ink = require('react-ink');
var classNames = require('classnames');

// Misc

export type ButtonTypes =
  | 'primary'
  | 'success'
  | 'error'
  | 'warning'
  | 'info'
  | 'gray'
  | 'white'
  | 'none';

export type ButtonComponentProps = {
  id?: string;
  onClick: (e: React.MouseEvent<HTMLElement>) => void;
  className: string;
  buttonProps: React.ButtonHTMLAttributes<HTMLButtonElement>;
  children: React.ReactNode;
  style: React.CSSProperties;
};

export type ButtonProps = React.PropsWithChildren<
  {
    id?: string;
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
    style?: React.CSSProperties;
    className?: string;
    disabled?: boolean;
    type?: ButtonTypes;
    circular?: boolean;
    noRipples?: boolean;
    small?: boolean;
    icon?: boolean;
    outlined?: boolean;
    disableAfterClickMs?: number;
    buttonProps?: React.ButtonHTMLAttributes<HTMLButtonElement>;
    text?: boolean;
    hero?: boolean;
    noShadow?: boolean;
    blank?: boolean;
    unobtrusive?: boolean;
    dropdown?: boolean;
    Component?: (props: ButtonComponentProps) => JSX.Element;
    tooltip?: JSX.Element | string;
    tooltipProps?: TippyProps;
    preventsDefault?: boolean;
  } & ThemeContextProps
>;

export interface ButtonState {}

const DefaultButtonComponent: React.FC<ButtonComponentProps> = React.forwardRef(
  (props, ref) => (
    <button
      ref={ref}
      // tslint:disable-next-line:no-any
      {...((props.buttonProps ? props.buttonProps : {}) as any)}
      {...(props.id && { id: props.id })}
      role="button"
      className={props.className}
      onClick={props.onClick}
      style={props.style}
    >
      {props.children}
    </button>
  )
);

export class Button extends React.PureComponent<ButtonProps, ButtonState> {
  public static defaultProps: ButtonProps = {
    disabled: false,
    className: '',
    onClick: () => null,
    circular: false,
    noRipples: false,
    small: false,
    disableAfterClickMs: 500,
    Component: DefaultButtonComponent,
    buttonProps: {
      type: 'button',
    },
    type: 'none',
    preventsDefault: true,
  };

  private preventMultipleClick = false;

  constructor(props: ButtonProps) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  public render() {
    let btnClassName = classNames([
      'guestbell-btn',
      this.getButtonClassName(),
      this.props.className,
      { ['guestbell-btn--disabled']: this.props.disabled },
      { ['guestbell-btn--circular']: this.props.circular },
      { ['guestbell-btn--small']: this.props.small },
      { ['guestbell-btn--no-shadow']: this.props.noShadow },
      { ['guestbell-btn--blank']: this.props.blank },
      { ['guestbell-btn--unobtrusive']: this.props.unobtrusive },
      { ['guestbell-btn--outlined']: this.props.outlined },
      { ['guestbell-btn--dropdown']: this.props.dropdown },
      { ['guestbell-btn--icon']: this.props.icon },
      { ['guestbell-btn--hero']: this.props.hero },
      { ['guestbell-btn--text']: this.props.text },
    ]);
    const button = (
      <this.props.Component
        {...(this.props.id && { id: this.props.id })}
        onClick={this.handleClick}
        buttonProps={this.props.buttonProps}
        className={btnClassName}
        style={this.props.style}
      >
        {!this.props.noRipples && !this.props.disabled && Ink && <Ink />}
        {this.props.children}
      </this.props.Component>
    );
    if (this.props.tooltip) {
      return (
        <Tippy
          content={this.props.tooltip}
          placement="bottom"
          animation="scale-subtle"
          arrow={false}
          duration={200}
          delay={[75, 0]}
          distance={8}
          interactive={true}
          appendTo={document?.body}
          {...this.props.tooltipProps}
        >
          {button}
        </Tippy>
      );
    }
    return button;
  }

  private handleClick(e: React.MouseEvent<HTMLButtonElement>) {
    if (this.props.preventsDefault) {
      e.preventDefault();
    }
    if (!this.preventMultipleClick) {
      !this.props.disabled && this.props.onClick && this.props.onClick(e);
      if (this.props.disableAfterClickMs !== 0) {
        this.preventMultipleClick = true;
        setTimeout(() => {
          this.preventMultipleClick = false;
        }, this.props.disableAfterClickMs);
      }
    }
  }

  private getButtonClassName() {
    return this.props.type && 'guestbell-btn-' + this.props.type;
  }
}
export default withThemeContext<ButtonProps, InstanceType<typeof Button>>(
  Button,
  'button'
);
