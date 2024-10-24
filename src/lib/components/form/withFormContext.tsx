import * as React from 'react';
import { FormContextConsumer, FormContextProps } from './FormContext';

export function withFormContext<P extends FormContextProps>(
  Component: React.ComponentClass<P> | React.ForwardRefExoticComponent<P>
): React.ForwardRefExoticComponent<
  React.RefAttributes<
    React.ComponentClass<P> | React.ForwardRefExoticComponent<P>
  > &
    React.PropsWithoutRef<React.PropsWithChildren<P>>
> {
  const WithFormContext = React.forwardRef<
    React.ComponentClass<P> | React.ForwardRefExoticComponent<P>,
    P
  >((props, ref) => {
    return (
      <FormContextConsumer>
        {(value) => <Component ref={ref} {...props} formContext={value} />}
      </FormContextConsumer>
    );
  });
  return WithFormContext;
}
