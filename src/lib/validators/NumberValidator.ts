import { IBaseValidator } from './base';

export class NumberValidator implements IBaseValidator {
    public static instance = new NumberValidator();
    public Validate(value: string, isRequired: boolean, addError: (error: string) => void): boolean {
        if (isRequired && !value) {
            addError('Required');
            return false;
        }
        if (!isRequired && !value) {
            return true;
        }
        let number = Number(value);
        if (!isNaN(number)) {
            return true;
        }
        addError('Invalid number');
        return false;
    }
}
