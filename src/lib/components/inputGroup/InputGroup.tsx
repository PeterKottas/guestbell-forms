// Libs
import * as React from 'react';
import {
  BaseInputProps,
  BaseInputState,
  BaseInput,
} from '../base/input/BaseInput';
import { withThemeContext } from '../themeProvider/withThemeContext';
import { ThemeContextProps } from '../themeProvider/ThemeContext';
import classNames from 'classnames';

// Misc

export type InputGroupProps = React.PropsWithChildren<
  Pick<
    BaseInputProps<never>,
    'title' | 'className' | 'tooltip' | 'formContext'
  > &
    ThemeContextProps
> & {
  bodyClassName?: string;
  headerClassName?: string;
};

export interface InputGroupState extends BaseInputState {}

export class InputGroup extends BaseInput<
  InputGroupProps,
  InputGroupState,
  never
> {
  // tslint:disable-next-line:no-any
  public static defaultProps: any = {
    ignoreContext: true,
  };

  constructor(props: InputGroupProps) {
    super(props);
  }

  public render() {
    return this.props.title ? (
      <div
        className={classNames(
          'inputGroup input__group__border',
          this.props.className
        )}
      >
        {this.props.title && (
          <div
            className={classNames(
              'inputGroup__header',
              this.props.headerClassName
            )}
          >
            {this.renderTitle()}
          </div>
        )}
        {React.Children.count(this.props.children) > 0 && (
          <div
            className={classNames('inputGroup__body', this.props.bodyClassName)}
          >
            {this.props.children}
          </div>
        )}
      </div>
    ) : (
      this.props.children
    );
  }
}
export default withThemeContext<
  InputGroupProps,
  InstanceType<typeof InputGroup>
>(InputGroup, 'inputGroup');
