// Libs
import * as React from 'react';
import { InputGroup } from '../inputGroup/InputGroup';
import { Text, TextProps } from '../text/Text';
import * as PlusIcon from 'material-design-icons/content/svg/production/ic_add_circle_outline_24px.svg';
import { BaseInputProps, BaseInputState, BaseInput, ValidationError } from '../base/input/BaseInput';
import { Button } from '../button/Button';
import TagsSuggestions from './subComponents/TagsSuggestions';
import { OmitFormContext } from '../form/FormContext';
import { withFormContext } from '../form/withFormContext';

// Misc
export type Tag = {
    id: number | string;
    name: string;
};

type TagsRawProps = {
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
    maxTagsSurpassedError?: (string | JSX.Element);
    showSuggestions?: boolean;
    suggestionsLoadingComponent?: string | JSX.Element;
    suggestionsEmptyComponent?: string | JSX.Element;
    loadingDelayMs?: number;
    filterExistingTags?: (text: string, existingTags: Tag[]) => Tag[];
    maxSuggestions?: number;
} & BaseInputProps<HTMLInputElement>;

export type TagsProps = OmitFormContext<TagsRawProps>;

export interface TagsState extends BaseInputState {
    textIsFocused: boolean;
    textErrors: ValidationError[];
    suggestionsVisible: boolean;
    fetchedExistingTags: Tag[];
    fetchingExistingTags: boolean;
    preselectedSuggestion?: number;
}

class TagsRaw extends BaseInput<TagsRawProps, TagsState, HTMLInputElement>  {
    public static defaultProps: TagsRawProps = {
        ...BaseInput.defaultProps,
        disabled: false,
        className: '',
        tags: [],
        existingTags: [],
        maxTags: 1000,
        onTagsChanged: () => undefined,
        onNewTagAdded: (newTagName) => Promise.resolve(({ name: newTagName, id: new Date().getTime() })),
        valueNotAddedError: <span>You forgot to add tag</span>,
        maxTagsSurpassedError: <span>Maximum number of tags surpassed</span>,
        showSuggestions: true,
        suggestionsLoadingComponent: 'Loading...',
        suggestionsEmptyComponent: 'No existing tags...',
        loadingDelayMs: 500,
        filterExistingTags: (text, tags) => tags.filter(tag => tag.name && tag.name.toLowerCase().startsWith(text)),
        maxSuggestions: 5,
    };

    constructor(props: TagsRawProps) {
        super(props);
        this.state = { ...this.state, textErrors: [], textIsFocused: false, suggestionsVisible: false, fetchingExistingTags: false };
    }

    public render() {
        const textProps = this.props.textProps ? this.props.textProps : {};
        const suggestions = this.getSuggestions();
        return (
            <InputGroup title={this.props.title}>
                <div
                    className={'input__base tags-input ' + this.getValidationClass() + (this.props.className ? ' ' +
                        this.props.className : '') + ' ' + (this.props.readOnly ? 'tags-input--readOnly ' : '')}
                >
                    {this.renderTags()}
                    {(!this.props.maxTags || (this.props.maxTags > (this.props.tags && this.props.tags.length))) && !this.props.readOnly &&
                        <div className={'tags-input__tags__wrapper ' + (this.props.readOnly ? 'filled ' : '')}>
                            <Text
                                {...textProps}
                                required={this.props.tags.length > 0 ? false : this.props.required}
                                className={'tags-input__text-input ' + (textProps.className ? textProps.className : '')}
                                onKeyDown={this.onKeyDown(suggestions)}
                                onErrorsChanged={this.onTextErrorsChanged}
                                onChange={this.onTextChanged}
                                onFocus={this.onFocus}
                                onBlur={this.onBlur}
                                value={this.state.value}
                                readOnly={this.props.readOnly}
                                showValidation={false}
                                ignoreContext={true}
                                validators={this.props.validators}
                            />
                            {this.state.suggestionsVisible && this.props.showSuggestions && <TagsSuggestions
                                allowNew={this.props.allowNew}
                                preselectedSuggestion={this.state.preselectedSuggestion}
                                loading={this.state.fetchingExistingTags}
                                LoadingComponent={this.props.suggestionsLoadingComponent}
                                isVisible={this.state.suggestionsVisible}
                                EmptyComponent={this.props.suggestionsEmptyComponent}
                                tags={suggestions}
                                onSelected={this.onSuggestionSelected}
                                onClickOutside={this.onClickOutside}
                                value={this.state.value}
                                AddNewTagComponent={this.props.allowNew && this.state.value !== '' && this.state.isValid && (
                                    <Button
                                        dropdown={true}
                                        onClick={this.addNewTag}
                                    >
                                        Add new "{this.state.value}"
                                    </Button>
                                )}
                            />}
                        </div >
                    }
                    {this.renderDefaultValidation()}
                    {this.props.label && <label
                        className={(((this.state.value !== '')
                            || (this.state.textIsFocused) || this.props.readOnly || (this.props.tags.length >= this.props.maxTags)) ? 'label--focused' : '')}
                    >{this.renderLabel()}
                    </label>}
                </div>
            </InputGroup >
        );
    }

    private onTextErrorsChanged = (textErrors: ValidationError[]) => this.setState(() => ({ textErrors }), () => this.handleErrors());

    private onFocus = () => {
        this.setState({ textIsFocused: true, suggestionsVisible: true, touched: true }, () => this.handleErrors());
        this.fetchExistingTags();
    }

    private onKeyDown = (suggestions: Tag[]) => async e => {
        if (e.key === 'Enter' && (this.state.value !== '' || this.state.preselectedSuggestion !== undefined) && this.state.isValid) {
            e.preventDefault();
            e.stopPropagation();
            const existingTag = this.props.existingTags && this.props.existingTags.find(et => et.name === this.state.value);
            if (this.state.preselectedSuggestion !== undefined) {
                this.props.onTagsChanged(this.props.tags.concat(suggestions[this.state.preselectedSuggestion]));
                this.setState({ value: '', preselectedSuggestion: undefined, textErrors: [] }, () => this.fetchExistingTags());
            } else if (existingTag) {
                this.props.onTagsChanged(this.props.tags.concat(existingTag));
                this.setState({ value: '', textErrors: [] }, () => this.fetchExistingTags());
            } else if (this.props.allowNew) {
                await this.addNewTag();
            }
        }
        if (suggestions.length > 0 && this.state.suggestionsVisible) {
            if (e.key === 'ArrowUp') {
                const preselectedSuggestion = this.state.preselectedSuggestion === undefined ?
                    suggestions.length - 1
                    :
                    this.state.preselectedSuggestion === 0 ?
                        suggestions.length - 1
                        :
                        this.state.preselectedSuggestion - 1;
                this.setState({ preselectedSuggestion });
            } else if (e.key === 'ArrowDown') {
                const preselectedSuggestion = this.state.preselectedSuggestion === undefined ?
                    0
                    :
                    this.state.preselectedSuggestion === suggestions.length - 1 ?
                        0
                        :
                        this.state.preselectedSuggestion + 1;
                this.setState({ preselectedSuggestion });
            } else {
                this.setState({ preselectedSuggestion: undefined });
            }
        }
    }

    private addNewTag = async () => {
        const newTag = await this.props.onNewTagAdded(this.state.value);
        if (newTag) {
            this.props.onTagsChanged(this.props.tags ? this.props.tags.concat(newTag) : [newTag]);
        }
        this.setState({ value: '', textErrors: [] });
    }

    private onSuggestionSelected = tag => {
        this.props.onTagsChanged(this.props.tags.concat(tag));
        this.setState({ value: '', preselectedSuggestion: undefined, textErrors: [] }, () => this.fetchExistingTags());
    }

    private onBlur = () => {
        this.setState({
            textIsFocused: false,
            preselectedSuggestion: undefined
        });
    }

    private onClickOutside = () => this.setState({ suggestionsVisible: false, preselectedSuggestion: undefined });

    private onTextChanged = (e: React.ChangeEvent<HTMLInputElement>, isValid: boolean) => {
        const value = e.target.value;
        this.setState(prevState => ({
            value,
            isValid: isValid,
            suggestionsVisible: !prevState.suggestionsVisible && true
        }), () => this.handleErrors());
        this.fetchExistingTags(e.target.value);
    }

    private handleErrors = () => {
        let errors = this.getErrors();
        if (errors.length > 0) {
            this.setInvalid(errors);
        } else {
            this.setValid();
        }
    }

    private getErrors() {
        let errors = [];
        errors = errors.concat(this.state.textErrors);
        if (this.state.isValid && this.state.value && this.props.allowNew && !this.state.textIsFocused) {
            errors = errors.concat(this.props.valueNotAddedError);
        }
        if (this.props.maxTags < (this.props.tags && this.props.tags.length)) {
            errors = errors.concat(this.props.maxTagsSurpassedError);
        }
        return errors.filter(i => i);
    }

    private fetchExistingTags(startsWith: string = '') {
        if (this.props.fetchExistingTags) {
            const timer = setTimeout(() => this.setState({ fetchingExistingTags: true }), this.props.loadingDelayMs);
            this.props.fetchExistingTags(startsWith).
                then(fetchedExistingTags => {
                    clearTimeout(timer);
                    this.setState({
                        fetchedExistingTags,
                        fetchingExistingTags: false
                    });
                });
        }
    }

    private getSuggestions() {
        const existingTags: Tag[] = [].concat((this.props.existingTags ? this.props.existingTags : [])).
            concat(this.state.fetchedExistingTags ? this.state.fetchedExistingTags : []);
        const filteredTags = this.props.filterExistingTags(this.state.value ? this.state.value.toLowerCase() : '', existingTags);
        let suggestions = filteredTags.
            filter(tag => !this.props.tags.some(t => t.id === tag.id)).
            slice(0, this.props.maxSuggestions);
        return suggestions;
    }

    private renderTag(tag: Tag, index: number) {
        return (
            <div
                className="tags-input__tag"
                key={index}
            >
                {tag.name}
                {!this.props.readOnly && <Button
                    circular={true}
                    blank={true}
                    onClick={this.tagRemoveClick(tag)}
                    className="ml-1 transform-rotate--45 line-height--0 p-0"
                >
                    <PlusIcon />
                </Button>}
            </div>
        );
    }

    private tagRemoveClick = (tag: Tag) => () => {
        this.props.onTagsChanged && this.props.onTagsChanged(this.props.tags.filter(sv => sv.id !== tag.id));
        this.handleErrors();
        this.fetchExistingTags();
    }

    private renderTags() {
        return this.props.tags && this.props.tags.length > 0 ? (
            <div className="tags-input__tag__wrapper">{this.props.tags.map((item, index) => (
                this.renderTag(item, index)
            ))}
            </div>
        )
            :
            this.props.readOnly && (
                <div className="tags-input__tag__wrapper">
                    <div className="tags-input__tag">
                        {this.props.readonlyEmptyPlaceholder}
                    </div>
                </div>
            );
    }
}

export const Tags = withFormContext(TagsRaw);

export default Tags;
