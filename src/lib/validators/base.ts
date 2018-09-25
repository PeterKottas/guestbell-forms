// tslint:disable-next-line:interface-name
export interface IBaseValidator {
    Validate(value: string, isRequired: boolean, addError: (error: string) => void): boolean;
}