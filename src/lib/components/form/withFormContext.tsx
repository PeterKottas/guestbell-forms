import * as React from 'react';
import {
  FormContextConsumer,
  FormContextProps,
  OmitFormContext,
} from './FormContext';
import { InnerRefProps } from '../../types/InnerRefProps';

export function withFormContext<
  P extends FormContextProps & React.ClassAttributes<React.ComponentType<P>>,
  R extends OmitFormContext<P> & InnerRefProps<P>
>(Component: React.ComponentType<P>) {
  const WithFormContext: React.SFC<R> = props => {
    const { innerRef, ...rest } = props as InnerRefProps<
      React.ComponentType<P>
    >;
    return (
      <FormContextConsumer>
        {value => (
          <Component
            ref={innerRef}
            {...((rest as unknown) as P)}
            formContext={value}
          />
        )}
      </FormContextConsumer>
    );
  };
  return WithFormContext;
}
