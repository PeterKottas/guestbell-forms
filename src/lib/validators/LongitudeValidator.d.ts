import { IBaseValidator } from './base';
export declare class LongitudeValidator implements IBaseValidator {
    static instance: LongitudeValidator;
    Validate(value: string, isRequired: boolean, addError: (error: string) => void): boolean;
}
