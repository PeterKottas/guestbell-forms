//Styles
import './tags.scss';

//Libs
import onClickOutside, { InjectedOnClickOutProps } from 'react-onclickoutside';
import * as React from 'react';
import * as BaseInput from '../base/BaseInput';
import { InputGroup } from '../inputGroup/InputGroup';
import { Text } from '../text/Text';
import { TextProps } from './../text/Text.d';
import { Button } from '../../../buttons/Button';
import * as PlusIcon from 'material-design-icons/content/svg/production/ic_add_circle_outline_24px.svg';

//Misc
export type Tag = {
    id: number | string;
    name: string;
};

export type TagsProps = {
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
} & BaseInput.BaseInputProps<HTMLInputElement>;

export interface TagsState extends BaseInput.BaseInputState {
    textIsFocused: boolean;
    suggestionsVisible: boolean;
    fetchedExistingTags: Tag[];
    fetchingExistingTags: boolean;
    preselectedSuggestion?: number;
}

type SuggestionsProps = {
    preselectedSuggestion?: number;
    isVisible: boolean;
    tags: Tag[];
    onSelected: (tag: Tag) => void;
    onClickOutside: () => void;
    value: string;
    loading: boolean;
    loadingComponent?: string | JSX.Element;
    emptyComponent?: string | JSX.Element;
};

type InjectedProps = InjectedOnClickOutProps;
class Suggestions extends React.Component<SuggestionsProps & InjectedProps> {
    public render() {
        return this.props.isVisible ? (
            <div className="tags-input__suggestions">
                <ul>
                    {this.props.loading && this.props.loadingComponent && <li className="w-100 text-center p-2">{this.props.loadingComponent}</li>}
                    {!this.props.loading && this.props.tags.map((tag, index) => (
                        <li key={index}>
                            <Button
                                className={'w-100 tags-input__suggestion ' + (this.props.preselectedSuggestion !== undefined &&
                                    this.props.preselectedSuggestion === index ? 'tags-input__suggestion--preselected' : '')}
                                type="dropdown"
                                onClick={e => this.props.onSelected(tag)}
                            >
                                {tag.name}
                            </Button>
                        </li>
                    ))}
                    {!this.props.loading && this.props.emptyComponent && (this.props.tags.length === 0) && <li className="w-100 text-center p-2">{this.props.emptyComponent}</li>}
                </ul>
            </div>
        ) : null;
    }

    public handleClickOutside(evt) {
        this.props.onClickOutside();
    }
};

const SuggestionsWrapped = onClickOutside<SuggestionsProps>(Suggestions);

export class Tags extends BaseInput.BaseInput<TagsProps, TagsState, HTMLInputElement>  {
    public static defaultProps: TagsProps = {
        ...BaseInput.BaseInput.defaultProps,
        disabled: false,
        className: '',
        tags: [],
        existingTags: [],
        maxTags: 1000,
        onTagsChanged: () => undefined,
        onNewTagAdded: (newTagName) => Promise.resolve(({ name: newTagName, id: new Date().getTime() })),
        valueNotAddedError: <span>Press <b>ENTER</b> to confirm</span>,
        maxTagsSurpassedError: <span>Maximum number of tags surpassed</span>,
        showSuggestions: true,
        suggestionsLoadingComponent: 'Loading...',
        suggestionsEmptyComponent: 'No data...',
        loadingDelayMs: 500,
        filterExistingTags: (text, tags) => tags.filter(tag => tag.name && tag.name.toLowerCase().startsWith(text)),
        maxSuggestions: 5,
    }

    constructor(props: TagsProps) {
        super(props);
        this.state = { ...this.state, textIsFocused: false, suggestionsVisible: false, fetchingExistingTags: false };
    }


    public render() {
        const textProps = this.props.textProps ? this.props.textProps : {};
        const suggestions = this.getSuggestions();
        const errors = this.getErrors();
        return (
            <InputGroup title={this.props.title}>
                <div className={'input__base tags-input ' + this.getValidationClass(errors) + (this.props.className ? ' ' + this.props.className : '') + ' ' + (this.props.readOnly ? 'tags-input--readOnly' : '')}>
                    {this.renderTags()}
                    {(!this.props.maxTags || (this.props.maxTags > (this.props.tags && this.props.tags.length))) && !this.props.readOnly &&
                        <div className="tags-input__tags__wrapper">
                            <Text
                                {...textProps}
                                className={'tags-input__text-input ' + (textProps.className ? textProps.className : '')}
                                onKeyDown={async e => {
                                    if (e.key === 'Enter' && (this.state.value !== '' || this.state.preselectedSuggestion !== undefined) && this.state.valid) {
                                        e.preventDefault();
                                        e.stopPropagation();
                                        const existingTag = this.props.existingTags && this.props.existingTags.find(et => et.name === this.state.value);
                                        if (this.state.preselectedSuggestion !== undefined) {
                                            this.props.onTagsChanged(this.props.tags.concat(suggestions[this.state.preselectedSuggestion]));
                                            this.setState({ value: '', preselectedSuggestion: undefined }, () => this.fetchExistingTags());
                                        } else if (existingTag) {
                                            this.props.onTagsChanged(this.props.tags.concat(existingTag));
                                            this.setState({ value: '' }, () => this.fetchExistingTags());
                                        } else if (this.props.allowNew) {
                                            const newTag = await this.props.onNewTagAdded(this.state.value);
                                            if (newTag) {
                                                this.props.onTagsChanged(this.props.tags ? this.props.tags.concat(newTag) : [newTag]);
                                            }
                                            this.setState({ value: '' });
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
                                            this.setState({ preselectedSuggestion })
                                        } else if (e.key === 'ArrowDown') {
                                            const preselectedSuggestion = this.state.preselectedSuggestion === undefined ?
                                                0
                                                :
                                                this.state.preselectedSuggestion === suggestions.length - 1 ?
                                                    0
                                                    :
                                                    this.state.preselectedSuggestion + 1;
                                            this.setState({ preselectedSuggestion })
                                        } else {
                                            this.setState({ preselectedSuggestion: undefined })
                                        }
                                    }
                                }}
                                onChange={(e, isValid) => {
                                    !this.state.suggestionsVisible && this.setState({ suggestionsVisible: true });
                                    this.handleChange(e, isValid);
                                    this.fetchExistingTags(e.target.value);
                                }}
                                onFocus={async e => {
                                    this.setState({ textIsFocused: true, suggestionsVisible: true, touched: true });
                                    this.fetchExistingTags();
                                }}
                                onBlur={() => this.setState({ textIsFocused: false, preselectedSuggestion: undefined })}
                                value={this.state.value}
                                readOnly={this.props.readOnly}
                                onErrorsChanged={errors => this.setState({ errors })}
                                showValidation={false}
                            />
                            {this.state.suggestionsVisible && this.props.showSuggestions && <SuggestionsWrapped
                                preselectedSuggestion={this.state.preselectedSuggestion}
                                loading={this.state.fetchingExistingTags}
                                loadingComponent={this.props.suggestionsLoadingComponent}
                                emptyComponent={this.props.suggestionsEmptyComponent}
                                isVisible={this.state.suggestionsVisible}
                                tags={suggestions}
                                onSelected={tag => {
                                    this.props.onTagsChanged(this.props.tags.concat(tag));
                                    this.setState({ value: '', preselectedSuggestion: undefined }, () => this.fetchExistingTags());
                                }}
                                onClickOutside={() => this.setState({ suggestionsVisible: false, preselectedSuggestion: undefined })}
                                value={this.state.value}
                            />}
                        </div >
                    }
                    {this.renderDefaultValidation(errors)}
                    {this.props.label && <label className={((this.state.value !== '')
                        || (this.state.textIsFocused) || (this.props.tags.length >= this.props.maxTags)) ? 'label--focused' : ''}
                    >{this.renderLabel()}</label>}
                </div>
            </InputGroup >
        );
    }

    private getErrors() {
        let errors = [];
        if (this.state.valid && this.state.value && this.props.allowNew) {
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
        const suggestions = filteredTags.
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
                    type={'blank--light'}
                    onClick={() => {
                        this.props.onTagsChanged && this.props.onTagsChanged(this.props.tags.filter(sv => sv.id !== tag.id));
                        this.fetchExistingTags();
                    }}
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
                    {this.props.readonlyEmptyPlaceholder}
                </div>
            </div>
    }
}
export default Tags;
