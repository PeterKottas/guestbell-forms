import { IBaseValidator } from './base';
export declare class LatitudeValidator implements IBaseValidator {
    static instance: LatitudeValidator;
    Validate(value: string, isRequired: boolean, addError: (error: string) => void): boolean;
}
