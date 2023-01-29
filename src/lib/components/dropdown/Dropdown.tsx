// Libs
import * as React from 'react';
import Collapse, { CollapseProps } from '@mui/material/Collapse';
import { ThemeContextProps } from '../themeProvider/ThemeContext';
import { withThemeContext } from '../themeProvider/withThemeContext';
import classNames from 'classnames';
import ClickAwayListener from '@mui/material/ClickAwayListener';

export type DropdownProps = React.PropsWithChildren<
  ThemeContextProps & {
    id?: string;
    header?: JSX.Element | string;
    className?: string;
    submenuClassName?: string;
    headerClassName?: string;
    notificationCount?: number;
    // tslint:disable-next-line:no-any
    WrapperTag?: keyof JSX.IntrinsicElements;
    shouldHandleClick?: boolean;
    showArrow?: boolean;
    onClick?: (e: React.MouseEvent, isVisible: boolean) => void;
    onShow?: () => void;
    onHide?: () => void;
    disabled?: boolean;
    inline?: boolean;
    collapseProps?: Partial<CollapseProps>;
  }
>;

export interface DropdownState {
  isDropdownVisible: boolean;
}

const Dropdown: React.FC<DropdownProps> = props => {
  const {
    shouldHandleClick = true,
    WrapperTag = 'div',
    notificationCount = 0,
    showArrow = true,
    inline = true,
    onClick,
    onShow,
    onHide,
    disabled,
    className,
    headerClassName,
    header,
    id,
    collapseProps,
    children,
    submenuClassName,
  } = props;

  const [isDropdownVisible, setIsDropdownVisible] = React.useState(false);

  const hideNavigation = React.useCallback(() => {
    setIsDropdownVisible(false);
    onHide?.();
  }, [onHide]);

  const showNavigation = React.useCallback(() => {
    setIsDropdownVisible(true);
    onShow?.();
  }, [onShow]);

  const onClickAway = React.useCallback(
    (e: MouseEvent) => {
      hideNavigation();
      e.stopPropagation();
      e.preventDefault();
    },
    [hideNavigation]
  );

  const handleClick = React.useCallback(
    (e: React.MouseEvent) => {
      if (shouldHandleClick && !disabled) {
        if (!isDropdownVisible) {
          showNavigation();
        } else {
          hideNavigation();
        }
        onClick?.(e, isDropdownVisible);
      }
    },
    [isDropdownVisible, onClick]
  );
  const containerClassName = classNames(
    'guestbell__dropdown',
    !isDropdownVisible
      ? 'guestbell__dropdown--closed'
      : 'guestbell__dropdown--opened',
    { ['guestbell__dropdown--disabled']: disabled },
    { ['guestbell__dropdown--inline']: inline },
    className
  );
  const headerClassNameAll = classNames([
    'guestbell__dropdown-toggle',
    { ['guestbell__dropdown-toggle__arrow--hidden']: !showArrow },
    { ['guestbell__dropdown-toggle--disabled']: disabled },
    headerClassName,
  ]);
  return (
    <ClickAwayListener
      onClickAway={onClickAway}
      mouseEvent={isDropdownVisible ? 'onMouseDown' : false}
      touchEvent={isDropdownVisible ? 'onTouchStart' : false}
    >
      <WrapperTag id={id ?? null} className={containerClassName}>
        <div role="button" className={headerClassNameAll} onClick={handleClick}>
          {header}
          {notificationCount > 0 && (
            <span className="guestbell__label-count">{notificationCount}</span>
          )}
        </div>
        <div className={'guestbell__dropdown-menu__container'}>
          <Collapse {...collapseProps} in={isDropdownVisible}>
            <ul
              className={classNames(
                'guestbell__dropdown-menu',
                submenuClassName
              )}
            >
              {children}
            </ul>
          </Collapse>
        </div>
      </WrapperTag>
    </ClickAwayListener>
  );
};

export default withThemeContext<DropdownProps, React.FC<DropdownProps>>(
  Dropdown
);
