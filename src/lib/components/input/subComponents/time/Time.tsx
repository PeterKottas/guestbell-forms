//Styles
import './time.scss';
import * as arrowSrc from '../assets/images/ic_keyboard_arrow_down_black_24dp_1x.png';

//Libs
import * as React from 'react';

//Misc
import * as BaseInput from '../base/BaseInput';

export interface TimeProps extends BaseInput.BaseInputProps {
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    timeChange: (time: Date) => void;
    time: Date;
    min?: Date;
    max?: Date;
}

export interface TimeState extends BaseInput.BaseInputState {
}

export class Time extends BaseInput.BaseInput<TimeProps, TimeState>  {
    public static defaultProps = Object.assign(BaseInput.BaseInput.defaultProps, { type: "time", placeholder: '' });
    private hoursEl: HTMLInputElement;
    private minutesEl: HTMLInputElement;

    constructor(props) {
        super(props);
        this.handleHoursChange = this.handleHoursChange.bind(this);
        this.handleMinutesChange = this.handleMinutesChange.bind(this);
    }

    public render() {
        return <div className={`input__group time-input ${this.getValidationClass()} ${this.props.className ? this.props.className : ''}`}>
            <div className="">
                <div className="time-input__arrows__container">
                    <button
                        className="plus"
                        onClick={(e) => {
                            e.preventDefault();
                            this.handleHoursChange((this.props.time.getHours() + 1).toString());
                        }}
                    >
                        <img src={arrowSrc} />
                    </button>
                    <div className="input-padding">
                        <input
                            ref={el => this.hoursEl = el}
                            disabled={this.getDisabled()}
                            required={this.props.required}
                            className={'time-input__time ' + (this.state.value ? 'filled' : '')}
                            onChange={(e) => this.handleHoursChange(e.target.value)}
                            value={this.props.time.getHours()}
                            onBlur={this.handleBlur}
                            onFocus={this.handleFocus}
                            type="number"
                        />
                        <span className="highlight"></span>
                    </div>
                    <button
                        className="minus"
                        onClick={(e) => {
                            e.preventDefault();
                            this.handleHoursChange((this.props.time.getHours() - 1).toString());
                        }}
                    >
                        <img src={arrowSrc} />
                    </button>
                </div>
            </div>
            <span className="">:</span>
            <div className="">
                <div className="time-input__arrows__container">
                    <button
                        className="plus"
                        onClick={(e) => {
                            e.preventDefault();
                            this.handleMinutesChange((this.props.time.getMinutes() + 1).toString());
                        }}
                    >
                        <img src={arrowSrc} />
                    </button>
                    <div className="input-padding">
                        <input
                            ref={el => this.minutesEl = el}
                            disabled={this.getDisabled()}
                            required={this.props.required}
                            className={'time-input__time ' + (this.state.value ? 'filled' : '')}
                            onChange={(e) => this.handleMinutesChange(e.target.value)}
                            value={this.props.time.getMinutes()}
                            onBlur={this.handleBlur}
                            onFocus={this.handleFocus}
                            type="number"
                        />
                        <span className="highlight"></span>
                    </div>
                    <button
                        className="minus"
                        onClick={(e) => {
                            e.preventDefault();
                            this.handleMinutesChange((this.props.time.getMinutes() - 1).toString());
                        }}
                    >
                        <img src={arrowSrc} />
                    </button>
                </div>
            </div>
            <div>
                <span className="">{(() => {
                    var hours = this.props.time.getHours();
                    var hours = (hours + 24) % 24;
                    var mid = 'AM';
                    if (hours == 0) { //At 00 hours we need to show 12 am
                        hours = 12;
                    }
                    else if (hours > 12) {
                        hours = hours % 12;
                        mid = 'PM';
                    }
                    return mid;
                })()}</span>
            </div>
            {this.renderDefaultValidation()}
            <span className={'bar ' + (this.state.focused ? 'focused' : '')}></span>
            {this.props.label && <label className="label--focused">{this.props.label}</label>}
        </div>;
    }

    private handleLimits(time: Date) {
        if (this.props.min) {
            if ((this.props.time.getTime() - this.props.min.getTime()) > 0) {
                this.props.timeChange(time);
            } else {
                this.props.timeChange(this.props.min);
                return;
            }
        }
        if (this.props.max) {
            if ((this.props.max.getTime() - this.props.time.getTime()) > 0) {
                this.props.timeChange(time);
                return;
            } else {
                this.props.timeChange(this.props.max);
                return;
            }
        }
        this.props.timeChange(time);
    }

    private handleHoursChange(hoursString: string) {
        const number = Number(hoursString);
        if (!isNaN(number)) {
            let newTime: Date = this.props.time;
            newTime.setHours(number);
            this.handleLimits(newTime);
        }
    }

    private handleMinutesChange(minutesString: string) {
        const number = Number(minutesString);
        if (!isNaN(number)) {
            let newTime: Date = this.props.time;
            newTime.setMinutes(number);
            this.handleLimits(newTime);
        }
    }
}
export default Time;
