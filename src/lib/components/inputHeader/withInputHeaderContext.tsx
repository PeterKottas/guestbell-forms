import * as React from 'react';
import {
  InputHeaderContextConsumer,
  InputHeaderContextProps,
} from './InputHeaderContext';

export function withInputHeaderContext<P extends InputHeaderContextProps>(
  Component: React.ComponentClass<P>
): React.ForwardRefExoticComponent<
  React.RefAttributes<InstanceType<typeof Component>> &
    React.PropsWithoutRef<React.PropsWithChildren<P>>
> {
  const WithInputHeaderContext = React.forwardRef<
    InstanceType<typeof Component>,
    P
  >((props, ref) => {
    return (
      <InputHeaderContextConsumer>
        {value => <Component ref={ref} {...props} inputHeaderContext={value} />}
      </InputHeaderContextConsumer>
    );
  });
  return WithInputHeaderContext;
}
