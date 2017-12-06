import { IBaseValidator } from './base';
import { NumberValidator } from './NumberValidator';

export class LatitudeValidator implements IBaseValidator {
    public Validate(value: string, isRequired: boolean, addError: (error: string) => void): boolean {
        let validNumber = new NumberValidator().Validate(value, isRequired, addError);
        if (validNumber) {
            let number = Number(value);
            if (-90 > number || number > 90) {
                addError('Invalid latitude');
                return false;
            }
            return true;
        }
        return false;
    }
}
