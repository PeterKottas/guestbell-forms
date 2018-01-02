//Styles
import './submit.scss';

//Libs
import * as React from 'react';

//Misc
import * as BaseInput from '../base/BaseInput';
import * as Button from '../../../buttons/Button';

export interface SubmitProps extends BaseInput.BaseInputProps, Button.ButtonProps {
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
    validateForm?: boolean;
    disableAfterClickMs?: number;
}

export interface SubmitState extends BaseInput.BaseInputState {
    preventMultipleClick: boolean;
}

export class Submit extends BaseInput.BaseInput<SubmitProps, SubmitState>  {
    public static defaultProps = Object.assign(BaseInput.BaseInput.defaultProps, { validateForm: true, disableAfterClickMs: 500 });

    constructor(props) {
        super(props);
        this.state = { ...this.state, preventMultipleClick: false };
        this.handleClick = this.handleClick.bind(this);
    }

    private handleClick(e: React.MouseEvent<HTMLButtonElement>) {
        e.preventDefault();
        this.setState({ preventMultipleClick: true }, () => {
            this.props.onClick && this.props.onClick(e);
            if (this.props.disableAfterClickMs !== 0) {
                setTimeout(() => this.setState({ preventMultipleClick: false }))
            }
        });
    }

    public render() {
        return <Button.Button
            {...this.props}
            buttonType="submit"
            className={`${(this.props.className ? this.props.className : '')}`}
            onClick={this.handleClick}
            disabled={this.state.preventMultipleClick || this.getDisabled() ? this.getDisabled() : (this.props.validateForm ? this.context.isFormValid && !this.context.isFormValid() : false)}
        >
            {this.props.children}
        </Button.Button>;
    }
}
export default Submit;
