import * as React from 'react';
import {
  FormContextConsumer,
  FormContextProps,
  OmitFormContext,
} from './FormContext';

export function withFormContext<
  P extends FormContextProps & React.ClassAttributes<React.ComponentType<P>>,
  R extends OmitFormContext<P>
>(
  Component: React.ComponentType<P>
): React.ForwardRefExoticComponent<R & React.RefAttributes<P>> {
  const WithFormContext = React.forwardRef<R, P>((props, ref) => {
    return (
      <FormContextConsumer>
        {value => <Component ref={ref} {...props} formContext={value} />}
      </FormContextConsumer>
    );
  });
  return (WithFormContext as unknown) as React.ForwardRefExoticComponent<
    R & React.RefAttributes<P>
  >;
}
