// Libs
import * as React from 'react';
import { InputGroup } from '../inputGroup/InputGroup';
import { Text, TextProps, TextRaw } from '../text/Text';
import * as PlusIcon from 'material-design-icons/content/svg/production/ic_add_circle_outline_24px.svg';
import {
  BaseInputProps,
  BaseInputState,
  BaseInput,
  ValidationError,
  defaultBaseTranslations,
} from '../base/input/BaseInput';
import { Button } from '../button/Button';
import TagsSuggestions from './subComponents/TagsSuggestions';
import { withFormContext } from '../form/withFormContext';
import classNames from 'classnames';
import { withThemeContext } from '../themeProvider/withThemeContext';
import { PopperProps } from '@material-ui/core/Popper/Popper';

// Misc
export type Tag = {
  id: number | string;
  name: string;
};

export const defaultTagsTranslations = {
  ...defaultBaseTranslations,
  addNew: 'Add new',
};

export type TagsTranslations = Partial<typeof defaultTagsTranslations>;

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
  addNewOnBlur?: boolean;
  textProps?: TextProps;
  readOnly?: boolean;
  readonlyEmptyPlaceholder?: string;
  maxTags?: number;
  valueNotAddedError?: string | JSX.Element;
  maxTagsSurpassedError?: string | JSX.Element;
  showSuggestions?: boolean;
  suggestionsLoadingComponent?: string | JSX.Element;
  suggestionsEmptyComponent?: string | JSX.Element;
  waitingForMoreInputComponent?: string | JSX.Element;
  loadingDelayMs?: number;
  filterExistingTags?: (text: string, existingTags: Tag[]) => Tag[];
  allowSameTagMultipleTimes?: boolean;
  maxSuggestions?: number;
  popperProps?: Partial<PopperProps>;
  minLettersToFetch?: number;
} & BaseInputProps<HTMLInputElement, TagsTranslations>;

export interface TagsState extends BaseInputState {
  textIsFocused: boolean;
  textErrors: ValidationError[];
  textIsValid: boolean;
  suggestionsVisible: boolean;
  fetchedExistingTags: Tag[];
  fetchingExistingTags: boolean;
  preselectedSuggestion?: number;
}

type InjectedProps = {};

export class TagsRaw extends BaseInput<
  TagsProps & InjectedProps,
  TagsState,
  HTMLInputElement,
  TagsTranslations
> {
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
    waitingForMoreInputComponent: <span>Waiting for more input...</span>,
    showSuggestions: true,
    suggestionsLoadingComponent: 'Loading...',
    suggestionsEmptyComponent: 'No existing tags...',
    loadingDelayMs: 500,
    filterExistingTags: (text, tags) =>
      tags.filter(tag => tag.name && tag.name.toLowerCase().startsWith(text)),
    maxSuggestions: 5,
    addNewOnBlur: true,
    translations: defaultTagsTranslations,
    minLettersToFetch: 0,
  };

  private textRef: React.RefObject<TextRaw>;
  private suggestionsRef: React.RefObject<HTMLDivElement>;

  constructor(props: TagsProps & InjectedProps) {
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
    this.textRef = React.createRef();
    this.suggestionsRef = React.createRef();
    this.handleClickOutside = this.handleClickOutside.bind(this);
  }

  public focus() {
    if (this.textRef.current) {
      this.textRef.current.focus();
    }
  }

  public componentDidUpdate(oldProps: TagsProps & InjectedProps) {
    if (
      oldProps.tags !== this.props.tags ||
      oldProps.validators !== this.props.validators ||
      oldProps.customValidators !== this.props.customValidators ||
      oldProps.required !== this.props.required
    ) {
      this.handleErrors(this.props.tags);
    }
  }

  public handleClickOutside(e: MouseEvent) {
    if (
      !this.containerRef.current ||
      this.containerRef.current.contains(e.target as HTMLDivElement) ||
      !this.suggestionsRef.current ||
      this.suggestionsRef.current.contains(e.target as HTMLDivElement)
    ) {
      return;
    }
    if (this.props.addNewOnBlur && this.state.value) {
      const suggestions = this.getSuggestions();
      const existing = suggestions.find(s => s.name === this.state.value);
      if (existing) {
        this.onSuggestionSelected(existing);
      } else if (this.props.allowNew) {
        this.addNewTag();
      }
    } else if (this.state.value) {
      this.setState({ value: '' });
    }
  }

  public componentDidMount() {
    document.addEventListener('mousedown', this.handleClickOutside);
    document.addEventListener('touchstart', this.handleClickOutside);
  }

  public componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside);
    document.removeEventListener('touchstart', this.handleClickOutside);
  }

  public render() {
    const translations = this.getTranslations(defaultTagsTranslations);
    const textProps = this.props.textProps ? this.props.textProps : {};
    const suggestions = this.getSuggestions();
    return (
      <InputGroup title={this.props.title} tooltip={this.props.tooltip}>
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
                  ref={this.textRef}
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
                    innerRef={this.suggestionsRef}
                    anchorEl={this.containerRef.current}
                    allowNew={this.props.allowNew}
                    preselectedSuggestion={this.state.preselectedSuggestion}
                    loading={this.state.fetchingExistingTags}
                    LoadingComponent={this.props.suggestionsLoadingComponent}
                    isVisible={this.state.suggestionsVisible}
                    EmptyComponent={this.props.suggestionsEmptyComponent}
                    WaitingForMoreInputComponent={
                      this.props.waitingForMoreInputComponent
                    }
                    isWaitingForMoreInput={
                      this.state.value.length < this.props.minLettersToFetch
                    }
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
                          {translations.addNew} "{this.state.value}"
                        </Button>
                      )
                    }
                    popperProps={this.props.popperProps}
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

  private onSuggestionSelected = (tag: Tag) => {
    const newTags = this.props.tags.concat(tag);
    this.props.onTagsChanged(newTags);
    const isMax = newTags.length === this.props.maxTags;
    this.setState(
      {
        value: !this.props.allowNew && !isMax ? this.state.value : '',
        suggestionsVisible: isMax ? false : this.state.suggestionsVisible,
        preselectedSuggestion: undefined,
        textErrors: [],
      },
      () => {
        if (
          !this.props.maxTags ||
          this.props.tags.length + 1 < this.props.maxTags
        ) {
          this.fetchExistingTags();
        }
        this.handleErrors();
      }
    );
  };

  private onBlur = async () => {
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
      errors = errors.concat(
        this.getTranslations(this.props.translations).required
      );
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
    if (
      this.props.fetchExistingTags &&
      startsWith.length >= this.props.minLettersToFetch
    ) {
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
      .filter(
        tag =>
          this.props.allowSameTagMultipleTimes ||
          !this.props.tags.some(t => t.id === tag.id)
      )
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
    /*if (newTags.length === 0) {
      setTimeout(() => this.focus(), 50);
    }
    this.setState({
      suggestionsVisible: false,
    });*/
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

export const Tags = withThemeContext<TagsProps, InstanceType<typeof TagsRaw>>(
  withFormContext<TagsProps>(TagsRaw),
  'tags'
);

export default Tags;
