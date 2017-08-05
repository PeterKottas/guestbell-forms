//Styles
import './submitInput.scss';

//Libs
import * as React from 'react';

//Misc
import * as BaseInput from '../base/BaseInput';

export interface SubmitInputProps extends BaseInput.BaseInputProps {
    onClick?: (e: React.MouseEvent<HTMLInputElement>) => void;
    validateForm?: boolean;
}

interface SubmitInputState extends BaseInput.BaseInputState {
}

export class SubmitInput extends BaseInput.BaseInput<SubmitInputProps, SubmitInputState>  {
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
            className={`${(this.props.className ? this.props.className : '')}${(this.getValue() ? 'filled' : '')}`}
            onClick={this.handleClick}
            disabled={this.props.validateForm ? this.context.isFormValid && !this.context.isFormValid() : false}
        >
            {this.props.children}
        </button>;
    }
}
export default SubmitInput;
