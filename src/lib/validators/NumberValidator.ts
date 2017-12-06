import { IBaseValidator } from './base';
export interface NumberValidatorConfig {
    min: number,
    max: number
}

export class NumberValidator implements IBaseValidator {
    private config: NumberValidatorConfig;
    constructor(config: NumberValidatorConfig = { min: undefined, max: undefined }) {
        this.config = config;
    }
    public Validate(value: string, isRequired: boolean, addError: (error: string) => void): boolean {
        let number = Number(value);
        if (!isNaN(number)) {
            if (this.config.min && number <= this.config.min) {
                return false;
            }
            if (this.config.max && number >= this.config.max) {
                return false;
            }
            return true;
        }
        addError('Invalid number');
        return false;
    }
}
