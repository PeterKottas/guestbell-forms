import './tags.scss';
import * as BaseInput from '../base/BaseInput';
import { TextProps } from './../text/Text.d';
export declare type TagsProps = {
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
export declare class Tags extends BaseInput.BaseInput<TagsProps, TagsState> {
    static defaultProps: TagsProps;
    constructor(props: TagsProps);
    render(): JSX.Element;
    private renderTag(tag, index);
    private renderTags();
}
export default Tags;
