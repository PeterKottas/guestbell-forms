import { IBaseValidator} from './base';

export class EmailValidator implements IBaseValidator {
    public static instance = new EmailValidator();
    public Validate(value: string, isRequired: boolean, addError: (error: string) => void): boolean {
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value)) {
            return true;
        }
        addError('Invalid email');
        return false;
    }
}
