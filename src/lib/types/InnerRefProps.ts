import * as React from 'react';

// tslint:disable-next-line:no-any
export interface InnerRefProps<ComponentT extends React.Component<any>> {
  innerRef?: React.Ref<ComponentT>;
}

export default InnerRefProps;