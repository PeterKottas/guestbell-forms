// Libs
import * as React from 'react';
import { InputGroup } from '../inputGroup/InputGroup';
import { Text, TextProps } from '../text/Text';
import * as PlusIcon from 'material-design-icons/content/svg/production/ic_add_circle_outline_24px.svg';
import {
  BaseInputProps,
  BaseInputState,
  BaseInput,
  ValidationError,
} from '../base/input/BaseInput';
import { Button } from '../button/Button';
import TagsSuggestions from './subComponents/TagsSuggestions';
import { withFormContext } from '../form/withFormContext';
import classNames from 'classnames';

// Misc
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
  onTagClick?: (tag: Tag) => void;
  showChips?: boolean;
  allowNew?: boolean;
  textProps?: TextProps;
  readOnly?: boolean;
  readonlyEmptyPlaceholder?: string;
  maxTags?: number;
  valueNotAddedError?: string | JSX.Element;
  maxTagsSurpassedError?: string | JSX.Element;
  showSuggestions?: boolean;
  suggestionsLoadingComponent?: string | JSX.Element;
  suggestionsEmptyComponent?: string | JSX.Element;
  loadingDelayMs?: number;
  filterExistingTags?: (text: string, existingTags: Tag[]) => Tag[];
  maxSuggestions?: number;
} & BaseInputProps<HTMLInputElement>;

export interface TagsState extends BaseInputState {
  textIsFocused: boolean;
  textErrors: ValidationError[];
  textIsValid: boolean;
  suggestionsVisible: boolean;
  fetchedExistingTags: Tag[];
  fetchingExistingTags: boolean;
  preselectedSuggestion?: number;
}

export class TagsRaw extends BaseInput<TagsProps, TagsState, HTMLInputElement> {
  public static defaultProps: TagsProps = {
    ...BaseInput.defaultProps,
    disabled: false,
    className: '',
    tags: [],
    existingTags: [],
    maxTags: 1000,
    onTagsChanged: () => undefined,
    onNewTagAdded: newTagName =>
      Promise.resolve({ name: newTagName, id: new Date().getTime() }),
    valueNotAddedError: <span>You forgot to add tag</span>,
    maxTagsSurpassedError: <span>Maximum number of tags surpassed</span>,
    showSuggestions: true,
    suggestionsLoadingComponent: 'Loading...',
    suggestionsEmptyComponent: 'No existing tags...',
    loadingDelayMs: 500,
    filterExistingTags: (text, tags) =>
      tags.filter(tag => tag.name && tag.name.toLowerCase().startsWith(text)),
    maxSuggestions: 5,
  };

  private textRef: React.RefObject<HTMLInputElement>;

  constructor(props: TagsProps) {
    super(props);
    this.state = {
      ...this.state,
      textErrors: [],
      textIsFocused: false,
      suggestionsVisible: false,
      fetchingExistingTags: false,
      textIsValid: false,
      fetchedExistingTags: [],
    };
  }

  public focus() {
    if (this.textRef && this.textRef.current) {
      this.textRef.current.focus();
    }
  }

  public componentDidUpdate(oldProps: TagsProps) {
    if (
      oldProps.tags !== this.props.tags ||
      oldProps.validators !== this.props.validators ||
      oldProps.customValidators !== this.props.customValidators ||
      oldProps.required !== this.props.required
    ) {
      this.handleErrors(this.props.tags);
    }
  }

  public render() {
    const textProps = this.props.textProps ? this.props.textProps : {};
    const suggestions = this.getSuggestions();
    return (
      <InputGroup title={this.props.title}>
        <div
          {...(this.props.id && {
            id: this.props.id,
          })}
          className={classNames(
            'input__base tags-input',
            this.getValidationClass(),
            this.props.className,
            {
              'tags-input--readOnly': this.props.readOnly,
              'tags-input--hasPlaceholder':
                this.props.textProps && this.props.textProps.placeholder,
            }
          )}
          ref={this.containerRef}
        >
          {this.renderTags()}
          {(!this.props.maxTags ||
            this.props.maxTags > (this.props.tags && this.props.tags.length)) &&
            !this.props.readOnly && (
              <div
                className={
                  'tags-input__tags__wrapper ' +
                  (this.props.readOnly ? 'filled ' : '')
                }
              >
                <Text
                  {...textProps}
                  {...(this.props.id && {
                    id: this.props.id + '-text-input',
                  })}
                  inputRef={this.textRef}
                  required={
                    this.props.tags.length > 0 ? false : this.props.required
                  }
                  className={
                    'tags-input__text-input ' +
                    (textProps.className ? textProps.className : '')
                  }
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
                  customValidators={this.props.customValidators}
                />
                {this.state.suggestionsVisible && this.props.showSuggestions && (
                  <TagsSuggestions
                    {...(this.props.id && {
                      id: this.props.id + '-text-input',
                    })}
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
                    AddNewTagComponent={
                      this.props.allowNew &&
                      this.state.value !== '' &&
                      (!this.props.existingTags ||
                        !this.props.existingTags.find(
                          e => e.name === this.state.value
                        )) &&
                      (!this.state.fetchedExistingTags ||
                        !this.state.fetchedExistingTags.find(
                          e => e.name === this.state.value
                        )) &&
                      this.state.textIsValid && (
                        <Button
                          {...(this.props.id && {
                            id: this.props.id + '-add-new-button',
                          })}
                          className="tags-input__suggestion tags-input__add-new"
                          dropdown={true}
                          onClick={this.addNewTag}
                        >
                          Add new "{this.state.value}"
                        </Button>
                      )
                    }
                  />
                )}
              </div>
            )}
          {this.renderDefaultValidation()}
          {this.props.label && (
            <label
              className={
                this.state.value !== '' ||
                this.state.textIsFocused ||
                this.props.readOnly ||
                this.props.tags.length >= this.props.maxTags
                  ? 'label--focused'
                  : ''
              }
            >
              {this.renderLabel()}
            </label>
          )}
        </div>
      </InputGroup>
    );
  }

  private onTextErrorsChanged = (textErrors: ValidationError[]) =>
    this.setState(
      () => ({ textErrors }),
      () => this.handleErrors()
    );

  private onFocus = () => {
    this.setState(
      { textIsFocused: true, suggestionsVisible: true, touched: true },
      () => this.handleErrors()
    );
    this.fetchExistingTags(this.state.value);
  };

  private onKeyDown = (suggestions: Tag[]) => async e => {
    if (
      e.key === 'Enter' &&
      (this.state.value !== '' ||
        this.state.preselectedSuggestion !== undefined) &&
      this.state.textErrors.length === 0
    ) {
      e.preventDefault();
      e.stopPropagation();
      const existingTag =
        this.props.existingTags &&
        this.props.existingTags.find(et => et.name === this.state.value);
      if (this.state.preselectedSuggestion !== undefined) {
        this.props.onTagsChanged(
          this.props.tags.concat(suggestions[this.state.preselectedSuggestion])
        );
        this.setState({ value: '', preselectedSuggestion: undefined }, () => {
          this.fetchExistingTags();
          this.handleErrors();
        });
      } else if (existingTag) {
        this.props.onTagsChanged(this.props.tags.concat(existingTag));
        this.setState({ value: '' }, () => {
          this.fetchExistingTags();
          this.handleErrors();
        });
      } else if (this.props.allowNew) {
        await this.addNewTag();
        this.handleErrors();
      }
    }
    if (suggestions.length > 0 && this.state.suggestionsVisible) {
      if (e.key === 'ArrowUp') {
        const preselectedSuggestion =
          this.state.preselectedSuggestion === undefined
            ? suggestions.length - 1
            : this.state.preselectedSuggestion === 0
            ? suggestions.length - 1
            : this.state.preselectedSuggestion - 1;
        this.setState({ preselectedSuggestion });
      } else if (e.key === 'ArrowDown') {
        const preselectedSuggestion =
          this.state.preselectedSuggestion === undefined
            ? 0
            : this.state.preselectedSuggestion === suggestions.length - 1
            ? 0
            : this.state.preselectedSuggestion + 1;
        this.setState({ preselectedSuggestion });
      } else {
        this.setState({ preselectedSuggestion: undefined });
      }
    }
  };

  private addNewTag = async () => {
    const newTag = await this.props.onNewTagAdded(this.state.value);
    if (newTag) {
      this.props.onTagsChanged(
        this.props.tags ? this.props.tags.concat(newTag) : [newTag]
      );
    }
    this.setState({ value: '', textErrors: [] }, () => {
      this.fetchExistingTags();
      this.handleErrors();
    });
  };

  private onSuggestionSelected = tag => {
    this.props.onTagsChanged(this.props.tags.concat(tag));
    this.setState(
      { value: '', preselectedSuggestion: undefined, textErrors: [] },
      () => {
        if (
          !this.props.maxTags &&
          this.props.tags.length + 1 < this.props.maxTags
        ) {
          this.fetchExistingTags();
        }
        this.handleErrors();
      }
    );
  };

  private onBlur = () => {
    this.setState(
      {
        textIsFocused: false,
        preselectedSuggestion: undefined,
      },
      () => this.handleErrors()
    );
  };

  private onClickOutside = () =>
    this.setState({
      suggestionsVisible: false,
      preselectedSuggestion: undefined,
    });

  private onTextChanged = (
    e: React.ChangeEvent<HTMLInputElement>,
    isValid: boolean
  ) => {
    const value = e.target.value;
    this.setState(
      () => ({
        value,
        isValid: isValid,
        textIsValid: isValid,
        suggestionsVisible: true,
      }),
      () => this.handleErrors()
    );
    this.fetchExistingTags(e.target.value);
  };

  private handleErrors = (tags: Tag[] = this.props.tags) => {
    let errors = this.getErrors(tags);
    if (errors.length > 0) {
      this.setInvalid(errors);
    } else {
      this.setValid();
    }
  };

  private getErrors(tags: Tag[]) {
    let errors = [];
    if (tags.length < this.props.maxTags) {
      errors = errors.concat(this.state.textErrors);
    }
    if (this.state.value !== '' && tags.length === 0 && this.props.required) {
      errors = errors.concat('Required');
    }
    if (this.state.value && this.props.allowNew && !this.state.textIsFocused) {
      errors = errors.concat(this.props.valueNotAddedError);
    }
    if (this.props.maxTags < (this.props.tags && this.props.tags.length)) {
      errors = errors.concat(this.props.maxTagsSurpassedError);
    }
    return errors.filter(i => i);
  }

  private fetchExistingTags(startsWith: string = '') {
    if (this.props.fetchExistingTags) {
      const timer = setTimeout(
        () => this.setState({ fetchingExistingTags: true }),
        this.props.loadingDelayMs
      );
      this.props.fetchExistingTags(startsWith).then(fetchedExistingTags => {
        clearTimeout(timer);
        this.setState({
          fetchedExistingTags,
          fetchingExistingTags: false,
        });
      });
    }
  }

  private getSuggestions() {
    const existingTags: Tag[] = []
      .concat(this.props.existingTags ? this.props.existingTags : [])
      .concat(
        this.state.fetchedExistingTags ? this.state.fetchedExistingTags : []
      );
    const filteredTags = this.props.filterExistingTags(
      this.state.value ? this.state.value.toLowerCase() : '',
      existingTags
    );
    let suggestions = filteredTags
      .filter(tag => !this.props.tags.some(t => t.id === tag.id))
      .slice(0, this.props.maxSuggestions);
    return suggestions;
  }

  private renderTag(tag: Tag, index: number) {
    const body = (
      <>
        {tag.name}
        {!this.props.readOnly && (
          <Button
            {...(this.props.id && {
              id: this.props.id + '-tag-' + index.toString(),
            })}
            circular={true}
            blank={true}
            onClick={this.tagRemoveClick(tag)}
            className="ml-1 transform-rotate--45 line-height--0 p-0"
            Component={p => (
              <a className={p.className} id={p.id} onClick={p.onClick}>
                {p.children}
              </a>
            )}
          >
            <PlusIcon />
          </Button>
        )}
      </>
    );
    const className = classNames('tags-input__tag', {
      'tags-input__tag-chip': this.props.showChips,
    });
    if (this.props.onTagClick) {
      return (
        <Button
          onClick={this.tagClick(tag)}
          small={true}
          className={className}
          key={index}
        >
          {body}
        </Button>
      );
    }
    return (
      <div onClick={this.tagClick(tag)} className={className} key={index}>
        {body}
      </div>
    );
  }

  private tagClick = (tag: Tag) => () => {
    this.props.onTagClick && this.props.onTagClick(tag);
  };

  private tagRemoveClick = (tag: Tag) => (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation();
    const newTags = this.props.tags.filter(sv => sv.id !== tag.id);
    if (newTags.length === 0) {
      setTimeout(() => this.focus(), 50);
    }
    this.setState({
      suggestionsVisible: false,
    });
    this.props.onTagsChanged && this.props.onTagsChanged(newTags);
    this.handleErrors(newTags);
    // this.fetchExistingTags();
  };

  private renderTags() {
    return this.props.tags && this.props.tags.length > 0 ? (
      <div className="tags-input__tag__wrapper">
        {this.props.tags.map((item, index) => this.renderTag(item, index))}
      </div>
    ) : (
      this.props.readOnly && (
        <div className="tags-input__tag__wrapper">
          <div className="tags-input__tag">
            {this.props.readonlyEmptyPlaceholder}
          </div>
        </div>
      )
    );
  }
}

export const Tags = withFormContext<TagsProps>(TagsRaw);

export default Tags;
