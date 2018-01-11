//Styles
import './tags.scss';

//Libs
import * as React from 'react';
import * as BaseInput from '../base/BaseInput';
import { InputGroup } from '../inputGroup/InputGroup';
import { Text } from '../text/Text';

//Misc

export interface Tag {
    value: string | number;
    label: string;
}

export type TagsProps = {
    className?: string;
    disabled?: boolean;
    tags: (Tag | string)[];
    onTagsChanged: (newTags: (Tag | string)[]) => void;
    tagsOptions?: (Tag | string)[];
    allowNew?: boolean;
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
        return (
            <InputGroup title={this.props.title}>
                <div className={'input__base tags-input ' + this.getValidationClass() + (this.props.className ? ' ' + this.props.className : '')}>
                    {this.props.tags && this.props.tags.map(tag => this.renderTag(tag))}
                    <Text
                        className="tags-input__text-input"
                        label={this.props.label}
                    />
                    <span className="highlight"></span>
                    <span className="bar"></span>
                    {this.renderDefaultValidation()}
                </div >
            </InputGroup>
        );
    }

    private renderTag(tag: Tag | string) {
        return (
            <div>
                {this.getTagLabel(tag)}
            </div>
        );
    }

    private isTagType(tag: Tag | string): tag is Tag {
        if (tag instanceof Object && tag.constructor === Object) {
            return true;
        }
        return false;
    }

    private getTagLabel(tag: Tag | string) {
        if (this.isTagType(tag)) {
            return tag.label ? tag.label : tag.value;
        }
        else {
            return tag;
        }
    }
}
export default Tags;
