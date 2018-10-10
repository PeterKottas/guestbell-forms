import * as React from 'react';
import { FormValidationSummaryComponentProps } from './../../form/FormValidationSummary';
import Button from '../../button';
import * as ArrowIcon from 'material-design-icons/maps/svg/production/ic_my_location_24px.svg';

export type SubmitValidationSummaryProps = {
} & FormValidationSummaryComponentProps;

const SubmitValidationSummary: React.SFC<SubmitValidationSummaryProps> = props => {
    return (
        <React.Fragment>
            {props.componentsWithErrors.map((component, index) => {
                return (
                    <div key={index} className="submitValidationSummary__item">
                        <div className="submitValidationSummary__item__header">
                            {component.validation.name ?
                                component.validation.name
                                :
                                'unknown'
                            }
                        </div>
                        {/*<div className="submitValidationSummary__item__errors">
                            {component.validation.errors && component.validation.errors.map((err, errIndex) => (
                                <span
                                    className="submitValidationSummary__item__error"
                                    key={errIndex}
                                >
                                    {err}
                                </span>
                            ))}
                            </div>*/}
                        <div style={{ flex: 'auto' }} />
                        {component.componentApi && component.componentApi.focus && component.componentApi.scrollTo && <Button
                            icon={true}
                            className="submitValidationSummary__item__locate-button"
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
                        </Button>}
                    </div>
                );
            })}
        </React.Fragment>
    );
};

export default SubmitValidationSummary;