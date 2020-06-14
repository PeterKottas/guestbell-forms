import * as React from 'react';
import { ThemeContextConsumer, ThemeContextProps } from './ThemeContext';
import { ThemeOverrides } from '../../types/ThemeOverrides';
import { Theme } from '../../types/Theme';

const getOverrideProps = (theme: Theme, key: keyof ThemeOverrides) =>
  key && theme?.overrides?.[key]?.props;

export function withThemeContext<P extends ThemeContextProps, ComponentType>(
  Component: React.ForwardRefExoticComponent<P> | React.ComponentClass<P>,
  componentName?: keyof ThemeOverrides
): React.ForwardRefExoticComponent<
  React.PropsWithoutRef<P> & React.RefAttributes<ComponentType>
> {
  const WithThemeContext = React.forwardRef<ComponentType, P>((props, ref) => {
    return (
      <ThemeContextConsumer>
        {value => (
          <Component
            ref={ref}
            {...getOverrideProps(value, componentName)}
            {...props}
            theme={value}
          />
        )}
      </ThemeContextConsumer>
    );
  });
  return WithThemeContext;
}
