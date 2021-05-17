// Libs
import * as React from 'react';
import { ThemeContextProps } from '../themeProvider/ThemeContext';
import { withThemeContext } from '../themeProvider/withThemeContext';
import classNames from 'classnames';
import Menu, { MenuProps } from '@material-ui/core/Menu';

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
    disabled?: boolean;
    inline?: boolean;
    menuProps?: Partial<MenuProps>;
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
    disabled,
    className,
    headerClassName,
    header,
    id,
    menuProps,
    children,
    submenuClassName,
  } = props;

  const [isDropdownVisible, setIsDropdownVisible] = React.useState(false);

  const hideNavigation = React.useCallback(() => {
    setIsDropdownVisible(false);
  }, []);

  const showNavigation = React.useCallback(() => {
    setIsDropdownVisible(true);
  }, []);

  const defaultMenuProps: Partial<MenuProps> = {
    getContentAnchorEl: null,
    anchorOrigin: {
      vertical: 'bottom',
      horizontal: 'left',
    },
    transformOrigin: {
      vertical: 'top',
      horizontal: 'left',
    },
  };

  const handleClick = React.useCallback(
    (e: React.MouseEvent) => {
      if (shouldHandleClick && !disabled) {
        if (!isDropdownVisible) {
          showNavigation();
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
  const elemRef = React.useRef<HTMLDivElement>();
  return (
    <WrapperTag id={id ?? null} className={containerClassName}>
      <div
        ref={elemRef}
        role="button"
        className={headerClassNameAll}
        onClick={handleClick}
      >
        {header}
        {notificationCount > 0 && (
          <span className="guestbell__label-count">{notificationCount}</span>
        )}
      </div>

      <Menu
        {...defaultMenuProps}
        {...menuProps}
        onClose={hideNavigation}
        open={isDropdownVisible}
        anchorEl={elemRef.current}
      >
        <ul
          className={classNames('guestbell__dropdown-menu', submenuClassName)}
        >
          {children}
        </ul>
      </Menu>
    </WrapperTag>
  );
};

export default withThemeContext<DropdownProps, React.FC<DropdownProps>>(
  Dropdown
);
