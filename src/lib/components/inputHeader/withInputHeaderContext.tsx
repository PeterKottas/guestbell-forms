import * as React from 'react';
import { InputHeaderContextConsumer, InputHeaderContextProps, OmitInputHeaderContext } from './InputHeaderContext';
import InnerRefProps from '../types/InnerRefProps';

export function withInputHeaderContext<
    P extends InputHeaderContextProps & React.ClassAttributes<React.ComponentType<P>>
    >(
        Component: React.ComponentType<P>
    ) {
    type R = OmitInputHeaderContext<P> | InnerRefProps<typeof Component>;
    const WithInputHeaderContext: React.SFC<R> = props => {
        const { innerRef, ...rest } = props as InnerRefProps<typeof Component>;
        return (
            <InputHeaderContextConsumer>
                {value => <Component ref={innerRef} {...rest} inputHeaderContext={value} />}
            </InputHeaderContextConsumer>
        );
    };
    // tslint:disable-next-line:no-any
    return WithInputHeaderContext;
}