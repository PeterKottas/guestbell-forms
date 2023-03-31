// Libs

// Misc
import {
  BaseInputProps,
  BaseInputState,
  BaseInput,
} from '../base/input/BaseInput';
import { withFormContext } from '../form/withFormContext';
import { withThemeContext } from '../themeProvider/withThemeContext';

export interface ExternalValidationComponentProps
  extends BaseInputProps<HTMLInputElement> {
  isValid: boolean;
}

export interface ExternalValidationComponentState extends BaseInputState {}

export class ExternalValidationComponentRaw extends BaseInput<
  ExternalValidationComponentProps,
  ExternalValidationComponentState,
  HTMLInputElement
> {
  public static defaultProps = Object.assign({}, BaseInput.defaultProps, {
    isValid: true,
  }) as ExternalValidationComponentProps;

  constructor(props: ExternalValidationComponentProps) {
    super(props);
    if (!this.props.ignoreContext && this.props.formContext) {
      this.props.formContext.updateCallback(this.componentId, {
        validation: {
          isValid: props.isValid,
          errors: props.errors,
        },
      });
    }
  }

  public componentDidUpdate(
    prevProps: ExternalValidationComponentProps,
    prevState: ExternalValidationComponentState
  ) {
    if (
      this.props.isValid !== prevProps.isValid ||
      this.props.errors !== prevProps.errors
    ) {
      if (!this.props.ignoreContext && this.props.formContext) {
        this.props.formContext.updateCallback(this.componentId, {
          validation: {
            isValid: this.props.isValid,
            errors: this.props.errors,
          },
        });
      }
    }
  }

  public render() {
    return null;
  }
}

export const ExternalValidationComponent = withThemeContext<
  ExternalValidationComponentProps,
  InstanceType<typeof ExternalValidationComponentRaw>
>(
  withFormContext<ExternalValidationComponentProps>(
    ExternalValidationComponentRaw
  ),
  'text'
);

export default ExternalValidationComponent;
