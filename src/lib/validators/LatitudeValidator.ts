import { IBaseValidator } from './base';
import { NumberValidator } from './NumberValidator';

export class LatitudeValidator implements IBaseValidator {
    public static instance = new LatitudeValidator();
    public Validate(value: string, isRequired: boolean, addError: (error: string) => void): boolean {
        let validNumber = NumberValidator.instance.Validate(value, isRequired, addError);
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
