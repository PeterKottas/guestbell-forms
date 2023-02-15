// Libs
import * as React from 'react';
import type { TippyProps } from '@tippy.js/react';
import { withThemeContext } from '../themeProvider/withThemeContext';
import { ThemeContextProps } from '../themeProvider/ThemeContext';
import Ink from 'react-ink';
import classNames from 'classnames';

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
    disableAfterClick?: boolean;
    buttonProps?: React.ButtonHTMLAttributes<HTMLButtonElement>;
    text?: boolean;
    hero?: boolean;
    noShadow?: boolean;
    blank?: boolean;
    unobtrusive?: boolean;
    dropdown?: boolean;
    Component?: React.FC<ButtonComponentProps>;
    tooltip?: JSX.Element | string;
    tooltipProps?: TippyProps;
    preventsDefault?: boolean;
  } & ThemeContextProps
>;

export interface ButtonState {
  disabledAfterClick: boolean;
}

const DefaultButtonComponent: React.FC<ButtonComponentProps> = React.forwardRef(
  (props, ref) => (
    <button
      ref={ref}
      // tslint:disable-next-line:no-any
      {...((props.buttonProps ? props.buttonProps : {}) as any)}
      {...(props.id && { id: props.id })}
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
    disableAfterClickMs: 100,
    disableAfterClick: false,
    Component: DefaultButtonComponent,
    buttonProps: {
      type: 'button',
      role: 'button',
      tabIndex: 0,
    },
    type: 'none',
    preventsDefault: true,
  };

  private preventMultipleClickTimer: number;

  constructor(props: ButtonProps) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      disabledAfterClick: false,
    };
  }

  public render() {
    const disabled =
      this.props.disabled ||
      (this.props.disableAfterClick && this.state.disabledAfterClick);
    let btnClassName = classNames([
      'guestbell-btn',
      this.getButtonClassName(),
      this.props.className,
      { ['guestbell-btn--disabled']: disabled },
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
        buttonProps={{
          ...this.props.buttonProps,
          tabIndex: !disabled ? this.props.buttonProps?.tabIndex : -1,
        }}
        className={btnClassName}
        style={this.props.style}
      >
        {!this.props.noRipples && !disabled && Ink && <Ink />}
        {this.props.children}
      </this.props.Component>
    );
    if (this.props.tooltip) {
      const Tippy = require('@tippy.js/react').default;
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

  public componentWillUnmount() {
    clearTimeout(this.preventMultipleClickTimer);
  }

  private handleClick(e: React.MouseEvent<HTMLButtonElement>) {
    if (this.props.preventsDefault) {
      e.preventDefault();
    }
    if (!this.state.disabledAfterClick && !this.props.disabled) {
      this.props.onClick && this.props.onClick(e);
      if (this.props.disableAfterClickMs !== 0) {
        this.setState({ disabledAfterClick: true });
        this.preventMultipleClickTimer = (setTimeout(() => {
          this.setState({ disabledAfterClick: false });
        }, this.props.disableAfterClickMs) as unknown) as number;
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
