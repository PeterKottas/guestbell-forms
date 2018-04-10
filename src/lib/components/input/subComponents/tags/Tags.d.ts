import './tags.scss';
import * as BaseInput from '../base/BaseInput';
import { TextProps } from './../text/Text.d';
export declare type Tag = {
    id: number | string;
    name: string;
};
export declare type TagsProps = {
    className?: string;
    disabled?: boolean;
    tags: Tag[];
    existingTags?: Tag[];
    fetchExistingTags?: (text: string) => Promise<Tag[]>;
    onTagsChanged: (newTags: Tag[]) => void;
    onNewTagAdded?: (newTagName: string) => Promise<Tag>;
    allowNew?: boolean;
    textProps?: TextProps;
    readOnly?: boolean;
    readonlyEmptyPlaceholder?: string;
    maxTags?: number;
    valueNotAddedError?: (string | JSX.Element);
    showSuggestions?: boolean;
    suggestionsLoadingComponent?: string | JSX.Element;
    suggestionsEmptyComponent?: string | JSX.Element;
    loadingDelayMs?: number;
    filterExistingTags?: (text: string, existingTags: Tag[]) => Tag[];
    maxSuggestions?: number;
} & BaseInput.BaseInputProps;
export interface TagsState extends BaseInput.BaseInputState {
    textIsFocused: boolean;
    suggestionsVisible: boolean;
    fetchedExistingTags: Tag[];
    fetchingExistingTags: boolean;
}
export declare class Tags extends BaseInput.BaseInput<TagsProps, TagsState> {
    static defaultProps: TagsProps;
    constructor(props: TagsProps);
    render(): JSX.Element;
    private fetchExistingTags(startsWith?);
    private getSuggestions();
    private renderTag(tag, index);
    private renderTags();
}
export default Tags;
