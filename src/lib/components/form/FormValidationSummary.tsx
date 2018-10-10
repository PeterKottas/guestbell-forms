import * as React from 'react';
import guid from '../utils/Guid';
import { withFormContext } from './withFormContext';
import { FormContextProps, OmitFormContext, FormComponentContextState } from './FormContext';
import { Button } from './../button/Button';
var classNames = require('classnames');

import * as ArrowIcon from 'material-design-icons/maps/svg/production/ic_my_location_24px.svg';
import { FormValidationSummaryComponentProps } from './FormValidationSummary';

export interface FormValidationSummaryComponentProps {
    componentsWithErrors: FormComponentContextState[];
}

export type FormValidationSummaryRawProps = {
    containerClass?: string;
    title?: string;
    Component?: React.ComponentType<FormValidationSummaryComponentProps> | React.StatelessComponent<FormValidationSummaryComponentProps>
} & FormContextProps;

export type FormValidationSummaryProps = OmitFormContext<FormValidationSummaryRawProps>;

export interface FormValidationSummaryState {
}

export const DefaultComponent: React.SFC<FormValidationSummaryComponentProps> = props => (
    <React.Fragment>
        {props.componentsWithErrors.map((component, index) => {
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
                            {component.validation.errors && component.validation.errors.map((err, errIndex) => (
                                <span
                                    className="formValidationSummary__item__error"
                                    key={errIndex}
                                >
                                    {err}
                                </span>
                            ))}
                        </div>
                        <div style={{ flex: 'auto' }} />
                        <Button
                            className="formValidationSummary__item__locate-button"
                            circular={true}
                            type="white"
                            small={true}
                            blank={true}
                            onClick={() => {
                                component.componentApi.scrollTo();
                                component.componentApi.focus();
                            }}
                        >
                            <ArrowIcon />
                        </Button>
                    </div>
                );
            })}
    </React.Fragment>
);

export class FormValidationSummaryRaw extends React.PureComponent<FormValidationSummaryRawProps, FormValidationSummaryState> {
    public static defaultProps = {
        title: 'This form has some errors',
        Component: DefaultComponent,
        containerClass: 'formValidationSummary'
    };

    public componentId = guid();

    public render() {
        const componentsWithErrors = this.props.formContext ? Object.keys(this.props.formContext.components).
            map(key => this.props.formContext.components[key]).
            filter(component => {
                if (!component.validation.isValid && !component.validation.name) {
                    console.warn(component, 'Has validation error. FormValidationSummary is present but the component has no validation name');
                }
                return !component.validation.isValid;
            }) : [];
        const containerClassName = classNames(this.props.containerClass);
        return componentsWithErrors.length > 0 && (
            <div className={containerClassName}>
                {this.props.title && <div className="formValidationSummary__header">{this.props.title}</div>}
                <this.props.Component componentsWithErrors={componentsWithErrors}/>
            </div>
        );
    }
}

export const FormValidationSummary = withFormContext<FormValidationSummaryRawProps, FormValidationSummaryProps>(FormValidationSummaryRaw);