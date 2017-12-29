import { IBaseValidator } from './base';
export interface NumberValidatorConfig {
    min?: number;
    max?: number;
}
export declare class NumberValidator implements IBaseValidator {
    private config;
    constructor(config?: NumberValidatorConfig);
    Validate(value: string, isRequired: boolean, addError: (error: string) => void): boolean;
}
