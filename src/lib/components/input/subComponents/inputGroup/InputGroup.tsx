//Styles
//import './inputGroup.scss';

//Libs
import * as React from 'react';

//Misc
import * as BaseInput from '../base/BaseInput';

export type InputGroupProps = Pick<BaseInput.BaseInputProps, 'rowHeader' | 'className'>;

export interface InputGroupState extends BaseInput.BaseInputState {
}

export class InputGroup extends BaseInput.BaseInput<InputGroupProps, InputGroupState>  {
    constructor(props: InputGroupProps) {
        super(props);
    }

    public render() {
        return this.props.rowHeader ?
            <div className={`input__group input__group__border ` + (this.props.className ? this.props.className : '')}>
                {this.props.rowHeader && <div className="row-header">
                    {this.props.rowHeader}
                </div>}
                {this.props.children}
            </div> :
            this.props.children;
    }
}
export default InputGroup;
