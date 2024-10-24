import * as React from 'react';
import {
  FormValidationContextConsumer,
  FormValidationContextProps,
} from './FormValidationContext';

export function withFormValidationContext<P extends FormValidationContextProps>(
  Component: React.ComponentClass<P>
): React.ForwardRefExoticComponent<
  React.RefAttributes<InstanceType<typeof Component>> &
    React.PropsWithoutRef<React.PropsWithChildren<P>>
> {
  const WithFormValidationContext = React.forwardRef<
    InstanceType<typeof Component>,
    P
  >((props, ref) => {
    return (
      <FormValidationContextConsumer>
        {(value) => {
          console.log('value', value);
          return (
            <Component ref={ref} {...props} formValidationContext={value} />
          );
        }}
      </FormValidationContextConsumer>
    );
  });
  return WithFormValidationContext;
}
