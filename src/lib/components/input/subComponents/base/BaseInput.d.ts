import * as React from 'react';
import './input.scss';
import * as Validators from '../../../../validators/index';
import * as Form from '../../../form/Form';
export declare type BaseInputProps<HTMLType extends (HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement)> = {
    disabled?: boolean;
    className?: string;
    label?: string | JSX.Element;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLType>, isValid: boolean) => void;
    required?: boolean;
    customValidators?: Validators.IBaseValidator[];
    validators?: ("email" | "number" | "latitude" | "longitude" | "url")[];
    noValidate?: boolean;
    touchOn?: "focus" | "blur";
    ignoreContext?: boolean;
    onTheFlightValidate?: (value: string) => boolean;
    onFocus?: (e: React.SyntheticEvent<{}>) => void;
    onBlur?: () => void;
    title?: string | JSX.Element;
    onKeyDown?: (e: React.KeyboardEvent<HTMLElement>) => void;
    errors?: (string | JSX.Element)[];
};
export interface BaseInputState {
    valid: boolean;
    value: string;
    errors: (string | JSX.Element)[];
    validator: undefined;
    touched: boolean;
    disabled: boolean;
    focused: boolean;
}
export declare class BaseInput<P extends BaseInputProps<HTMLType>, S extends BaseInputState, HTMLType extends (HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement)> extends React.Component<P, S> {
    context: Form.FormContext;
    inputId: string;
    static defaultProps: BaseInputProps<any>;
    static contextTypes: {
        register: any;
        unregister: any;
        isFormValid: any;
        updateCallback: any;
        enableInputs: any;
        disableInputs: any;
    };
    protected getValidationClass(): "validation__success" | "validation__error";
    protected renderDefaultValidation(): JSX.Element;
    componentWillUnmount(): void;
    componentDidMount(): void;
    componentWillReceiveProps(nextProps: P): void;
    touch(): void;
    unTouch(): void;
    disableInput(): void;
    enableInput(): void;
    private handleValueChange(value);
    protected handleChange(event: React.ChangeEvent<HTMLType>): void;
    protected handleBlur(e: React.FocusEvent<HTMLType>): void;
    protected handleFocus(e: React.FocusEvent<HTMLType>): void;
    protected getDisabled(): P["disabled"];
    protected setValid(): void;
    protected setInvalid(): void;
    protected renderLabel(): P["label"];
    protected renderTitle(): P["title"];
    constructor(props: any);
}
export default BaseInput;
