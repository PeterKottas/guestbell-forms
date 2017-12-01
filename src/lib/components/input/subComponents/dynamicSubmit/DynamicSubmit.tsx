//Styles
import './dynamicSubmit.scss';

//Libs
import * as React from 'react';

//Misc
import * as BaseInput from '../base/BaseInput';
import * as Button from '../../../buttons/Button';

export enum ButtonState {
    Normal,
    Submitting,
    Error,
    Success
}

export interface DynamicSubmitProps extends BaseInput.BaseInputProps, Button.ButtonProps {
    onClick?: (e: React.MouseEvent<HTMLDivElement>, submiting?: () => void, error?: () => void, success?: () => void, reset?: () => void) => void;
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

export interface DynamicSubmitState extends BaseInput.BaseInputState {
    buttonState: ButtonState;
}

export class DynamicSubmit extends BaseInput.BaseInput<DynamicSubmitProps, DynamicSubmitState>  {
    public static defaultProps = Object.assign(BaseInput.BaseInput.defaultProps, { validateForm: true, submitDisablesInputs: true, resetEnablesInputs: true });

    constructor(props) {
        super(props);
        this.state = Object.assign(this.state, {
            buttonState: ButtonState.Normal
        });
        this.handleClick = this.handleClick.bind(this);
        this.submiting = this.submiting.bind(this);
        this.error = this.error.bind(this);
        this.success = this.success.bind(this);
        this.reset = this.reset.bind(this);
    }

    private handleClick(e: React.MouseEvent<HTMLDivElement>) {
        e.preventDefault();
        this.props.submitDisablesInputs && this.context.disableInputs();
        this.props.onClick && this.props.onClick(e, this.submiting, this.error, this.success, this.reset);
    }

    private submiting() {
        this.setState({ buttonState: ButtonState.Submitting });
    }

    private error() {
        this.setState({ buttonState: ButtonState.Error });
    }

    private success() {
        this.setState({ buttonState: ButtonState.Success });
    }

    private reset() {
        this.props.resetEnablesInputs && this.context.enableInputs();
        this.setState({ buttonState: ButtonState.Normal });
    }

    private renderChildren() {
        switch (this.state.buttonState) {
            case ButtonState.Normal:
                return this.props.children;
            case ButtonState.Error:
                return this.props.errorChildren ? this.props.errorChildren : this.props.children;
            case ButtonState.Submitting:
                return this.props.submittingChildren ? this.props.submittingChildren : this.props.children;
            case ButtonState.Success:
                return this.props.successChildren ? this.props.successChildren : this.props.children;
        }
    }

    private renderClassName() {
        switch (this.state.buttonState) {
            case ButtonState.Normal:
                return this.props.normalClassName ? this.props.normalClassName : '';
            case ButtonState.Error:
                return this.props.errorClassName ? this.props.errorClassName : '';
            case ButtonState.Submitting:
                return this.props.submittingClassName ? this.props.submittingClassName : '';
            case ButtonState.Success:
                return this.props.successClassName ? this.props.successClassName : '';
        }
    }

    public render() {
        return <Button.Button
            {...this.props}
            className={`${(this.props.className ? this.props.className : '')} ${this.renderClassName()}`}
            onClick={this.handleClick}
            disabled={this.getDisabled() ? this.getDisabled() : (this.props.validateForm ? this.context.isFormValid && !this.context.isFormValid() : false)}
        >
            {this.renderChildren()}
        </Button.Button>;
    }
}
export default DynamicSubmit;
