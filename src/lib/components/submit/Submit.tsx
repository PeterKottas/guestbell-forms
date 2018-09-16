// Styles
import './submit.scss';

// Libs
import * as React from 'react';
import { BaseInputProps, BaseInputState, BaseInput } from '../base/input/BaseInput';
import { Button, ButtonProps } from '../button/Button';

// Misc

export type SubmitProps = BaseInputProps<never> & ButtonProps & {
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
    validateForm?: boolean;
    disabledTitle?: string;
};

export interface SubmitState extends BaseInputState {
}

export class Submit extends BaseInput<SubmitProps, SubmitState, never>  {
    public static defaultProps = Object.assign(BaseInput.defaultProps, { validateForm: true });

    constructor(props: SubmitProps) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    public render() {
        return <Button
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
        </Button >;
    }

    private handleClick(e: React.MouseEvent<HTMLButtonElement>) {
        e.preventDefault();
        this.props.onClick && this.props.onClick(e);
    }

    private isDisabled() {
        return this.getDisabled() ? this.getDisabled() : (this.props.validateForm ? this.context.isFormValid && !this.context.isFormValid() : false);
    }
}
export default Submit;
