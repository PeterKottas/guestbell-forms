import * as React from 'react';
import { FormContextConsumer, FormContextProps } from './FormContext';

export function withFormContext<P extends FormContextProps>(
  Component: React.ComponentClass<P>
): React.ForwardRefExoticComponent<
  React.RefAttributes<InstanceType<typeof Component>> &
    React.PropsWithoutRef<React.PropsWithChildren<P>>
> {
  const WithFormContext = React.forwardRef<InstanceType<typeof Component>, P>(
    (props, ref) => {
      return (
        <FormContextConsumer>
          {value => <Component ref={ref} {...props} formContext={value} />}
        </FormContextConsumer>
      );
    }
  );
  return WithFormContext;
}
