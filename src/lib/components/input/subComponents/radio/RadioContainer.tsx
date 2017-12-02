//Styles
import './radioContainer.scss';

//Libs
import * as React from 'react';
import InputGroup from './../inputGroup/InputGroup';

//Misc

export interface RadioContainerProps {
    className?: string;
    title?: string;
}

export interface RadioContainerState {
}

export class RadioContainer extends React.Component<RadioContainerProps, RadioContainerState>  {
    constructor(props: RadioContainerProps) {
        super(props);
    }

    public render() {
        return <InputGroup title={this.props.title}>
            <div className={`input__base radio-input__container ${(this.props.className ? this.props.className : '')}`}>
                {this.props.children}
            </div>
        </InputGroup>;
    }
}
export default RadioContainer;
