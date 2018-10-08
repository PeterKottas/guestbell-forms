import * as React from 'react';

interface InnerRefProps<ComponentT> {
    innerRef?: React.Ref<ComponentT>;
}

export default InnerRefProps;