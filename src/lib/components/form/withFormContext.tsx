import * as React from 'react';
import { FormContextConsumer, FormContextProps, OmitFormContext } from './FormContext';
import { InnerRefProps } from '../../types/InnerRefProps';

export function withFormContext<
  P extends FormContextProps & React.ClassAttributes<React.ComponentType<P>>,
  R extends OmitFormContext<P> & InnerRefProps<React.Component<P>>
  >(
    Component: React.ComponentClass<P>
  ) {
  const WithFormContext: React.SFC<R> = props => {
    const { innerRef, ...rest } = props as InnerRefProps<typeof Component>;
    return (
      <FormContextConsumer>
        {value => <Component ref={innerRef} {...rest} formContext={value} />}
      </FormContextConsumer>
    );
  };
  return WithFormContext;
}