import { IBaseValidator } from './base';

export class NumberValidator implements IBaseValidator {
    public static instance = new NumberValidator();
    public Validate(value: string, isRequired: boolean, addError: (error: string) => void): boolean {
        let number = Number(value);
        if (!isNaN(number)) {
            return true;
        }
        addError('Invalid number');
        return false;
    }
}
