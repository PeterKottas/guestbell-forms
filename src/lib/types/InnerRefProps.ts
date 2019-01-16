import * as React from 'react';

// tslint:disable-next-line:no-any
export interface InnerRefProps<P> {
  innerRef?: React.Ref<React.Component<P>>;
}

export default InnerRefProps;