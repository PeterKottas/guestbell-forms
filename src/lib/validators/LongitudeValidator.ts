import { IBaseValidator } from './base';
import { NumberValidator } from './NumberValidator';

export class LongitudeValidator implements IBaseValidator {
  public Validate(value: string, isRequired: boolean, addError: (error: string) => void): boolean {
    let validNumber = new NumberValidator().Validate(value, isRequired, addError);
    if (validNumber) {
      let num = Number(value);
      if (-180 > num || num > 180) {
        addError('Invalid longitude');
        return false;
      }
      return true;
    }
    return false;
  }
}