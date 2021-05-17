// Libs
import * as React from 'react';
import Collapse, { CollapseProps } from '@material-ui/core/Collapse';
import { ThemeContextProps } from '../themeProvider/ThemeContext';
import { withThemeContext } from '../themeProvider/withThemeContext';
var classNames = require('classnames');

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
    onClick?: () => void;
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
    document.removeEventListener('click', hideNavigation);
  }, []);

  const showNavigation = React.useCallback(() => {
    setIsDropdownVisible(true);
    document.addEventListener('click', hideNavigation);
  }, []);

  const handleClick = React.useCallback((e: React.SyntheticEvent<{}>) => {
    if (shouldHandleClick && !disabled) {
      onClick && onClick();
      e.preventDefault();
      e.stopPropagation();
      if (!isDropdownVisible) {
        showNavigation();
      }
    }
  }, []);
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
            className={classNames('guestbell__dropdown-menu', submenuClassName)}
          >
            {children}
          </ul>
        </Collapse>
      </div>
    </WrapperTag>
  );
};

export default withThemeContext<DropdownProps, React.FC<DropdownProps>>(
  Dropdown
);
