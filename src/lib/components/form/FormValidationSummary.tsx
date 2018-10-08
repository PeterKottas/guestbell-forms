import * as React from 'react';
import guid from '../utils/Guid';
import { withFormContext } from './withFormContext';
import { FormContextProps, OmitFormContext } from './FormContext';

type FormValidationSummaryRawProps = {
    title?: string;
} & FormContextProps;

export type FormValidationSummaryProps = OmitFormContext<FormValidationSummaryRawProps>;

export interface FormValidationSummaryState {
}

class FormValidationSummaryRaw extends React.PureComponent<FormValidationSummaryRawProps, FormValidationSummaryState> {
    public static defaultProps = {
        title: 'This form has some errors'
    };

    public componentId = guid();

    public render() {
        const componentsWithErrors = this.props.formContext && Object.keys(this.props.formContext.components).
            map(key => this.props.formContext.components[key]).
            filter(component => {
                if (!component.validation.isValid && !component.validation.name) {
                    console.warn(component, 'Has validation error. FormValidationSummary is present but the component has no validation name');
                }
                return !component.validation.isValid;
            });
        return componentsWithErrors.length > 0 && (
            <div className="formValidationSummary">
                <div className="formValidationSummary__header">{this.props.title}</div>
                {componentsWithErrors.map((component, index) => {
                    return (
                        <div key={index} className="formValidationSummary__item">
                            <div className="formValidationSummary__item__header">
                                {component.validation.name ?
                                    component.validation.name
                                    :
                                    'unknown'
                                }
                            </div>
                            <div className="formValidationSummary__item__errors">
                                {component.validation.errors}
                            </div>
                        </div>
                    );
                })}
            </div>
        );
    }
}

export const FormValidationSummary = withFormContext(FormValidationSummaryRaw);