// Libs
import * as React from 'react';
import {
    Tooltip,
} from 'react-tippy';

// Misc
import * as Validators from '../../../validators';
import * as Form from '../../form/Form';
import guid from '../../utils/Guid';

export type ValidationError = string | JSX.Element;

export type AllowedHtmlElements = (HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement);

export type BaseInputProps<HTMLType extends AllowedHtmlElements> = {
    disabled?: boolean;
    className?: string;
    label?: string | JSX.Element;
    helpText?: string | JSX.Element;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLType>, isValid: boolean) => void;
    required?: boolean;
    customValidators?: Validators.IBaseValidator[];
    validators?: Validators.ValidatorTypes[];
    noValidate?: boolean;
    touchOn?: 'focus' | 'blur';
    ignoreContext?: boolean;
    onTheFlightValidate?: (value: string) => boolean;
    onFocus?: (e: React.SyntheticEvent<{}>) => void;
    onBlur?: () => void;
    title?: string | JSX.Element;
    onKeyDown?: (e: React.KeyboardEvent<HTMLElement>) => void;
    errors?: ValidationError[];
    onErrorsChanged?: (errors: ValidationError[]) => void;
    showValidation?: boolean;
};

export interface BaseInputState {
    valid: boolean;
    value: string;
    errors: ValidationError[];
    validator: undefined;
    touched: boolean;
    disabled: boolean;
    focused: boolean;
    handleValueChangeEnabled: boolean;
}

export class BaseInput<P extends BaseInputProps<HTMLType>, S extends BaseInputState, HTMLType extends
    AllowedHtmlElements> extends React.PureComponent<P, S> {
    public static defaultProps: BaseInputProps<never> = {
        className: undefined,
        required: false,
        label: undefined,
        disabled: false,
        touchOn: 'focus',
        ignoreContext: false,
        showValidation: true
    };

    public static contextTypes = Form.FormContextType;

    public context: Form.FormContext;

    public inputId = guid();

    constructor(props: P) {
        super(props);
        this.state = {
            valid: props.required ? false : true,
            value: props.value ? props.value : '',
            touched: false,
            disabled: false,
            focused: false,
            handleValueChangeEnabled: true
        } as S;
        this.handleChange = this.handleChange.bind(this);
        this.handleBlur = this.handleBlur.bind(this);
        this.handleFocus = this.handleFocus.bind(this);
        this.setValid = this.setValid.bind(this);
        this.setInvalid = this.setInvalid.bind(this);
    }

    protected getValidationClass(extraErrors?: ValidationError[]) {
        if (!this.props.showValidation || !this.state.touched) {
            return 'validation__success';
        }
        return (this.state.valid
            &&
            (!this.props.errors || this.props.errors.length === 0)
            &&
            (!this.state.errors || this.state.errors.length === 0)
            &&
            (!extraErrors || extraErrors.length === 0)) ? 'validation__success' : 'validation__error';
    }

    protected renderDefaultValidation(extraErrors?: ValidationError[]) {
        if (!this.props.showValidation) {
            return null;
        }
        let finalErrors: ValidationError[] = this.state.errors;
        if (!finalErrors) {
            finalErrors = [];
        }
        if (extraErrors) {
            finalErrors = finalErrors.concat(extraErrors);
        }
        if (this.props.errors) {
            finalErrors = finalErrors.concat(this.props.errors);
        }
        finalErrors = finalErrors.filter(i => i);
        return (
            <div className="validation__container">
                <ul className="validation__ul">
                    {finalErrors.map((item, index) => <li key={index} className="validation__item">{item}</li>)}
                </ul>
            </div>
        );
    }

    public componentWillUnmount() {
        if (!this.props.ignoreContext) {
            this.context && this.context.unregister && this.context.unregister(this);
        }
    }

    public componentDidMount() {
        if (!this.props.ignoreContext) {
            this.context && this.context.register && this.context.register(this);
        }
        this.handleValueChange(this.state.value);
    }

    public componentWillReceiveProps(nextProps: P) {
        if (nextProps.value !== this.props.value) {
            this.handleValueChange(nextProps.value);
        }
    }

    public touch() {
        this.setState({ touched: true });
        this.handleValueChange(this.state.value || '');
    }

    public unTouch() {
        this.setState({ touched: false });
    }

    public disableInput() {
        this.setState({ disabled: true });
    }

    public enableInput() {
        this.setState({ disabled: false });
    }

    protected handleChange(event: React.ChangeEvent<HTMLType>, isValid?: boolean) {
        let value = event.target.value;
        if (!this.props.onTheFlightValidate || (this.props.onTheFlightValidate && this.props.onTheFlightValidate(value))) {
            const valid = this.handleValueChange(value, isValid);
            if (this.props.onChange) {
                this.props.onChange(event, valid);
            }
        }
    }

    protected handleBlur(e: React.FocusEvent<HTMLType>) {
        this.props.onBlur && this.props.onBlur();
        let state = { focused: false };
        if (this.props.touchOn === 'blur') {
            state = Object.assign(state, { touched: true });
            this.handleValueChange(this.state.value);
        }
        this.setState(state);
    }

    protected handleFocus(e: React.FocusEvent<HTMLType>) {
        this.props.onFocus && this.props.onFocus(e);
        let state = { focused: true };
        if (this.props.touchOn === 'focus') {
            state = Object.assign(state, { touched: true });
            this.handleValueChange(this.state.value);
        }
        this.setState(state);
    }

    protected getDisabled() {
        return this.state.disabled ? this.state.disabled : this.props.disabled;
    }

    protected setValid() {
        !this.state.valid && this.setState({ valid: true, errors: [] }, () => {
            if (!this.props.ignoreContext) {
                this.context && this.context.updateCallback && this.context.updateCallback(true, this.inputId);
            }
        });
    }

    protected setInvalid(errors: ValidationError[] = []) {
        this.setState({ valid: false, errors }, () => {
            if (!this.props.ignoreContext) {
                this.context && this.context.updateCallback && this.context.updateCallback(false, this.inputId);
            }
        });
    }

    protected renderLabel(touchable: boolean = false) {
        if ((!this.props.helpText) || (this.props.helpText && this.props.title)) {
            return (
                <span className={(touchable ? '' : 'label--no-touch')}>
                    {this.props.label}
                </span>
            );
        }
        return (
            <React.Fragment>
                <span className={(touchable ? '' : 'label--no-touch')}>
                    {this.props.label}
                </span>
                {this.renderTooltip()}
            </React.Fragment>
        );
    }

    protected renderTitle() {
        if (!this.props.helpText) {
            return this.props.title;
        }
        return (
            <React.Fragment>
                {this.props.title}
                {this.renderTooltip()}
            </React.Fragment>
        );
    }

    private handleValueChange(value: string, valid: boolean = true): boolean {
        if (!this.state.handleValueChangeEnabled) {
            return valid;
        }
        var errors = [];
        if (this.props.required && !value) {
            errors.push('Required');
            valid = false;
        } else {
            if (!this.props.required && !value) {
                valid = true;
            } else {
                if (this.props.validators) {
                    valid = true;
                    this.props.validators.forEach(validator => {
                        let validInner = false;
                        switch (validator) {
                            case 'email':
                                validInner = new Validators.EmailValidator().Validate(value, this.props.required, (error) => errors.push(error));
                                break;
                            case 'number':
                                validInner = new Validators.NumberValidator().Validate(value, this.props.required, (error) => errors.push(error));
                                break;
                            case 'latitude':
                                validInner = new Validators.LatitudeValidator().Validate(value, this.props.required, (error) => errors.push(error));
                                break;
                            case 'longitude':
                                validInner = new Validators.LongitudeValidator().Validate(value, this.props.required, (error) => errors.push(error));
                                break;
                            case 'url':
                                validInner = new Validators.UrlValidator().Validate(value, this.props.required, (error) => errors.push(error));
                                break;
                            default:
                                throw new Error(`Validator ${validator} not implemented`);
                        }
                        if (valid && !validInner) {
                            valid = validInner;
                        }
                    });
                }
                if (this.props.customValidators) {
                    this.props.customValidators.forEach(customValidator => {
                        let validInner = false;
                        validInner = customValidator.Validate(value, this.props.required, (error) => errors.push(error));
                        if (valid && !validInner) {
                            valid = validInner;
                        }
                    });
                }
            }
        }
        this.props.onErrorsChanged && this.props.onErrorsChanged(errors);
        this.setState({ value, valid, errors });
        if (!this.props.ignoreContext) {
            this.context && this.context.updateCallback && this.context.updateCallback(valid, this.inputId);
        }
        return valid;
    }

    private renderTooltip() {
        return (
            <Tooltip
                html={this.props.helpText}
                position="bottom"
                trigger="mouseenter"
                interactive={true}
                className="label--help-icon__container"
            >
                <span className="label--help-icon">?</span>
            </Tooltip>
        );
    }
}
export default BaseInput;
