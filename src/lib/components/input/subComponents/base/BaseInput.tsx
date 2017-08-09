//Styles

//Libs
import * as React from 'react';

//Misc
import * as Validators from '../../../../validators/index';
import * as Form from '../../../form/Form';

export interface BaseInputProps {
    disabled?: boolean;
    className?: string;
    label?: string;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) => void;
    required?: boolean;
    customValidators?: Validators.IBaseValidator[];
    validators?: ("email" | "number" | "latitude" | "longitude")[];
    noValidate?: boolean;
    touchOn?: "focus" | "blur";
}

export interface BaseInputState {
    valid: boolean;
    value: string;
    errors: string[];
    validator: undefined;
    touched: boolean;
    disabled: boolean;
    focused: boolean;
}

export class BaseInput<P extends BaseInputProps, S extends BaseInputState> extends React.Component<P, S> {
    context: Form.FormContext;

    private guid() {
        const s4 = () => Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
        return `${s4() + s4()}-${s4()}-${s4()}-${s4()}-${s4() + s4() + s4()}`;
    }

    public inputId = this.guid();

    public static defaultProps = {
        className: undefined,
        required: false,
        label: undefined,
        errors: [],
        disabled: false,
        touchOn: "focus"
    } as BaseInputProps;

    public static contextTypes = Form.FormContextType;

    protected getValidationClass() {
        return this.state.valid || !this.state.touched ? 'validation__success' : 'validation__error';
    }

    protected renderDefaultValidation() {
        return <div className="validation__container"><ul className="validation__ul">{this.state.errors && this.state.errors.map((item, index) => <span key={index} className="validation__item">{item}</span>)}</ul></div>;
    }

    componentWillUnmount() {
        this.context.unregister(this);
    }

    componentDidMount() {
        this.context.register(this);
    }

    componentWillReceiveProps(nextProps: P) {
        if (nextProps.value != this.props.value) {
            this.handleValueChange(nextProps.value);
        }
    }

    public touch() {
        this.setState({ touched: true });
        this.handleValueChange(this.state.value||'');
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

    private handleValueChange(value: string) {
        var errors = [];
        var valid = true;
        if (this.props.required && !value) {
            errors.push('Required');
            valid = false;
        } else {
            if (!this.props.required && !value) {
                valid = true;
            }
            else {
                if (this.props.validators) {
                    valid = true;
                    this.props.validators.forEach(validator => {
                        let validInner = false;
                        switch (validator) {
                            case 'email':
                                validInner = Validators.EmailValidator.instance.Validate(value, this.props.required, (error) => errors.push(error));
                                break;
                            case 'number':
                                validInner = Validators.NumberValidator.instance.Validate(value, this.props.required, (error) => errors.push(error));
                                break;
                            case 'latitude':
                                validInner = Validators.LatitudeValidator.instance.Validate(value, this.props.required, (error) => errors.push(error));
                                break;
                            case 'longitude':
                                validInner = Validators.LongitudeValidator.instance.Validate(value, this.props.required, (error) => errors.push(error));
                                break;
                            default:
                                throw new Error(`Validator ${validator} not implmeneted`);
                        }
                        if (valid && !validInner) {
                            valid = validInner;
                        }
                    });
                }
                if (this.props.customValidators) {
                    this.props.customValidators.forEach(customValidator => {
                        let validInner = false;
                        try {
                            validInner = customValidator.Validate(value, this.props.required, (error) => errors.push(error));
                        } catch (e) {
                            throw new Error(`Custom validator exception ${e} on input ${this.inputId}`);
                        }
                        if (valid && !validInner) {
                            valid = validInner;
                        }
                    });
                }
            }
        }
        if (this.state.errors && this.state.errors.length > 0 && errors.length == 0) {
            errors = errors.concat(this.state.errors);
        }
        this.setState({ value: value, valid: valid, errors: errors });
        this.context.updateCallback(valid, this.inputId);
    }

    protected handleChange(event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) {
        let value = event.target.value;
        if (this.props.onChange) {
            this.props.onChange(event);
        }
        this.setState({ value: value });
    }

    protected handleBlur(e: React.FocusEvent<HTMLSelectElement | HTMLInputElement>) {
        let state = { focused: false };
        if (this.props.touchOn == "blur") {
            state = Object.assign(state, { touched: true });
            this.handleValueChange(this.state.value);
        }
        this.setState(state);
    }

    protected handleFocus(e: React.FocusEvent<HTMLSelectElement | HTMLInputElement>) {
        let state = { focused: true };
        if (this.props.touchOn == "focus") {
            state = Object.assign(state, { touched: true });
            this.handleValueChange(this.state.value);
        }
        this.setState(state);
    }

    protected getDisabled() {
        return this.state.disabled ? this.state.disabled : this.props.disabled;
    }

    protected setValid() {
        this.setState({ valid: true });
    }

    protected setInvalid() {
        this.setState({ valid: false });
    }

    constructor(props) {
        super();
        this.state = {
            valid: props.required ? false : true,
            value: '',
            touched: false,
            disabled: false,
            focused: false
        } as S;
        this.handleChange = this.handleChange.bind(this);
        this.handleBlur = this.handleBlur.bind(this);
        this.handleFocus = this.handleFocus.bind(this);
        this.setValid = this.setValid.bind(this);
        this.setInvalid = this.setInvalid.bind(this);
    }
}
export default BaseInput;
