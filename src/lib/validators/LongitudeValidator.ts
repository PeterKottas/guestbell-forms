import { IBaseValidator } from './base';
import { NumberValidator } from './NumberValidator';

export class LongitudeValidator implements IBaseValidator {
    public Validate(value: string, isRequired: boolean, addError: (error: string) => void): boolean {
        let validNumber = new NumberValidator().Validate(value, isRequired, addError);
        if (validNumber) {
            let number = Number(value);
            if (-180 > number || number > 180) {
                addError('Invalid longitude');
                return false;
            }
            return true;
        }
        return false;
    }
}