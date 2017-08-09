//Styles
import './submit.scss';

//Libs
import * as React from 'react';

//Misc
import * as BaseInput from '../base/BaseInput';

export interface SubmitProps extends BaseInput.BaseInputProps {
    onClick?: (e: React.MouseEvent<HTMLInputElement>) => void;
    validateForm?: boolean;
}

export interface SubmitState extends BaseInput.BaseInputState {
}

export class Submit extends BaseInput.BaseInput<SubmitProps, SubmitState>  {
    public static defaultProps = Object.assign(BaseInput.BaseInput.defaultProps, { validateForm: true });

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    private handleClick(e: React.MouseEvent<HTMLInputElement>) {
        e.preventDefault();
        this.props.onClick && this.props.onClick(e);
    }

    public render() {
        return <button
            type={"submit"}
            className={`${(this.props.className ? this.props.className : '')}`}
            onClick={this.handleClick}
            disabled={this.getDisabled() ? this.getDisabled() : (this.props.validateForm ? this.context.isFormValid && !this.context.isFormValid() : false)}
        >
            {this.props.children}
        </button>;
    }
}
export default Submit;
