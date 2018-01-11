import './tags.scss';
import * as BaseInput from '../base/BaseInput';
export interface Tag {
    value: string | number;
    label: string;
}
export declare type TagsProps = {
    className?: string;
    disabled?: boolean;
    tags: (Tag | string)[];
    onTagsChanged: (newTags: (Tag | string)[]) => void;
    tagsOptions?: (Tag | string)[];
    allowNew?: boolean;
} & BaseInput.BaseInputProps;
export interface TagsState extends BaseInput.BaseInputState {
}
export declare class Tags extends BaseInput.BaseInput<TagsProps, TagsState> {
    static defaultProps: TagsProps;
    constructor(props: TagsProps);
    render(): JSX.Element;
    private renderTag(tag);
    private isTagType(tag);
    private getTagLabel(tag);
}
export default Tags;
