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
} & BaseInput.BaseInputProps;

export interface TagsState extends BaseInput.BaseInputState {
}

// unfisnished 
export class Tags extends BaseInput.BaseInput<TagsProps, TagsState>  {
    public static defaultProps: TagsProps = {
        disabled: false,
        className: '',
        tags: [],
        onTagsChanged: () => undefined
    }

    constructor(props: TagsProps) {
        super(props);
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
                                label={this.props.label}
                                onKeyDown={e => {
                                    if (e.key === 'Enter' && this.state.value !== '' && this.state.valid) {
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
                                value={this.state.value}
                                readOnly={this.props.readOnly}
                            />
                            <span className="highlight"></span>
                            <span className="bar"></span>
                            {this.renderDefaultValidation()}
                        </div >
                    }
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