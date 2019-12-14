import * as React from 'react';
import {
  InputHeaderContextConsumer,
  InputHeaderContextProps,
  OmitInputHeaderContext,
} from './InputHeaderContext';

export function withInputHeaderContext<
  P extends InputHeaderContextProps &
    React.ClassAttributes<React.ComponentType<P>>,
  R extends OmitInputHeaderContext<P>
>(Component: React.ComponentType<P>): React.ForwardRefExoticComponent<R> {
  const WithInputHeaderContext = React.forwardRef<R, P>((props, ref) => {
    return (
      <InputHeaderContextConsumer>
        {value => <Component ref={ref} {...props} inputHeaderContext={value} />}
      </InputHeaderContextConsumer>
    );
  });
  return (WithInputHeaderContext as unknown) as React.ForwardRefExoticComponent<
    R
  >;
}
