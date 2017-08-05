import * as React from 'react';
import * as Validators from '../../../../validators/index';
import * as Form from '../../../form/Form';
export interface BaseInputProps {
    className?: string;
    label?: string;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) => void;
    required?: true;
    customValidators?: Validators.IBaseValidator[];
    validators?: ("email" | "number" | "latitude" | "longitude")[];
}
export interface BaseInputState {
    valid: boolean;
    validationValid: boolean;
    value: string;
    errors: string[];
    validator: undefined;
}
export declare class BaseInput<P extends BaseInputProps, S extends BaseInputState> extends React.Component<P, S> {
    context: Form.FormContext;
    private guid();
    inputId: string;
    static defaultProps: {
        className: any;
        required: boolean;
        label: any;
        errors: any[];
    };
    static contextTypes: {
        register: any;
        unregister: any;
        isFormValid: any;
        updateCallback: any;
    };
    protected getValidationClass(): "validation__success" | "validation__error";
    protected renderDefaultValidation(): JSX.Element;
    componentWillUnmount(): void;
    componentWillMount(): void;
    componentDidMount(): void;
    componentWillReceiveProps(nextProps: P): void;
    private handleValueChange(value);
    protected handleChange(event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>): void;
    protected handleBlur(e: React.FocusEvent<HTMLSelectElement | HTMLInputElement>): void;
    protected getValue(): S["value"];
    constructor(props: any);
}
export default BaseInput;
