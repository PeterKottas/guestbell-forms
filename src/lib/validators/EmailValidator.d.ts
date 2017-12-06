import { IBaseValidator } from './base';
export declare class EmailValidator implements IBaseValidator {
    Validate(value: string, isRequired: boolean, addError: (error: string) => void): boolean;
}
