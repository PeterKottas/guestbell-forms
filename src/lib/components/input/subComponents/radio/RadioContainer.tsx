//Styles
import './radioContainer.scss';

//Libs
import * as React from 'react';

//Misc

export interface RadioContainerProps {
    className?: string;
    label?: string;
}

export interface RadioContainerState {
}

export class RadioContainer extends React.Component<RadioContainerProps, RadioContainerState>  {
    constructor(props: RadioContainerProps) {
        super(props);
    }

    public render() {
        return <div className={`radio-input__container ${(this.props.className ? this.props.className : '')}`}>
            {this.props.label && <div className="radio-input__container__header">
                {this.props.label}
            </div>}
            <div>
                {this.props.children}
            </div>
        </div>;
    }
}
export default RadioContainer;
