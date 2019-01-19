// Libs
import * as React from 'react';
import InputGroup from '../inputGroup/InputGroup';

// Misc

export interface RadioContainerProps {
  id?: string;
  className?: string;
  title?: string;
  horizontal?: boolean;
}

export interface RadioContainerState {
}

export class RadioContainer extends React.PureComponent<RadioContainerProps, RadioContainerState>  {
  constructor(props: RadioContainerProps) {
    super(props);
  }

  public render() {
    return (
      <InputGroup title={this.props.title}>
        <div
          {...this.props.id && {
            id: this.props.id
          }}
          className={`input__base radio-input__container 
                    ${(this.props.horizontal ? 'radio-input__container--horizontal' : '')} 
                    ${(this.props.className ? this.props.className : '')}`}
          children={this.props.children}
        />
      </InputGroup>
    );
  }
}
export default RadioContainer;
