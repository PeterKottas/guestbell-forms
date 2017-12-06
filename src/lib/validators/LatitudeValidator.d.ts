import { IBaseValidator } from './base';
export declare class LatitudeValidator implements IBaseValidator {
    Validate(value: string, isRequired: boolean, addError: (error: string) => void): boolean;
}
