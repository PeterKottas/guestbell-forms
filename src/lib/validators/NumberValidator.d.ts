import { IBaseValidator } from './base';
export declare class NumberValidator implements IBaseValidator {
    static instance: NumberValidator;
    Validate(value: string, isRequired: boolean, addError: (error: string) => void): boolean;
}
