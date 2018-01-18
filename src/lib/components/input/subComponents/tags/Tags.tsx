//Styles
import './tags.scss';

//Libs
import * as React from 'react';
import * as BaseInput from '../base/BaseInput';
import { InputGroup } from '../inputGroup/InputGroup';
import { Text } from '../text/Text';
import { TextProps } from './../text/Text.d';
import { Button } from '../../../buttons/Button';
import * as PlusIcon from 'material-design-icons/content/svg/production/ic_add_circle_outline_24px.svg';

//Misc
export type TagsProps = {
    className?: string;
    disabled?: boolean;
    tags: string[];
    onTagsChanged: (newTags: string[]) => void;
    allowNew?: boolean;
    textProps?: TextProps;
    readOnly?: boolean;
    reaondlyEmptyPlaceholder?: string;
    maxTags?: number;
    pressEnterToAddText?: string;
} & BaseInput.BaseInputProps;

export interface TagsState extends BaseInput.BaseInputState {
    textIsFocused: boolean;
}

// unfisnished 
export class Tags extends BaseInput.BaseInput<TagsProps, TagsState>  {
    public static defaultProps: TagsProps = {
        disabled: false,
        className: '',
        tags: [],
        pressEnterToAddText: ' - Press Enter to add',
        onTagsChanged: () => undefined
    }

    constructor(props: TagsProps) {
        super(props);
        this.state = { ...this.state, textIsFocused: false };
    }

    public render() {
        const textProps = this.props.textProps ? this.props.textProps : {};
        return (
            <InputGroup title={this.props.title}>
                <div className={'input__base tags-input ' + this.getValidationClass() + (this.props.className ? ' ' + this.props.className : '') + ' ' + (this.props.readOnly ? 'readonly' : '')}>
                    {this.renderTags()}
                    {(!this.props.maxTags || (this.props.maxTags > (this.props.tags && this.props.tags.length))) && !this.props.readOnly &&
                        <div className="tags-input__tags__wrapper">
                            <Text
                                {...textProps}
                                className="tags-input__text-input"
                                onKeyDown={e => {
                                    if (e.key === 'Enter' && this.state.value !== '' && this.state.valid) {
                                        e.preventDefault();
                                        e.stopPropagation();
                                        this.setState({
                                            value: ''
                                        });
                                        this.props.onTagsChanged(this.props.tags.concat(this.state.value));
                                    }
                                }}
                                onChange={(e, isValid) => {
                                    this.handleChange(e);
                                    if (!isValid) {
                                        this.setInvalid();
                                    } else {
                                        this.setValid();
                                    }
                                }}
                                onFocus={e => this.setState({ textIsFocused: true })}
                                onBlur={() => this.setState({ textIsFocused: false })}
                                value={this.state.value}
                                readOnly={this.props.readOnly}
                            />
                            <span className="highlight"></span>
                            <span className="bar"></span>

                            {this.renderDefaultValidation()}
                        </div >
                    }
                    {this.props.label && <label className={((this.props.tags && this.props.tags.length > 0) ||
                        (this.state.value !== '') || (this.state.textIsFocused)) ? 'label--focused' : ''}>{this.props.label}{this.state.value !== '' && this.props.pressEnterToAddText}</label>}
                </div>
            </InputGroup >
        );
    }

    private renderTag(tag: string, index: number) {
        return (
            <div
                className="tags-input__tag"
                key={index}
            >
                {tag}
                {!this.props.readOnly && <Button
                    circular={true}
                    type={'blank--light'}
                    onClick={() => this.props.onTagsChanged && this.props.onTagsChanged(this.props.tags.filter(sv => sv !== tag))}
                    className="ml-1 transform-rotate--45 line-height--0 p-0"
                >
                    <PlusIcon />
                </Button>}
            </div>
        );
    }

    private renderTags() {
        return this.props.tags && this.props.tags.length > 0 ?
            <div className="tags-input__tag__wrapper">{this.props.tags.map((item, index) => (
                this.renderTag(item, index)
            ))}
            </div>
            :
            this.props.readOnly && <div className="tags-input__tag__wrapper">
                <div className="tags-input__tag">
                    {this.props.reaondlyEmptyPlaceholder}
                </div>
            </div>
    }
}
export default Tags;
