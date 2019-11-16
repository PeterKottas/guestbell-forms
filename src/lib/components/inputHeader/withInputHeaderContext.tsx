import * as React from 'react';
import {
  InputHeaderContextConsumer,
  InputHeaderContextProps,
  OmitInputHeaderContext,
} from './InputHeaderContext';
import { InnerRefProps } from '../../types/InnerRefProps';

export function withInputHeaderContext<
  P extends InputHeaderContextProps &
    React.ClassAttributes<React.ComponentType<P>>,
  R extends OmitInputHeaderContext<P> & InnerRefProps<P>
>(Component: React.ComponentType<P>) {
  const WithInputHeaderContext: React.SFC<R> = props => {
    const { innerRef, ...rest } = props as InnerRefProps<typeof Component>;
    return (
      <InputHeaderContextConsumer>
        {value => (
          <Component
            ref={innerRef}
            {...((rest as unknown) as P)}
            inputHeaderContext={value}
          />
        )}
      </InputHeaderContextConsumer>
    );
  };
  return WithInputHeaderContext;
}
