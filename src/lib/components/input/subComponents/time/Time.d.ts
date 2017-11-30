import './time.scss';
import * as React from 'react';
import * as BaseInput from '../base/BaseInput';
export interface TimeProps extends BaseInput.BaseInputProps {
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    timeChange: (time: Date) => void;
    time: Date;
    min?: Date;
    max?: Date;
    label?: never;
}
export interface TimeState extends BaseInput.BaseInputState {
}
export declare class Time extends BaseInput.BaseInput<TimeProps, TimeState> {
    static defaultProps: BaseInput.BaseInputProps & {
        type: string;
        placeholder: string;
    };
    private hoursEl;
    private minutesEl;
    constructor(props: any);
    render(): JSX.Element;
    private handleLimits(time);
    private handleHoursChange(hoursString);
    private handleMinutesChange(minutesString);
}
export default Time;
