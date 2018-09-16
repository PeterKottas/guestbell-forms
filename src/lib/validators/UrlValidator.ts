import { IBaseValidator } from './base';

export class UrlValidator implements IBaseValidator {
    public Validate(value: string, isRequired: boolean, addError: (error: string) => void): boolean {
        // tslint:disable-next-line:max-line-length
        if (/((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.‌​-]+(:[0-9]+)?|(?:www‌​.|[-;:&=\+\$,\w]+@)[‌​A-Za-z0-9.-]+)((?:\/‌​[\+~%\/.\w-_]*)?\??(‌​?:[-\+=&;%@.\w_]*)#?‌​(?:[\w]*))?)/.test(value)) {
            return true;
        }
        addError('Invalid url');
        return false;
    }
}
