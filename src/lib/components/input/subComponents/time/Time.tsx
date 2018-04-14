//Styles
import './time.scss';
//import * as arrowSrc from '../assets/images/ic_keyboard_arrow_down_black_24dp_1x.png';
import * as ArrowIcon from 'material-design-icons/hardware/svg/production/ic_keyboard_arrow_down_24px.svg';

//Libs
import * as React from 'react';

//Misc
import * as BaseInput from '../base/BaseInput';
import InputGroup from '../inputGroup/InputGroup';

export interface TimeProps extends BaseInput.BaseInputProps<HTMLInputElement> {
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    timeChange: (time: Date) => void;
    time: Date;
    min?: Date;
    max?: Date;
    label?: never;
}

export interface TimeState extends BaseInput.BaseInputState {
}

export class Time extends BaseInput.BaseInput<TimeProps, TimeState, HTMLInputElement>  {
    public static defaultProps = Object.assign(BaseInput.BaseInput.defaultProps, { type: "time", placeholder: '' });
    private hoursEl: HTMLInputElement;
    private minutesEl: HTMLInputElement;

    constructor(props) {
        super(props);
        this.handleHoursChange = this.handleHoursChange.bind(this);
        this.handleMinutesChange = this.handleMinutesChange.bind(this);
    }

    public render() {
        return <InputGroup title={this.props.title}>
            <div className={'input__base time-input ' + this.getValidationClass() + ' ' + (this.props.className ? this.props.className : '')}>
                <div className="">
                    <div className="time-input__arrows__container">
                        <button
                            className="plus"
                            onClick={(e) => {
                                e.preventDefault();
                                this.handleHoursChange((this.props.time.getHours() + 1).toString());
                            }}
                        >
                            <ArrowIcon />
                        </button>
                        <div className="input-padding">
                            <input
                                ref={el => this.hoursEl = el}
                                disabled={this.getDisabled()}
                                required={this.props.required}
                                className={'time-input__time ' + (this.state.value ? 'filled' : '')}
                                onChange={(e) => this.handleHoursChange(e.target.value)}
                                value={this.props.time.getHours().toString()}
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
                            <ArrowIcon />
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
                            <ArrowIcon />
                        </button>
                        <div className="input-padding">
                            <input
                                ref={el => this.minutesEl = el}
                                disabled={this.getDisabled()}
                                required={this.props.required}
                                className={'time-input__time ' + (this.state.value ? 'filled' : '')}
                                onChange={(e) => this.handleMinutesChange(e.target.value)}
                                value={this.props.time.getMinutes() < 10 ?
                                    '0' + this.props.time.getMinutes().toString()
                                    :
                                    this.props.time.getMinutes().toString()}
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
                            <ArrowIcon />
                        </button>
                    </div>
                </div>
                <div>
                    <span className="time-input__am-pm">{(() => {
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
            </div>
        </InputGroup>;
    }

    private handleLimits(time: Date) {
        if (this.props.min) {
            if ((time.getTime() - this.props.min.getTime()) <= 0) {
                this.props.timeChange(new Date(this.props.min.getTime()));
                return;
            }
        }
        if (this.props.max) {
            if ((this.props.max.getTime() - time.getTime()) <= 0) {
                this.props.timeChange(new Date(this.props.max.getTime()));
                return;
            }
        }
        this.props.timeChange(time);
    }

    private handleHoursChange(hoursString: string) {
        let number = Number(hoursString);
        if (hoursString === '') {
            number = 0;
        }
        if (!isNaN(number)) {
            let newTime: Date = new Date(this.props.time.getTime());
            newTime.setHours(number);
            this.handleLimits(newTime);
        }
    }

    private handleMinutesChange(minutesString: string) {
        let number = Number(minutesString);
        if (minutesString === '') {
            number = 0;
        }
        if (!isNaN(number)) {
            let newTime: Date = new Date(this.props.time.getTime());
            newTime.setMinutes(number);
            this.handleLimits(newTime);
        }
    }
}
export default Time;
