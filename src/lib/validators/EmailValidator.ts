import { IBaseValidator } from './base';

export class EmailValidator implements IBaseValidator {
  public Validate(
    value: string,
    isRequired: boolean,
    addError: (error: string) => void
  ): boolean {
    if (/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(value)) {
      return true;
    }
    addError('Invalid email');
    return false;
  }
}
