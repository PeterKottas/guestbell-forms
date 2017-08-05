//Styles

//Libs
import * as React from 'react';

//Misc
import * as Validators from '../../../../validators/index';
import * as Form from '../../../form/Form';

export interface BaseInputProps {
    className?: string;
    label?: string;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) => void;
    required?: true;
    validator?: "email" | "number" | "latitude" | "longitude";
}

export interface BaseInputState {
    valid: boolean;
    validationValid: boolean;
    value: string;
    errors: string[];
    validator: undefined;
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
        errors: []
    }

    public static contextTypes = Form.FormContextType;

    protected getValidationClass() {
        return this.state.validationValid ? 'validation__success' : 'validation__error';
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

    private handleValueChange(value: string) {
        var errors = [];
        var valid = true;
        if (this.props.required && !value) {
            errors.push('Required');
            valid = false;
        }
        if (this.props.validator) {
            valid = false;
            switch (this.props.validator) {
                case 'email':
                    valid = Validators.EmailValidator.instance.Validate(value, this.props.required, (error) => errors.push(error));
                    break;
                case 'number':
                    valid = Validators.NumberValidator.instance.Validate(value, this.props.required, (error) => errors.push(error));
                    break;
                case 'latitude':
                    valid = Validators.LatitudeValidator.instance.Validate(value, this.props.required, (error) => errors.push(error));
                    break;
                case 'longitude':
                    valid = Validators.LongitudeValidator.instance.Validate(value, this.props.required, (error) => errors.push(error));
                    break;
                default:
                    throw new Error(`Validator ${this.props.validator} not implmeneted`);
            }
            if (this.state.errors && this.state.errors.length > 0 && errors.length == 0) {
                errors = errors.concat(this.state.errors);
            }
        }
        this.setState(Object.assign({}, this.state, { value: value, valid: valid, validationValid: valid, errors: errors }));
        this.context.updateCallback(valid, this.inputId);
    }

    protected handleChange(event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) {
        let value = event.target.value;
        if (this.props.onChange) {
            this.props.onChange(event);
        }
        this.setState(Object.assign({}, this.state, { value: value }));
    }

    protected getValue() {
        return this.props.value ? this.props.value : this.state.value;
    }

    constructor(props) {
        super();
        this.state = {
            valid: props.required ? false : true,
            value: '',
            validationValid: true
        } as S;
        this.handleChange = this.handleChange.bind(this);
    }
}
export default BaseInput;
