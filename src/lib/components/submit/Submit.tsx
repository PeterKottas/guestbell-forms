// Libs
import * as React from 'react';
import { BaseInputProps, BaseInputState, BaseInput } from '../base/input/BaseInput';
import { Button, ButtonProps } from '../button/Button';
import { withFormContext } from '../form/withFormContext';
import { OmitFormContext } from '../form/FormContext';

// Misc

type SubmitRawProps = BaseInputProps<never> & ButtonProps & {
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
    validateForm?: boolean;
    disabledTitle?: string;
};

export type SubmitProps = OmitFormContext<SubmitRawProps>;

export interface SubmitState extends BaseInputState {
}

class SubmitRaw extends BaseInput<SubmitRawProps, SubmitState, never>  {
    public static defaultProps = Object.assign({}, BaseInput.defaultProps, { validateForm: true, ignoreContext: true });

    constructor(props: SubmitRawProps) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    public render() {
        return (
            <Button
                {...this.props}
                className={`${(this.props.className ? this.props.className : '')}`}
                onClick={this.handleClick}
                disabled={this.isDisabled()}
                buttonProps={{
                    ...this.props.buttonProps,
                    type: 'submit',
                    title: this.isDisabled() ? this.props.disabledTitle : this.props.buttonProps && this.props.buttonProps.title
                }}
            >
                {this.props.children}
            </Button >
        );
    }

    private handleClick(e: React.MouseEvent<HTMLButtonElement>) {
        e.preventDefault();
        this.props.onClick && this.props.onClick(e);
    }

    private isDisabled() {
        return this.getDisabled() ?
            this.getDisabled()
            :
            (this.props.validateForm ? this.props.formContext.isFormValid && !this.props.formContext.isFormValid : false);
    }
}

export const Submit = withFormContext(SubmitRaw);

export default Submit;
