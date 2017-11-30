//Styles
import './inputHeader.scss';

//Libs
import * as React from 'react';
import * as SmoothCollapse from 'react-smooth-collapse';

//Misc
import Dropdown from '../../../dropdown/Dropdown';
import * as MoreIcon from 'material-design-icons/navigation/svg/production/ic_more_vert_24px.svg';
import * as PlusIcon from 'material-design-icons/hardware/svg/production/ic_keyboard_arrow_down_24px.svg';
import Button from '../../../buttons/Button';

export type InputHeaderAction = {
    action: () => void;
    name: string | JSX.Element;
}

export type InputHeaderProps = {
    className?: string;
    title?: string | JSX.Element;
    mainAction?: InputHeaderAction
    extraActions?: InputHeaderAction[];
    collapsable?: boolean;
}

export interface InputHeaderState {
    collapsed: boolean;
}

export class InputHeader extends React.Component<InputHeaderProps, InputHeaderState>  {
    constructor(props: InputHeaderProps) {
        super(props);
        this.state = {
            collapsed: props.collapsable
        }
    }

    public render() {
        return <div className={`input__header ` + (this.props.className ? this.props.className : '')}>
            <div
                className="input__header__top"
            >
                {this.props.title && <div className="input__header__title">
                    {this.props.title}
                </div>}
                <div className="input__header__top__button-container">
                    {this.props.mainAction ? <Button 
                        onClick={(e) => this.props.mainAction.action()}
                        type={'hero'}
                    >
                        {this.props.mainAction.name}
                    </Button> : null}
                    {this.props.extraActions ?
                        <Dropdown
                            header={<Button type={'blank'}><MoreIcon /></Button>}
                            showArrow={false}
                            headerClassName={'line-height--0'}
                            className={''}
                        >
                            {this.props.extraActions.map((extraAction, index) =>
                                <li
                                    key={index}
                                >
                                    <Button
                                        onClick={() => extraAction.action()}
                                        type={'dropdown'}
                                    >
                                        {extraAction.name}
                                    </Button>
                                </li>
                            )}
                        </Dropdown>
                        :
                        null
                    }
                    {this.props.collapsable &&
                        <Button
                            onClick={() => this.props.collapsable && this.setState({ collapsed: !this.state.collapsed })}
                            className={`input__header__collapse-button line-height--0 ${(this.state.collapsed ? 'collapsed' : '')}`}
                            type={'blank'}
                        >
                            <PlusIcon />
                        </Button>}
                </div>
            </div>
            <div className="input__header__bottom">
                <div className="smooth-collapse__container">
                    <SmoothCollapse expanded={!this.state.collapsed}>
                        {this.props.children}
                    </SmoothCollapse>
                </div>
            </div>
        </div >;
    }
}
export default InputHeader;
