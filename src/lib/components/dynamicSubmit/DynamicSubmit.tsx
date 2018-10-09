// Libs
import * as React from 'react';
import { Button, ButtonProps } from '../button/Button';
import { BaseInputProps, BaseInputState, BaseInput } from '../base/input/BaseInput';
import { withFormContext } from '../form/withFormContext';

// Misc

export enum DynamicSubmitMode {
    Normal,
    Submitting,
    Error,
    Success
}

interface DynamicSubmitRawProps extends ButtonProps, BaseInputProps<never> {
    onClick?: (e: React.MouseEvent<HTMLButtonElement>, submitting?: () => void, error?: () => void, success?: () => void, reset?: () => void) => void;
    validateForm?: boolean;
    submittingChildren?: JSX.Element | string;
    errorChildren?: JSX.Element | string;
    successChildren?: JSX.Element | string;

    submittingClassName?: string;
    errorClassName?: string;
    successClassName?: string;
    normalClassName?: string;

    submitDisablesInputs?: boolean;
    resetEnablesInputs?: boolean;
}

export interface DynamicSubmitState extends BaseInputState {
    buttonState: DynamicSubmitMode;
}

class DynamicSubmitRaw extends BaseInput<DynamicSubmitRawProps, DynamicSubmitState, never>  {
    public static defaultProps = Object.assign({}, BaseInput.defaultProps, { validateForm: true, submitDisablesInputs: true, resetEnablesInputs: true });

    constructor(props: DynamicSubmitRawProps) {
        super(props);
        this.state = Object.assign(this.state, {
            buttonState: DynamicSubmitMode.Normal
        });
        this.handleClick = this.handleClick.bind(this);
        this.submitting = this.submitting.bind(this);
        this.error = this.error.bind(this);
        this.success = this.success.bind(this);
        this.reset = this.reset.bind(this);
    }

    public render() {
        return (
            <Button
                {...this.props}
                className={`${(this.props.className ? this.props.className : '')} ${this.renderClassName()}`}
                onClick={this.handleClick}
                disabled={this.getDisabled() ?
                    this.getDisabled()
                    :
                    (this.props.validateForm ? this.props.formContext && !this.props.formContext.isFormValid : false)}
            >
                {this.renderChildren()}
            </Button>
        );
    }

    private handleClick(e: React.MouseEvent<HTMLButtonElement>) {
        e.preventDefault();
        this.props.submitDisablesInputs && this.props.formContext.disableComponents();
        this.props.onClick && this.props.onClick(e, this.submitting, this.error, this.success, this.reset);
    }

    private submitting() {
        this.setState({ buttonState: DynamicSubmitMode.Submitting });
    }

    private error() {
        this.setState({ buttonState: DynamicSubmitMode.Error });
    }

    private success() {
        this.setState({ buttonState: DynamicSubmitMode.Success });
    }

    private reset() {
        this.props.resetEnablesInputs && this.props.formContext.enableComponents();
        this.setState({ buttonState: DynamicSubmitMode.Normal });
    }

    private renderChildren() {
        switch (this.state.buttonState) {
            case DynamicSubmitMode.Error:
                return this.props.errorChildren ? this.props.errorChildren : this.props.children;
            case DynamicSubmitMode.Submitting:
                return this.props.submittingChildren ? this.props.submittingChildren : this.props.children;
            case DynamicSubmitMode.Success:
                return this.props.successChildren ? this.props.successChildren : this.props.children;
            default:
                return this.props.children;
        }
    }

    private renderClassName() {
        switch (this.state.buttonState) {
            case DynamicSubmitMode.Error:
                return this.props.errorClassName ? this.props.errorClassName : '';
            case DynamicSubmitMode.Submitting:
                return this.props.submittingClassName ? this.props.submittingClassName : '';
            case DynamicSubmitMode.Success:
                return this.props.successClassName ? this.props.successClassName : '';
            default:
                return this.props.normalClassName ? this.props.normalClassName : '';
        }
    }
}

export const DynamicSubmit = withFormContext(DynamicSubmitRaw);

export default DynamicSubmit;