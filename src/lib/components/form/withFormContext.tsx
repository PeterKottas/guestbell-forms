import * as React from 'react';
import { FormContextConsumer, FormContextProps, OmitFormContext } from './FormContext';
import InnerRefProps from '../../types/InnerRefProps';

export function withFormContext<
    P extends FormContextProps & React.ClassAttributes<React.ComponentType<P>>,
    ComponentT extends React.ComponentType<P>,
    R extends OmitFormContext<P> | InnerRefProps<ComponentT> = OmitFormContext<P> | InnerRefProps<ComponentT>
    >(
        Component: React.ComponentType<P>
    ): React.SFC<R> {
    const WithFormContext: React.SFC<R> = props => {
        const { innerRef, ...rest } = props as InnerRefProps<ComponentT>;
        return (
            <FormContextConsumer>
                {value => <Component ref={innerRef} {...rest} formContext={value} />}
            </FormContextConsumer>
        );
    };
    return WithFormContext;
}