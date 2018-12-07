import * as React from 'react';

export interface InnerRefProps<ComponentT> {
  innerRef?: React.Ref<ComponentT>;
}

export default InnerRefProps;