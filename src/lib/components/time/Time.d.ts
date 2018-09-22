import * as React from 'react';
import { BaseInputProps, BaseInputState, BaseInput } from '../base/input/BaseInput';
export interface TimeProps extends BaseInputProps<HTMLInputElement> {
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    timeChange: (time: Date) => void;
    time: Date;
    min?: Date;
    max?: Date;
    label?: never;
}
export interface TimeState extends BaseInputState {
}
export declare class Time extends BaseInput<TimeProps, TimeState, HTMLInputElement> {
    static defaultProps: BaseInputProps<never> & {
        type: string;
        placeholder: string;
    };
    private hoursEl;
    private minutesEl;
    constructor(props: TimeProps);
    render(): JSX.Element;
    private handleLimits;
    private handleHoursChange;
    private handleMinutesChange;
}
export default Time;
