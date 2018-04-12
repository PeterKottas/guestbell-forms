//Styles
import './submit.scss';

//Libs
import * as React from 'react';

//Misc
import * as BaseInput from '../base/BaseInput';
import * as Button from '../../../buttons/Button';

export type SubmitProps = BaseInput.BaseInputProps<never> & Button.ButtonProps & {
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
    validateForm?: boolean;
    disabledTitle?: string;
}

export interface SubmitState extends BaseInput.BaseInputState {
}

export class Submit extends BaseInput.BaseInput<SubmitProps, SubmitState, never>  {
    public static defaultProps = Object.assign(BaseInput.BaseInput.defaultProps, { validateForm: true });

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    private handleClick(e: React.MouseEvent<HTMLButtonElement>) {
        e.preventDefault();
        this.props.onClick && this.props.onClick(e);
    }

    private isDisabled() {
        return this.getDisabled() ? this.getDisabled() : (this.props.validateForm ? this.context.isFormValid && !this.context.isFormValid() : false);
    }

    public render() {
        return <Button.Button
            {...this.props}
            buttonType="submit"
            className={`${(this.props.className ? this.props.className : '')}`}
            onClick={this.handleClick}
            disabled={this.isDisabled()}
            buttonProps={{
                ...this.props.buttonProps,
                title: this.isDisabled() ? this.props.disabledTitle : this.props.buttonProps && this.props.buttonProps.title
            }}
        >
            {this.props.children}
        </Button.Button >;
    }
}
export default Submit;
