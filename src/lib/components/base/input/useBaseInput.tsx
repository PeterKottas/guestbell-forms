// experimental and unfinished and unused for now
import { useState, useRef, useCallback, useEffect } from 'react';
import {
  AllowedHtmlElements,
  BaseTranslations,
  ValidationError,
} from './BaseInput';
import * as Validators from '../../../validators';
import { FormContextState } from '../../form/FormContext';
import guid from '../../utils/Guid';

interface UseBaseInputProps<TranslationsT extends BaseTranslations> {
  value?: string;
  required?: boolean;
  validators?: string[];
  customValidators?: Validators.IBaseValidator[];
  onTheFlightValidate?: (value: string) => boolean;
  onChange?: (
    event: React.ChangeEvent<AllowedHtmlElements>,
    isValid: boolean
  ) => void;
  onBlur?: () => void;
  onFocus?: () => void;
  errors?: ValidationError[];
  infoText?: string;
  touchOn?: 'focus' | 'blur';
  showValidation?: boolean;
  disabled?: boolean;
  ignoreContext?: boolean;
  formContext?: FormContextState;
  translations?: TranslationsT;
  validationName?: string;
  label?: string | JSX.Element;
}

export function useBaseInput<
  TranslationsT extends BaseTranslations = BaseTranslations
>(props: UseBaseInputProps<TranslationsT>) {
  const {
    value: initialValue = '',
    required = false,
    validators = [],
    customValidators = [],
    onTheFlightValidate,
    onChange,
    onBlur,
    onFocus,
    //errors: propErrors = [],
    //infoText,
    touchOn = 'focus',
    //showValidation = true,
    disabled = false,
    ignoreContext = false,
    formContext,
    translations,
    validationName,
    label,
  } = props;

  const [value, setValue] = useState<string>(initialValue);
  const [touched, setTouched] = useState<boolean>(false);
  const [isValid, setIsValid] = useState<boolean>(true);
  const [errors, setErrors] = useState<ValidationError[]>([]);
  const [focused, setFocused] = useState<boolean>(false);
  const [componentDisabled, setComponentDisabled] = useState<boolean>(disabled);

  const inputRef = useRef<AllowedHtmlElements>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const componentId = useRef(guid());

  const handleValidation = useCallback(
    (currentValue: string, initializing = false) => {
      let validationErrors: ValidationError[] = [];
      let validationStatus = true;

      if (required && !currentValue) {
        validationErrors.push(
          translations?.required || 'This field is required'
        );
        validationStatus = false;
      } else if (validators) {
        validators.forEach((validator) => {
          let isValidForValidator = false;
          switch (validator) {
            case 'email':
              isValidForValidator = new Validators.EmailValidator().Validate(
                currentValue,
                required,
                (error) => validationErrors.push(error)
              );
              break;
            // Add other validators as needed
            default:
              throw new Error(`Validator ${validator} not implemented`);
          }
          if (!isValidForValidator) validationStatus = false;
        });
      }

      customValidators.forEach((customValidator) => {
        const isValidForCustomValidator = customValidator.Validate(
          currentValue,
          required,
          (error) => validationErrors.push(error)
        );
        if (!isValidForCustomValidator) validationStatus = false;
      });

      setErrors(validationErrors);
      setIsValid(validationStatus);

      if (!initializing && !ignoreContext) {
        formContext?.updateCallback(componentId.current, {
          isValid: validationStatus,
          errors: validationErrors,
        });
      }

      return { isValid: validationStatus, errors: validationErrors };
    },
    [
      required,
      validators,
      customValidators,
      formContext,
      translations,
      ignoreContext,
    ]
  );

  const handleValueChange = useCallback(
    (newValue: string) => {
      if (!onTheFlightValidate || onTheFlightValidate(newValue)) {
        const result = handleValidation(newValue);
        setValue(newValue);
        onChange?.(
          {
            target: { value: newValue },
          } as React.ChangeEvent<AllowedHtmlElements>,
          result.isValid
        );
      }
    },
    [handleValidation, onTheFlightValidate, onChange]
  );

  const handleFocus = useCallback(() => {
    if (!disabled) {
      onFocus?.();
      setFocused(true);
      if (touchOn === 'focus') setTouched(true);
    }
  }, [disabled, onFocus, touchOn]);

  const handleBlur = useCallback(() => {
    onBlur?.();
    setFocused(false);
    if (touchOn === 'blur') setTouched(true);
  }, [onBlur, touchOn]);

  const scrollTo = useCallback(() => {
    containerRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  const setValid = useCallback(() => {
    setIsValid(true);
    setErrors([]);
    formContext?.updateCallback(componentId.current, {
      isValid: true,
      errors: [],
    });
  }, [formContext]);

  const setInvalid = useCallback(
    (validationErrors: ValidationError[] = []) => {
      setIsValid(false);
      setErrors(validationErrors);
      formContext?.updateCallback(componentId.current, {
        isValid: false,
        errors: validationErrors,
      });
    },
    [formContext]
  );

  const disableComponent = useCallback(() => {
    setComponentDisabled(true);
  }, []);

  const enableComponent = useCallback(() => {
    setComponentDisabled(false);
  }, []);

  useEffect(() => {
    handleValidation(value, true);

    if (!ignoreContext && formContext) {
      formContext.subscribe(componentId.current, {
        componentApi: {
          disableComponent,
          enableComponent,
          focus: () => inputRef.current?.focus(),
          scrollTo,
          touch: () => setTouched(true),
          unTouch: () => setTouched(false),
        },
        validation: {
          isValid,
          errors,
          name: validationName || label,
        },
      });
    }

    return () => {
      if (!ignoreContext) formContext?.unSubscribe(componentId.current);
    };
  }, [formContext, ignoreContext, handleValidation, value]);

  return {
    value,
    setValue: handleValueChange,
    isValid,
    errors,
    touched,
    focused,
    inputRef,
    containerRef,
    handleFocus,
    handleBlur,
    scrollTo,
    setValid,
    setInvalid,
    disableComponent,
    enableComponent,
    setTouched,
    componentDisabled,
  };
}
