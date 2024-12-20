import { IBaseValidator } from './base';
export interface NumberValidatorConfig {
  min?: number;
  max?: number;
  minInclusive?: number;
  maxInclusive?: number;
}

export class NumberValidator implements IBaseValidator {
  private config: NumberValidatorConfig;
  constructor(
    config: NumberValidatorConfig = { min: undefined, max: undefined }
  ) {
    this.config = config;
  }
  public Validate(
    value: string,
    isRequired: boolean,
    addError: (error: string) => void
  ): boolean {
    let num = Number(value);
    if (!isNaN(num)) {
      if (this.config.min !== undefined && num <= this.config.min) {
        addError('Min: ' + this.config.min);
        return false;
      }
      if (this.config.max !== undefined && num >= this.config.max) {
        addError('Max: ' + this.config.max);
        return false;
      }
      if (
        this.config.minInclusive !== undefined &&
        num < this.config.minInclusive
      ) {
        addError('Min: ' + this.config.minInclusive);
        return false;
      }
      if (
        this.config.maxInclusive !== undefined &&
        num > this.config.maxInclusive
      ) {
        addError('Max: ' + this.config.maxInclusive);
        return false;
      }
      return true;
    }
    addError('Invalid number');
    return false;
  }
}
