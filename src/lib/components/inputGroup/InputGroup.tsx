// Libs
import * as React from 'react';
import { BaseInputProps, BaseInputState, BaseInput } from '../base/input/BaseInput';

// Misc

export type InputGroupProps = Pick<BaseInputProps<never>, 'title' | 'className' | 'tooltip' | 'formContext'>;

export interface InputGroupState extends BaseInputState {
}

export class InputGroup extends BaseInput<InputGroupProps, InputGroupState, never>  {
  // tslint:disable-next-line:no-any
  public static defaultProps: any = {
    ignoreContext: true
  };

  constructor(props: InputGroupProps) {
    super(props);
  }

  public render() {
    return this.props.title ? (
      <div className={`input__group input__group__border ` + (this.props.className ? this.props.className : '')}>
        {this.props.title && <div className="row-header">
          {this.renderTitle()}
        </div>}
        {this.props.children}
      </div>
    ) :
      this.props.children;
  }
}
export default InputGroup;
