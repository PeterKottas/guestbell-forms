import { IBaseValidator } from './base';
export declare class UrlValidator implements IBaseValidator {
    Validate(value: string, isRequired: boolean, addError: (error: string) => void): boolean;
}
