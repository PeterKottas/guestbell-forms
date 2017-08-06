import { IBaseValidator } from './base';
export declare class EmailValidator implements IBaseValidator {
    static instance: EmailValidator;
    Validate(value: string, isRequired: boolean, addError: (error: string) => void): boolean;
}
